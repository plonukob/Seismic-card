import { NextResponse } from 'next/server';
import { getDiscordStats } from '@/services/discord-scraper';

// Discord server ID and content channel ID
const SERVER_ID = '1343751435711414362';
const CONTENT_CHANNEL_ID = '1347351535071400047';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('username');
  
  if (!username) {
    return NextResponse.json({ error: 'Username is required' }, { status: 400 });
  }
  
  try {
    // В реальном окружении используем скрапер Discord
    const userData = await getDiscordStats(username, SERVER_ID, CONTENT_CHANNEL_ID);
    
    // Закомментируем моковые данные, так как теперь используем реальные
    /*
    const mockUserData = {
      username,
      avatar: `https://via.placeholder.com/128.png?text=${username[0].toUpperCase()}`,
      messages: Math.floor(Math.random() * 2000) + 100,
      role: ['Active Member', 'Contributor', 'Moderator'][Math.floor(Math.random() * 3)],
      joined: '20 марта 2024',
      lastActive: ['5 минут назад', '30 минут назад', '2 часа назад'][Math.floor(Math.random() * 3)],
      channels: ['content', 'general', 'memes'],
      contentPosts: Math.floor(Math.random() * 10),
    };
    */
    
    return NextResponse.json(userData);
  } catch (error) {
    console.error('Error fetching Discord data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch Discord stats' },
      { status: 500 }
    );
  }
} 
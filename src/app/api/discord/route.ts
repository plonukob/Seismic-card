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
    // In a production environment, you would actually scrape Discord
    // Here we're just returning mock data for demonstration
    
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
    
    // In reality, you would use the scraper here
    // const userData = await getDiscordStats(username, SERVER_ID, CONTENT_CHANNEL_ID);
    
    return NextResponse.json(mockUserData);
  } catch (error) {
    console.error('Error fetching Discord data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch Discord stats' },
      { status: 500 }
    );
  }
} 
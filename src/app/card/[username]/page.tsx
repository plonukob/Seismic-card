import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { StatsCard } from '@/components/StatsCard';
import { ShareButton } from '@/components/ShareButton';

interface CardPageProps {
  params: {
    username: string;
  };
}

async function getUserData(username: string) {
  // In a real implementation, this would call our API
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/discord?username=${encodeURIComponent(username)}`);
  // if (!res.ok) throw new Error('Failed to fetch user data');
  // return res.json();
  
  // For now, return mock data
  return {
    username,
    avatar: `https://via.placeholder.com/128.png?text=${username[0].toUpperCase()}`,
    messages: 1250,
    role: 'Active Member',
    joined: '20 марта 2024',
    lastActive: '30 минут назад',
    channels: ['content', 'general', 'memes'],
    contentPosts: 5,
  };
}

export default async function CardPage({ params }: CardPageProps) {
  const { username } = params;
  const decodedUsername = decodeURIComponent(username);
  
  // Fetch user data
  const userData = await getUserData(decodedUsername);

  return (
    <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-screen">
      <Link 
        href="/" 
        className="absolute top-4 left-4 text-gray-300 hover:text-white flex items-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Назад
      </Link>
      
      <div className="max-w-3xl w-full">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Карточка <span className="text-discord-blurple">{decodedUsername}</span>
        </h1>
        
        <StatsCard userData={userData} />
        
        <div className="mt-8 flex justify-center">
          <ShareButton username={decodedUsername} />
        </div>
      </div>
    </div>
  );
} 
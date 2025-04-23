import React, { useRef } from 'react';
import Image from 'next/image';

interface UserData {
  username: string;
  avatar: string;
  messages: number;
  role: string;
  joined: string;
  lastActive: string;
  channels: string[];
  contentPosts: number;
}

interface StatsCardProps {
  userData: UserData;
}

export function StatsCard({ userData }: StatsCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div 
      ref={cardRef}
      className="bg-discord-darker rounded-lg shadow-lg overflow-hidden"
    >
      {/* Card Header */}
      <div className="bg-discord-darkest p-6 flex items-center border-b border-gray-700">
        <div className="relative w-20 h-20 rounded-full overflow-hidden">
          <Image
            src={userData.avatar}
            alt={userData.username}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="ml-6">
          <h2 className="text-2xl font-bold">{userData.username}</h2>
          <p className="text-discord-blurple">{userData.role}</p>
        </div>
      </div>
      
      {/* Card Body */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-3 text-discord-green">Статистика активности</h3>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span className="text-gray-300">Всего сообщений:</span>
              <span className="font-medium">{userData.messages}</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-300">На сервере с:</span>
              <span className="font-medium">{userData.joined}</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-300">Последняя активность:</span>
              <span className="font-medium">{userData.lastActive}</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-3 text-discord-yellow">Активность в каналах</h3>
          <ul className="space-y-2">
            {userData.channels.map((channel) => (
              <li key={channel} className="flex items-center">
                <span className="mr-2 text-discord-blurple">#</span>
                <span>{channel}</span>
              </li>
            ))}
          </ul>
          
          <h3 className="text-lg font-semibold mt-4 mb-2 text-discord-fuchsia">Content Channel</h3>
          <p>Публикаций контента: <span className="font-medium">{userData.contentPosts}</span></p>
        </div>
      </div>
      
      {/* Card Footer */}
      <div className="bg-discord-darkest p-4 text-center text-sm text-gray-400">
        Seismic Card • Сгенерировано {new Date().toLocaleDateString()}
      </div>
    </div>
  );
} 
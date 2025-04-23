import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { UsernameForm } from '@/components/UsernameForm';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Seismic <span className="text-discord-blurple">Card</span>
        </h1>
        <p className="text-xl mb-8">
          Получите персонализированную карточку с вашей статистикой на Discord сервере
        </p>
        
        <div className="bg-discord-darker p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Введите ваш никнейм Discord</h2>
          <UsernameForm />
        </div>
        
        <div className="mt-12 text-gray-300 text-sm">
          <p>
            Статистика включает: количество сообщений, роль, активность в канале Content и многое другое.
          </p>
          <p className="mt-2">
            Поделитесь своей карточкой в один клик на платформе X.
          </p>
        </div>
      </div>
    </div>
  );
} 
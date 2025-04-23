import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'Seismic Card - Discord Stats',
  description: 'Получите персональную карточку со статистикой дискорд сервера',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <main className="min-h-screen bg-gradient-to-br from-discord-darkest to-discord-dark text-white">
          {children}
        </main>
      </body>
    </html>
  );
} 
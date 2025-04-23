import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export function UsernameForm() {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username.trim()) {
      setError('Пожалуйста, введите ваш никнейм Discord');
      return;
    }
    
    // Redirect to the card page with the username
    router.push(`/card/${encodeURIComponent(username)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <div>
        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setError('');
          }}
          placeholder="Ваш никнейм на Discord"
          className="w-full px-4 py-2 rounded bg-discord-darkest border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-discord-blurple"
        />
        {error && <p className="mt-2 text-discord-red text-sm">{error}</p>}
      </div>
      
      <button
        type="submit"
        className="w-full bg-discord-blurple hover:bg-opacity-80 text-white font-medium py-2 px-4 rounded transition duration-200"
      >
        Получить карточку
      </button>
    </form>
  );
} 
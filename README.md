# Seismic Card - Discord Stats Generator

Seismic Card позволяет пользователям получать персонализированные карточки со статистикой их активности на Discord сервере Seismic, которыми можно делиться в социальных сетях (X/Twitter).

## Функциональность

- Генерация статистики пользователя Discord по его никнейму
- Показ количества сообщений, роли, времени последней активности
- Показ активности в канале Content и других каналах
- Возможность поделиться статистикой в X/Twitter в один клик
- Стильный дизайн карточки в стиле Discord

## Технологии

- Next.js 14
- TypeScript
- TailwindCSS
- Puppeteer (для скрапинга Discord)
- Vercel для деплоя

## Установка и запуск

### Предварительные требования

- Node.js 18+ 
- npm или yarn

### Установка

1. Клонируйте репозиторий:
```bash
git clone https://github.com/yourusername/seismic-card.git
cd seismic-card
```

2. Установите зависимости:
```bash
npm install
# или
yarn
```

3. Создайте файл `.env.local` и добавьте переменные окружения:
```bash
DISCORD_EMAIL=your_discord_bot_email
DISCORD_PASSWORD=your_discord_bot_password
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### Запуск в режиме разработки

```bash
npm run dev
# или
yarn dev
```

Приложение будет доступно по адресу: [http://localhost:3000](http://localhost:3000)

### Сборка для продакшена

```bash
npm run build
# или
yarn build
```

## Деплой

Проект настроен для деплоя на Vercel. После пуша в репозиторий, подключенный к Vercel, деплой будет выполнен автоматически.

1. Создайте аккаунт на [Vercel](https://vercel.com)
2. Импортируйте проект из GitHub
3. Настройте переменные окружения (те же, что и в `.env.local`)
4. Выполните деплой

## Примечания

- Self-bot эмулирует пользовательский интерфейс Discord
- Для работы требуются действительные учетные данные аккаунта Discord
- Использование self-bot может нарушать правила использования Discord, используйте на свой страх и риск 
# Nezumo website

Самостоятельный маркетинговый сайт Nezumo на Astro. Проект не зависит от
приложения доски или пакетов из `web-react-starter`.

## Запуск

```bash
bun install
bun run dev
```

Сайт будет доступен по адресу `http://localhost:4321`.

## Команды

```bash
bun run dev       # локальная разработка
bun run check     # проверка Astro и TypeScript
bun run build     # production-сборка в dist/
bun run preview   # просмотр production-сборки
bun run deploy    # публикация через Cloudflare Wrangler
bun run logs      # логи Cloudflare Worker
```

## Настройка

Скопируйте `.env.example` в `.env`, если адрес приложения отличается от
`https://app.nezumo.ru`:

```dotenv
PUBLIC_APP_ORIGIN=https://app.nezumo.ru
```

## Структура

```text
website/
├── content/            # записи раздела «Обновления»
├── layouts/            # общий layout
├── pages/              # страницы и маршруты Astro
├── public/             # изображения, шрифты и favicon
├── styles/             # глобальные стили
├── astro.config.mjs
├── content.config.ts
├── package.json
└── wrangler.jsonc
```

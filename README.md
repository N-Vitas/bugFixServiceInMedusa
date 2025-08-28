# bugFixServiceInMedusa
Имеется модуль который выводит время по запросу 
```
curl --request GET \
  --url http://localhost:9000/store/custom/report \
  --header 'x-publishable-api-key: сгенерированный ключь'
```
Файл эндпоинта /src/api/store/custom/report/route.ts

Нужно починить контекст менеджера в сервисе модуля. В текущей реализации сервис не работает.

Для запуска сделать 
Запуск бд
```
docker compose up -d
```
Установка и миграция
```
yarn install && npx medusa db:migrate
```
Для создания пользователя выполнить
```
npx medusa user -e admin@example.com -p supersecret
```
Запуск
```
yarn dev
```
Создать публичный ключь в админке [админке](http://localhost:9000/app)

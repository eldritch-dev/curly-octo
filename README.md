# e-Commerce web app with MVC architecture.
e-Commerce project built on NodeJS, Express, Sequelize, PostgreSQL and EJS.

## Instructions to run the app

0.- You must have PostgreSQL installed on the server or machine on wich you intend to run this app.
### Para mayor información, visitar https://www.postgresql.org/

1.- Create database
### `npm run db:create` || `npx sequelize-cli db:create`

2.- Create models and migrations
### `npx sequelize-cli model:generate --name Client --attributes name:string,status:string --force` 
### `npx sequelize-cli model:generate --name Product --attributes name:string,price:integer,stock:integer --force`
### `npx sequelize-cli model:generate --name Sale --attributes client_id:integer,tax:integer,discount:integer,total:integer --force`
### `npx sequelize-cli model:generate --name Detail --attributes sale_id:integer,quantity:integer,product_id:integer,subtotal:integer --force`

3.- Run migrations
### `npm run db:migrate` || `npx sequelize-cli db:migrate`

4.- Seed database
### `npm run db:seed` || `npx sequelize-cli db:seed:all`

5.- Start app
### `npm start`
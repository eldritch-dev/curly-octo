# App Web e-Commerce Arquitectura MVC.
Proyecto e-Commerce creado con NodeJS, Express, Sequelize, PostgreSQL y EJS.

## Instrucciones para correr la app web

0.- El servidor o equipo donde se quiera correr la app debe tener el motor de BD PostgreSQL instalado
### Para mayor información, visitar https://www.postgresql.org/

1.- Crear base de datos
### `npm run db:create` || `npx sequelize-cli db:create`

2.- Crear modelos y migraciones
### `npx sequelize-cli model:generate --name Client --attributes name:string,status:string --force` 
### `npx sequelize-cli model:generate --name Product --attributes name:string,price:integer,quantity:string, stock:integer --force`
### `npx sequelize-cli model:generate --name Sale --attributes client_id:integer,tax:integer,discount:integer,total:integer --force`
### `npx sequelize-cli model:generate --name Detail --attributes sale_id:integer,quantity:integer,product_id:integer,subtotal:integer --force`

3.- Correr migraciones
### `npm run db:migrate` || `npx sequelize-cli db:migrate`

3.- Sembrar la BD
### `npm run db:seed` || `npx sequelize-cli db:seed:all`

4.- Iniciar la App
### `npm start`
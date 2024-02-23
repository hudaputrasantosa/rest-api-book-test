# REST API Peminjaman Buku
![Logo](https://raw.githubusercontent.com/hudaputrasantosa/rest-api-book-test/master/assets/erd_book.png)

## ⚡ Deskripsi
REST API Peminjaman Buku merupakan aplikasi backend yang menyediakan endpoint dengan tujuan untuk memberikan komunikasi kepada frontend developer untuk melakukan konsumsi API pada sisi klien sistem peminjaman buku.

## ✨ Entitas 
- Member
- Loan
- Book

## ✨ Screenshoots
![Logo](https://raw.githubusercontent.com/hudaputrasantosa/rest-api-book-test/master/assets/docs_api.png)

## ✨ Endpoints
Base URL : http://localhost/api

| Method   | Url/Endpoint   | Action   |
| ------------- | ------------- | -------- |
| GET      | /books       | Get all data book |
| POST      | /books/create | Create book |
| GET      | /loans       | Get all data loans  |
| POST      | /loans/create      | Create loan |
| POST      | /loans/return     | Create return book  |
| GET      | /members       | Get all data members  |
| GET      | /members/getBookByMember      | Get all data members on loan |
| POST      | /members/create     | Create member  |


## ✅ Requirement and tools
 - NodeJS v16.16
 - NPM v8.11
 - DBMS MySQL
 - Express
 - Sequelize ORM
 - Jest
 - Winston Logger
 - Swagger Documentation
 - Exalidraw

## 🔥 Install & running local dev
Clone Repository

```bash
git clone https://github.com/hudaputrasantosa/rest-api-book-test.git
cd rest-api-book-test
```
Installation from NPM
```bash
npm install
```
Create migration table
```bash
npx sequelize-cli db:migrate
```
Seeders data
```bash
npx sequelize-cli db:seed:all
```
Running server
```bash
npm run dev
```



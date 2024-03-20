const express = require("express");
const mysql = require("mysql");
const path = require("path");
const app = express();
const port = 3000;

// Подключение к базе данных MariaDB
const connection = mysql.createConnection({
  host: "localhost",
  user: "username",
  password: "password",
  database: "database_name",
  connectTimeout: 20000, // Установите время ожидания подключения в миллисекундах
});

connection.connect((err) => {
  if (err) {
    console.error("Ошибка подключения к базе данных:", err.stack);
    return;
  }
  console.log("Подключение к базе данных успешно установлено");
});

// Позволяем Express обрабатывать данные из формы
app.use(express.urlencoded({ extended: true }));

// Обработчик GET запроса на главную страницу
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "project", "index.html"));
});

// Обработчик POST запроса на адрес "/login"
app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // Демонстрационный вывод в консоль
  console.log("Received login request:");
  console.log("Email:", email);
  console.log("Password:", password);

  // Возвращаем ответ клиенту (здесь можно добавить логику проверки)
  res.send("Received login request");
});

// Запускаем сервер
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

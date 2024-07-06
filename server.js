const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Подключение к MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/gamezone', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Ошибка подключения к MongoDB:'));
db.once('open', () => {
  console.log('Успешное подключение к MongoDB');
});


const User = mongoose.model('User', {
  email: String,
  password: String
});


app.use(bodyParser.json());

// RESTful API роут для регистрации пользователя
app.post('/auth/register', async (req, res) => { // REST: используем POST для создания ресурса (пользователя)
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Пользователь с таким email уже существует' });
    }
    const newUser = new User({ email, password });
    await newUser.save();
    res.status(201).json({ message: 'Пользователь успешно зарегистрирован' }); // API: отправка JSON-ответа
  } catch (error) {
    console.error('Ошибка регистрации:', error);
    res.status(500).json({ error: 'Внутренняя ошибка сервера' }); // API: обработка ошибок с JSON-ответом
  }
});

// RESTful API роут для входа пользователя
app.post('/auth/login', async (req, res) => { // REST: используем POST для выполнения действия (вход пользователя)
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(401).json({ error: 'Неверный email или пароль' }); // API: отправка JSON-ответа при ошибке
    }
    res.status(200).json({ message: 'Успешный вход' }); // API: отправка JSON-ответа при успешном выполнении
  } catch (error) {
    console.error('Ошибка входа:', error);
    res.status(500).json({ error: 'Внутренняя ошибка сервера' }); // API: обработка ошибок с JSON-ответом
  }
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});




import React, { useState, useEffect } from 'react';

function NewsPage() {
  // Пример данных новостей (можно заменить на реальные данные с API)
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Метод для получения новостей из API или любого другого источника данных
    // В этом примере используется useState для имитации получения данных из API
    const fetchNews = () => {
      // Здесь может быть логика получения данных из API
      // В этом примере просто генерируются случайные новости
      const fakeNews = [
        { id: 1, title: 'Вышла новая игра "Имя игры 1"', content: 'Описание новости 1' },
        { id: 2, title: 'Обновление в игре "Имя игры 2"', content: 'Описание новости 2' },
        { id: 3, title: 'Анонс нового DLC для "Имя игры 3"', content: 'Описание новости 3' },
      ];
      setNews(fakeNews);
    };

    fetchNews();
  }, []);

  return (
    <div>
      <h1>News</h1>
      <ul>
        {news.map(item => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewsPage;

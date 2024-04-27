import React, { useState } from 'react';

function ForumPage() {
  const [discussions, setDiscussions] = useState([]);

  // Функция для добавления нового обсуждения
  const addDiscussion = () => {
    const newDiscussion = {
      id: discussions.length + 1,
      title: "Обсуждение о последней игре по Сонику",
      content: "Давайте обсудим последнюю игру по Сонику! Как вам новые уровни? Что вы думаете о геймплейе?",
      author: "Пользователь123",
      date: new Date().toLocaleString()
    };
    setDiscussions([...discussions, newDiscussion]);
  };

  return (
    <div>
      <h1>Форум</h1>
      <button onClick={addDiscussion}>Добавить обсуждение</button>
      <ul>
        {discussions.map(discussion => (
          <li key={discussion.id}>
            <h3>{discussion.title}</h3>
            <p>{discussion.content}</p>
            <p>Автор: {discussion.author}</p>
            <p>Дата: {discussion.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ForumPage;

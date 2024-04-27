import React from 'react';

function GamesPage() {
  const popularGames = [
    {
      title: "Fortnite",
      description: "Это онлайн-игра в жанре королевской битвы, где игроки сражаются, чтобы остаться последними выжившими.",
      videoUrl: "https://www.youtube.com/watch?v=K7LJmtpQtuo",
      imageUrl: "https://example.com/fortnite.jpg" // URL изображения для Fortnite
    },
    {
      title: "League of Legends",
      description: "Это многопользовательская онлайн-игра в жанре MOBA, где команды сражаются за контроль над картой и уничтожение базы противника.",
      videoUrl: "https://www.youtube.com/watch?v=BGtROJeMPeE",
      imageUrl: "https://example.com/league_of_legends.jpg" // URL изображения для League of Legends
    },
    {
      title: "Minecraft",
      description: "Это игра в жанре песочницы, где игроки могут строить, исследовать и выживать в случайно генерируемом мире.",
      videoUrl: "https://www.youtube.com/watch?v=MmB9b5njVbA",
      imageUrl: "https://example.com/minecraft.jpg" // URL изображения для Minecraft
    }
  ];

  return (
    <div>
      <h1>Популярные онлайн игры</h1>
      <ul>
        {popularGames.map((game, index) => (
          <li key={index}>
            <h2>{game.title}</h2>
            <p>{game.description}</p>
            <img src={game.imageUrl} alt={game.title} style={{ maxWidth: '100%' }} />
            <div>
              <iframe width="560" height="315" src={game.videoUrl} title={game.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GamesPage;

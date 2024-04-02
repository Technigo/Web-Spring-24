export const FavoriteFoods = () => {
  // Array of favorite foods
  const favoriteFoods = ["Pizza", "Sushi", "Tacos", "Burgers", "Pasta"];

  return (
    <ul>
      {favoriteFoods.map((food, index) => (
        <li key={index}>{food}</li>
      ))}
    </ul>
  );
};

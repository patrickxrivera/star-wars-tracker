const getNumOf = () => {
  const allFavorites = JSON.parse(localStorage.getItem('favorites'));
  console.log(allFavorites);
  return allFavorites.length;
};

export default getNumOf;

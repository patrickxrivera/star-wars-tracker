const formatPopulation = (dataModel) => {
  for (let key in dataModel) {
    const formattedPopulation = Number(dataModel[key].Population).toLocaleString();
    dataModel[key].Population = formattedPopulation;
  }

  return dataModel;
};

export default formatPopulation;

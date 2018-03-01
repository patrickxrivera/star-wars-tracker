const formatPopulation = dataModel => {
  console.log(dataModel);
  for (let key in dataModel) {
    const formattedPopulation = Number(
      dataModel[key].Population
    ).toLocaleString();
    dataModel[key].Population = formattedPopulation;
  }

  return dataModel;
};

const addConstantsTo = (dataModel, type, idx) => {
  dataModel[idx].Favorited = false;
  dataModel[idx].Type = type;
  return dataModel;
};

export { formatPopulation, addConstantsTo };

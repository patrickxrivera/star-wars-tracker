import axios from 'axios';

import formatPopulation from './helpers/dataModelHelpers';
import { count } from '../api/apiData';

let dataModel = {};

const createPeopleDataModelFrom = async (results) => {
  const shortenedList = results.slice(0, count);

  const homeworldData = await _getDataFrom(shortenedList, 'homeworld');
  const speciesData = await _getDataFrom(shortenedList, 'species');

  dataModel = await _addHomeworldDataToDataModel(homeworldData, dataModel);
  dataModel = await _addSpeciesDataToDataModel(speciesData, dataModel);
  dataModel = _addNamesToDataModel(shortenedList, dataModel);
  dataModel = formatPopulation(dataModel);

  return dataModel;
};

const _getDataFrom = async (list, target) => {
  // TODO figure out how to make concurrent axios requests with axios.all()
  const endpoints = list.map((person) => axios.get(person[target]));
  const responses = await axios.all(endpoints);
  return responses;
};

const _addHomeworldDataToDataModel = async (homeworldData, dataModel) => {
  homeworldData.forEach((response, idx) => {
    const homeworld = response.data.name;
    const population = response.data.population;

    dataModel[idx] = dataModel[idx] || {};
    dataModel[idx].Homeworld = homeworld;
    dataModel[idx].Population = population;
  });

  return dataModel;
};

const _addSpeciesDataToDataModel = (speciesData, dataModel) => {
  speciesData.forEach((response, idx) => {
    const species = response.data.name;
    const language = response.data.language;

    dataModel[idx] = dataModel[idx] || {};
    dataModel[idx].Species = species;
    dataModel[idx].Language = language;
  });

  return dataModel;
};

const _addNamesToDataModel = (list, dataModel) => {
  list.forEach((person, idx) => {
    dataModel[idx] = dataModel[idx] || {};
    dataModel[idx].Name = person.name;
  });
  return dataModel;
};

export default createPeopleDataModelFrom;

import axios from 'axios';

import { formatPopulation, addConstantsTo } from './helpers/dataModelHelpers';
import { count } from '../api/apiData';

let dataModel = {};

const createPeopleDataModelFrom = async results => {
  const shortenedList = results.slice(0, count);

  const homeworldData = await _getDataFrom(shortenedList, 'homeworld');
  const speciesData = await _getDataFrom(shortenedList, 'species');

  dataModel = await _addHomeworldData(homeworldData, dataModel);
  dataModel = await _addSpeciesData(speciesData, dataModel);
  dataModel = _addSynchronousData(shortenedList, dataModel);
  dataModel = formatPopulation(dataModel);

  return dataModel;
};

const _getDataFrom = async (list, target) => {
  // TODO figure out how to make concurrent axios requests with axios.all()
  const endpoints = list.map(person => axios.get(person[target]));
  const responses = await axios.all(endpoints);
  return responses;
};

const _addHomeworldData = async (homeworldData, dataModel) => {
  homeworldData.forEach((response, idx) => {
    const { name, population } = response.data;

    dataModel[idx] = dataModel[idx] || {};
    dataModel[idx].Homeworld = name;
    dataModel[idx].Population = population;
  });

  return dataModel;
};

const _addSpeciesData = (speciesData, dataModel) => {
  speciesData.forEach((response, idx) => {
    const { name, language } = response.data;

    dataModel[idx] = dataModel[idx] || {};
    dataModel[idx].Species = name;
    dataModel[idx].Language = language;
  });

  return dataModel;
};

const _addSynchronousData = (list, dataModel) => {
  const type = 'People';

  list.forEach((person, idx) => {
    dataModel[idx] = dataModel[idx] || {};
    dataModel[idx].Name = person.name;
    dataModel = addConstantsTo(dataModel, type, idx);
  });
  return dataModel;
};

export default createPeopleDataModelFrom;

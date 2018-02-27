import formatPopulation from './helpers/dataModelHelpers';
import { count } from '../api/apiData';

let dataModel = {};

const createPlanetDataModelFrom = (results) => {
  const shortenedList = results.slice(0, count);
  dataModel = _getNonResidentDataFrom(shortenedList);
  dataModel = formatPopulation(dataModel);
  return dataModel;
};

const _getNonResidentDataFrom = (planetData) => {
  planetData.forEach((planet, idx) => {
    const { name, terrain, population, climate } = planet;

    dataModel[idx] = dataModel[idx] || {};
    dataModel[idx].Name = name;
    dataModel[idx].Terrain = terrain;
    dataModel[idx].Population = population;
    dataModel[idx].Climate = climate;
  });
  return dataModel;
};

export default createPlanetDataModelFrom;

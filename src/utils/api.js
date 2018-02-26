import axios from 'axios';

import { endpoint, count } from '../components/Results/ResultsCardContainer/ResultsCardData';

const api = {
  async getDataModelFor(selected) {
    const results = await this._fetchResultsFor(selected);

    switch (selected) {
      case 'People':
        const peopleDataModel = this._createPeopleDataModelFrom(results);
        return peopleDataModel;
      default:
        throw new Error(`${selected} is an invalid value for the api endpoint. Please try again.`);
    }
  },

  async _fetchResultsFor(selected) {
    const targetEndpoint = endpoint[selected];
    const response = await axios.get(targetEndpoint);
    const results = response.data.results;
    return results;
  },

  async _createPeopleDataModelFrom(list) {
    let dataModel = {};
    const shortenedList = list.slice(0, count);

    const homeworldData = await this._getDataFrom(shortenedList, 'homeworld');
    const speciesData = await this._getDataFrom(shortenedList, 'species');

    dataModel = await this._addHomeworldDataToDataModel(homeworldData, dataModel);
    dataModel = await this._addSpeciesDataToDataModel(speciesData, dataModel);
    dataModel = this._addNamesToDataModel(shortenedList, dataModel);
    dataModel = this._formatPopulation(dataModel);

    return dataModel;
  },

  async _getDataFrom(list, target) {
    // TODO figure out how to make concurrent axios requests with axios.all()
    const endpoints = list.map((person) => axios.get(person[target]));
    const responses = await axios.all(endpoints);
    return responses;
  },

  async _addHomeworldDataToDataModel(homeworldData, dataModel) {
    homeworldData.forEach((response, idx) => {
      const homeworld = response.data.name;
      const population = response.data.population;

      dataModel[idx] = dataModel[idx] || {};
      dataModel[idx].Homeworld = homeworld;
      dataModel[idx].Population = population;
    });

    return dataModel;
  },

  async _addSpeciesDataToDataModel(speciesData, dataModel) {
    speciesData.forEach((response, idx) => {
      const species = response.data.name;
      const language = response.data.language;

      dataModel[idx] = dataModel[idx] || {};
      dataModel[idx].Species = species;
      dataModel[idx].Language = language;
    });

    return dataModel;
  },

  _addNamesToDataModel(list, dataModel) {
    list.forEach((person, idx) => {
      dataModel[idx] = dataModel[idx] || {};
      dataModel[idx].Name = person.name;
    });
    return dataModel;
  },

  _formatPopulation(dataModel) {
    for (let key in dataModel) {
      const formattedPopulation = Number(dataModel[key].Population).toLocaleString();
      dataModel[key].Population = formattedPopulation;
    }

    return dataModel;
  }
};

export default api;

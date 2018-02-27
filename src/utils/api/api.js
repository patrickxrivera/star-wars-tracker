import axios from 'axios';

import { endpoint } from './apiData';
import createPeopleDataModelFrom from '../dataModel/peopleDataModel';
import createVehicleDataModelFrom from '../dataModel/vehicleDataModel';
import createPlanetDataModelFrom from '../dataModel/planetDataModel';

const api = {
  async getDataModelFor(selected) {
    const results = await this._fetchResultsFor(selected);

    switch (selected) {
      case 'People':
        const peopleDataModel = await createPeopleDataModelFrom(results);
        return peopleDataModel;
      case 'Vehicles':
        const vehicleDataModel = createVehicleDataModelFrom(results);
        return vehicleDataModel;
      case 'Planets':
        const planetDataModel = createPlanetDataModelFrom(results);
        return planetDataModel;
      default:
        throw new Error(`${selected} is an invalid value for the api endpoint. Please try again.`);
    }
  },

  async _fetchResultsFor(selected) {
    const targetEndpoint = endpoint[selected];
    const response = await axios.get(targetEndpoint);
    const results = response.data.results;
    return results;
  }
};

export default api;

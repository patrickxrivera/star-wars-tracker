import axios from 'axios';

import { endpoint, count } from './apiData';
import createPeopleDataModelFrom from './peopleDataModel';
import createVehicleDataModelFrom from './vehicleDataModel';

const api = {
  async getDataModelFor(selected) {
    const results = await this._fetchResultsFor(selected);

    switch (selected) {
      case 'People':
        const peopleDataModel = await createPeopleDataModelFrom(results);
        return peopleDataModel;
      case 'Vehicles':
        const vehiclesDataModel = createVehicleDataModelFrom(results);
        return vehiclesDataModel;
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

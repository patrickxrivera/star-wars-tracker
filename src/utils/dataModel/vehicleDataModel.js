import { addConstantsTo } from './helpers/dataModelHelpers';
import { count } from '../api/apiData';

let dataModel = {};

const createVehicleDataModelFrom = results => {
  const type = 'Vehicles';
  const vehicleData = results.slice(0, count);

  vehicleData.forEach((vehicle, idx) => {
    const { name, model, vehicle_class, passengers } = vehicle;

    dataModel[idx] = {};
    dataModel[idx].Name = name;
    dataModel[idx].Model = model;
    dataModel[idx].Class = vehicle_class;
    dataModel[idx].Passengers = passengers;
    dataModel = addConstantsTo(dataModel, type, idx);
  });
  return dataModel;
};

export default createVehicleDataModelFrom;

import { count } from './apiData';

const createVehicleDataModelFrom = (results) => {
  let dataModel = {};
  const vehicleData = results.slice(0, count);
  vehicleData.forEach((vehicle, idx) => {
    const { name, model, vehicle_class, passengers } = vehicle;

    dataModel[idx] = {};
    dataModel[idx].Name = name;
    dataModel[idx].Model = model;
    dataModel[idx].Class = vehicle_class;
    dataModel[idx].Passengers = passengers;
  });
  return dataModel;
};

export default createVehicleDataModelFrom;

import PeopleCard from '../PeopleCard.jsx';
import PlanetCard from '../PlanetCard.jsx';
import VehicleCard from '../VehicleCard.jsx';

const componentMapping = {
  People: PeopleCard,
  Planets: PlanetCard,
  Vehicles: VehicleCard
};

const getTargetCard = (selected) => {
  return componentMapping[selected];
};

export default getTargetCard;

import axios from 'axios';

import {
  endpoint,
  count
} from '../components/Results/ResultsCardContainer/ResultsCardData';

// if people,
// call fetchPeopleList
// get blob
// slice from 0 to count
// map items to new list
// get name
// get homeworld and homeworld pop. from planets instance
// return array with both values
// get species from species instance
// return value
// return obj
// finish loop
// return list

const api = {
  fetchResultsFor(selected) {
    let response;

    switch (selected) {
      case 'People':
        response = this._fetchPeopleList(selected);
        break;
      default:
        throw new Error(
          `${selected} is an invalid value for the api endpoint. Please try again.`
        );
    }

    return response;
  },

  _fetchPeopleList(selected) {
    return this._getBlobFrom(endpoint[selected]).then((response) => {
      const shortenedList = response.slice(0, count);

      let homeworldData = shortenedList.map(({ homeworld }) =>
        axios.get(homeworld)
      );

      return axios.all(homeworldData).then((results) => {
        const names = results.map((response) => {
          return {
            Homeworld: response.data.name,
            Population: response.data.population
          };
        });
        return names;
      });
    });
  },

  _getBlobFrom(endpoint) {
    return axios.get(endpoint).then((response) => response.data.results);
  },

  _getHomeworldInstanceFor(homeworld) {
    return axios.get(homeworld).then((response) => response.data.name);
  }
};

export default api;

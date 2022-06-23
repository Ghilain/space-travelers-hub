import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/rockets';

const FETCH_ROCKETS = 'spaceTravelers/missions/FETCH_ROCKETS';

const initializeState = [];

const fetchRockets = (payload) => ({
  type: FETCH_ROCKETS,
  payload,
});

const rocketss = (state = initializeState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return [...state, action.payload];
    default:
      return state;
  }
};

const fetchData = () => (dispatch) => {
  axios
    .get(url)
    .then((response) => {
      const { data } = response;
      const payload = data.map((rocket) => ({
        id: rocket.mission_id,
        name: rocket.mission_name,
        description: rocket.description,
      }));
      dispatch(fetchRockets(payload));
    })
    .catch((error) => {
      /*eslint-disable*/
      alert(error.message);
    });
};

export { fetchData };

export default rocketss;

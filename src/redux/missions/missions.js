import axios from 'axios';

const baseUrl = 'https://api.spacexdata.com/v3/missions';

const FETCH_MISSIONS = 'spaceTravelers/missions/FETCH_MISSIONS';

const initializeState = [];

const fetchMissions = (payload) => ({
  type: FETCH_MISSIONS,
  payload,
});

const missions = (state = initializeState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return action.payload;
    default:
      return state;
  }
};

const fetchData = () => (dispatch) => {
  axios
    .get(baseUrl)
    .then((response) => {
      const { data } = response;
      const payload = data.map((item) => ({
        id: item.mission_id,
        name: item.mission_name,
        description: item.description,
      }));
      dispatch(fetchMissions(payload));
    })
    .catch((error) => {
      /*eslint-disable*/
      alert(error.message);
    });
};

export { fetchData };

export default missions;

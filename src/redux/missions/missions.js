import axios from 'axios';

const baseUrl = 'https://api.spacexdata.com/v3/missions';

const FETCH_MISSIONS = 'spaceTravelers/missions/FETCH_MISSIONS';
const JOIN_MISSION = 'spaceTravelers/missions/JOIN_MISSION';
const LEAVE_MISSION = 'spaceTravelers/missions/LEAVE_MISSION';

const initializeState = [];

const fetchMissions = (payload) => ({
  type: FETCH_MISSIONS,
  payload,
});

const joinMission = (id) => ({
  type: JOIN_MISSION,
  id,
});

const leaveMission = (id) => ({
  type: LEAVE_MISSION,
  id,
});

const missions = (state = initializeState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return action.payload;
    case JOIN_MISSION: {
      const newState = state.map((mission) => {
        if (mission.id !== action.id) return mission;
        return { ...mission, reserved: true };
      });
      return newState;
    }
    case LEAVE_MISSION: {
      const newState = state.map((mission) => {
        if (mission.id !== action.id) return mission;
        return { ...mission, reserved: false };
      });
      return newState;
    }
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
        reserved: false,
      }));
      dispatch(fetchMissions(payload));
    })
    .catch((error) => {
      /*eslint-disable*/
      alert(error.message);
    });
};

export { fetchData, joinMission, leaveMission };

export default missions;

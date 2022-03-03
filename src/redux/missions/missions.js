const SAVE_MISSIONS = 'missionsStore/SAVE_MISSIONS';
const JOIN_MISSION = 'missionsStore/JOIN_MISSION';

export const saveMissions = (payload) => ({
  type: SAVE_MISSIONS,
  payload,
});

export const joinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

export const getMissions = () => (dispatch) => fetch('https://api.spacexdata.com/v3/missions')
  .then((response) => response.json())
  .then((data) => {
    const missions = data.map((m) => ({
      mission_id: m.mission_id,
      mission_name: m.mission_name,
      description: m.description,
    }));

    dispatch(saveMissions(missions));
  });

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_MISSIONS:
      return action.payload;
    case JOIN_MISSION:
      return state.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, reserved: true };
        }
        return mission;
      });
    default:
      return state;
  }
};

export default reducer;

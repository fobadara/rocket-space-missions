const SAVE_MISSIONS = 'missionsStore/SAVE_MISSIONS';

export const saveMissions = (payload) => ({
  type: SAVE_MISSIONS,
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
    default:
      return state;
  }
};

export default reducer;

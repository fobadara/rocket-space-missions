const SAVE_MISSIONS = 'missionsStore/SAVE_MISSIONS';

export const saveMissions = (payload) => ({
  type: SAVE_MISSIONS,
  payload,
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

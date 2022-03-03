const FETCH_ROCKETS_BEGIN = 'rocket-space-missions/rockets/FETCH_ROCKETS_BEGIN';
const FETCH_ROCKETS_FULFILLED = 'rocket-space-missions/rockets/FETCH_ROCKETS_FULFILLED';
const FETCH_ROCKETS_REJECTED = 'rocket-space-missions/rockets/FETCH_ROCKETS_REJECTED';

const fetchRocketsBegin = () => ({
  type: FETCH_ROCKETS_BEGIN,
  payload: { loading: 'idle' },
});

const fetchRocketsFulfilled = (payload) => ({
  type: FETCH_ROCKETS_FULFILLED,
  payload,
});

const fetchRocketsRejected = (payload) => ({
  type: FETCH_ROCKETS_REJECTED,
  payload,
});

export const fetchRockets = (dispatch) => {
  dispatch(fetchRocketsBegin());
  fetch('https://api.spacexdata.com/v3/rockets')
    .then((response) => response.json())
    .then((data) => {
      const rocketDetails = data.map((item) => ({
        id: item.id,
        rocket_name: item.rocket_name,
        description: item.description,
        flickr_images: item.flickr_images,
      }));
      dispatch(fetchRocketsFulfilled(rocketDetails));
    }).catch((error) => {
      const errorMessage = error.message;
      dispatch(fetchRocketsRejected(errorMessage));
    });
};

const initialState = {
  rockets: '',
  loading: 'idle',
};

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS_BEGIN:
      return { ...state, loading: 'pending' };
    case FETCH_ROCKETS_FULFILLED:
      return { ...state, rockets: action.payload, loading: 'idle' };
    case FETCH_ROCKETS_REJECTED:
      return { ...state, rockets: action.payload, loading: 'idle' };
    default:
      return state;
  }
};

export const getAllRockets = (state) => state;

export default rocketsReducer;

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rockets';

const Rockets = () => {
  const rocketsStatus = useSelector((state) => state.rocketsReducer.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    if (rocketsStatus === 'idle') {
      dispatch(fetchRockets());
    }
  }, []);

  return (
    <section className="rockets">
      <p>this is the rockets page</p>
    </section>
  );
};

export default Rockets;

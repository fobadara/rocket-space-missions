import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveMissions } from '../redux/missions/missions';

const Missions = () => {
  const list = useSelector(({ missionsReducer }) => missionsReducer);
  const dispatch = useDispatch();

  const getMissions = async () => {
    const resp = await fetch('https://api.spacexdata.com/v3/missions');
    const data = await resp.json();

    const missions = data.map((m) => ({
      mission_id: m.mission_id,
      mission_name: m.mission_name,
      description: m.description,
    }));

    dispatch(saveMissions(missions));
  };

  useEffect(() => {
    if (!list.length) {
      getMissions();
    }
  }, []);

  return (
    <section className="missions">
      <p>this is the missions page</p>
    </section>
  );
};
export default Missions;

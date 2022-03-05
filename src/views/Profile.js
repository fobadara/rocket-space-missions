import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import './profile.css';

const Profile = () => {
  const missions = useSelector(({ missionsReducer }) => missionsReducer).filter(
    (m) => m.reserved,
  );
  const rockets = useSelector(
    ({ rocketsReducer }) => rocketsReducer.rockets,
  ).filter((r) => r.reserved);
  return (
    <section className="profile">
      {!missions.length && !rockets.length && (
        <p>no missions joined or no rockets reserved</p>
      )}

      {missions.length > 0 && (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>My Missions</th>
            </tr>
          </thead>
          <tbody>
            {missions.map(({ mission_id: id, mission_name: name }) => (
              <tr key={id}>
                <td className="name">{name}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      {rockets.length > 0 && (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>My Rockets</th>
            </tr>
          </thead>
          <tbody>
            {rockets.map(({ id, rocket_name: name }) => (
              <tr key={id}>
                <td className="name">{name}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </section>
  );
};
export default Profile;

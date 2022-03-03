import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import './profile.css';

const Profile = () => {
  const list = useSelector(({ missionsReducer }) => missionsReducer);

  return (
    <section className="profile">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>My Missions</th>
          </tr>
        </thead>
        <tbody>
          {list
            .filter((m) => m.reserved)
            .map(({ mission_id: id, mission_name: name }) => (
              <tr key={id}>
                <td className="name">{name}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </section>
  );
};
export default Profile;

import { useSelector } from 'react-redux';
import { Table, Row, Col } from 'react-bootstrap';
import './profile.css';

const Profile = () => {
  const list = useSelector(({ missionsReducer }) => missionsReducer);
  const rockets = useSelector(({ rocketsReducer }) => rocketsReducer.rockets);
  return (
    <section className="profile">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>My Missions</th>
            <th>My profile</th>
          </tr>
        </thead>
        <tbody>
          <Row>
            <Col>
              {list
                .filter((m) => m.reserved)
                .map(({ mission_id: id, mission_name: name }) => (
                  <tr key={id}>
                    <td className="name">{name}</td>
                  </tr>
                ))}
            </Col>
            <Col>
              {rockets
                .filter((rocket) => rocket.reserved)
                .map(({ id, name }) => (
                  <tr key={id}>
                    <td className="name">{name}</td>
                  </tr>
                ))}
            </Col>
          </Row>
        </tbody>
      </Table>
    </section>
  );
};
export default Profile;

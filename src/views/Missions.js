import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Badge, Button } from 'react-bootstrap';
import { getMissions } from '../redux/missions/missions';
import './missions.css';

const Missions = () => {
  const list = useSelector(({ missionsReducer }) => missionsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!list.length) {
      dispatch(getMissions());
    }
  }, []);

  return (
    <section className="missions">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {list.map((m) => (
            <tr key={m.mission_id}>
              <td className="name">{m.mission_name}</td>
              <td>{m.description}</td>
              <td className="status">
                {m.member ? (
                  <Badge bg="primary">Active Member</Badge>
                ) : (
                  <Badge bg="secondary">NOT A MEMBER</Badge>
                )}
              </td>
              <td className="actions">
                {m.member ? (
                  <Button variant="outline-danger">Leave Mission</Button>
                ) : (
                  <Button variant="outline-secondary">Join Mission</Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </section>
  );
};
export default Missions;

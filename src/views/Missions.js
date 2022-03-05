import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Badge, Button } from 'react-bootstrap';
import {
  getMissions,
  joinMission,
  leaveMission,
} from '../redux/missions/missions';
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
          {list.map(
            ({
              mission_id: id, mission_name: name, description, reserved,
            }) => (
              <tr key={id}>
                <td className="name">{name}</td>
                <td>{description}</td>
                <td className="status">
                  {reserved ? (
                    <Badge bg="primary">Active Member</Badge>
                  ) : (
                    <Badge bg="secondary">NOT A MEMBER</Badge>
                  )}
                </td>
                <td className="actions">
                  {reserved ? (
                    <Button
                      variant="outline-danger"
                      onClick={() => dispatch(leaveMission(id))}
                    >
                      Leave Mission
                    </Button>
                  ) : (
                    <Button
                      variant="outline-secondary"
                      onClick={() => dispatch(joinMission(id))}
                    >
                      Join Mission
                    </Button>
                  )}
                </td>
              </tr>
            ),
          )}
        </tbody>
      </Table>
    </section>
  );
};
export default Missions;

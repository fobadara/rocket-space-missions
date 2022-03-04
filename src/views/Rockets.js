import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';

import Rocket from '../components/rocket/rocket';
import { fetchRockets } from '../redux/rockets/rockets';

const Rockets = () => {
  const reducer = useSelector(({ rocketsReducer }) => rocketsReducer);
  const { rockets, loading } = reducer;
  const dispatch = useDispatch();

  useEffect(() => {
    if (loading === 'idle') {
      fetchRockets(dispatch);
    }
  }, []);

  let rocketsList;
  if (rockets.length) {
    rocketsList = rockets.map((rocket) => (
      <Rocket
        key={rockets.id}
        name={rocket.rocket_name}
        image={rocket.flickr_images[0]}
        description={rocket.description}
      />
    ));
  }

  return (
    <section className="rockets mb-4">
      {loading === 'pending' && <Alert variant="info">Loading...</Alert>}
      <Container>
        <CardGroup>
          <Row>
            {rocketsList}
          </Row>
        </CardGroup>
      </Container>
    </section>
  );
};

export default Rockets;

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
    if (!rockets.length) {
      fetchRockets(dispatch);
    }
  }, []);

  let rocketsList;
  let errorMessage;
  if (rockets.length && typeof rockets !== 'string') {
    rocketsList = rockets.map((rocket) => (
      <Rocket
        key={rocket.id}
        name={rocket.rocket_name}
        image={rocket.flickr_images[0]}
        description={rocket.description}
        id={rocket.id}
      />
    ));
  } else if (typeof rockets === 'string') {
    errorMessage = rockets;
  }

  return (
    <section className="rockets mb-4">
      {loading === 'pending' && <Alert variant="info">Loading...</Alert>}
      {loading === 'rejected' && (
        <Alert variant="warning">
          Error:
          {' '}
          {errorMessage}
        </Alert>
      )}
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

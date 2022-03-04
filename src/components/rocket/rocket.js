import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { updateBookingStatus } from '../../redux/rockets/rockets';

const Rocket = (props) => {
  const {
    image, name, description, id,
  } = props;

  const dispatch = useDispatch();

  const reservedStatus = useSelector(({ rocketsReducer }) => rocketsReducer.reserved);
  const [reserved, setReserved] = useState(reservedStatus);

  const handleClick = () => {
    setReserved(!(reserved));
    dispatch(updateBookingStatus({ id, reserved: !(reserved) }));
  };

  return (
    <Col className="mt-4" sm={12} md={6} lg={12}>
      <Card className="border-0">
        <Row>
          <Col lg={4}>
            <Card.Img variant="top" src={image} />
          </Col>
          <Col lg={8}>
            <Card.Body className="pt-2 pt-lg-2">
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                {reserved && <Badge className="me-2" pill bg="primary">Reserved</Badge>}
                {description}
              </Card.Text>
              <Button
                key={name}
                variant={!reserved ? 'primary' : 'outline-secondary'}
                onClick={handleClick}
              >
                {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
              </Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

Rocket.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Rocket;

import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const Rocket = (props) => {
  const {
    image, name, description,
  } = props;

  return (
    <Col className="mt-4" sm={12} md={6} lg={12}>
      <Card className="border-0">
        <Row>
          <Col lg={4}>
            <Card.Img variant="top" src={image} />
          </Col>
          <Col lg={8}>
            <Card.Body className="pt-0">
              <Card.Title>{name}</Card.Title>
              <Card.Text>{description}</Card.Text>
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
};

export default Rocket;

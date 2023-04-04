import React from "react";
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import styles from "../cardata/cardata.css";
import CustomButton from "../../homepage/button/Button";

export default function CarData(props) {

  return (
    <>
      <Container>
        <Row>
          {props.data.cars.map(o =>
            <Col md='4' key={o.id}>
              <Card className={styles.card} >
                <div>
                  <img
                    src={o.image}
                    alt={o.name}
                  />
                </div>
                
                <Card.Body>
                  <p>{o.name}</p>
                  <h6 className="text-price">Rp {o.price} / hari</h6>
                  <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Card.Text>
                  <Link to={`${o.id}`}>
                    <div className="button-choose">
                    <CustomButton>Pilih Mobil</CustomButton>
                    </div>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
}

CarData.defaultProps = {
  data: {
    cars: []
  }
}

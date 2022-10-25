import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Courses = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg='2'>
                        <h2>side navbar</h2>

                    </Col>
                    <Col lg='7'>
                        <h2>all courses</h2>


                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Courses;
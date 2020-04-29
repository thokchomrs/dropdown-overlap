import React from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';


function Content(props) {
    return (
        <Container>
            <Row className='justify-content-center'>
                <Col md={9}>
                    {props.children}
                </Col>
            </Row>
        </Container>
    )
}
export default Content;
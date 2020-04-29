import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Homepart1(props) {
    return (
        <Jumbotron  className="bg-transparent">
            <Container> 
                <Row className="justify-content-cnter py-5">
                    <Col>
                        {props.title && <h1>{props.title}</h1>}
                        {props.subTitle && <h1>{props.subTitle}</h1>}
                        {props.text && <h1>{props.text}</h1>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}
export default Homepart1;
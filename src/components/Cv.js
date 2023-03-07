import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import mycv from '../Cv.json'

export const CvComp = () => {
    return (    
       <Container className="App wrapp">
            <ListGroup horizontal="sm">          
                {mycv && mycv.map(Cv =>(
                    <>
                    <Row>
                        <Col xs={20}>
                        <ListGroup><h2>{Cv.Utbildning}</h2><br/>

                        {Cv.utb && Cv.utb.map(Cvutb => (
                            <>
                            <ListGroup.Item className="mb-2 rounded" variant="dark" key={`${Cvutb.id}`}>
                                <h4>{Cv.id}{Cvutb.utbnamn}</h4> <p>{Cvutb.startdatum} {Cvutb.slutdatum}
                                <br/>{Cvutb.besk}</p>
                            </ListGroup.Item>
                            </> 
                            ))
                            }</ListGroup>
                        </Col>
                    </Row>
                    <Col xs={1}></Col>                
                    <Row>
                        <Col xs={9}>
                            <ListGroup><h2>{Cv.Arbeten}</h2><br/>      
                            <Row md={2}>
                            {Cv.arb && Cv.arb.map(Cvarb =>(
                                <> 
                                <ListGroup.Item className="mb-2 rounded" variant="secondary" key={Cvarb.id}>
                                    <h4>{Cvarb.Company}</h4><p>Position: {Cvarb.Position}<br/>när: {Cvarb.Year}</p>
                                </ListGroup.Item>
                                </>
                            ))}
                            </Row>
                            </ListGroup>
                        </Col>
                    </Row>
                    </>
                ))}
            </ListGroup>
       </Container>
    )
}
import React, { useEffect, useState } from "react";
import { Spinner,Container, Col, Row, Button, ListGroup } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'


export const PortfolioComp = () => {
    const [error, setError] = useState(null);
    const [isloaded, setIsLoaded] = useState(false);
    const [repos, setRepos] = useState([]);

    useEffect(()=>{
        fetch(`https://api.github.com/users/eduniklas/repos`)
        .then(response => response.json())
        .then(
            (result)=>{
                setIsLoaded(true);
                setRepos(result);
            },
            (error)=>{
                setIsLoaded(true);
                setError(error);
            }
        )
    },[])
    if(error){
        return <div>Error: {error.message}</div>
    }
    else if(!isloaded){
        return <Container className="spinner wrapp"><Spinner animation="border" variant="primary"></Spinner></Container>
    }
    else{
        return(  
            <Container className="wrapp">
                <Row md={2}>
                    <Col xs={8}>
                        <ListGroup>
                            <h4>C# and OOP Project</h4>
                            <p>Group project for school. A bank console app</p>
                            <Button
                                href="https://github.com/Apelsin-Grupp/BankOfApelsin.git" target="_blank"
                                className="font-weight-bold"
                                variant="success">Github repo
                            </Button>
                            <br/>
                        </ListGroup>
                    </Col>
                    {repos && repos.map(repo =>(
                    <Col xs={8}>
                        <ListGroup key={`${repo.id}`}>
                            <ListGroup>
                                <h4>{repo.name}</h4>
                                <p>{repo.description}</p>
                                <Button
                                    href={repo.html_url} target="_blank"
                                    className="font-weight-bold"
                                    variant="success">Github repo
                                </Button>
                                <br/>
                            </ListGroup> 
                        </ListGroup>
                    </Col>
                    ))}
                </Row>
            </Container>
        )
    }
};
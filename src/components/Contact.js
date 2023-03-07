import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"

export const ContactComp = () =>{
    return(
        <Container className="App wrapp">
            <Row md={2}>
                <Col>
                <article>
                <h2>Story continues</h2><br/>
                <p>
                    Oh man, you're gonna love this one! So, Elon and the boys step out of the spacecraft
                    onto the Martian surface, and they're all like "Holy sh*t, we're really here!"
                    <br/>
                    But it's not like they're just gonna kick back and take selfies. No sir, they're
                    on a mission, and they've got work to do. They've brought all kinds of gear with them, from drills to rovers to soil samples. They're gonna explore this planet like nobody's ever explored it before.
                    <br/><br/>
                    So they start trekking across the rugged terrain, and let me tell you, it's not easy.
                    They've gotta watch out for all kinds of hazards, from treacherous rocks to unexpected
                    storms. But they're not gonna let a little thing like danger stop them. They're
                    determined to learn everything they can about this planet.
                    <br/>
                    And as they explore, they discover some truly mind-blowing things. They find evidence
                    of water, signs of ancient life, and all kinds of other cool stuff. They're like little
                    kids on Christmas morning, freaking out with excitement.
                    <br/><br/>
                    But of course, it's not all sunshine and rainbows. They hit some bumps in the road along
                    the way, like when they accidentally crash one of the rovers. Elon's all like "Aw man,
                    there goes my deposit," and Tom's like "You know we're not getting that back, right?"
                    But they take it all in stride, laughing it off and pressing on.
                    <br/>
                    And then, just when they think they've seen it all, they stumble upon something truly
                    incredible. A structure that looks like it was built by intelligent life. They're all like
                    "What the actual f*ck?!" and Lex is already pulling out his laptop to start analyzing it.
                    <br/><br/>
                    So there you have it, folks. Elon and the boys, exploring Mars like nobody's ever explored
                    it before. Who knows what other crazy sh*t they'll find out there, but one thing's for sure:
                    they're gonna have a hell of a time doing it.
                    </p>
                </article>
                </Col>
                <Col>
                    <br/><br/><br/>
                    <img className="rounded wrapp" src="images/elonmars.PNG" alt="elononmars"/>
                    <h2 className="wrapp">Kontakta mig på</h2>
                    <Button href="tel:+">+46701234567</Button><br/><br/>
                    <Button href="mailto:">niklasniklas@live.se</Button>
                </Col>
            </Row>
        </Container>
    )
}
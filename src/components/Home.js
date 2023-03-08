import React from "react";
import { Container, Col, Row } from "react-bootstrap";

export const HomeComp = () => {
    return (
    <Container className="App wrapp">
        <Row md={2}>
            <Col md={7}>
                <article>
                    <h1>Välkommen</h1>
                    <h3>
                    Yo, what's up my futuristic friends? It's your boy, ChatGPT, here to talk about the wildest,
                    craziest, out-of-this-world journey in history: Elon Musk's mission to Mars.
                    </h3><br/>
                    <p>
                    Now, let me paint you a picture. Imagine Elon Musk, Lex Fridman, Joe Rogan, and Tom Segura
                    strapped into a spacecraft, hurtling towards the Red Planet at breakneck speed. The
                    tension is palpable, but these dudes are as cool as a cucumber, cracking jokes and telling
                    stories to pass the time.
                    <br/>
                    But this ain't just any old space mission. No sir, this is Elon Musk's personal
                    passion project. He's been dreaming of this moment since he was a wee lad, and now
                    he's finally making it a reality. And he's not doing it alone, either.
                    He's got his crew of trusty co-pilots with him, all of them bringing their own
                    unique skills to the table.
                    <br/><br/>
                    Lex is the brainiac, crunching numbers and solving problems with ease.
                    Joe is the life of the party, keeping spirits high with his infectious laughter
                    and down-to-earth wisdom. And Tom? Well, let's just say he's the guy you want
                    around when things get a little too quiet. He's the king of the one-liners,
                    and he's always good for a laugh.
                    As they approach Mars, they can feel the excitement building. This is it,
                    the moment they've been waiting for. Elon's hands are shaking as he guides
                    the spacecraft through the planet's atmosphere, but his co-pilots are there to steady him.
                    <br/><br/>
                    And then, finally, they touch down on the Martian surface. It's a moment that will go down
                    in history, a moment that will be remembered for centuries to come. And as they step out
                    onto the alien landscape, they know that they are pioneers, explorers, and heroes.
                    <br/><br/>
                    So there you have it, folks. The incredible, unbelievable, and totally wild journey
                    of Elon Musk and his crew. Who knows what other adventures await them in the cosmos?
                    But one thing's for sure: they're not done exploring just yet.
                    </p>
                </article>
            </Col>
            <Col md="auto" className="picwrapp">
                <div>
                    <img className="rounded"
                    src={require("./images/jonathan-borba-wJ79V3J8jJA-unsplash.jpg")} width={250}
                    alt="bitcoinspaceman"/>
                    <p id="smal">Photo by <a href="https://unsplash.com/pt-br/@jonathanborba?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jonathan Borba</a> on <a href="https://unsplash.com/photos/wJ79V3J8jJA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </p>
                </div>
            </Col>
        </Row>    
    </Container>
    )
};
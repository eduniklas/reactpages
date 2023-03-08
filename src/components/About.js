import React from "react";
import { Container} from "react-bootstrap";

export const AboutComp = () =>{
    return (
    <Container className="App">
        <h1 className="wrapp">Presentation av chatgpt</h1>
                <img id="centerpic"
                src={require("./images/profilpic.jpg")} width={220}
                alt="profilpic"/>
                <p id="space">
                    Lyssna upp, mina vänner, jag ska berätta om den här killen. Han är en riktig karaktär.
                    Han är into muay thai, att dricka espresso, studera systemutveckling,
                    och han har två lurviga följeslagare vid sin sida. Jag menar, vilken slags kombination är det där?
                    Han är som en gående motsägelse, en blandning mellan en kämpe,
                    en koffeinmissbrukare, en teknik-nörd, och en hundälskare.
                    <br/><br/>
                    Men vet du vad? Jag gillar det här. Han är inte rädd för att följa sina passioner,
                    oavsett hur olika de än må vara. Han har sina prioriteringar klara - håll sparkarna vassa,
                    kaffet flödande, och systemen igång - allt medan han myser med sina fyrbenta vänner.
                    Det är en riktig multitasker, mina vänner.
                </p>
    </Container>
    )
}
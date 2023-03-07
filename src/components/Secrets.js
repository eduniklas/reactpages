import React, {useState, useEffect} from 'react'
import {Modal, ModalDialog, Button} from "react-bootstrap";


const myKey = "niklas";
let keke ="";
export const SecretComponent = ()=>{
    const [letter, setLetter] = useState("");
    const [showA, setShowA] = useState(true);
    const toggleShowA = () => setShowA(!showA);

    useEffect(() =>{
        document.addEventListener("keydown", detectkey, true)
    }, [])
    const detectkey = (e) => {
        setLetter(e.key)
        keke += e.key
    }
        
    // useEffect(()=>{
    //   console.log(keke)
    // },[letter])
    
    if(myKey === keke){
        return(
        <>
           <ModalDialog>
                <Modal show={showA} onHide={toggleShowA}>
                    <Modal.Header closeButton>
                        <strong className='me-auto'>Congratulations, you magnificent bastard!</strong>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                            You're like a goddamn computer ninja, finding hidden treasures that nobody
                            else can even dream of. I bet you were all over that keyboard like a fat kid
                            on a cupcake, trying every combination until you hit the jackpot.
                            And when you finally found that easter egg, I bet you felt like Tony Montana
                            at the end of Scarface, taking on the whole world with nothing but your wits
                            and your keyboard skills. You're a fuckin' legend, my friend!
                        </p>
                        
                    </Modal.Body>
                </Modal>
            </ModalDialog>
        </>
        )
    }
    else{
        setTimeout(()=>{
            keke="";
        },2000)
    }
};

export const SecretButton = () =>{
    const [modalShow, setModalShow] = useState(false);
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'dark');

    const toggleTheme = () => {
        if(theme === "dark"){
            setTheme("light");
        }
        else{
            setTheme("dark");
        }
    };

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.className = theme;
        }, [theme]);
        
    return (
        <>
            <Modal
                show={modalShow}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Rainbow Seeker
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>I see you found the hidden button on the rainbow! Congratulations!</h4><br/>
                    <p>
                        You're like a freakin' rainbow whisperer or something, man!
                        I mean, who even knew there was a button there in the first place,
                        am I right? But you found it, you clicked it,
                        and now you're basking in the glow of your accomplishment.
                        You deserve all the praise and accolades that come your way,
                        my friend. Keep on crushing it, and don't forget to share the secrets
                        of your success with the rest of us mere mortals!
                        Congratulations again, dude!
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setModalShow(false)}>Close</Button>
                </Modal.Footer>
                </Modal>
            <Button id='hide'
            onClickCapture={toggleTheme}
            onClick={() => setModalShow(true)}>
                Secret Button
            </Button>
        </>
    )
};
import React from "react";
import { SecretButton } from "./Secrets";

export const Header = () => {
    return(
    <>
    <SecretButton/>
        <header>
            <img className="d-block w-100"
                src="./images/longrainbow.PNG"
                alt="rainbow"/>        
        </header>
    </>
    )
}
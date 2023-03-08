import React from "react";
import { SecretButton } from "./Secrets";

export const Header = () => {
    return(
    <>
    <SecretButton/>
        <header>
            <img className="d-block w-100"
                src={require("./images/longrainbow.png")}
                alt="rainbow"/>        
        </header>
    </>
    )
}
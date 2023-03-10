import React from "react";

export function Footer() {
    return (
    <>  
        <footer>
            <h4>Socialt</h4>
            <a href="https://www.instagram.com/niklashagelin/?hl=en" target="_blank" rel="noreferrer">
                <img src={require("./images/instagramicon.PNG")} width="42px" alt="instagramicon"/></a>
            <a href="https://github.com/eduniklas?tab=repositories" target="_blank" rel="noreferrer">
                <img src={require("./images/githubicon.PNG")} width="37px" alt="githubicon"/></a>
        </footer>
    </>
    )
}
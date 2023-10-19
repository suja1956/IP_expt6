import React, { useState } from "react";
import Contactus from "./Contactus";

function Home() {
   
    return (
        <>
        <header>
        <h1>Sujal Sawdekar</h1>
    </header>
    
    <main>
       
            <h2>About Me</h2>
            
            <p>Hello, I am Sujal, a web developer with a passion for creating beautiful and functional websites.</p>        
        <section>
            <h2>Personal Details</h2>
            <table>
                <tr>
                    <td>Name:</td>
                    <td>Sujal Sawdekar</td>
                </tr>
                <tr>
                    <td>Age:</td>
                    <td>19</td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td><a href="mailto:john@example.com">suja7103gm@gmail.com</a></td>
                </tr>
                <tr>
                    <td>Location:</td>
                    <td>Mumbai, India</td>
                </tr>
            </table>
        </section>

        <section>
            <h2>Skill Sets</h2>
            <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Python</li>
                <li>Java</li>
                <li>MySQL</li>
                <li>Spring Boot</li>
            </ul>
        </section>
    </main>

    <footer>
        <p>Contact me at <a href="mailto:john@example.com">suja7103gm@gmail.com</a></p>
        <Contactus/>
    </footer>
    </> 
    );
}
export default Home;
import {FaLinkedin} from "react-icons/fa"

const Homepage = () => {
    return ( 
        <>
        <section className="homepage">
            <div className="overlay">
                <h1>Lily Cant</h1>
                <p>Junior Front-end Developer</p>
                <ul>
                    <li><a href="https://www.linkedin.com/in/lilian-cant/" target="_blank" rel="noopenner noreferrer"><FaLinkedin /></a></li>
                </ul>
            </div>
        </section>
        </>
     )
}
 
export default Homepage;
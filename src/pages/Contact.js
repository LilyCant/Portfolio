import {FaPhone, FaEnvelope} from "react-icons/fa"

const Contact = () => {
    return ( 
        <>
            <section className="contact"> 
            <h1>Contact</h1>
                <ul>
                    <li><a href="tel:+61405089161"><FaPhone />{"  "}0405 089 161</a></li>
                    <li><a href="mailto:lily_betts@hotmail.com"><FaEnvelope />{"  "}lily_betts@hotmail.com</a></li>
                </ul>
            </section>
        </>
     )
}
 
export default Contact;
import { Link } from "react-router-dom";
const Error = () => {
    return ( 
        <>
        <section className="error" style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", height: "100vh"}}>
            <h1>Error 404: Page Not Found</h1>
            <Link to="/" style={{ backgroundColor: "#00b392", padding: 10, color: "white", marginTop: 20}}>Home</Link>
        </section>
        </>
     )
}
 
export default Error;
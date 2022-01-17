import { Link } from "react-router-dom"


 const Navbar=()=>{
    return <div style={{
        display: "flex",
        border: "1px solid black",
        height: "30px",
        backgroundColor:  "#FFBCD1",
        justifyContent: "space-evenly",
        color: "#6867AC",
        padding : "20px",
        font: "100px"

    }}>
        <Link to="/" >  <div>Home</div></Link>
        <Link to="/admin" >  <div>Admin</div></Link>
        <Link to="/applyjob" >   <div>Applyjob</div></Link>
        <Link to="/Login" >     <div>Login</div></Link>
       
        
    </div>
}

export {Navbar}
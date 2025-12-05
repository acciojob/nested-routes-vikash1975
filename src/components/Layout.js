import React from "react";
import {Link} from "react-router-dom";

function Layout(){
    return(
        <div>
            <nav style={{display:"flex",gap:"20px"}}>
                <Link to="/">Home</Link>
                <Link to="/women">Women</Link>
            </nav>
            

        </div>
    )
}

export default Layout;
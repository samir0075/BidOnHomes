import React from "react";


const Header = (props) => {
    console.log(props.isLoggedIn);
    return (

        <div>
            <ul  style={{  display: "flex", justifyContent: "space-between",alignItems:"center" ,backgroundColor: "#1976d2", color: "#fff", padding: "0px 20px"}}>

                <h2>
                    BidOnHomes
                </h2>
                {props.isLoggedIn && (

                    <button onClick={props.onLogout} style={{cursor:"pointer", backgroundColor:"#fff",fontSize:"20px",border:"none",padding:" 5px 10px"}}>Logout</button>

                )}
            </ul>
        </div>
    );
}
export default Header;
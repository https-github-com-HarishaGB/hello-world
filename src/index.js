import React from "react";
import ReactDOM from "react-dom";
import "./style.css"

// JSX (99.99% HTML + 20% jS)
const Hello=()=>{
    let a = 555
    // using object we give css properties 
    let h1Style = {textAline:"center", border:"5px solid green"}
    
    //this part is HTML code
    return (
        //its for only single compenent
        // <h1> Hello World </h1>

        //we use multiple elements inside the div exapmle
        // its external css
        <div className="hello"> 
            {/* inline css */}
            {/* <h1 style={{textAline:"center", border:"5px solid green"}}> Creator is Harisha G B</h1> */}
            <h1 style={h1Style}> Creator is Harisha G B</h1>
            <p> {5+5+5} </p>
            <p> Welcome to World, {a}</p>
        </div>
    )
}

ReactDOM.render(<Hello/>, document.getElementById("root"))
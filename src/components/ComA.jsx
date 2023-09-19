import React from "react";
export const ComA= ({text,text2,id})=>{
    return(
        <div id={id} className="sub1">
            <div>
            <h3 id={id}>{text}</h3>
            
            <h3 id={id}>{text2}</h3>

            </div>
        </div>
    )
}
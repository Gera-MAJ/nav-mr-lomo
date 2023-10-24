import React from "react";

export default function Display(props){
    
    // console.log(props)
    const { Info } = props;
    const {primera , segunda} = Info;

    

    return(
        <>
            <span className='DisplayStock'>
                <ul>
                    <li><a href="#">{primera}</a></li>
                    <li><a href="#">{segunda}</a></li>
                </ul>
            </span>
        </>
    )
}
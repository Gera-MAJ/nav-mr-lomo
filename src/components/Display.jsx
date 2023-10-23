export default function Display(props){
    
    return(
        <>
            <span className='extVenta'>
                <ul>
                    <li><a href="#">{props.primera}</a></li>
                    <li><a href="">{props.segunda}</a></li>
                </ul>
            </span>
        </>
    )
}
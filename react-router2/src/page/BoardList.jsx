import { useState } from "react";
import { Link } from "react-router-dom";

const BoardList = () => {
    const [boardlist, serBoard] = useState( [
        {id:1, context : "첫번째"},
        {id:2, context : "두번째"},
        {id:3, context : "세번째"},
    ] )
    return (  
        <div>
            { boardlist.map((item)=>(<Link to={'/board/'+item.id} key={item.id}>{item.id}</Link>))}
        </div>
    );
}
 
export default BoardList;
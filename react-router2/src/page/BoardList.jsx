import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { StateContext } from "../context/ContextComp";

const BoardList = () => {
    {/** 값을 가져올때, value에 객체로 들어오지않았다면 구조화할당X */}
    const boardlist = useContext(StateContext);
    return (  
        <div>
            { 
            boardlist && boardlist.map((item)=>(
                <Link to={'/boardlist/'+item.id} key={item.id}>{item.id}</Link>))
            }
            {/** 아울렛을 통해 props값을 전달할수 없다 */}
            {/** props값을 전달할때는 컴포넌트를 통해서 직접 전달
             *  : App에있는 컴포넌트로 전달 */}
            <Outlet />
        </div>
    );
}
 
export default BoardList;
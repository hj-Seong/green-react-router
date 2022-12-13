import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
    return ( 
        <div>
            <button onClick={()=>{ navigate('/') }}>
                Home으로 이동
            </button>
        </div>
     );
}
 
export default About;
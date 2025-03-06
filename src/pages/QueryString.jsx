import { Col } from "react-bootstrap";
import WrapContent from "../components/WrapContent";
import { useSearchParams, useLocation, useNavigate} from "react-router-dom";

function QueryString() {
    const nav = useNavigate();
    const loc = useLocation();

    const [queryStr] = useSearchParams();

    const key = queryStr.get('key2');

    console.log(loc.search);

    function handleClick(){
        nav("/test");
    }
    return (
        <WrapContent>
            <Col>
                <h1>Query String : {key} </h1>
                <button onClick={handleClick}>Take me to Netflix</button>
            </Col>
        </WrapContent>
    );
}

export default QueryString;
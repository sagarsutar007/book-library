import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function ExampleContext() {
    const {name, setName} = useContext(AppContext);
    return (
        <>
            <div className="text-center">
                <h1>Welcome to Context!</h1>
                {name?<p>Hello {name}</p>:<p>Please login!</p>}
                <button onClick={()=>{
                    setName("Learn React");
                }}>Set User: Sagar </button>
            </div>
        </>
    )
}

export default ExampleContext;
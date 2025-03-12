import { useContext } from "react";
import { UserContext } from "../context/UserContext";
// import { AppContext } from "../context/AppContext";

function TestContext () {
    const {user} = useContext(UserContext);
    return (
        <>
            {user ? <p>Hello {user.name} you are {user.age} years old</p> : <p>Please Login!</p>}
        </>
    );
}

export default TestContext;
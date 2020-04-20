import React from "react";

const Login = (props) =>(
    <nav className="login">
        <h2>
            Inventory Login
        </h2>
        <p>
            Sign in to manage your store inventory.
        </p>
        <button className="github" onClick={()=>props.authenticate("Github")}>
            Sign in with Github
        </button>
        <button className="facebook" onClick={()=>props.authenticate("Facebook")}>
            Sign in with Facebook
        </button>
    </nav>
);
export default Login;
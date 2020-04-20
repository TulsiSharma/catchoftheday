import React from "react";
import {getFunName} from "../helpers"

class StorePicker extends React.Component{
    InputRef=React.createRef();
    constructor(){
        super();
        this.checkhandler=this.checkhandler.bind(this);
    }

    checkhandler(event){
        // stop the page from reload
        event.preventDefault();
        //take value from input tag
        const storeName= this.InputRef.current.value;
        //change the url by accessing push method in history props in storepicker.
        this.props.history.push(`/store/${storeName}`);
        
        
    }
     
    
    render(){
        return(
            
            <form className="store-selector" onSubmit={this.checkhandler}>
                <h2>Please Enter a Store</h2>
                <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={this.InputRef}/>
                <button type="submit">Visit Store ></button>
            </form>
        );

    }
}  

export default StorePicker;
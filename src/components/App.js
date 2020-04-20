import React from 'react';
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import samplefishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";
class App extends React.Component{
    state={
        fishes:{},
        Order:{}
    };

    addstate = fish=>{
        // make a copy of fishes.
        const fishes={...this.state.fishes};
        //update a new fish to the fishes.
        fishes[`fish${Date.now()}`]=fish;
        // using setstate method for updating a fishes
        this.setState({fishes});
    }
    
    loadsamplefishes=()=>{
        this.setState({fishes:samplefishes});
    }

    componentDidMount(){
        const localStorageRef= localStorage.getItem(this.props.match.params.storeId);
        
        if(localStorageRef){
            this.setState({Order:JSON.parse(localStorageRef)});
        }
        this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`,{
            context:this,
            state: 'fishes'
        }
        );
    }

    componentDidUpdate(){
        localStorage.setItem(
            this.props.match.params.storeId,
            JSON.stringify(this.state.Order)
        );
    }
    

    componentWillUnmount(){
        base.removeBinding(this.ref);
    }

    addtoorder=(key)=>{
    
        //copy a whole state.
        const Order={...this.state.Order};
        //add a fish or update a value of fish to order
        Order[key]=Order[key]?Order[key]+1:1;
        // set a new state
        this.setState({Order});
    }

    updatestate =(key,fish)=>{
        //copy fishes state.
        const fishes={...this.state.fishes};
        // update a fish .
        fishes[key]=fish;
        // set new state.
        this.setState({fishes});
    }

    Removefish=(key)=>{
        // copy curent state
        const fishes={...this.state.fishes};
        // remove fish.
        fishes[key]=null;
        //set new state.
        this.setState({fishes});
    }

    removeorder=(key)=>{
        // copy curent state
        const Order={...this.state.Order};
        // remove fish.
        delete Order[key];
        //set new state.
        this.setState({Order});
    }

    render(){
        return(
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Famous seaFood"/>
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key=> (
                        <Fish key={key} details={this.state.fishes[key]} addtoorder={this.addtoorder} index={key}/>))}
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.Order} removeorder={this.removeorder}/>    
                <Inventory addstate={this.addstate} loadsamplefishes={this.loadsamplefishes} fishes={this.state.fishes} updatestate={this.updatestate} Removefish={this.Removefish} storeId={this.props.match.params.storeId}/>
            </div>
        );
    }
}

export default App;

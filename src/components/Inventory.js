import React from 'react';
import AddFishform from './AddFishform';
import EditFish from "./EditFish";
import Login from './Login';
import firebase, { auth } from "firebase";
import base,{firebaseApp} from "../base";
class Inventory extends React.Component{

    state={
        uid:null,
        owner:null
    }

    componentDidMount(){
        firebase.auth().onAuthStateChanged(user=>{
            if(user){  
                this.authHandler({user});
            }
        })
    }

    authHandler= async (authdata)=>{
        // look up a store ito the firebase.
        const store = await base.fetch(this.props.storeId,{context:this});
        //claim if there is no owner.
        if(!store.owner){
            await base.post(`${this.props.storeId}/owner`,{
                data:authdata.user.uid
            });
        }
        //set the state of the inventory compnent.
        this.setState({
            uid:authdata.user.uid,
            owner:store.owner || authdata.user.uid
        });

    }
    authenticate=(provider)=>{
        const authprovider =new firebase.auth[`${provider}AuthProvider`]();
        firebase.auth().signInWithPopup(authprovider).then(this.authHandler); 
    }

    logout = async () =>{
        await firebase.auth().signOut();
        this.setState({
            uid:null
        });
    }
    
    
    render(){
        const logout=<button onClick={this.logout}>LogOut</button>
        if(!this.state.uid){
            return <Login authenticate={this.authenticate}/>
        }
        if(this.state.uid !== this.state.owner){
            return (
                <div>
                    <p>Sorry you are not the owner!!</p>
                    {logout}
                </div>
                
            );
        }
        return(
            <div className="inventory">
               <h2>Inventory</h2>
               {logout}
                {Object.keys(this.props.fishes).map(key=>(<EditFish fish={this.props.fishes[key]} key={key} index={key} updatestate={this.props.updatestate} Removefish={this.props.Removefish}/>))}
               <AddFishform addfishstate={this.props.addstate}/>
               <button onClick={this.props.loadsamplefishes}>Load Sample Fishes</button>
            </div>
            
        );
    }
}

export default Inventory;
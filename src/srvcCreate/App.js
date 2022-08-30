import React from "react";
import ServiceCard from './ServiceCard';
//import axios from 'axios';
import './App.css';




class App extends React.Component {



    render(){
        
        return(
            
            <div className="container">
                <ServiceCard></ServiceCard>
            </div>
            
        )
    }
}
export default App;
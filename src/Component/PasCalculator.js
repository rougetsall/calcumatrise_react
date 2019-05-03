import React,{Component} from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
export default class PasCalculator extends Component {
    render(){
        return(
            
            <span >
                je suis pas PasCalculator
                <br/>

                <NavLink to={'/calculator'}>
                Go to Calculator</NavLink>
            </span>
        )
    }
}

import React,{Component} from 'react'
export default class CalculatorNumber extends Component {
    render(){
        return(
            <td onClick={()=>{
                this.props.handle(this.props.nombre)
                // this.props.hand(this.props.operation.nombre)
            }}

            >
          
            {this.props.nombre}
        
              
            </td>
        )
    }
}

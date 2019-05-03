import React,{Component} from 'react'
export default class CalculatorOperator extends Component {
    render(){
        return(
            <td  border='2' onClick={()=>{
                this.props.handle(this.props.operat)
                // this.props.hand(this.props.operation.nombre)
            }}

            >
          
            {this.props.operat}
        
              
            </td>
        )
    }
}
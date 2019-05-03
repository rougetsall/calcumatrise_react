import React, { Component } from 'react';

import '../App.css';
import CalculatorNumber  from './CalculatorNumber'
import CalculatorOperator from './CalculatorOperator'
export default  class Calculator extends Component {
  constructor(props){
    super(props)
    this.state={
     total: 0,
     operator:null,
    
    }
    
    

  }
  changeoperator(operat){
    this.setState({
      operator:operat
    })
  }
  changetotal(nombre) {
    if (this.state.total===0) {
      this.setState({
        total:nombre
      })
    }
    if (this.state.total!==0) {
      this.setState({
        total:this.state.total*10+nombre
      })
     }  
    
  }
  
  Calculer(operation,nb){
     
    if (operation==="+") {
      this.setState({
      total:this.state.total+nb
      })
    }
   if (operation==="-") {
    this.setState({
      total:this.state.total-nb
    })
    }
    if (operation==="*") {
      this.setState({
      total:this.state.total*nb
      })
      }
      if (operation==="/") {
      this.setState({
      total:this.state.total/nb
      })
      }

      this.setState({
      operator:""
      })

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
         
         <table border='2' bgcolor='blue'>
           <tr border='2' >
           <td colspan="5"> {this.state.total}  {this.state.operator} </td>
           </tr>
           <tr>
             <CalculatorNumber nombre={1} handle={this.changetotal.bind(this)}
             ></CalculatorNumber>
             
             <td onClick={()=>{
               this.changetotal(2)
               this.Calculer(this.state.operator,2)
               this.setState({
                operator:""
              })
               }}><button>2</button> 
               </td>
             <td td onClick={()=>{
              this.changetotal(3)
              this.Calculer(this.state.operator,3)
             this.setState({
             operator:""
             })
             }}><button>3</button></td>
             <CalculatorOperator operat='+' handle={this.changeoperator.bind(this)}
             ></CalculatorOperator>
            </tr>
            <tr>
             <td td onClick={()=>{
               this.changetotal(4)
               this.Calculer(this.state.operator,4)
               this.setState({
                operator:""
              })

        }}><button>4</button></td>
             <td td onClick={()=>{
               this.changetotal(5)
               
               this.Calculer(this.state.operator,5)
             this.setState({
             operator:""
             })
             }}><button>5</button></td>
             <td td onClick={()=>{
               this.changetotal(6)
               
               this.Calculer(this.state.operator,6)
             this.setState({
             operator:""
             })
             }}><button>6</button></td>
              <CalculatorOperator operat='-' handle={this.changeoperator.bind(this)}
             ></CalculatorOperator>
              
             
            </tr>
            <tr>
             <td td onClick={()=>{
               this.changetotal(7)
               
               this.Calculer(this.state.operator,7)
             this.setState({
             operator:""
             })
             }}><button>7</button></td>
             <td td onClick={()=>{
               this.changetotal(8)
               this.Calculer(this.state.operator,7)
               this.setState({
                operator:""
                })
              }}><button>8</button></td>
             <td td onClick={()=>{
               this.changetotal(9)
               this.Calculer(this.state.operator,9)
                this.setState({
               operator:""
              })
        }}><button>9</button></td>
             
             <CalculatorOperator operat='*' handle={this.changeoperator.bind(this)}
             ></CalculatorOperator> </tr>
            <tr>
            <td  border='0' colspan="2" onClick={()=>{
               this.changetotal(0)
               
               }}><button>0</button></td>
               <td td onClick={()=>{
               this.setState({
                total:0
              })
              this.setState({
                operator:""
               })
               }}><button>C</button></td>
               <CalculatorOperator operat='/' handle={this.changeoperator.bind(this)}
             ></CalculatorOperator> </tr>
         </table>
          {/* <p 
           onClick={() =>{
            alert('change image !!!')
            this.changeImage()
              } }>
          {this.state.image}
          </p> */}
         
        </header>
      </div>
    );
  }
}


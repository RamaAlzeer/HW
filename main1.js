import React, {Component} from 'react';

class Main1 extends Component{
    constructor(){
        super()
        this.state={
           count : 0
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleClick1 = this.handleClick1.bind(this)
        this.handleClick2 = this.handleClick2.bind(this)
    }

    handleClick(){
        this.setState(preState => {
         return {
           count: preState.count +1
         }
       })
   
    }

    handleClick1 (){
        this.setState(preState => {
            return {
              count: preState.count -1
            }
          })
        
    }

    handleClick2 (){
        this.setState(() => {
            return {
              count: 0
            }
          })
        
    }

    render(){
        return(
           <div>
               <h1>{this.state.count}</h1>
               <button onClick={this.handleClick}>add</button>
               <button onClick={this.handleClick1}>dec</button>
               <button onClick={this.handleClick2}>clear</button>
               
           </div>
        )
    }
}
export default Main1;
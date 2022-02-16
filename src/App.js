import React, { Component } from 'react'
import 'C:/Users/ADM/contador/src/App.css'

class App extends Component {
  state={
    count : 0
  };

  adicionar = () => {
    this.setState({
      count:this.state.count < 10 ? this.state.count +1 : this.state.count
    })
  }
  diminuir = () => {
    this.setState({
      count:this.state.count > 0 ? this.state.count -1 : this.state.count
    })
  }
  limpar = () => {
    this.setState({count:0})
  }
  render(){
    return(
      <div className ="contador">
        <div className ="titulo">
          <h1>{this.state.count}</h1>
        </div>
        <div className="botoes">
          <button onClick={this.adicionar}>+</button>
          <button onClick={this.diminuir}>-</button>
          <button onClick={this.limpar}>limpar</button>
        </div>
        <h2>Contador entre 0 e 10 está feito</h2>
      </div>
    )
  }
}

export default App
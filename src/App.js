import './App.css';
import Header from './components/Header';
import Game from './Game'
import React from 'react';
import Product from './components/Product';

class App extends React.Component {

  constructor(props){
    super(props)
    this.game = new Game()
  }

  componentDidMount(){
    setInterval( () => {
      this.game.update()
      this.setState({})
    }, 40)
  }

  update(){
    this.game.update()
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Product/>
      </div>
    );
  }
}
export default App;

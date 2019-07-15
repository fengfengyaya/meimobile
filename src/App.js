import React,{Component} from 'react';
import Tabbar from './Components/Tabbar'
import Header from './Components/Header'



class App extends Component{
  render(){
    return <div>
    	<Header></Header>
    	<Tabbar></Tabbar>
    	
      {
      	this.props.children
      }
    </div>
  }
}

export default App;

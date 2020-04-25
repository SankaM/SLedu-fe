import React,{Component} from 'react';
import { BrowserRouter as Router , Route,Switch,Redirect} from "react-router-dom";
import Home from './pages/Home';
import FiveMaths from './pages/_5maths';
import Examing from './pages/Quationing';
import PageNotFound from './pages/404';

class App extends Component {
  render(){
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/_5maths" component={FiveMaths}/>
          <Route exact path="/Examing" component={Examing}/>
          <Route exact path="/404" component={PageNotFound}/>
          <Redirect to="/404"/>
        </Switch>
      </Router>
    );
  }
}

export default App;

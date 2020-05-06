import React,{Component} from 'react';
import { BrowserRouter as Router , Route,Switch,Redirect} from "react-router-dom";
import Home from './pages/Home';
import Lesson from './pages/Lesson';
import Examing from './pages/Quationing';
import PageNotFound from './pages/404';

class App extends Component {
  render(){
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Lesson/:id" component={Lesson}/>
          <Route exact path="/Examing/:id" component={Examing}/>
          <Route exact path="/404" component={PageNotFound}/>
          <Redirect to="/404"/>
        </Switch>
      </Router>
    );
  }
}

export default App;

import React,{Component} from 'react';
import { BrowserRouter as Router , Route,Switch,Redirect} from "react-router-dom";
import Home from './pages/Home';
import Lesson from './pages/Lesson';
import Examing from './pages/Quationing';
import Note from './pages/Note';
import Test from './pages/Test';
import PageNotFound from './pages/404';
import Artical from './pages/Artical';
import Admin from './pages/Admin';
import CreateArtical from './pages/CreateArtical';

class App extends Component {
  render(){
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route  path="/Lesson/:id" component={Lesson}/>
          <Route  path="/Examing/:id" component={Examing}/>
          <Route  path="/Test/:id2/:id" component={Test}/>
          <Route  path="/Note/:id" component={Note}/>
          <Route  path="/Artical/:id" component={Artical}/>
          <Route  path="/CreateArtical" component={CreateArtical}/>
          <Route  path="/Admin" component={Admin}/>
          <Route  path="/404" component={PageNotFound}/>
          <Redirect to="/404"/>
        </Switch>
      </Router>
    );
  }
}

export default App;

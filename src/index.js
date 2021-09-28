import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore,combineReducers,applyMiddleware,compose} from "redux";
import { Provider } from "react-redux";
import articalReducer from "./store/reducers/articalReducer";
import quationReducer from "./store/reducers/questionReducer";
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  ar:articalReducer,
  qr:quationReducer
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();

import logo from "./logo.svg";
import "./App.css";
import { createStore ,applyMiddleware,compose} from "redux";
import thunk from 'redux-thunk'
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";

var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserForm></UserForm>
        <UserList></UserList>
      </div>
    </Provider>
  );
}

export default App;

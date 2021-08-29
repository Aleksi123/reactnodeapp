import "./App.css";
import TopBar from "./components/TopBar";
import { Provider } from "react-redux";
import store from "./store";
import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <TopBar />
        <TodoAdd />
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;

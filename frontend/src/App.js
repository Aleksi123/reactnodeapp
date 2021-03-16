import "./App.css";
import TopBar from "./components/TopBar";
import { Provider } from 'react-redux';
import store from './store';
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <TopBar />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;

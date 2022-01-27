import Todo from "./components/Todo";
import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";

const App = () => {
  return (
    <div className="body">
      <h1>My Todos</h1>
      <Todo title="Learning React" />
      <Todo title="Mastering React" />
      <Todo title="Explore the full Nextjs + React Course" />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;

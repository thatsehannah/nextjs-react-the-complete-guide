import Todo from "./components/Todo";

const App = () => {
  return (
    <div className="body">
      <h1>My Todos</h1>
      <Todo title="Learning React" />
      <Todo title="Mastering React" />
      <Todo title="Being the best I can be." />
    </div>
  );
}

export default App;

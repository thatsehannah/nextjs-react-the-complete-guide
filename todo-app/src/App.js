import Todo from "./components/Todo";

const App = () => {
  return (
    <div className="body">
      <h1>My Todos</h1>
      <Todo title="Learning React" />
      <Todo title="Mastering React" />
      <Todo title="Explore the full Nextjs + React Course" />
    </div>
  );
}

export default App;

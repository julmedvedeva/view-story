import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Group">
        <a
          href="https://docs.google.com/document/d/1JwJSdh0hHmNqkkzdq3hUodH7hIO0Wu1GxkAviwa0yHo/edit?usp=sharing"
          target="_blank">
          <div className="Item">История первая</div>
        </a>
        <a
          href="https://docs.google.com/document/d/1JwJSdh0hHmNqkkzdq3hUodH7hIO0Wu1GxkAviwa0yHo/edit?usp=sharing"
          target="_blank">
          <div className="Item">История вторая</div>
        </a>
      </div>
      <a
        href="https://docs.google.com/document/d/1JwJSdh0hHmNqkkzdq3hUodH7hIO0Wu1GxkAviwa0yHo/edit?usp=sharing"
        target="_blank">
        <div className="Item Large">Не история</div>
      </a>
    </div>
  );
}

export default App;

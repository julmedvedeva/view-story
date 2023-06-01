import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Group">
        <a
          href="https://docs.google.com/document/d/1JwJSdh0hHmNqkkzdq3hUodH7hIO0Wu1GxkAviwa0yHo/edit?usp=sharing"
          target="_blank"
          rel="noreferrer">
          <div className="Item">История первая</div>
        </a>
        <a
          href="https://docs.google.com/document/d/1xrbiAvN09xNaSN8tXobj2RoXp3xZlNvIZcbOqpwok9I/edit?usp=sharing"
          target="_blank"
          rel="noreferrer">
          <div className="Item">История вторая</div>
        </a>
        <a
          href="https://docs.google.com/document/d/1TWMK90aszpWCqwFc2U8Y2RQTCQl3__IR17GZmxMYC7Y/edit?usp=sharing"
          target="_blank"
          rel="noreferrer">
          <div className="Item Large">История третья</div>
        </a>
      </div>
    </div>
  );
}

export default App;

import { Counter } from "./basic/Counter";
import { CounterBy } from "./basic/CounterBy";
import { CounterEffect } from "./basic/CounterEffect";
import { CounterHook } from "./basic/CounterHook";
import { CounterReducerComponent } from "./counter-reducer/CounterReducerComponent";

function App() {
  return (
    <>
      <h1>React</h1>
      <hr/>
      <Counter initialValue={15}/>
      <hr/>
      <CounterBy />
      <hr/>
      <CounterEffect />
      <hr/>
      <CounterHook />
      <hr/>
      <CounterReducerComponent />
    </>
  );
}

export default App;

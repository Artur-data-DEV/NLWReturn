import { Widget } from "./components/Widget";
import { Button } from "./components/Button";


export function App() {
  return (
    <div className="flex gap-2">
      <Button text="Enviar" />
      <Button text="Hello" />
      <Widget />
    </div>
  );
}


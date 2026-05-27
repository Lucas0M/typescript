import "./App.css";
import { TarefasProvider } from "./contexts/TarefasProvider";
import ListaTarefas from "./components/ListaTarefas";
import FormularioTarefa from "./components/FormularioTarefa";
import Resumo from "./components/Resumo";

function App() {
  return (
    <div className="App">
      <TarefasProvider>
        <FormularioTarefa />
        <ListaTarefas />
        <Resumo />
      </TarefasProvider>
    </div>
  );
}

export default App;

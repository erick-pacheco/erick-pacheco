import "./App.css";
import { reducer, StateProvider, initialState } from "./data";
import RenderRoutes from "./routes/router";

function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <RenderRoutes />
    </StateProvider>
  );
}

export default App;

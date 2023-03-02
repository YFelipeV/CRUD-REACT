import List from "./page/List";
import {ServicesContextProvider} from './context/contexto'
function App() {
  return(
  <ServicesContextProvider>
  <List />;
  </ServicesContextProvider>
  )
}

export default App;

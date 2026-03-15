import { TaskContextProvider } from './contexts/TaskProvider/TaskProvider';
import { Home } from './pages/Home';

import './styles/theme.css';
import './styles/globals.css';

function App() {
  return (
    <>
      <TaskContextProvider>
        <Home />
      </TaskContextProvider>
    </>
  );
}

export default App;

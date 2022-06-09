import { useTheme } from './Context/themeContext';
import Header from "./Components/Header";

function App() {
  const theme = useTheme()

  console.log('Yay ists working', theme);
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;

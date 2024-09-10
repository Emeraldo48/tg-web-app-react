import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";

function App() {
    const {tg, onToggleButton} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [tg]);



  return (
    <>
        <Header />
      <button onClick={onToggleButton}>toggle</button>
    </>
  );
}

export default App;

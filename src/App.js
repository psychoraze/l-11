import { useSelector, useDispatch } from "react-redux";
import { minecraftGetMobsAction } from "./store/crreators/minecraftCreators";
import "./App.css";

function App() {
  const selector = useSelector();
  const dispatch = useDispatch();
  return <div className="App">
    <span>{selector.mobs}</span>
    <button onClick={() => dispatch(minecraftGetMobsAction(["criper", "steeve", "cow"]))}></button>
  </div>;
}

export default App;

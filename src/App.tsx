import './App.css';
import Grid from './components/Grid/Grid';
import Header from './components/Header/Header';
import { useRef } from 'react';

function App() {
  const isVisualizationRunningRef = useRef(false)
  return (
    <>
      <Header isVisualizationRunningRef={isVisualizationRunningRef}/>
      <Grid isVisualizationRunningRef={isVisualizationRunningRef}></Grid>
    </>
  );
}

export default App;

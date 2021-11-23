import React from 'react';
import './App.css';
import PathfindingVisualizer from './PathfindingVisualizer/PathfindingVisualizer';

function App() {
  return (
      <div className="App">
          <h1>An app to to Visualize the Dijkstra's Shortest Path Algorithm</h1>
           Made by Arup Sarkar and Ashima Jain
      <PathfindingVisualizer></PathfindingVisualizer>
    </div>
  );
}

export default App;

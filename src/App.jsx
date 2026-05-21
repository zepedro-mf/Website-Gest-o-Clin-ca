import React from 'react';
import Background from './components/Background';
import Context from './components/Context';
import ConflictMap from './components/ConflictMap';
import Objectives from './components/Objectives';
import ActionLines from './components/ActionLines';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Background />
      <Context />
      <ConflictMap />
      <Objectives />
      <ActionLines />
      <Team />
      <Footer />
    </div>
  );
}

export default App;

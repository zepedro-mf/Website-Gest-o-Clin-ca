import React from 'react';
import Background from './components/Background';
import Context from './components/Context';
import ConflictMap from './components/ConflictMap';
import Objectives from './components/Objectives';
import ActionLines from './components/ActionLines';
import Team from './components/Team';
import Footer from './components/Footer'; 
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

function App() {
  return (
    <div className="app">
      <SimpleBar className="cursor-pointer" style={{ height: "100vh", cursor: "pointer"}}>
        <Background />
        <Context />
        <ConflictMap />
        <Objectives />
        <ActionLines />
        <Team />
        <Footer />
      </SimpleBar>
    </div>
  );
}

export default App;

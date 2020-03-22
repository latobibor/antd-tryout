import React from 'react';
import './App.css';
import { StateHooksComponent } from './components/state-hooks-component';
import { EffectsVersions } from './components/use-effects-versions';

function App() {
  return (
    <div className="App">
      <EffectsVersions />
      <StateHooksComponent />
    </div>
  );
}

export default App;

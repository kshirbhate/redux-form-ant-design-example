import React from 'react';
import SimpleForm from './SimpleForm'

const App = props => {
  return (
    <div className="App">
      <header className="App-header">
        <SimpleForm {...props} />
      </header>
    </div>
  );
}

export default App;

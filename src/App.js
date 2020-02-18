import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Board'

function App(props) {
  let [data, setData] = React.useState(props.data);

  React.useEffect(()=>{
    window.addEventListener("message", (msg) => {
      if (msg.data && msg.data.board) {
          setData(data => ({...msg.data}));
      }
    }, false);    
  },[]);

  if (!data) {
    return null;
  }

  console.log('rendering app...', data.messages && data.messages.length);

  return (
    <Board data={data.board} />
  );
}

export default App;

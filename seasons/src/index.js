import React from 'react';
// import  ReactDOM  from 'react-dom';
import {createRoot} from 'react-dom/client'

class APP extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );

    return <div>Latitude: </div>;
  }
}

// ReactDOM.render(<App />, document.querySelector('#root'));
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<APP />)
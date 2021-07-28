import React from 'react'
import video from './video/video.mp4';
import './App.css';
import Screen from './video/Screen';

export const App = () => {
  return  (
    <div className="banner">
      <video autoPlay muted loop >
        <source src={video}  type="video/mp4"/>
      </video>
    <div className="content">
      <h1>Kishan</h1>
      <Screen />
    </div>  
    </div>
  )
}
export default App;
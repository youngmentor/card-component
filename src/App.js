import React from 'react'
import Card from './components/Card';
import data from "./components/data";
import "./components/Card.css"
import './App.css'

function App ()  {
  return (
    <div className='app'>
      {
      data.map((item) =>    
      <div className='row'>
       <Card bg={item.bg} largeText={item.largeText} smallText={item.smallText} eval={item.eval} percent={item.percent} /> 
      </div>)}
  
    </div>
  )
}


export default App


  //  <div className='card-holder'>
  //       <div className='card-right' style={{backgroundColor: item.bg}}>
  //           <div className='image-holder'></div>
  //       </div>
  //       <div className='card-left'>
  //           <div className='left-top'>
  //               <h3>{item.largeText}</h3>
  //           </div>
  //           <div className='left-middle'>
  //               <p>{item.smallText}</p>
  //           </div>
  //           <div className='left-bottom'>
  //               <div className='bottom-right'>
  //                   <div className='ash-box'></div>
  //                   <div className='ash-box'></div>
  //                  { item.eval && <div className="ash-box"></div>}
  //               </div>
  //               <div className='bottom-left'>{item.percent}</div>
  //           </div>
  //       </div>
  //    </div>   
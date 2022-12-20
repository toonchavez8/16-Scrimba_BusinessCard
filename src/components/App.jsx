import React from 'react'
import ProfileImg from "./ProfileImg"
import CardBody from "./CardBody"
import CardFooter from "./CardFooter"
import "../css/App.css"



function App() {
  return (
    <main className="App">
      <div className="cardWrapper">
        <ProfileImg />
        <CardBody />
        <CardFooter />
      </div>
    </main>
  )
}

export default App
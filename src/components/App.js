import React from 'react'
import './../componentsStyles/App.css'
import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'



class App extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <MainContent />
        <Footer />
      </div>
    )
  }
}

export default App;

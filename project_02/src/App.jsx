import { useState } from 'react'

import './App.css'
import Navigation from './components/Navigation/Navigation'
import ContactHeader from './components/Navigation/ContactHeader/ContactHeader'

function App() {

  return (
    <div>
      <Navigation />
      <ContactHeader />
    </div>
  )
}

export default App

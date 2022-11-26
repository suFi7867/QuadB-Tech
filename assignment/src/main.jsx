import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { AppContextProvider } from './context/AppContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <AppContextProvider>
           <BrowserRouter>
        <App />
      </BrowserRouter>
      </AppContextProvider> 
  </ChakraProvider>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/main/App'
import './app/styles/index.css'
import { Provider } from 'react-redux'

import { store } from './app/store/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)

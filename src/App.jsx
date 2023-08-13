import './App.css'
import Layout from './layout/Layout'
import AppProvider from './provider/AppProvider'

function App() {
  return (
    <AppProvider>
      <Layout />
    </AppProvider>
  )
}

export default App

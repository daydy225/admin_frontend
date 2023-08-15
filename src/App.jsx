import './App.css'
import Loader from './components/Loader'
import AppProvider from './provider/AppProvider'
import { Suspense, lazy } from 'react'
const Layout = lazy(() => import('./layout/Layout'))

function App() {
  return (
    <AppProvider>
      <Suspense fallback={<Loader />}>
        <Layout />
      </Suspense>
    </AppProvider>
  )
}

export default App

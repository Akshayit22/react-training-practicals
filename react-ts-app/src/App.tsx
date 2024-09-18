import './App.css'
// import Posts from './Component/Posts'
// import Task from './Component/Task'
// import CounterUseRef from './Concepts/CounterUseRef'
import { lazy, Suspense } from 'react'

const Posts = lazy(() => new Promise((resolve) => {
  setTimeout (() => {
    resolve(import('./Component/Posts'))
  }, 2000);
  }) );

function App() {

  return (
    <>
      {/* <Task/> */}
      <Suspense fallback={<h1>Loading ...</h1>}>
          <Posts/>
      </Suspense>
      
      {/* <CounterUseRef/> */}
    </>
  )
}

export default App

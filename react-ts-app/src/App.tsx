import { Route, Routes } from 'react-router-dom';
import './App.css'
import { lazy, Suspense } from 'react'
import Home from './Pages/Home';

const Posts = lazy(() => new Promise((resolve) => {
  setTimeout (() => {
    resolve(import('./Component/Posts'))
  }, 500);
  }) );

const CounterUseRef = lazy(() => new Promise((resolve) => {
  setTimeout (() => {
    resolve(import('./Concepts/CounterUseRef'))
  }, 500);
  }) );

const Task = lazy(() => new Promise((resolve) => {
  setTimeout (() => {
    resolve(import('./Component/Task'))
  }, 500);
  }) );

const ItemManager = lazy(() => new Promise((resolve) => {
  setTimeout (() => {
    resolve(import('./Dynamic_Item_Manager/ItemManager'))
  }, 500);
}) );




function App() {

  return (
    <>

    <Routes>
        <Route path="/" element={
          <Suspense fallback={<h1>Page Loading ...</h1>}>
              <Home/>
          </Suspense>
          } 
        />

        <Route path="/Posts" element={
          <Suspense fallback={<h1>Page Loading ...</h1>}>
              <Posts/>
          </Suspense>
          } 
        />

        <Route path="/Task" element={
          <Suspense fallback={<h1>Page Loading ...</h1>}>
              <Task/>
          </Suspense>
          }
        />

        <Route path="/ItemManager" element={
          <Suspense fallback={<h1>Page Loading ...</h1>}>
              <ItemManager/>
          </Suspense>
          }
        />

        <Route path="/CouterUseRef" element={
          <Suspense fallback={<h1>Page Loading ...</h1>}>
              <CounterUseRef/>
          </Suspense>
          } 
        />

        <Route path="*" element={<h2>Page Not Found...</h2>}/>
		</Routes>
    </>
  )
}

export default App

import { Route, Routes } from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";
import Home from "./Pages/Home";

const Posts = lazy(() => import("./Component/Posts"));
const CounterUseRef = lazy(() => import("./Concepts/CounterUseRef"));
const Task = lazy(() => import("./Component/Task"));
const ItemManager = lazy(() => import("./Dynamic_Item_Manager/ItemManager"));

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<h1>Page Loading ...</h1>}>
              <Home />
            </Suspense>
          }
        />

        <Route
          path="/Posts"
          element={
            <Suspense fallback={<h1>Page Loading ...</h1>}>
              <Posts />
            </Suspense>
          }
        />

        <Route
          path="/Task"
          element={
            <Suspense fallback={<h1>Page Loading ...</h1>}>
              <Task />
            </Suspense>
          }
        />

        <Route
          path="/ItemManager"
          element={
            <Suspense fallback={<h1>Page Loading ...</h1>}>
              <ItemManager />
            </Suspense>
          }
        />

        <Route
          path="/CouterUseRef"
          element={
            <Suspense fallback={<h1>Page Loading ...</h1>}>
              <CounterUseRef />
            </Suspense>
          }
        />

        <Route path="*" element={<h2>Page Not Found...</h2>} />
      </Routes>
    </>
  );
}

export default App;

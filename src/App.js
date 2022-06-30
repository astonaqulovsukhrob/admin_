import React, { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
const Loading = lazy(() => import("./Components/Loading/Loading"));
const MainPage = lazy(() => import("./page/MainPage/MainPage"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <MainPage />
    </Suspense>
  );
}

export default App;

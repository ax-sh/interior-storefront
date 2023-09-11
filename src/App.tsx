import "./App.css";
import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import routes from "~react-pages";
import { SideBar } from "./SideBar.tsx";

function Loader() {
  return <p>Loading...</p>;
}

function App() {
  return (
    <div className={"min-h-screen bg-blue-400 flex"}>
      <SideBar />
      <main className={"bg-red-400 grow"}>
        <Suspense fallback={<Loader />}>{useRoutes(routes)}</Suspense>
      </main>
    </div>
  );
}

export default App;

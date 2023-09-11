import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import routes from "~react-pages";
import { SideBar } from "./ui/side-bar.tsx";
import { Loader } from "./ui/loader.tsx";

function App() {
  return (
    <div className={"min-h-screen flex"}>
      <SideBar />
      <main className={"grow p-10"}>
        <Suspense fallback={<Loader />}>{useRoutes(routes)}</Suspense>
      </main>
    </div>
  );
}

export default App;

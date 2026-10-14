import { HashRouter, Route, Routes } from "react-router-dom";
import { PageShell } from "./components/PageShell";
import { ExperimentWorkspace } from "./pages/ExperimentWorkspace";
import { Experiments } from "./pages/Experiments";
import { Home } from "./pages/Home";
import { Modules } from "./pages/Modules";
import { NotFound } from "./pages/NotFound";
import { Tools } from "./pages/Tools";
import "./styles/globals.css";

function RoutedPages() {
  return (
    <PageShell>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modules" element={<Modules />} />
        <Route path="/modules/:moduleId" element={<Modules />} />
        <Route path="/experiments" element={<Experiments />} />
        <Route path="/experiments/:expId" element={<ExperimentWorkspace />} />
        <Route path="/experiments/:expId/:subId" element={<ExperimentWorkspace />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/tools/:toolId" element={<Tools />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PageShell>
  );
}

export default function App() {
  return (
    <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <RoutedPages />
    </HashRouter>
  );
}

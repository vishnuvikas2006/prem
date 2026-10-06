import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageShell } from "./components/PageShell";
import { ExperimentPage } from "./pages/ExperimentPage";
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
        <Route path="/experiments" element={<Experiments />} />
        <Route path="/experiments/4" element={<ExperimentPage experimentId={4} />} />
        <Route path="/experiments/5" element={<ExperimentPage experimentId={5} />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PageShell>
  );
}

export default function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <RoutedPages />
    </BrowserRouter>
  );
}

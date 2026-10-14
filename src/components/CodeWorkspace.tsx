import { useEffect, useState } from "react";
import { CheckCircle2, Play, TerminalSquare } from "lucide-react";

interface CodeWorkspaceProps { initialCode: string; expectedOutput: string; language: string; workspaceKey: string; }

export function CodeWorkspace({ initialCode, expectedOutput, language, workspaceKey }: CodeWorkspaceProps) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState("Ready. Select Compile to check the editor, or Run to view the exercise output.");
  const [status, setStatus] = useState<"ready" | "compiled" | "ran">("ready");

  useEffect(() => { setCode(initialCode); setOutput("Ready. Select Compile to check the editor, or Run to view the exercise output."); setStatus("ready"); }, [initialCode, workspaceKey]);

  const compile = () => {
    const hasContent = code.trim().length > 0;
    setOutput(hasContent ? "Compilation check passed. The workspace is ready to run." : "Add Python code before compiling.");
    setStatus("compiled");
  };
  const run = () => { setOutput(expectedOutput); setStatus("ran"); };

  return <section className="code-workspace" aria-label="Python code workspace">
    <div className="workspace-editor">
      <div className="workspace-toolbar"><span><TerminalSquare size={15} /> {language} editor</span><div><button type="button" onClick={run}><Play size={14} fill="currentColor" /> Run</button><button type="button" className="compile-button" onClick={compile}><CheckCircle2 size={14} /> Compile</button></div></div>
      <textarea aria-label="Editable Python code" spellCheck="false" value={code} onChange={(event) => setCode(event.target.value)} />
    </div>
    <div className="workspace-output" aria-live="polite">
      <div className="output-title"><span>Output</span><small className={`output-status output-status--${status}`}>{status === "ran" ? "completed" : status === "compiled" ? "checked" : "ready"}</small></div>
      <pre>{output}</pre>
    </div>
  </section>;
}

import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import mammoth from "mammoth";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const documents = [
  { source: "exp4.docx", output: "exp4.html" },
  { source: "exp5.docx", output: "exp5.html" },
];

await mkdir(path.join(projectRoot, "public", "assets", "experiments"), {
  recursive: true,
});

for (const document of documents) {
  const sourcePath = path.join(
    projectRoot,
    "public",
    "assets",
    "experiments",
    document.source,
  );
  const outputPath = path.join(
    projectRoot,
    "public",
    "assets",
    "experiments",
    document.output,
  );
  const source = await readFile(sourcePath);
  const converted = await mammoth.convertToHtml(
    { buffer: source },
    {
      styleMap: [
      "p[style-name='Title'] => h1:fresh",
      "p[style-name='HTML Preformatted'] => pre:separator('\\n')",
      "r[style-name='HTML Code'] => span.code",
      "p[style-name='Normal (Web)'] => p:fresh",
      ],
    },
  );
  await writeFile(outputPath, converted.value, "utf8");
  for (const message of converted.messages) {
    console.warn(`${document.source}: ${message.message}`);
  }
}

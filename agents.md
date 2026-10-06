You are an expert full-stack TypeScript/Node.js developer and UI engineer.

Build a complete, polished student Data Science Laboratory portfolio website based EXACTLY on the visual style of the reference screenshot I have provided.

IMPORTANT:
- Do not create a generic dashboard.
- Reproduce the visual language, spacing, colors, layout, typography, cards, curved sections, borders and overall premium academic-portfolio appearance of the reference screenshot.
- The website must be fully responsive.
- Use TypeScript.
- Use Node.js.
- Use npm.
- Use a modern React-based frontend.
- Prefer Vite + React + TypeScript if starting from scratch.
- Do NOT use JavaScript where TypeScript can be used.
- The project must run with:
    npm install
    npm run dev
- Make sure there are no TypeScript errors.
- Make sure there are no broken image paths.
- Make all navigation functional.

==================================================
1. REFERENCE DESIGN
==================================================

Use the LAST PROVIDED IMAGE as the PRIMARY UI DESIGN REFERENCE.

The last image shows the desired website design.

The website should have:

- Dark maroon/burgundy header
- MBU branding on the left
- Large centered title:
  DATA SCIENCE LABORATORY
- Subject code underneath:
  SUBJECT CODE: 24102A0301
- Navigation on the right:
  Home
  Modules
  Experiments
  Tools
- Active navigation item should have a gold underline.
- Cream/off-white page background
- Maroon headings
- Elegant serif typography for major headings
- Clean academic portfolio appearance
- Rounded bordered cards
- Circular maroon icons
- Gold/maroon accent lines
- Large curved maroon section separators
- Subtle campus background image
- Responsive mobile layout
- Footer with GitHub and LinkedIn buttons

Do not redesign this into a completely different style.

The goal is to reproduce the reference screenshot as closely as possible.

==================================================
2. ASSETS PROVIDED
==================================================

I provided four images.

Image 1:
The MBU/campus photograph.

USE THIS IMAGE AS THE MAIN HERO/BACKGROUND IMAGE.

Do NOT use an online random university image.

Image 2:
Student portrait.

USE THIS IMAGE AS THE STUDENT PROFILE PHOTO.

Do NOT use the placeholder profile icon shown in the reference screenshot.

Image 3:
MBU / Mohan Babu University logo.

USE THIS AS THE WEBSITE LOGO.

Image 4:
The reference website screenshot.

USE THIS ONLY AS THE DESIGN/STYLE REFERENCE.

Do not display the reference screenshot itself inside the website.

==================================================
3. ASSET MANAGEMENT
==================================================

Create a clean asset structure:

public/
  assets/
    campus-bg.jpg
    profile.jpg
    mbu-logo.png
    experiments/
      exp4.docx
      exp5.docx

If the provided images are already available in the project, copy/use them.

If Codex cannot directly copy the uploaded images into the project, create:

src/config/upload.ts

with this structure:

export const ASSETS = {
  campusBackground:
    "PASTE_CAMPUS_BACKGROUND_IMAGE_URL_HERE",

  profile:
    "PASTE_PROFILE_IMAGE_URL_HERE",

  mbuLogo:
    "PASTE_MBU_LOGO_IMAGE_URL_HERE",
};

Then all components must import the image paths from this single file.

Example:

import { ASSETS } from "./config/upload";

<img src={ASSETS.profile} />

Do NOT hardcode image URLs in multiple components.

I should only need to edit upload.ts if I want to replace an image.

If local files are used instead, configure upload.ts like:

export const ASSETS = {
  campusBackground: "/assets/campus-bg.jpg",
  profile: "/assets/profile.jpg",
  mbuLogo: "/assets/mbu-logo.png",
};

==================================================
4. STUDENT INFORMATION
==================================================

Use the following exact student information:

Name:
R.Prem Kumar

Roll Number:
24102A030106

Section:
DS-2

Professor Name:
Bosubabu Garu

College Name:
Geethanjali Institute of Science and Technology

Subject:
Data Science Laboratory

Subject Code:
24102A0301

The hero page should display:

STUDENT PORTFOLIO

R.Prem Kumar

Data | Analysis | Insights | Impact

Then display the student details in a clean two-column label/value layout.

==================================================
5. HEADER
==================================================

Create a header matching the reference image.

Left:
MBU logo

Center:
DATA SCIENCE LABORATORY

Below it:
SUBJECT CODE: 24102A0301

Right:
Home
Modules
Experiments
Tools

Desktop:
Keep these elements in a single elegant header.

Mobile:
Collapse navigation into a hamburger menu.

Header background:
deep maroon/burgundy.

Use the MBU logo provided by the user.

==================================================
6. HOME PAGE
==================================================

Create a Home page visually matching the reference.

Hero section:

Use the FIRST PROVIDED IMAGE as a full-width background.

Apply a subtle cream/white translucent overlay so the text remains readable.

Do NOT excessively darken the campus image.

The hero should contain:

STUDENT PORTFOLIO

R.Prem Kumar

Data | Analysis | Insights | Impact

Student information:

Name              : R.Prem Kumar
Roll Number       : 24102A030106
Section            : DS-2
Professor Name     : Bosubabu Garu
College Name      : Geethanjali Institute of Science and Technology

On the right side:
Display the SECOND PROVIDED IMAGE as the student profile image.

The profile photo should be inside a rounded rectangular academic-style frame similar to the reference screenshot.

Under the image display:

R.Prem Kumar

Use a handwritten/script-style font if available, but keep it elegant.

Do NOT use the generic user placeholder icon.

==================================================
7. HOME PAGE CARDS
==================================================

Under the hero create three large cards:

1. Modules
2. Experiments
3. Tools

Use the same visual style as the reference screenshot.

Each card should have:

- circular maroon icon
- title
- short description
- arrow
- subtle border
- rounded corners
- hover animation

Modules card:

Title:
Modules

Description:
View the lab modules and concepts.

Experiments card:

Title:
Experiments

Description:
Explore the hands-on experiments.

Tools card:

Title:
Tools

Description:
Tools and technologies used in the lab.

Clicking each card must navigate to its corresponding section/page.

==================================================
8. MODULES
==================================================

Create a Modules page.

Keep the same visual theme.

Create module cards relevant to the Data Science Laboratory.

At minimum include:

Module 1:
Data Wrangling

Module 2:
Data Visualization

For Data Wrangling explain/include:

- Hierarchical Indexing
- Partial Indexing
- Stack
- Unstack
- Merge
- combine_first

The supplied Experiment 4 document specifically covers hierarchical indexing, stack/unstack, merging DataFrames using the index, and combine_first. Use the document's terminology and examples rather than inventing unrelated material.

For Data Visualization include:

- Matplotlib
- Seaborn
- Line Plot
- Bar Plot
- Stacked Bar Plot
- Histogram
- Density Plot
- Scatter Plot
- Box Plot

The supplied Experiment 5 document covers these visualization topics. Preserve its terminology.

==================================================
9. EXPERIMENTS PAGE
==================================================

THIS IS VERY IMPORTANT.

When the user clicks:

Experiments

show an Experiments page.

Create two main experiment cards:

Experiment 4
Data Wrangling

Experiment 5
Data Visualization with Matplotlib and Seaborn

The two uploaded DOCX files are the source material.

Map them as follows:

Experiment 4:
Use the first uploaded DOCX:
Data Wrangling document.

Experiment 5:
Use the second uploaded DOCX:
Data Visualization with Matplotlib and Seaborn document.

Do NOT merge the two documents.

==================================================
10. EXPERIMENT 4
==================================================

When the user clicks:

Experiment 4

open a dedicated Experiment 4 page.

Title:

EXPERIMENT 4

DATA WRANGLING

Display the document content in a clean, readable academic format.

The first document contains:

A. Hierarchical indexing

It explains creating a Pandas Series with hierarchical/multi-level indexing using lists/arrays and selecting data using outer and inner levels.

Use the supplied document content.

It includes examples such as:

pd.MultiIndex.from_arrays(arrays, names=None)

pd.Series(data, index=multi_index)

series.loc['Outer_Level']

series.loc[('Outer_Level', 'Inner_Level')]

It also contains the Engineering/CSE/ECE and Science/Physics/Chemistry example.

Then display:

B. Stack and Unstack

Explain/use the supplied document's:

DataFrame.unstack(level=-1)

Series.unstack(level=-1)

DataFrame.stack()

Series.stack()

Show the supplied program and output.

Then display:

C. Merge and Combine

Use the supplied examples involving:

pd.merge(
    df1,
    df2,
    left_index=True,
    right_index=True,
    how='outer'
)

and:

df1.combine_first(df2)

Preserve the source document's explanation that combine_first fills missing values in the first DataFrame using corresponding values from the second DataFrame.

Make code blocks beautifully styled.

Add syntax highlighting.

Add copy buttons to code blocks.

Do not alter the actual code unnecessarily.

==================================================
11. EXPERIMENT 5
==================================================

When the user clicks:

Experiment 5

open a dedicated Experiment 5 page.

Title:

EXPERIMENT 5

DATA VISUALIZATION WITH MATPLOTLIB AND SEABORN

Use the second supplied DOCX as the source.

The document covers:

- Online dataset processing
- Line Plot
- Bar Plot
- Grouped Bar Plot
- Stacked Bar Plot
- Histogram
- Density Plot
- Scatter Plot
- Box Plot

It uses the online Iris dataset:

https://raw.githubusercontent.com/mwaskom/seaborn-data/master/iris.csv

It uses:

Pandas
Matplotlib
Seaborn

and Python/Jupyter/Google Colab/Python IDE.

Preserve the document's examples.

For example, the Iris experiment contains:

import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

url = "https://raw.githubusercontent.com/mwaskom/seaborn-data/master/iris.csv"

df = pd.read_csv(url)

Then display the examples for:

1. Matplotlib Line Plot
2. Seaborn Scatter Plot
3. Seaborn Histogram
4. Seaborn Box Plot
5. Seaborn Pair Plot

Then include the additional sections from the document:

Line Plot with:
- title
- axis labels
- ticks
- tick labels
- annotations
- save to file

Grouped Bar Plot

Stacked Bar Plot

Histogram

Density Plot

Scatter Plot

Correlation coefficient

Box Plot

Preserve the supplied source terminology and code.

==================================================
12. DOCUMENT PRESENTATION
==================================================

Do NOT simply put a raw DOCX download link and call the experiment complete.

The content must be readable directly in the browser.

Preferred implementation:

Use a server-side DOCX-to-HTML conversion library such as:

mammoth

or another reliable TypeScript-compatible DOCX renderer.

If necessary, create a preprocessing script that converts the DOCX documents to HTML/JSON at build time.

Alternative acceptable implementation:

Extract the DOCX content into structured TypeScript data and render:

- headings
- paragraphs
- lists
- code blocks
- tables
- output sections

inside the React UI.

The user must be able to read the experiments directly on the website.

Also provide a small "Download Experiment" button if practical.

==================================================
13. EXPERIMENT NAVIGATION
==================================================

The behavior must be:

Home
   |
   +--> Modules
   |
   +--> Experiments
          |
          +--> Experiment 4
          |      |
          |      +--> Open full Experiment 4
          |
          +--> Experiment 5
                 |
                 +--> Open full Experiment 5
   |
   +--> Tools

Clicking Experiment 4 must NEVER open Experiment 5.

Clicking Experiment 5 must NEVER open Experiment 4.

Use React Router.

Suggested routes:

/
 /modules
 /experiments
 /experiments/4
 /experiments/5
 /tools

Navigation must work with browser refresh.

==================================================
14. TOOLS PAGE
==================================================

The Tools page must list the actual technologies/tools used in the supplied laboratory material.

At minimum include:

Python
Pandas
Matplotlib
Seaborn
Jupyter Notebook
Google Colab
Python IDE
NumPy

Also mention:

Iris Dataset / Online CSV Dataset

Use the supplied Experiment 5 document as the source for the tools.

The supplied document explicitly lists:

Python 3.x
Pandas
Matplotlib
Seaborn
Jupyter Notebook / Google Colab / Python IDE

and uses an online Iris CSV dataset.

The Data Wrangling document also uses:

Pandas
NumPy

Therefore show these in the Tools section.

Each tool should be a visually attractive card.

For each tool include:

- name
- icon
- short purpose
- optional official website link

Do not claim technologies were used if they are not supported by the supplied documents.

==================================================
15. FOOTER
==================================================

Create a dark maroon footer matching the reference screenshot.

Include:

GitHub button
LinkedIn button

Use icons.

Because the actual URLs have not been provided, define them in a single config file:

src/config/site.ts

Example:

export const SITE_CONFIG = {
  githubUrl: "#",
  linkedinUrl: "#",
};

Make them easy to replace later.

Do not invent personal GitHub or LinkedIn URLs.

==================================================
16. DESIGN SYSTEM
==================================================

Use colors close to the screenshot:

Primary:
deep burgundy / maroon

Secondary:
cream / ivory

Accent:
gold

Text:
dark charcoal

Use CSS variables:

:root {
  --maroon: #6f0015;
  --deep-maroon: #50000f;
  --cream: #f8f1e5;
  --ivory: #fffaf1;
  --gold: #c99a3d;
  --text: #2d2926;
}

Adjust these values if needed to visually match the screenshot.

Use elegant serif typography for major academic headings.

Use a readable sans-serif font for navigation and body content.

Possible font combination:

Playfair Display
+
Inter

or another visually similar combination.

==================================================
17. BACKGROUND DESIGN
==================================================

The Home page should reproduce the screenshot's visual composition:

Top:
maroon header

Middle:
large cream hero section with campus photograph

Student information:
left

Student profile:
right

Then:
large curved maroon separator

Then:
three cards

Then:
another curved/angled section

Then:
maroon footer

Create the curved separators using CSS pseudo-elements or SVG.

Do NOT simply use straight horizontal lines.

==================================================
18. RESPONSIVE DESIGN
==================================================

Desktop:
Match the screenshot closely.

Tablet:
Cards should become 2 columns where appropriate.

Mobile:
Everything becomes one column.

Header navigation becomes a hamburger menu.

Student profile moves below student information.

Experiment content becomes full width.

Code blocks must horizontally scroll instead of breaking the page.

No horizontal overflow on the overall page.

==================================================
19. COMPONENT ARCHITECTURE
==================================================

Use reusable components.

Suggested structure:

src/
  components/
    Header.tsx
    Footer.tsx
    Hero.tsx
    StudentProfile.tsx
    FeatureCard.tsx
    ModuleCard.tsx
    ExperimentCard.tsx
    ToolCard.tsx
    CodeBlock.tsx
    SectionTitle.tsx
    CurvedDivider.tsx

  pages/
    Home.tsx
    Modules.tsx
    Experiments.tsx
    Experiment4.tsx
    Experiment5.tsx
    Tools.tsx
    NotFound.tsx

  data/
    experiments.ts
    modules.ts
    tools.ts

  config/
    upload.ts
    site.ts

  App.tsx
  main.tsx
  styles/
    globals.css

Keep data separate from presentation.

==================================================
20. TYPESCRIPT TYPES
==================================================

Create proper TypeScript interfaces.

For example:

export interface Experiment {
  id: number;
  title: string;
  description: string;
  sourceFile?: string;
  route: string;
}

export interface Tool {
  name: string;
  description: string;
  icon: string;
}

Do not use `any` unless absolutely necessary.

==================================================
21. ICONS
==================================================

Use a modern icon library such as:

lucide-react

Use icons for:

- Home
- Modules/book
- Experiments/flask
- Tools/settings
- Python
- Data
- GitHub
- LinkedIn
- Profile
- College
- Roll number
- Professor

Keep icons visually consistent.

==================================================
22. ANIMATIONS
==================================================

Use subtle animations only.

Examples:

- cards lift slightly on hover
- navigation underline transition
- page sections fade/slide into view
- buttons have subtle hover transitions
- experiment cards have a small hover elevation

Do NOT make the website flashy.

It should look like a professional university student portfolio.

==================================================
23. ACCESSIBILITY
==================================================

Add:

alt text for all images

semantic headings

accessible navigation

button labels

keyboard-friendly interactions

sufficient contrast

Do not rely only on color to communicate information.

==================================================
24. IMPORTANT IMAGE REQUIREMENT
==================================================

The student's actual portrait must be used.

Do NOT use:

- generic user icon
- generated person
- random profile photo
- placeholder avatar

Use the provided student portrait.

The campus image must also be the first supplied image.

The MBU logo must be the supplied MBU logo.

==================================================
25. IMPORTANT CONTENT REQUIREMENT
==================================================

Do not fabricate experiment content.

Use the two supplied DOCX files as the source material.

Experiment 4 = Data Wrangling document.

Experiment 5 = Data Visualization with Matplotlib and Seaborn document.

Preserve the original structure, terminology, code examples and explanations as much as practical.

Experiment 4 source includes hierarchical indexing, stack/unstack, merge and combine_first. :contentReference[oaicite:2]{index=2}

Experiment 5 source includes online dataset visualization using Matplotlib and Seaborn and the line/bar/histogram/scatter/box plot topics. :contentReference[oaicite:3]{index=3}

==================================================
26. DOCX FILE HANDLING
==================================================

Put the two files in:

public/assets/experiments/

Use:

public/assets/experiments/exp4.docx
public/assets/experiments/exp5.docx

If you rename them, update all references.

Do not expose the uploaded files as random filenames.

Use clean application names.

Experiment 4:
Data Wrangling

Experiment 5:
Data Visualization with Matplotlib and Seaborn

If browser-side DOCX rendering is unreliable, convert them to HTML during development/build rather than depending on browser-native DOCX rendering.

==================================================
27. OPTIONAL DOWNLOAD
==================================================

On Experiment 4 and Experiment 5 pages add:

Download Experiment 4
Download Experiment 5

buttons.

They should download the corresponding DOCX file.

==================================================
28. HOME PAGE CARD NAVIGATION
==================================================

Modules card:
navigate to /modules

Experiments card:
navigate to /experiments

Tools card:
navigate to /tools

Header navigation must use the same routes.

==================================================
29. ACTIVE NAVIGATION
==================================================

Use React Router's NavLink.

Active navigation should display a gold underline.

For example:

Home active:
gold underline under Home

Experiments active:
gold underline under Experiments

Tools active:
gold underline under Tools

==================================================
30. ERROR HANDLING
==================================================

If an image URL is missing, show a clean fallback instead of broken image icon.

If a DOCX cannot be rendered, show:

"Experiment document preview unavailable."

and provide:

"Download Experiment"

Do not crash the entire application.

==================================================
31. README
==================================================

Create a README.md containing:

Project setup

npm install

npm run dev

Build:

npm run build

Preview:

npm run preview

Explain where to replace:

- campus image
- profile image
- MBU logo
- Experiment 4 document
- Experiment 5 document
- GitHub URL
- LinkedIn URL

==================================================
32. FINAL QUALITY CHECK
==================================================

Before finishing:

1. Run npm install.
2. Run TypeScript checks.
3. Run npm run build.
4. Fix all TypeScript errors.
5. Fix all missing imports.
6. Fix all broken image paths.
7. Test all routes.
8. Test mobile responsiveness.
9. Test Home.
10. Test Modules.
11. Test Experiments.
12. Test Experiment 4.
13. Test Experiment 5.
14. Test Tools.
15. Test GitHub/LinkedIn buttons.
16. Test DOCX download buttons.
17. Make sure browser refresh works on nested routes.
18. Make sure no placeholder profile image remains.
19. Make sure the supplied campus image is used as the Home background.
20. Make sure the supplied MBU logo is used.
21. Make sure Experiment 4 and Experiment 5 are completely separate.

==================================================
33. MOST IMPORTANT VISUAL REQUIREMENT
==================================================

The LAST PROVIDED IMAGE is the visual reference.

Match its:

- header proportions
- maroon color
- cream background
- typography hierarchy
- card dimensions
- rounded corners
- icon circles
- spacing
- curved section separators
- footer
- overall academic luxury aesthetic

But replace the reference screenshot's placeholder profile icon with the actual supplied student portrait.

Replace its campus background with the supplied first image.

Replace the logo with the supplied MBU logo.

Replace the displayed student details with:

R.Prem Kumar
24102A030106
DS-2
Bosubabu Garu
Mohan babu university,tirupati

The final result should look like a polished real Data Science Laboratory student portfolio website, not a generic template.

==================================================
34. DELIVERABLE
==================================================

Return a complete working project.

Expected commands:

npm install
npm run dev

The project should start successfully and display the website.

Do not only provide snippets.

Implement all pages, routing, components, styling, assets/configuration, experiment rendering and responsive behavior.
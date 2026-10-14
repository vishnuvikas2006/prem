import type { LucideIcon } from "lucide-react";
import { BarChart3, BookOpen, Braces, ChartNoAxesCombined, Database, FileText, FlaskConical, Laptop, NotebookTabs, PanelsTopLeft, PieChart, Settings2 } from "lucide-react";

export const SUB_COUNT = 5;
const EXPERIMENT_STORAGE_KEY = "data-science-lab-experiments";

export interface StudentDetail { label: string; value: string; icon: LucideIcon; }
export interface PortfolioCard { title: string; description: string; route: string; icon: LucideIcon; }
export interface Module { id: string; number: string; title: string; description: string; topics: string[]; viewerText: string; theory: string[]; icon: LucideIcon; experimentRoute: string; }
export interface SubExperiment { id: string; title: string; aim: string; procedure: string[]; code: string; output: string; }
export interface Experiment {
  id: string; number: string; title: string; description: string; overview: string; tools: string[];
  difficulty: "Foundation" | "Intermediate" | "Advanced"; language: "python"; starterCode: string;
  expectedOutput: string; sourceFile?: string; thumbnail: Thumbnail; subExperiments: SubExperiment[];
}
export interface Tool { id: string; name: string; description: string; purpose: string; icon: LucideIcon; website?: string; }
export type Thumbnail = "table" | "line" | "dots" | "bars" | "tree" | "curve" | "cluster" | "text";

export const studentDetails: StudentDetail[] = [
  { label: "Name", value: "R.Prem Kumar", icon: BookOpen },
  { label: "Roll Number", value: "24102A030106", icon: NotebookTabs },
  { label: "Section", value: "DS-2", icon: PanelsTopLeft },
  { label: "Professor Name", value: "Bosubabu Garu", icon: FlaskConical },
  { label: "College Name", value: "Mohan Babu University, Tirupati", icon: Laptop },
];

export const portfolioCards: PortfolioCard[] = [
  { title: "Modules", description: "View the lab modules and concepts.", route: "/modules", icon: BookOpen },
  { title: "Experiments", description: "Explore the hands-on experiments.", route: "/experiments", icon: FlaskConical },
  { title: "Tools", description: "Tools and technologies used in the lab.", route: "/tools", icon: Settings2 },
];

export const modules: Module[] = [
  { id: "mod-01", number: "1", title: "Introduction to Data Science and Python", description: "Build core Python fluency and learn how data science transforms real-world questions into evidence.", viewerText: "Start with the data science workflow, Python syntax, variables, collections, functions, and introductory data thinking.", theory: ["Data science combines domain knowledge, programming, statistics, and communication to turn raw observations into useful decisions. A typical workflow frames a question, collects data, prepares it, analyses patterns, and presents a conclusion.", "Python is widely used because its readable syntax supports quick experimentation. Variables, lists, dictionaries, conditions, loops, and functions form the core language tools used throughout a data science notebook."], topics: ["Data science workflow", "Python basics", "Variables and types", "Lists and dictionaries", "Functions"], icon: BookOpen, experimentRoute: "/experiments/exp-04" },
  { id: "mod-02", number: "2", title: "Data Acquisition: Files, APIs and Databases", description: "Bring structured information into a notebook from local files, web APIs, and database-style sources.", viewerText: "Learn responsible acquisition patterns for CSV files, JSON responses, simple APIs, and tabular database records.", theory: ["Data acquisition is the process of obtaining information in a form suitable for analysis. CSV files are common for simple tabular data, while JSON is often returned by web services because it can represent nested information.", "An API provides a defined way for applications to request current data. Databases store related records in organised tables. In every case, source, permissions, dates, and collection method should be recorded so results can be trusted and reproduced."], topics: ["CSV files", "JSON records", "REST APIs", "Database tables", "Data provenance"], icon: Database, experimentRoute: "/experiments/exp-05" },
  { id: "mod-03", number: "3", title: "Data Cleaning and Transformation", description: "Resolve missing data, inconsistent values, and formats before deeper analysis or modelling.", viewerText: "Prepare analysis-ready data by inspecting quality, resolving missing values, standardising labels, and transforming columns.", theory: ["Real-world datasets often contain missing cells, duplicate rows, inconsistent spellings, or numbers stored as text. Cleaning means identifying these issues before they quietly distort a chart, summary, or model.", "Transformation changes data into a useful analytical form. Examples include parsing dates, standardising categories, creating a ratio column, or converting a wide table to long format. Each change should preserve the meaning of the original observation."], topics: ["Missing values", "Duplicate records", "Type conversion", "String cleanup", "Feature creation"], icon: Settings2, experimentRoute: "/experiments/exp-07" },
  { id: "mod-04", number: "4", title: "Hierarchical Indexing and Reshaping", description: "Organise multi-level data and switch clearly between long, wide, and grouped tabular views.", viewerText: "Apply hierarchical indexing, partial selection, stack, unstack, merging, and combine_first to related tables.", theory: ["Hierarchical indexing gives a Pandas Series or DataFrame more than one index level. It is helpful when a value belongs to a natural group and subgroup, such as a department inside a school. Partial indexing can then select a whole outer group or one exact pair of labels.", "Reshaping changes how the same information is arranged without changing its meaning. stack moves column levels into the index, while unstack moves index levels into columns. merge joins related tables, and combine_first fills missing values in the first table from the second."], topics: ["MultiIndex", "Partial indexing", "stack", "unstack", "DataFrame merging"], icon: PanelsTopLeft, experimentRoute: "/experiments/exp-04" },
  { id: "mod-05", number: "5", title: "Data Visualization", description: "Use thoughtful charts to find patterns and communicate evidence clearly to an audience.", viewerText: "Use Matplotlib and Seaborn to create line, bar, histogram, density, scatter, and box plots.", theory: ["Data visualization makes patterns easier to understand than a table of values alone. A good plot answers one question, labels its axes clearly, and uses an appropriate chart type for the kind of data being compared.", "Line plots show movement over an ordered scale, bars compare categories, histograms reveal distributions, and scatter plots reveal relationships between two numeric variables. Box plots summarise spread and possible outliers; Seaborn adds concise statistical visualisation tools to Matplotlib."], topics: ["Line plot", "Bar plot", "Histogram", "Scatter plot", "Box plot"], icon: ChartNoAxesCombined, experimentRoute: "/experiments/exp-05" },
];

interface SubSeed { title: string; aim: string; code: string; output: string; }
const makeSubs = (seeds: SubSeed[]): SubExperiment[] => seeds.map((seed, index) => ({
  id: String.fromCharCode(65 + index),
  ...seed,
  procedure: ["Read the aim and identify the required input data.", "Run the Python code in the workspace.", "Inspect the output and record one observation."],
}));
const python = "import pandas as pd\nimport matplotlib.pyplot as plt\nimport seaborn as sns\n";
const seeds = (topics: string[], prefix: string): SubSeed[] => topics.map((topic, index) => ({
  title: topic,
  aim: `${prefix} ${topic.toLowerCase()} using a small, reproducible Python example.`,
  code: `# ${topic}\nvalues = [12, 15, 14, 18, 21]\nprint('${topic}:', values[${index % 5}])`,
  output: `${topic}: ${[12, 15, 14, 18, 21][index % 5]}`,
}));

export const defaultExperiments: Experiment[] = [
  {
    id: "exp-04", number: "04", title: "Data Wrangling", description: "Reshape, join, and complete tabular data using reliable Pandas indexing techniques.",
    overview: "Practice the Data Wrangling techniques from the laboratory material: hierarchical indexing, reshaping with stack and unstack, index-based merging, and filling missing values with combine_first.",
    tools: ["Python", "Pandas", "NumPy"], difficulty: "Intermediate", language: "python", sourceFile: "exp4.docx", thumbnail: "table",
    starterCode: "import pandas as pd\n\nfirst = pd.DataFrame({'score': [82, 91]}, index=['CSE', 'ECE'])\nsecond = pd.DataFrame({'score': [78, 88]}, index=['ECE', 'MECH'])\nprint(first.combine_first(second))",
    expectedOutput: "      score\nCSE      82\nECE      91\nMECH     88",
    subExperiments: makeSubs([
      { title: "Hierarchical indexing", aim: "Create a Pandas Series with outer and inner index levels.", code: "arrays = [['Engineering', 'Engineering', 'Science'], ['CSE', 'ECE', 'Physics']]\nindex = pd.MultiIndex.from_arrays(arrays, names=['School', 'Department'])\nseries = pd.Series([92, 88, 95], index=index)\nprint(series)", output: "School       Department\nEngineering  CSE           92\n             ECE           88\nScience      Physics       95\ndtype: int64" },
      { title: "Partial indexing", aim: "Select values from a multi-level Series using outer and inner keys.", code: "print(series.loc['Engineering'])\nprint(series.loc[('Engineering', 'CSE')])", output: "Department\nCSE    92\nECE    88\ndtype: int64\n92" },
      { title: "Stack and unstack", aim: "Reshape hierarchical data between compact and tabular forms.", code: "frame = pd.DataFrame({'score': [92, 88]}, index=[['Engineering', 'Engineering'], ['CSE', 'ECE']])\nprint(frame.unstack())\nprint(frame.unstack().stack())", output: "               score\n                 CSE   ECE\nEngineering    92.0  88.0\nReshaped DataFrame returned." },
      { title: "Merge by index", aim: "Merge two DataFrames by index with an outer join.", code: "df1 = pd.DataFrame({'A': [1, 2]}, index=['x', 'y'])\ndf2 = pd.DataFrame({'B': [3, 4]}, index=['y', 'z'])\nprint(pd.merge(df1, df2, left_index=True, right_index=True, how='outer'))", output: "     A    B\nx  1.0  NaN\ny  2.0  3.0\nz  NaN  4.0" },
      { title: "combine_first", aim: "Fill missing values in the first DataFrame using corresponding second-frame values.", code: "df1 = pd.DataFrame({'score': [82, None]}, index=['CSE', 'ECE'])\ndf2 = pd.DataFrame({'score': [78, 88]}, index=['ECE', 'MECH'])\nprint(df1.combine_first(df2))", output: "      score\nCSE      82\nECE      78\nMECH     88" },
    ]),
  },
  {
    id: "exp-05", number: "05", title: "Data Visualization", description: "Visualize online Iris data using clear Matplotlib and Seaborn statistical plot examples.",
    overview: "Use the Iris online CSV dataset with Pandas, Matplotlib, and Seaborn. The five exercises introduce loading data, line plots, scatter plots, histograms, and box plots.",
    tools: ["Python", "Pandas", "Matplotlib", "Seaborn"], difficulty: "Foundation", language: "python", sourceFile: "exp5.docx", thumbnail: "line",
    starterCode: `${python}\nurl = 'https://raw.githubusercontent.com/mwaskom/seaborn-data/master/iris.csv'\ndf = pd.read_csv(url)\nprint(df.head(2))`,
    expectedOutput: "   sepal_length  sepal_width  petal_length  petal_width species\n0           5.1          3.5           1.4          0.2  setosa\n1           4.9          3.0           1.4          0.2  setosa",
    subExperiments: makeSubs([
      { title: "Online dataset processing", aim: "Load the Iris CSV dataset into a Pandas DataFrame.", code: `${python}\nurl = 'https://raw.githubusercontent.com/mwaskom/seaborn-data/master/iris.csv'\ndf = pd.read_csv(url)\nprint(df.shape)`, output: "(150, 5)" },
      { title: "Matplotlib line plot", aim: "Draw a labelled line plot for the first Iris measurements.", code: `${python}\nplt.plot(df.index[:10], df['sepal_length'][:10])\nplt.title('Sepal length')\nplt.xlabel('Sample')\nplt.show()`, output: "Line plot rendered: Sepal length across 10 samples." },
      { title: "Seaborn scatter plot", aim: "Compare sepal length and sepal width by species.", code: `${python}\nsns.scatterplot(data=df, x='sepal_length', y='sepal_width', hue='species')\nplt.show()`, output: "Scatter plot rendered with three species groups." },
      { title: "Seaborn histogram", aim: "Inspect the distribution of petal length values.", code: `${python}\nsns.histplot(data=df, x='petal_length', kde=True)\nplt.show()`, output: "Histogram and density curve rendered for petal_length." },
      { title: "Seaborn box plot", aim: "Compare petal width distributions across Iris species.", code: `${python}\nsns.boxplot(data=df, x='species', y='petal_width')\nplt.show()`, output: "Box plot rendered for petal_width by species." },
    ]),
  },
  {
    id: "exp-06", number: "06", title: "Time Series Analysis", description: "Explore trends, seasonal structure, rolling summaries, and forecasting-ready time-indexed observations.",
    overview: "Learn the foundations of working with time-indexed data, from parsing dates through resampling and rolling computations to simple trend interpretation.",
    tools: ["Python", "Pandas", "Matplotlib"], difficulty: "Intermediate", language: "python", thumbnail: "curve",
    starterCode: "dates = pd.date_range('2026-01-01', periods=5, freq='D')\nseries = pd.Series([12, 15, 14, 18, 21], index=dates)\nprint(series.rolling(3).mean())",
    expectedOutput: "2026-01-01          NaN\n2026-01-02          NaN\n2026-01-03    13.666667\n2026-01-04    15.666667\n2026-01-05    17.666667",
    subExperiments: makeSubs(seeds(["Date parsing", "Resampling", "Rolling mean", "Trend plot", "Seasonal grouping"], "Explore")),
  },
  {
    id: "exp-07", number: "07", title: "Exploratory Data Analysis", description: "Summarize distributions, missingness, outliers, and relationships before making modelling decisions.",
    overview: "Use compact summaries and visual checks to ask better questions about a dataset before selecting an analytical method.",
    tools: ["Python", "Pandas", "Seaborn"], difficulty: "Foundation", language: "python", thumbnail: "dots",
    starterCode: "df = pd.DataFrame({'marks': [68, 74, 82, 91, 95], 'hours': [2, 3, 4, 5, 6]})\nprint(df.describe())",
    expectedOutput: "           marks     hours\ncount   5.000000  5.000000\nmean   82.000000  4.000000\nstd    11.467345  1.581139",
    subExperiments: makeSubs(seeds(["Descriptive statistics", "Missing values", "Distribution", "Outlier review", "Relationship plot"], "Inspect")),
  },
  {
    id: "exp-08", number: "08", title: "Classification Models", description: "Prepare features, train a classifier, and inspect predictions with transparent evaluation metrics.",
    overview: "This experiment introduces supervised classification using a train/test split, a baseline model, predictions, and evaluation metrics.",
    tools: ["Python", "Pandas", "NumPy"], difficulty: "Intermediate", language: "python", thumbnail: "tree",
    starterCode: "from sklearn.tree import DecisionTreeClassifier\nX = [[1, 2], [2, 1], [3, 4], [4, 3]]\ny = [0, 0, 1, 1]\nmodel = DecisionTreeClassifier(random_state=7).fit(X, y)\nprint(model.predict([[3, 3]]))",
    expectedOutput: "[1]",
    subExperiments: makeSubs(seeds(["Feature selection", "Train test split", "Fit classifier", "Predictions", "Accuracy"], "Practice")),
  },
  {
    id: "exp-09", number: "09", title: "Regression Analysis", description: "Estimate continuous outcomes, inspect residuals, and interpret model fit using core regression measures.",
    overview: "Build an introductory regression workflow for a continuous target, then interpret predictions, errors, and the coefficient of determination.",
    tools: ["Python", "Pandas", "NumPy"], difficulty: "Intermediate", language: "python", thumbnail: "bars",
    starterCode: "from sklearn.linear_model import LinearRegression\nX = [[1], [2], [3], [4]]\ny = [52, 58, 65, 71]\nmodel = LinearRegression().fit(X, y)\nprint(round(model.predict([[5]])[0], 1))",
    expectedOutput: "77.5",
    subExperiments: makeSubs(seeds(["Target selection", "Fit regression", "Predict values", "Residuals", "R-squared"], "Practice")),
  },
  {
    id: "exp-10", number: "10", title: "Clustering Patterns", description: "Group observations without labels and interpret cluster centres through feature-space visual patterns.",
    overview: "Use unsupervised clustering to identify natural groupings, select a sensible number of clusters, and inspect the resulting centres.",
    tools: ["Python", "Pandas", "NumPy"], difficulty: "Advanced", language: "python", thumbnail: "cluster",
    starterCode: "from sklearn.cluster import KMeans\nX = [[1, 1], [1, 2], [8, 8], [9, 8]]\nmodel = KMeans(n_clusters=2, random_state=7, n_init=10).fit(X)\nprint(model.labels_)",
    expectedOutput: "[1 1 0 0]",
    subExperiments: makeSubs(seeds(["Feature scaling", "K-means fit", "Cluster labels", "Cluster centres", "Cluster plot"], "Explore")),
  },
  {
    id: "exp-11", number: "11", title: "Text Data Basics", description: "Clean short text, count terms, and explore simple document features for analysis.",
    overview: "Explore a small text-analysis workflow: normalise documents, tokenize terms, count vocabulary, and compare simple textual features.",
    tools: ["Python", "Pandas", "NumPy"], difficulty: "Foundation", language: "python", thumbnail: "text",
    starterCode: "text = 'Data science laboratory'\ntokens = text.lower().split()\nprint(tokens)\nprint(len(tokens))",
    expectedOutput: "['data', 'science', 'laboratory']\n3",
    subExperiments: makeSubs(seeds(["Text cleaning", "Tokenization", "Term frequency", "Document length", "Vocabulary"], "Explore")),
  },
];

function isExperimentArray(value: unknown): value is Experiment[] {
  return Array.isArray(value) && value.every((item) => typeof item === "object" && item !== null && "id" in item && "subExperiments" in item && Array.isArray(item.subExperiments) && item.subExperiments.length === SUB_COUNT);
}
export function loadExperiments(): Experiment[] {
  try { const saved = window.localStorage.getItem(EXPERIMENT_STORAGE_KEY); const parsed: unknown = saved ? JSON.parse(saved) : null; return isExperimentArray(parsed) ? parsed : defaultExperiments; } catch { return defaultExperiments; }
}
export function saveExperiments(experiments: Experiment[]): void { window.localStorage.setItem(EXPERIMENT_STORAGE_KEY, JSON.stringify(experiments)); }
export function resetExperiments(): void { window.localStorage.removeItem(EXPERIMENT_STORAGE_KEY); }

export const tools: Tool[] = [
  { id: "python", name: "Python 3.x", description: "The programming language used to write the lab programs.", purpose: "Write and execute analysis workflows.", icon: Braces, website: "https://www.python.org/" },
  { id: "pandas", name: "Pandas", description: "Series, DataFrames, online CSV loading, and data manipulation.", purpose: "Prepare, reshape, and analyse tabular data.", icon: Database, website: "https://pandas.pydata.org/" },
  { id: "numpy", name: "NumPy", description: "Numerical arrays and data used in the laboratory exercises.", purpose: "Perform efficient numerical operations.", icon: BarChart3, website: "https://numpy.org/" },
  { id: "matplotlib", name: "Matplotlib", description: "Line plots, bar charts, annotations, axes, and plot output.", purpose: "Create detailed static visualizations.", icon: ChartNoAxesCombined, website: "https://matplotlib.org/" },
  { id: "seaborn", name: "Seaborn", description: "Statistical scatter, histogram, density, box, and pair plots.", purpose: "Create expressive statistical graphics.", icon: PieChart, website: "https://seaborn.pydata.org/" },
  { id: "jupyter", name: "Jupyter Notebook", description: "A notebook environment named in the experiment requirements.", purpose: "Develop code and explanations together.", icon: NotebookTabs, website: "https://jupyter.org/" },
  { id: "colab", name: "Google Colab", description: "A hosted notebook option listed in the experiment requirements.", purpose: "Run notebooks in a browser.", icon: Laptop, website: "https://colab.research.google.com/" },
  { id: "ide", name: "Python IDE", description: "An IDE is listed as an environment for running programs.", purpose: "Edit and execute Python scripts locally.", icon: PanelsTopLeft },
  { id: "iris", name: "Iris Online CSV", description: "The seaborn-data Iris CSV used in online dataset visualization.", purpose: "Supply an accessible example dataset.", icon: FileText, website: "https://raw.githubusercontent.com/mwaskom/seaborn-data/master/iris.csv" },
];

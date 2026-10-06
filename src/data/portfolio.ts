import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  BookOpen,
  Braces,
  ChartNoAxesCombined,
  Database,
  FlaskConical,
  Laptop,
  NotebookTabs,
  PanelsTopLeft,
  PieChart,
  Settings2,
} from "lucide-react";

export interface StudentDetail {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface PortfolioCard {
  title: string;
  description: string;
  route: string;
  icon: LucideIcon;
}

export interface Module {
  number: string;
  title: string;
  description: string;
  topics: string[];
  icon: LucideIcon;
  experimentRoute: string;
}

export interface Experiment {
  id: number;
  title: string;
  description: string;
  sourceFile: string;
  route: string;
  icon: LucideIcon;
}

export interface Tool {
  name: string;
  description: string;
  icon: LucideIcon;
  website?: string;
}

export const studentDetails: StudentDetail[] = [
  { label: "Name", value: "R.Prem Kumar", icon: BookOpen },
  { label: "Roll Number", value: "24102A030106", icon: NotebookTabs },
  { label: "Section", value: "DS-2", icon: PanelsTopLeft },
  { label: "Professor Name", value: "Bosubabu Garu", icon: FlaskConical },
  {
    label: "College Name",
    value: "Mohan Babu University, Tirupati",
    icon: Laptop,
  },
];

export const portfolioCards: PortfolioCard[] = [
  {
    title: "Modules",
    description: "View the lab modules and concepts.",
    route: "/modules",
    icon: BookOpen,
  },
  {
    title: "Experiments",
    description: "Explore the hands-on experiments.",
    route: "/experiments",
    icon: FlaskConical,
  },
  {
    title: "Tools",
    description: "Tools and technologies used in the lab.",
    route: "/tools",
    icon: Settings2,
  },
];

export const modules: Module[] = [
  {
    number: "01",
    title: "Data Wrangling",
    description:
      "Work with hierarchical data, reshape tables, and combine DataFrames using the techniques in Experiment 4.",
    topics: [
      "Hierarchical indexing",
      "Partial indexing",
      "Stack and unstack",
      "Merge DataFrames by index",
      "combine_first",
    ],
    icon: Database,
    experimentRoute: "/experiments/4",
  },
  {
    number: "02",
    title: "Data Visualization",
    description:
      "Explore the Matplotlib and Seaborn plot types documented in Experiment 5.",
    topics: [
      "Matplotlib and Seaborn",
      "Line and bar plots",
      "Grouped and stacked bars",
      "Histogram and density plot",
      "Scatter and box plots",
    ],
    icon: ChartNoAxesCombined,
    experimentRoute: "/experiments/5",
  },
];

export const experiments: Experiment[] = [
  {
    id: 4,
    title: "Data Wrangling",
    description:
      "Hierarchical indexing, partial selection, stack and unstack, index-based merging, and combine_first.",
    sourceFile: "exp4.docx",
    route: "/experiments/4",
    icon: Database,
  },
  {
    id: 5,
    title: "Data Visualization with Matplotlib and Seaborn",
    description:
      "Process an online Iris dataset and explore the plotting examples and topics from the lab document.",
    sourceFile: "exp5.docx",
    route: "/experiments/5",
    icon: PieChart,
  },
];

export const tools: Tool[] = [
  {
    name: "Python 3.x",
    description: "The programming language used to write the lab programs.",
    icon: Braces,
    website: "https://www.python.org/",
  },
  {
    name: "Pandas",
    description: "Series, DataFrames, online CSV loading, and data manipulation.",
    icon: Database,
    website: "https://pandas.pydata.org/",
  },
  {
    name: "NumPy",
    description: "Numerical arrays and data used in the Data Wrangling material.",
    icon: BarChart3,
    website: "https://numpy.org/",
  },
  {
    name: "Matplotlib",
    description: "Line plots, bar charts, annotations, axes, and plot output.",
    icon: ChartNoAxesCombined,
    website: "https://matplotlib.org/",
  },
  {
    name: "Seaborn",
    description: "Statistical scatter, histogram, density, box, and pair plots.",
    icon: PieChart,
    website: "https://seaborn.pydata.org/",
  },
  {
    name: "Jupyter Notebook",
    description: "A notebook environment listed in the experiment requirements.",
    icon: NotebookTabs,
    website: "https://jupyter.org/",
  },
  {
    name: "Google Colab",
    description: "A hosted notebook option listed in the experiment requirements.",
    icon: Laptop,
    website: "https://colab.research.google.com/",
  },
  {
    name: "Python IDE",
    description: "An IDE is listed as an environment for running the programs.",
    icon: PanelsTopLeft,
  },
  {
    name: "Iris online CSV",
    description:
      "The seaborn-data Iris CSV used in the online dataset visualization example.",
    icon: FlaskConical,
    website: "https://raw.githubusercontent.com/mwaskom/seaborn-data/master/iris.csv",
  },
];

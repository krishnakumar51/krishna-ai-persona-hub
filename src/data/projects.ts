export interface Project {
  title: string;
  goal: string;
  development: string;
  features: string[];
  tags: string[];
  category: "deployed" | "significant" | "ml-dl" | "development";
  website?: string;
  github?: string;
  image?: string;
}

export const projects: Project[] = [
  // Deployed Projects
  {
    title: "AI Resume Analyser",
    goal: "Build an AI tool to analyze resumes for ATS-compatibility and provide actionable feedback to improve job-seeking outcomes.",
    development: "Leveraged Sonnet-4 LLM for scoring and feedback; built with React Router, Puter.js for storage and AI functionality for backend.",
    features: [
      "Section-wise feedback with improvement tips",
      "Keyword and impact analysis for better ATS matching", 
      "Rephrasing suggestions for weak resume lines"
    ],
    tags: ["React Router V7", "Puter.js", "Sonnet-4", "AI", "Tailwind-CSS", "ResumeReviewer", "SonnetModel", "React"],
    category: "deployed",
    website: "https://ai-resume-analyser-two.vercel.app/",
    github: "https://github.com/krishnakumar51/ai-resume-analyser",
    image: "/lovable-uploads/ai-resume-analyser.jpg"
  },

  // Significant AI & Agentic Projects
  {
    title: "Agentic Travel Planner",
    goal: "Build an AI‑powered assistant that generates end‑to‑end personalized trip itineraries with real‑time data and multi‑step reasoning.",
    development: "Orchestrated agents using LangGraph and Groq LLMs; integrated weather, place search, currency conversion, and expense tools; FastAPI backend; Streamlit frontend.",
    features: [
      "Interactive Mermaid‐diagram visualizations of decision graphs",
      "Markdown exportable plans with cost breakdowns & off‑beat suggestions",
      "Real‑time tool calls for weather, maps, currency"
    ],
    tags: ["LangGraph", "Groq LLM", "FastAPI", "Streamlit", "Mermaid", "AI", "TravelPlanner"],
    category: "significant",
    image: "/lovable-uploads/9fc9db8b-3d22-4871-b5e9-98f6f5d0c336.png",
    github: "https://github.com/krishnakumar51/Trip-planner"
  },
  {
    title: "MLOps Pipeline for Vehicle Insurance Data",
    goal: "Demonstrate a production‑grade MLOps pipeline for vehicle insurance ML use cases.",
    development: "Cookiecutter template; MongoDB Atlas for storage; Python modules for ingestion/transformation; estimator scripts for training; CI/CD via GitHub Actions; Dockerized; AWS S3/EC2 deployment.",
    features: [
      "Automated data validation, training, evaluation & model artifact push",
      "Zero‑touch rollout on EC2 using secrets in GitHub Actions",
      "FastAPI prediction microservice"
    ],
    tags: ["Python", "MongoDB Atlas", "FastAPI", "Docker", "GitHub Actions", "AWS S3", "EC2", "MLOps", "CI/CD"],
    category: "significant",
    image: "/lovable-uploads/0ffde5f3-1ead-4dbb-a84e-08deb8de8de0.png",
    github: "https://github.com/krishnakumar51/Vehicle-Data-Insurance"
  },
  {
    title: "Hotel Booking QA & Analytics System",
    goal: "Enable natural‑language QA and analytics on Kaggle's 'Hotel Booking Demand' dataset.",
    development: "FastAPI backend; Streamlit frontend; LLM‑generated SQL (Llama/Groq) with FAISS‑based RAG fallback; SQLite database.",
    features: [
      "NL2SQL QA & predefined dashboards (revenue, cancellations, geography, lead time)",
      "Sub‑1 s response with temperature & DB pooling tuning",
      "Concise table + summary outputs"
    ],
    tags: ["FastAPI", "Streamlit", "SQLite", "Llama/Groq LLM", "FAISS", "QA", "Analytics", "RAG"],
    category: "significant",
    image: "/lovable-uploads/hotel-booking.jpeg",
    github: "https://github.com/krishnakumar51/Hotelbooking-QA"
  },
  {
    title: "Comprehensive NLP MLOps",
    goal: "Showcase industry best practices for an end‑to‑end NLP pipeline with full lifecycle management.",
    development: "Cookiecutter scaffold; DVC for data; MLflow on DagsHub; modular src/ code; Flask inference service; Docker + Kubernetes (EKS); CI/CD via GitHub Actions; Prometheus & Grafana monitoring.",
    features: [
      "Versioned data & experiments, reproducible pipelines",
      "Auto‑scaling microservices with observability dashboards",
      "Zero‑downtime CI/CD releases"
    ],
    tags: ["DVC", "MLflow", "DagsHub", "Flask", "Docker", "Kubernetes (EKS)", "GitHub Actions", "Prometheus", "Grafana", "NLP", "MLOps"],
    category: "significant",
    image: "/lovable-uploads/6e1f6044-9a29-4c33-86c0-93cc41f460cf.png",
    github: "https://github.com/krishnakumar51/nlp-project"
  },
  {
    title: "AI‑Based Interview Question Generator",
    goal: "Auto‑generate technical practice questions from PDF materials.",
    development: "LangChain refine‑summarize chain; FAISS vector store; RetrievalQA; FastAPI endpoints (/upload, /analyze); Jinja2 web UI.",
    features: [
      "Drag‑and‑drop PDF upload & CSV download of Q&A pairs",
      "Precise answer support via retrieval fallback",
      "Modular pipeline for easy extension"
    ],
    tags: ["LangChain", "FAISS", "FastAPI", "Jinja2", "GPT‑3.5‑turbo", "QA", "PDFProcessing"],
    category: "significant",
    image: "/lovable-uploads/ai-interview-generator.jpg",
    github: "https://github.com/krishnakumar51/Interview-Question-Generator"
  },
  {
    title: "Blog Writer Based on YouTube Video",
    goal: "Automate blog-post creation from YouTube transcripts via AI agents.",
    development: "CrewAI framework orchestrates transcript loading, summarization, structuring agents; OpenAI API for content; outputs Markdown.",
    features: [
      "End‑to‑end pipeline: video → transcript → summary → blog",
      "Prompt‑driven modular agents",
      "Ready‑to‑publish Markdown output"
    ],
    tags: ["CrewAI", "OpenAI API", "Python", "Markdown", "ContentAutomation"],
    category: "significant",
    image: "/lovable-uploads/blog-writer.jpeg",
    github: "https://github.com/krishnakumar51/Blog-Writer-using-YouTube-Video-Agent"
  },
  {
    title: "Reddit Sentiment Analyzer",
    goal: "Extract and visualize sentiment trends from Reddit communities.",
    development: "PRAW for data; TextBlob for sentiment; trend plots with matplotlib & seaborn.",
    features: [
      "Real‑time subreddit mining",
      "Aggregated sentiment scores over time",
      "Topic/keyword filtering"
    ],
    tags: ["PRAW", "TextBlob", "matplotlib", "seaborn", "Python", "SentimentAnalysis", "Reddit"],
    category: "significant",
    image: "/lovable-uploads/reddit.jpg",
    github: "https://github.com/krishnakumar51/reddit"
  },
  {
    title: "News App with Summarization & Sentiment",
    goal: "Aggregate headlines, summarize articles, and tag sentiment.",
    development: "News API integration; NLP summarizer; TextBlob for sentiment; simple GUI (Tkinter/Flask).",
    features: [
      "Live news fetching",
      "One‑click article summaries",
      "Positive/neutral/negative labels"
    ],
    tags: ["News API", "TextBlob", "Python", "Tkinter/Flask", "NewsAggregation", "Summarization", "SentimentAnalysis"],
    category: "significant",
    image: "/lovable-uploads/news.jpg",
    github: "https://github.com/krishnakumar51/News-App"
  },
  {
    title: "RAG Assignment (Retrieval‑Augmented Generation)",
    goal: "Demonstrate how to combine vector search with LLMs for precise QA.",
    development: "FAISS vector store; OpenAI embeddings; GPT for answer synthesis; LangChain helpers.",
    features: [
      "Semantic search over document chunks",
      "Contextual LLM responses",
      "Configurable retrieval & generation pipelines"
    ],
    tags: ["FAISS", "OpenAI embeddings", "GPT", "LangChain", "RAG", "VectorSearch", "LLM"],
    category: "significant",
    image: "/lovable-uploads/RAG.jpg",
    github: "https://github.com/krishnakumar51/RAG-assginment"
  },
  {
    title: "Text Summarisation using NLP",
    goal: "Provide concise summaries of long texts via extractive & abstractive methods.",
    development: "NLTK & spaCy extractive modules; HuggingFace Transformer for abstractive; document upload support.",
    features: [
      "Toggle between extractive/abstractive modes",
      "Clean pipeline with pretrained models",
      "Supports raw text & file inputs"
    ],
    tags: ["NLTK", "spaCy", "HuggingFace Transformers", "Python", "Summarization", "NLP", "Transformers"],
    category: "significant",
    image: "/lovable-uploads/text-summarisation.jpeg",
    github: "https://github.com/krishnakumar51/Text-Summarisation-using-NLP"
  },

  // Simple ML & DL Projects
  {
    title: "Telegram Chatbot with AI Backend",
    goal: "Build a functional AI chatbot that interacts with users on Telegram.",
    development: "Leveraged the Telegram Bot API with a Python backend, handling message parsing and reply logic.",
    features: [
      "Keyword‑based conversation flows (extendable to LLM)",
      "Deployable on local server or cloud",
      "Modular handler functions for easy feature addition"
    ],
    tags: ["Python", "Telegram Bot API", "Chatbot"],
    category: "ml-dl",
    image: "/lovable-uploads/28923f6b-bdfc-449b-8eef-4f18f4ec53fc.png",
    github: "https://github.com/krishnakumar51/Telegram-chatbot"
  },
  {
    title: "Color Detection using HSV",
    goal: "Identify and classify colors in images based on HSV thresholds.",
    development: "Used OpenCV to convert BGR → HSV, and created a GUI with sliders for real‑time threshold tuning.",
    features: [
      "Real‑time color masking via webcam feed",
      "Adjustable HSV sliders for fine‑tuning",
      "Bounding boxes around detected color regions"
    ],
    tags: ["OpenCV", "Python", "ComputerVision", "HSV"],
    category: "ml-dl",
    image: "/lovable-uploads/3dcc4dae-e5c8-4dce-98ca-a5dbd0e6b753.png",
    github: "https://github.com/krishnakumar51/Color-detection-using-HSV-"
  },
  {
    title: "Face Anonymizer",
    goal: "Anonymize faces in images or video by detecting and blurring them.",
    development: "Employed OpenCV's Haar cascades (or DNN) for face detection, then applied Gaussian blur.",
    features: [
      "Batch image or real‑time webcam anonymization",
      "Configurable blur intensity",
      "Privacy‑first preprocessing tool"
    ],
    tags: ["OpenCV", "Python", "Privacy", "ComputerVision", "Anonymization"],
    category: "ml-dl",
    image: "/lovable-uploads/98924ac7-42ba-48f8-a1e3-b637a6cf23fd.png",
    github: "https://github.com/krishnakumar51/Face-Anonymizer"
  },
  {
    title: "Loan Approval Prediction System",
    goal: "Predict loan approval status based on applicant financial and demographic data.",
    development: "Built preprocessing pipelines and trained classification models (Logistic Regression, Random Forest); served via Flask.",
    features: [
      "Input validation & feature engineering",
      "Approval probability score output",
      "Web form interface for demo predictions"
    ],
    tags: ["scikit‑learn", "Flask", "Python", "FinTech", "ML", "Classification"],
    category: "ml-dl",
    image: "/lovable-uploads/1ca27cab-5be8-4324-a8b0-3f939de968e7.png",
    github: "https://github.com/krishnakumar51/Loan-Approval-System"
  },
  {
    title: "Image Scraping Tool",
    goal: "Download bulk images from search engines based on user keywords.",
    development: "Used requests, BeautifulSoup, and Selenium for automated browser scraping.",
    features: [
      "Keyword‑driven bulk download",
      "Configurable output directory & image count",
      "Error handling and retry logic"
    ],
    tags: ["Python", "requests", "BeautifulSoup", "Selenium", "WebScraping", "Automation"],
    category: "ml-dl",
    image: "/lovable-uploads/1d72e2c0-da40-4857-9dd5-adaf24e7d709.png",
    github:"https://github.com/krishnakumar51/Image-Scrapping"
  },
  {
    title: "Web Scraping Framework",
    goal: "Extract structured data from arbitrary websites for downstream analysis.",
    development: "Built with Python's requests and BeautifulSoup, with support for pagination and nested parsing.",
    features: [
      "Modular scraper classes per site",
      "CSV/JSON export of cleaned data",
      "Retry & rate‑limit handling"
    ],
    tags: ["Python", "requests", "BeautifulSoup", "DataExtraction", "WebScraping"],
    category: "ml-dl",
    image: "/lovable-uploads/dc682805-760f-41d4-8395-0e4464adccb2.png",
    github: "https://github.com/krishnakumar51/Web-Scrapping"
  },
  {
    title: "Fake News Detection Model",
    goal: "Classify news articles as real or fake using NLP techniques.",
    development: "Preprocessed text with TF‑IDF vectorization; trained classifiers (Logistic Regression, Naive Bayes); evaluated accuracy.",
    features: [
      "End‑to‑end NLP pipeline (tokenization → vectorization → classification)",
      "Performance metrics (accuracy, recall, precision)",
      "Easily swap models for comparison"
    ],
    tags: ["scikit‑learn", "TF‑IDF", "Python", "FakeNews", "NLP", "Classification"],
    category: "ml-dl",
    image: "/lovable-uploads/2dc6fbe2-66c2-4f7b-a76a-933cd292aba1.png",
    github: "https://github.com/krishnakumar51/Fake-News-Detection-Mode"
  },
  {
    title: "Stock Price Prediction Model",
    goal: "Forecast future stock prices using historic time‑series data.",
    development: "Retrieved data via yfinance; engineered features (moving averages, returns); trained regression models; plotted results.",
    features: [
      "Time‑series feature engineering",
      "Visual actual vs. predicted trends",
      "Model comparison (linear vs. tree‑based)"
    ],
    tags: ["yfinance", "scikit‑learn", "matplotlib", "TimeSeries", "Forecasting"],
    category: "ml-dl",
    image: "/lovable-uploads/287c0408-8c83-4466-b496-e679d788dece.png",
    github: "https://github.com/krishnakumar51/Stock-Price-Prediction-Model"
  },

  // Development Projects
  {
    title: "E‑Commerce App",
    goal: "Create a full‑featured e‑commerce platform with product browsing, cart, and checkout.",
    development: "Frontend in React (or HTML/CSS/JS), backend in Django/Flask with REST APIs and database integration.",
    features: [
      "Product listing, search & filtering",
      "User authentication & secure checkout",
      "Payment gateway integration"
    ],
    tags: ["React", "Django/Flask", "Python", "PostgreSQL/MySQL", "FullStack", "ECommerce"],
    category: "development",
    image: "/lovable-uploads/649ccd07-f04d-445d-8e71-d50165c34272.png",
    github: "https://github.com/krishnakumar51/E-Commerce-App"
  },
  {
    title: "Residence Parking App",
    goal: "Simplify parking slot booking and management for residential complexes.",
    development: "Built a responsive web/mobile UI; backend APIs in Flask with a relational database for reservations.",
    features: [
      "Real‑time slot availability & booking",
      "Admin/user role management",
      "Booking history & notifications"
    ],
    tags: ["Flask", "HTML/CSS/JS", "Python", "SQLite/PostgreSQL", "WebApp", "ParkingManagement"],
    category: "development",
    image: "/lovable-uploads/515afcdd-91ba-48a0-908f-399168034835.png",
    github: "https://github.com/krishnakumar51/Residence-parking-App"
  },
  {
    title: "To‑Do Application",
    goal: "Provide a simple task management tool for personal productivity.",
    development: "Frontend in React or vanilla JS; tasks stored in localStorage or via a lightweight Flask API.",
    features: [
      "Add, edit, delete, and mark tasks complete",
      "Filter by status or due date",
      "Clean, minimal UI"
    ],
    tags: ["React", "Flask/localStorage", "Python", "TaskManager", "Productivity"],
    category: "development",
    image: "/lovable-uploads/7bf85191-545f-460c-9f3f-966aa6f86983.png", 
    github: "https://github.com/krishnakumar51/To-Do-application"
  }
];
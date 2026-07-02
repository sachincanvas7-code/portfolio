// All portfolio content lives here. Edit text in one place; pages render it.

export const profile = {
  name: "Sachin Kumar",
  headline: "Product Manager | Lowe's India",
  location: "New Delhi, India",
  tagline: "If it doesn't make a user's Tuesday easier, it's probably scope creep.",
  bio: `I build things from zero to "where-has-this-been-all-my-life?" by mixing ruthless discovery, cross-functional mind-melds, and a stubborn bias for shipping. As a Product Manager at Lowe's, I turn complex legal, claims, contracts management, and risk workflows into seamless, scalable platforms. From deep discovery through roadmap execution, I partner with cross-functional teams to ship solutions that cut cycle times, surface insights, and move real business metrics.`,
  email: "user.2@getcurious.space",
  github: "https://github.com/sachincanvas7-code",
  linkedin: "https://www.linkedin.com/in/sachin-kumar",
  resume: "/Sachin_Kumar_Resume.pdf",
};

export const experience = [
  {
    period: "NOV 2024 — PRESENT",
    role: "Product Manager",
    company: "Lowe's India",
    points: [
      "Turn complex legal, claims, contracts management, and risk workflows into seamless, scalable platforms.",
      "Drive product end-to-end from deep discovery through roadmap execution, partnering with cross-functional teams.",
      "Ship solutions that cut cycle times, surface insights, and move real business metrics.",
    ],
  },
  { period: "JUN 2022 — NOV 2024", role: "Product Manager 1", company: "BrightCHAMPS", points: [] },
  { period: "MAR 2022 — JUN 2022", role: "Growth Manager", company: "BrightCHAMPS", points: [] },
  { period: "DEC 2021 — JUN 2022", role: "Data Analyst 1", company: "BrightCHAMPS", points: [] },
];

export const skills = {
  "Product & Discovery": ["Discovery-driven dev", "PRDs & specs", "Roadmapping", "OKRs", "Kano / PMF frameworks"],
  "Build & AI": ["Claude & OpenAI APIs", "RAG (Pinecone / Qdrant)", "AI agents & tool calling", "MCP", "Voice AI (Twilio + ElevenLabs)", "Python", "Streamlit"],
  "Data & Analytics": ["SQL", "Amplitude", "Dashboards"],
  "Collaboration": ["Jira", "Confluence", "Figma", "Notion", "Slack"],
};

export type ProjectStatus = "self" | "live" | "code" | "course" | "building";

export type Project = {
  slug: string;
  num: string;
  title: string;
  tagline: string;
  tags: string[];
  problem: string;
  build: string;
  role: string;
  outcome: string;
  status: ProjectStatus;
  highlighted?: boolean;
  github?: string;
  demo?: string; // public "try it live" link
  videoUrl?: string; // YouTube/Loom embed URL (use the /embed/ form for YouTube)
  sourceTutorial?: string;
};

export const projects: Project[] = [
  {
    slug: "chatbot-starter",
    num: "01",
    title: "RoastMyPM — the Brutally Honest PM Résumé Coach",
    tagline: "Paste a vague résumé bullet, get a sharp critique and a rewrite grounded in real strong/weak examples — not a hallucination.",
    tags: ["Groq (Llama 3.3)", "Streamlit", "Python", "Tool Calling", "SQLite"],
    problem:
      "Tutorial chatbots are generic and forgettable. I wanted something I'd actually use — and that would force me to feel where conversational AI gets hard: it forgets context, can't act on the world, and can't ground itself in real data instead of guessing.",
    build:
      "I built RoastMyPM step by step, not by copying the tutorial's generic assistant: a static UI first (prove the UI→backend loop), then a real Groq API call with a PM-hiring-manager system prompt, then conversation memory via st.session_state so I could ask it to 'roast it harder', then a real tool — get_strong_examples(dimension) — that queries a SQLite DB of 20 curated PM bullet examples so the rewrite is grounded, not invented.",
    role:
      "I wrote and committed every line myself, one capability at a time, and kept a build journal of every concept and bug. That's where the PM-relevant judgment lives: when memory is worth the token cost, when a tool beats prompting around it, and how to tell a real 'tool' apart from backend logic that just looks like one.",
    outcome:
      "A live, public tool a stranger can use, plus a concrete mental model of how conversational-AI capabilities stack — statelessness, memory-as-history-array, system prompt vs. tool call — the fluency that lets me scope AI features without hand-waving.",
    status: "live",
    github: "https://github.com/sachincanvas7-code/ai-chatbot-platform",
    demo: "https://ai-chatbot-platform-95j4hrvu7cowqhuebiag4g.streamlit.app/",
    sourceTutorial: "Week 4 — APIs for AI",
  },
  {
    slug: "podcast-rag-chatbot",
    num: "02",
    title: "Podcast RAG System with Vector Search",
    tagline: "Ask a podcast a question — get an answer grounded in what was actually said.",
    tags: ["RAG", "Pinecone", "Deepgram", "Vector Search"],
    problem:
      "Hours of audio are a black box. You can't search them, quote them, or ask them anything. I wanted a system that turns spoken content into something you can interrogate in natural language.",
    build:
      "A full RAG pipeline: auto-download episodes → transcribe with Deepgram → chunk → embed → index in Pinecone → retrieve + rank → LLM answer layer grounded in retrieved passages. Wrapped in a Streamlit UI showing indexed episodes and conversational Q&A.",
    role:
      "I owned the architecture decisions that actually matter at scale: Deepgram over local Whisper (speed/accuracy vs. cost), chunking strategy, and the cost-per-episode math that decides whether this is a product or a science project.",
    outcome:
      "Deep, hands-on understanding of vector-DB architecture, embedding strategy, and the cost/performance tradeoffs that make or break a RAG product.",
    status: "course",
    highlighted: true,
    sourceTutorial: "Optional — Podcast Search RAG System",
  },
  {
    slug: "voice-assistant",
    num: "03",
    title: "Voice Assistant with Persistent Memory",
    tagline: "Call a phone number and the AI remembers your last conversation.",
    tags: ["Voice AI", "Twilio", "ElevenLabs", "Webhooks"],
    problem:
      "Every AI forgets you the moment the call ends. That's the difference between a tool and an assistant. I wanted to build the memory layer that closes that gap — over a real phone line.",
    build:
      "Twilio for phone connectivity → ElevenLabs for natural voice → a Flask backend that, via webhooks, retrieves a caller's history at call start and saves new context at call end (keyed by phone number). Stateful conversation across separate calls.",
    role:
      "I designed the webhook architecture and the save/retrieve memory contract, and worked through the real constraints — latency, when to write memory, and how storage choices shape the product experience.",
    outcome:
      "A working voice-assistant MVP plus practical fluency in conversational-AI architecture and webhook integrations. Repo includes the full Twilio + ElevenLabs setup walkthrough.",
    status: "code",
    github: "https://github.com/sachincanvas7-code/voice-assistant-persistent-memory",
    sourceTutorial: "Week 7 — AI Limitations & Advanced Building",
  },
  {
    slug: "social-switchboard",
    num: "04",
    title: "AI Networking Assistant with Semantic Matching",
    tagline: "Describe who you want to meet; the system finds them and connects the call.",
    tags: ["Voice AI", "Pinecone", "Twilio", "RAG"],
    problem:
      "Networking is keyword-matching at best — 'PM' finds 'PM', not the right person. I wanted matching by meaning: goals, skills, and intent, not job titles.",
    build:
      "Professional profiles embedded into Pinecone, so a natural-language query ('a fintech founder who needs a technical PM') returns semantically similar people, not keyword hits. The AI extracts profile info from conversation, searches, and can initiate a Twilio conference call between matched people.",
    role:
      "I worked the UX-of-agency questions that define agentic products: when to confirm vs. act autonomously, how to handle ambiguous matches, and what real-time orchestration needs underneath.",
    outcome:
      "A semantic-matching networking concept and a clear point of view on the autonomy/control tradeoff in agentic AI.",
    status: "course",
    sourceTutorial: "Week 7 + Recommendation Engines (semantic similarity)",
  },
  {
    slug: "job-search-agent",
    num: "05",
    title: "Autonomous Job Search AI Agent",
    tagline: "Upload a resume; the agent searches, reads, judges fit, and emails you a shortlist — on its own.",
    tags: ["AI Agents", "OpenAI", "Tool Calling", "Python"],
    problem:
      "Job search is repetitive, multi-step grunt work: search, open, read, judge fit, repeat. A perfect job for an autonomous agent — if you can make it reliable.",
    build:
      "An agent loop using OpenAI function calling with custom tools — web search, page scraping, content analysis, resume parsing, email sending. The agent decides which tool to call, when, and when to stop. Streamlit UI streams the agent's reasoning live so you can see every decision.",
    role:
      "I built the hard parts of agent reliability: graceful tool-failure handling, infinite-loop prevention, context across steps, and the autonomy-vs-control balance that keeps an agent useful instead of unpredictable.",
    outcome:
      "A deployed, end-to-end agentic system — my clearest proof of understanding how real agents work, fail, and get made trustworthy.",
    status: "live",
    highlighted: true,
    github: "https://github.com/sachincanvas7-code/autonomous-job-search-agent",
    demo: "https://26c6014-job-search-agent.fly.dev",
    sourceTutorial: "Stay Curious — AI Agents & SDKs",
  },
  {
    slug: "workspace-buddy",
    num: "06",
    title: "MCP Workspace Automation Agent",
    tagline: "\"Create a Jira ticket for the login bug and tell the dev channel\" — done, across three tools.",
    tags: ["MCP", "OpenAI", "Streamlit", "AI Agents"],
    problem:
      "Real work is spread across Jira, Slack, and Notion, and the glue is human copy-paste. I wanted plain-English commands to execute across all three.",
    build:
      "An MCPManager handling stdio/JSON-RPC connections to multiple MCP servers, discovering each tool at runtime. An autonomous GPT-4o loop chains tool calls across platforms until the task is done, with retry logic on failures. Streamlit UI logs every step in real time.",
    role:
      "I learned MCP server architecture firsthand and the genuinely hard part — making a multi-service autonomous agent reliable when any one platform call can fail.",
    outcome:
      "A working cross-platform automation agent and hands-on grounding in MCP — the protocol that's becoming the standard for connecting AI to real tools.",
    status: "course",
    highlighted: true,
    sourceTutorial: "Week 8 + Optional Claude Code (MCP connectors)",
  },
  {
    slug: "ai-pm-brain",
    num: "07",
    title: "Ask My AI-PM Brain",
    tagline: "A RAG assistant trained on my entire AI Product course — ask it anything, get answers grounded in what I actually learned.",
    tags: ["RAG", "Pinecone", "Embeddings", "Personal"],
    problem:
      "I went through 15 dense AI-product tutorials. That knowledge shouldn't live in PDFs I never reopen. I wanted a searchable, conversational version of my own learning — and a project that proves I can build RAG end-to-end on real data.",
    build:
      "Embedding my 15 tutorials + transcripts, indexing them in a vector DB, and serving a chat UI that answers questions grounded in the source material — with citations back to the exact tutorial.",
    role:
      "End-to-end owner: chunking strategy for long-form transcripts, retrieval quality tuning, and the citation UX that makes answers trustworthy.",
    outcome:
      "A genuinely useful personal tool and the clearest possible proof that I can ship a RAG system on data that matters to me.",
    status: "building",
    highlighted: true,
    sourceTutorial: "Optional — Podcast Search RAG (concepts reused)",
  },
  {
    slug: "flute-guruji",
    num: "08",
    title: "Flute Guruji",
    tagline: "A real-time AI teacher for Indian classical flute — listens to you play and coaches you, note by note.",
    tags: ["Real-time Audio", "Claude API", "PyAudio", "Pitch Detection"],
    problem:
      "Learning Indian classical flute without a teacher is brutal — you can't tell if your swaras are in tune or your phrasing is right. I wanted an always-available guru that listens and corrects.",
    build:
      "Real-time audio capture and pitch detection (PyAudio + Aubio) feeding a Claude-powered guru that evaluates intonation and phrasing and responds with coaching — structured around lessons.",
    role:
      "My own original product: the real-time audio pipeline, the scoring/evaluation model owned by the AI guru, and the lesson-navigation UX.",
    outcome:
      "My most ambitious original build — real-time audio + LLM reasoning in a domain I care about personally.",
    status: "building",
    highlighted: true,
    sourceTutorial: "Original project (not from the course)",
  },
];

export type Blog = {
  slug: string;
  title: string;
  readingTime: string;
  excerpt: string;
  body: string[]; // paragraphs; lines starting with "## " render as subheads
};

export const blogs: Blog[] = [
  {
    slug: "from-data-to-product",
    title: "From Spreadsheets to Shipping: How Data and Growth Made Me a Product Manager",
    readingTime: "4 min",
    excerpt: "Data taught me to argue with evidence. Growth taught me shipping is a habit. Product is both, with a roadmap attached.",
    body: [
      "I didn't start as a product manager. I started inside spreadsheets, building tracking systems, stitching together data from a dozen sources, and reporting profit and loss to the people who owned the numbers. Then growth, then product. Looking back, none of it was a detour. Each role added a lens I still use every day.",
      "## Data taught me to argue with evidence, not opinion",
      "My first job was making messy data answer questions. ImportRange, Query, Index-Match, a lot of SQL, and dashboards that combined ten different sources so product, marketing, and sales could finally see the same picture. It sounds unglamorous, and it was, but it rewired how I make decisions.",
      "Once you've built the dashboard, you stop trusting hunches. You learn that the loudest opinion in the room is rarely the one the data supports, and that a 5% lift you can actually measure beats a \"huge impact\" nobody can point to. As a PM, I still reach for the data first. I'd rather be corrected by a number early than by a launch later.",
      "## Growth taught me that shipping is a habit, not an event",
      "In a growth role you live or die by the loop: try something, measure it, kill what's not working, double down on what is. Reactivating inactive leads, running referral flows, building retention nudges across WhatsApp, email, and app, none of it works on the first try. What works is the speed of the second, third, and tenth try.",
      "That gave me my stubborn bias for shipping. I'd rather put a rough version in front of real users this week than a perfect one next quarter, because the real version teaches me things no plan can. Growth taught me to treat shipping as a habit, and that habit didn't leave when I moved into product.",
      "## Product is all of it at once, with a roadmap attached",
      "Data taught me to find the truth in the numbers. Growth taught me to move fast and learn in public. Product is both of those, plus the discipline of choosing what not to build and the patience to align features with where the business actually needs to go.",
      "The thread through all of it is the same instinct: get close to the real problem, prove it with evidence, and ship something that makes a user's day easier. That's the circle of product life, OKRs to roadmaps to execution, and every earlier role was just teaching me a different part of it.",
      "## What I'd tell anyone taking the same path",
      "Don't wait for the perfect title to start thinking like a PM. If you're in data, ask what decision your dashboard is meant to change. If you're in growth, treat every experiment as discovery. The skills compound quietly, and one day you look up and realise the spreadsheets, the experiments, and the late-night JSON debugging all added up to a way of building products that's entirely your own.",
    ],
  },
  {
    slug: "taming-legal-and-risk-workflows",
    title: "Taming Legal and Risk Workflows: Building Platforms Out of Process Chaos",
    readingTime: "5 min",
    excerpt: "In legal and risk workflows, the exceptions are the product. Here's how I turn process chaos into quiet, scalable platforms.",
    body: [
      "Legal, claims, contracts management, and risk are not the workflows people dream about building. They're slow, they're full of exceptions, and the people who run them have usually survived a decade of spreadsheets and email threads. That's exactly why I find them worth the work. Turning that chaos into a seamless, scalable platform is where I do my best product thinking.",
      "## The exceptions are the product",
      "In most consumer features, the happy path is the product and the edge cases are cleanup. In legal and risk workflows it's the opposite. The disputed claim, the contract with the unusual clause, the escalation that needs three approvals, those aren't edge cases. They're a meaningful share of real usage, and they're exactly where the old process broke down.",
      "So I start by mapping the failure cases before the happy path. What happens when something is contested, partial, or stuck? If the platform can't hold those gracefully, a clean main flow is just a nice demo. The whole value of replacing a manual process is absorbing the mess it used to push onto people.",
      "## Cut cycle time, but earn the trust first",
      "The metric I care about most here is cycle time, how long a workflow takes from start to resolved. But you can't just compress it. The people doing this work are accountable for risk, and an automation they don't trust is an automation they'll quietly route around.",
      "So I make the platform legible before I make it fast. Show the state plainly: what stage is this in, who owns it, what's blocking it. Once people can see the process clearly, they stop double-checking it manually, and the cycle time drops on its own. Trust is the thing that actually unlocks the speed.",
      "## Discovery here means sitting with the people who do the work",
      "You cannot design a claims or contracts platform from a requirements doc. The real rules live in people's heads, the unwritten \"we always check this first\" and \"legal won't sign off unless that's attached.\" I get those out by sitting with the people doing the work and watching them, not interviewing them at a distance.",
      "This is where my data-analyst instincts earn their keep too. Before I redesign a workflow, I want to know where time actually goes, which steps cause the most rework, and where requests pile up. Combining the lived process with the data behind it is how a vague \"this is painful\" becomes a specific, buildable bet.",
      "## Scalable means boring, on purpose",
      "The temptation with internal platforms is to make them clever. I've learned to resist it. A legal or risk workflow that a stressed person can understand on a bad day beats an elegant one that needs a tutorial. Boring, legible, predictable, that's what scales across teams and survives the next reorg.",
      "When I get this right, the platform disappears into the work. Cycle times drop, insights surface, and the people who used to fight their tools start trusting them. That quiet competence is the whole goal, and turning process chaos into that kind of calm is the part of product I'll never get tired of.",
    ],
  },
  {
    slug: "discovery-until-everyones-uncomfortable",
    title: "Ask Why Until Everyone's Uncomfortable: My Take on Discovery-Driven Development",
    readingTime: "5 min",
    excerpt: "The first answer is never the real one. Discovery isn't a phase before building — it's the habit that decides whether the thing is worth building.",
    body: [
      "My guiding mantra is simple: if it doesn't make a user's Tuesday easier, it's probably scope creep. The fastest way I've found to tell the difference is to ask why until everyone in the room is a little uncomfortable. Discovery-Driven Development isn't a phase I run before building, it's the habit that decides whether the thing I build is worth building at all.",
      "## The first answer is never the real one",
      "\"We need a new screen.\" \"Can we automate this approval?\" \"Add a dashboard.\" Every request arrives pre-packaged as a solution, and the solution is usually someone's best guess wearing the costume of a requirement. My job is to unwrap it.",
      "So I keep asking. What decision does this help someone make? What breaks if we don't build it? Who is the unhappy user here? By the third or fourth why, the request has usually changed shape entirely, and the real problem, the one actually worth solving, finally shows up. That moment is uncomfortable because it means the original ask was wrong. Good. Better to find that out in a conversation than three sprints later.",
      "## Discovery is cheaper than a roadmap mistake",
      "Building legal, claims, and contracts workflows taught me that the cost of guessing wrong compounds. These are not throwaway features, they sit in the critical path of how a business handles risk. Ship the wrong abstraction and you don't just disappoint a user, you bake friction into a process hundreds of people touch every day.",
      "That's why I treat discovery as the cheapest insurance I can buy. A week of uncomfortable questions, a few rounds of \"show me how you actually do this today,\" and a hard look at the messy edge cases will save a quarter of rework. Discovery feels slow right up until you remember what the alternative costs.",
      "## Discovery doesn't stop when execution starts",
      "The mistake I see most is treating discovery and delivery as separate stages, figure it all out, then go build. Real workflows don't cooperate with that. You learn the most the moment something half-real is in front of a user, when they say \"oh, but what about the cases where the contract is disputed?\"",
      "So I keep a foot in discovery all the way through execution. Strategic OKRs, roadmaps, and execution aren't a straight line, they're a circle, and each loop teaches me something the last one couldn't. The roadmap is a hypothesis, not a contract, and I'd rather adjust it on evidence than defend it out of pride.",
      "## Why the discomfort is the point",
      "Asking why until everyone's uncomfortable isn't about being difficult. It's about refusing to let a fuzzy assumption survive into code. The discomfort is just the sound of a weak idea being tested, and the strong ideas come out the other side sharper.",
      "When I get discovery right, execution gets quiet. Fewer surprises, fewer re-litigated decisions, fewer \"wait, why did we build this\" moments. That calm isn't luck. It's the dividend of every uncomfortable question I asked before anyone wrote a line of code.",
    ],
  },
];

export const certifications = [
  { title: "AI Product Strategy & Build Lab", issuer: "Curious PM", year: "2026", slug: "ai-product-strategy-build-lab" },
  { title: "B.Tech, Mathematics and Computer Science", issuer: "Delhi Technological University (formerly DCE)", year: "2021" },
];

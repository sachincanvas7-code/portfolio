# Portfolio Build Plan — "Make It Actually Mine"

**Goal:** Personally build every project, learn each concept, record a demo video,
ship a public link anyone can use, and showcase it on the portfolio — highlighting
the 5 strongest. Nothing goes live as "mine" until *I* built it.

**Live portfolio:** https://portfolio-ai-curious-pm.vercel.app
**Portfolio repo:** https://github.com/sachincanvas7-code/portfolio

---

## Guiding principles
1. **I build it, Claude coaches.** Claude explains the concept, reviews my code, unblocks me — but I write and commit the code. Git history = my authorship.
2. **Every project ships 3 proofs:** (a) a public live link, (b) a demo video, (c) a public repo I authored.
3. **Learn in order of difficulty**, not portfolio order. Concepts stack.
4. **Highlight 5, keep the rest.** All projects get built; the portfolio highlights the 5 strongest and lists the others.

---

## The 5 HIGHLIGHTED projects (the headline reel)
1. ⭐ **Ask My AI-PM Brain** — RAG over my own 15 course tutorials + transcripts (net-new, most personal)
2. ⭐ **Podcast RAG System** — production RAG with vector search
3. ⭐ **Autonomous Job Search Agent** — multi-step agentic workflow
4. ⭐ **MCP Workspace Automation Agent** — Jira/Slack/Notion via MCP
5. ⭐ **Flute Guruji** — real-time AI Indian-classical flute teacher (my own original build)

## Full build list (highlighted = ⭐) — in LEARNING order
| # | Project | Learn from (PDF/.md) | Difficulty | Highlight? |
|---|---------|----------------------|-----------|-----------|
| 1 | Modular AI Chatbot | Week 4 — APIs for AI | ★☆☆ | list |
| 2 | Podcast RAG System | Optional — Podcast Search RAG | ★★☆ | ⭐ |
| 3 | Ask My AI-PM Brain (RAG) | Optional Podcast RAG (reuse) | ★★☆ | ⭐ |
| 4 | Autonomous Job Search Agent | Stay Curious — Agents & SDKs | ★★★ | ⭐ |
| 5 | MCP Workspace Agent | Week 8 + Optional Claude Code | ★★★ | ⭐ |
| 6 | Voice Assistant (memory) | Week 7 | ★★★ | list |
| 7 | AI Networking Switchboard | Week 7 + Recommendation Engines | ★★★★ | list |
| 8 | Flute Guruji (polish + writeup) | my own project | ★★★★ | ⭐ |
| 9 | (optional) Recommendation Engine | Stay Curious — Rec Engines | ★★☆ | list |
| 10 | (optional) Fine-Tuned Persona | Stay Curious — Fine-Tuning | ★★★ | list |
| 11 | (optional) Quiet Humans (local AI) | Optional — Quiet Humans | ★★★★ | list |

---

## STEP 0 — One-time setup (before project #1)
- [ ] **Accounts:** OpenAI (billing + my own API key), Streamlit Community Cloud (free public hosting), Loom OR YouTube (unlisted) for videos, Pinecone (free tier), Deepgram (free credit).
- [ ] **Twilio + ElevenLabs** (only needed for voice projects #6/#7 — paid, defer).
- [ ] **Upgrade the portfolio** so each project can show a video + live link (Claude does this — see "Portfolio upgrades" below).
- [ ] **Reset project repos** to clean starters so my commits = my authorship.
- [ ] **Local dev:** Python venv + a `.env` per project (never commit keys — `.gitignore` already set).

## The REPEATABLE per-project workflow (run this for each project)
> This is the engine. Same 6 steps every time.

**1. LEARN (½–1 day)**
   - Read the mapped tutorial PDF/markdown. Claude gives me a 10-min concept briefing + a "you should be able to explain X, Y, Z" checklist.
   - I write a 3-bullet "what this project teaches" note in my own words.

**2. BUILD (1–2 days)**
   - Start from the clean starter repo. Claude pair-programs: I type, Claude reviews/unblocks.
   - Commit in small steps with my own messages. Get it running locally.

**3. SHIP A PUBLIC LINK (½ day)**
   - Streamlit apps → **Streamlit Community Cloud** (free, public URL, deploys from my GitHub repo).
   - Voice projects → Fly.io + a Twilio number (paid; do later).
   - Verify a stranger can open the link and use it.

**4. RECORD THE VIDEO (1 hr)**
   - 60–120 sec: the problem → live demo of the tool → one thing I learned.
   - Tool: Loom (instant link) or screen-record → YouTube unlisted.
   - Script template lives in `/portfolio_audit/video-script-template.md`.

**5. WRITE THE CASE STUDY (½ hr)**
   - Update the project in `src/data/portfolio.ts`: real problem/build/role/outcome in MY voice, + `liveUrl`, `videoUrl`, `github`.

**6. PUBLISH (5 min)**
   - Commit + push portfolio → Vercel auto-deploys. Project now shows badge "Built & shipped by me."
   - Mark the row done in this plan.

---

## Portfolio upgrades Claude will make (so the above has somewhere to land)
- [ ] Add `videoUrl` + `liveUrl` fields to the Project type.
- [ ] Project page: embed the demo video + a prominent "Try it live" button.
- [ ] New status badge: **"Built & shipped by me"** (vs. current "Built in lab").
- [ ] Home: visually separate the **5 highlighted** from the rest ("More projects" section).
- [ ] Connect the GitHub repo to Vercel for auto-deploy on push (no more manual CLI).

---

## Suggested schedule (realistic, ~evenings/weekends)
| Week | Build | Why this order |
|------|-------|----------------|
| 1 | #1 Chatbot | Foundations: API, memory, tools. Confidence win. |
| 2 | #2 Podcast RAG → #3 Ask My AI-PM Brain | RAG once, apply twice. Two highlights, fast. |
| 3 | #4 Job Search Agent | Agents — first highlight with a live demo. |
| 4 | #5 MCP Workspace Agent | MCP — hot, differentiating. |
| 5 | #8 Flute Guruji polish + record | Already largely built — package it as a highlight. |
| 6 | #6 Voice + #7 Switchboard | Hardest + paid infra. Do when momentum is high. |
| later | #9–#11 optional | Build for depth / interview talking points. |

**After Week 5 you have all 5 highlights live with videos + public links — that's the portfolio you can call yours.**

---

## "Is it mine?" checklist (the finish line)
- [ ] Every highlighted project: I can explain the architecture from memory.
- [ ] Every highlighted project: public live link works for a stranger.
- [ ] Every highlighted project: a demo video recorded by me.
- [ ] Every repo: commit history shows me building it over time.
- [ ] Bio/skills/blog: all in my voice.
- [ ] (Optional) custom domain pointed.

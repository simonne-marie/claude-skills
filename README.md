# Claude skills

Skills I built with Claude Code to run my recurring work: job applications, client intake for my studio, my Etsy shop, website publishing, and writing in my own voice. Each folder has a `SKILL.md` that tells Claude when to use it and how to do the work, plus any helper scripts.

| Area | Skill | What it does |
|---|---|---|
| Job search | `job-fit` | Reads a job posting, researches the company, scores the match, and logs it in my tracker |
| Job search | `tailored-resume` | Builds a tailored two-page resume PDF from my closest past version and checks the page count |
| Job search | `cover-letter` | Drafts a cover letter in my voice and builds the Word file |
| Job search | `application-answers` | Answers application questions in my voice and saves them for reuse |
| Job search | `interview-prep` | Company research, stories, questions to ask, and negotiation notes |
| Studio | `kickoff-brief-review` | Reviews a new client intake brief and flags what to settle on the kickoff call |
| Studio | `update-site` | Publishes a site change through a pull request with a Slack review step |
| Portfolio site | `update-site` | Publishes a change to my portfolio site and confirms it's live |
| Etsy shop | `etsy-invite` | Designs a new editable Canva invitation that follows the shop's style rules |
| Etsy shop | `etsy-listing` | Builds the seven listing images and the listing copy |
| Everywhere | `content-draft` | Writes copy in my voice and holds it for review before publishing |
| Everywhere | `idea-check` | Checks a business idea money-first: who pays, how much, how soon |

## How they're installed

Skills live where Claude Code reads them: each project's `.claude/skills/` folder, or `~/.claude/skills/` for the ones I use everywhere. This repo is a copy. `sync.sh` pulls the live versions in, leaving out private reference files (anything in a `private/` folder) and installed packages.

The cover letter builder needs the `docx` package: run `npm install` in `job-search/cover-letter/scripts/`.

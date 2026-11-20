---
name: job-fit
description: Analyze a job posting for Simonne's search - company research (funding, layoffs, news), pay, a match percentage with green and red bullets, and a recommendation - then save the posting and add it to her Job Search Tracker. Use whenever she pastes a job link or posting text, says "next one", "check compatibility", "what do you think of this role", or "is this a fit", even if she doesn't ask for an analysis by name.
---

# Job fit analysis

Simonne sends roles one at a time and decides fast. The goal is a short, honest read she can act
on in under a minute, plus a saved record so nothing gets lost.

Read `references/private/candidate-profile.md` first. It holds her direction, strongest proof, what she
must not claim, and the writing rules.

## 1. Get the full posting

Prefer structured sources over scraped pages, because they include pay and remote status:

- Greenhouse: `https://boards-api.greenhouse.io/v1/boards/{board}/jobs/{id}?pay_transparency=true`
- Ashby: `https://api.ashbyhq.com/posting-api/job-board/{board}?includeCompensation=true`
  (has `workplaceType` and `isRemote`)
- Lever: `https://api.lever.co/v0/postings/{company}/{id}`
- LinkedIn job: `https://www.linkedin.com/jobs-guest/jobs/api/jobPosting/{id}` (curl with a browser
  user agent; on HTTP 429, wait 20 seconds and retry)
- Oracle, Taleo, and other boards: fetch the page, or open it in the built-in browser when the
  content loads with JavaScript.
- If she pasted the text, use it as is.

Check remote status yourself. LinkedIn often labels hybrid roles "Remote", so search the
description for hybrid, onsite, in-office, and commute wording. If it's not truly remote, say so
first; she will usually skip it.

## 2. Research the company

Search for: what they sell and to whom, size, funding (latest round, total), layoffs in the last
two years, acquisitions, recent news, and review sentiment if relevant. Keep it to a few facts.
Cite sources at the end of the reply.

## 3. Score the match

Compare the posting's requirements with her profile. Give one match percentage, then:

- 🟢 bullets: where her real experience lines up, naming the proof (company, result)
- 🔴 bullets: honest gaps, including any of her recurring gaps the posting hits, pay below
  target, paid-ads-heavy scope, or location issues

Never invent experience to close a gap. If a gap might be covered by something she hasn't
confirmed, list it as a question for her instead.

## 4. Recommend

One or two sentences: apply, apply as a stretch, or skip, and why. Offer the next step
(tailored resume, Word cover letter).

## 5. Save it

- Write `jobs/<company-slug>/posting.md`: link, location, pay, posted date, reporting line,
  company summary, role summary, requirements. The `jobs/` folder is gitignored.
- Add a tracker entry with ArtifactData (`set`, url
  `https://claude.ai/artifact/MmAD3t1Y5zE7GCEDfQ3PGL`, collection `applications`,
  doc id `<company-slug>-<role-slug>`). Fields: company, role, link, salary, status (`wishlist`),
  description ("See jobs/<slug>/posting.md."), notes (match %, strengths, gaps, company facts),
  next, applied, due, ask, contact, answers, created, updated. For long fields, write a JSON file
  in the scratchpad and pass it as `file_path`.
- Stages are `wishlist`, `applied`, `interviewing`, `offer`, `closed`. When she says "applied",
  set status `applied`, `applied` to today, and `due` about a week out for a follow-up. Pin every
  update with `if_version` from the last read.

## Reply format

Short. Company, pay, match % with 🟢/🔴 bullets, recommendation, one line saying where it's saved,
then sources. Link files with repo-root-relative paths, like `[posting.md](jobs/acme/posting.md)`.

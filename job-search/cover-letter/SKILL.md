---
name: cover-letter
description: Draft Simonne's cover letter for a specific job in her voice and deliver it as a one-page Word (.docx) file. Use whenever she asks for a cover letter, "do the cover letter", "cover letter in a word file", or "resume and cover letter", or when an application asks for one, even if she doesn't mention Word.
---

# Cover letter

Her letters follow a shape she has approved over many applications. The goal is one page that
sounds like her: warm, direct, specific, and outcome-first.

Read `../job-fit/references/private/candidate-profile.md` for her proof points and writing rules, and
`jobs/<company>/posting.md` for the role.

## Shape

```
Hi <Company> Hiring Team,

<Opening: 2 to 3 sentences. Who she is in one line, tied to what this role needs.> In this role, I'd focus on:

- <What she'd do first, in her words, tied to the posting's top need>
- <Second priority>
- <Third priority>

<Proof paragraph. Open with a career-wide pattern ("I've built and rebuilt marketing systems
throughout my career."), lead with the biggest result (HealthSnap 214%), then two or three more
examples from different companies that match the role.>

<AI paragraph. "Today, building AI tools with Claude Code is part of how I work every day.
Recent builds include ..." with three or four builds and their results.>

<One or two sentences tying the company's mission or product to how she'd work. Optional
extras: location, availability, regulated-industry experience.>

I'd welcome the chance to talk about how my skills and experience would add value to the team.

Best,
Simonne Piriz
simonnemv@gmail.com · simonnemarie.com
```

Why these choices: she likes opening with "Hi" (it feels like her voice), and she rewrote the
closing line herself. She asked that AI proof read as one of many things she has built, so it
always comes as a list anchored to a career-long pattern. She also asked that a posting's
signature phrases (like "conductor") be put in her own words, so mirror the ideas and paraphrase
the wording.

## Rules

- No em dashes and no "not X, it's Y" contrasts.
- Use only facts from the profile file or her confirmed resumes. If a claim would help but isn't
  confirmed, ask her.
- Use "Hi <Name>," when a hiring manager is known.
- Aim for 330 to 400 words so it fits one page in Word.

## Build the Word file

Save the text to `jobs/<company>/cover-letter.md` in the shape above (first line greeting,
`- ` bullets, blank lines between paragraphs, signature block starting with `Best,`). Then:

```bash
node <skill-dir>/scripts/cover.js jobs/<company>/cover-letter.md jobs/<company>/simonne-piriz-cover-letter-<company>.docx
zip -d jobs/<company>/simonne-piriz-cover-letter-<company>.docx '*/' >/dev/null 2>&1 || true
qlmanage -t -s 1400 -o <scratchpad>/ql jobs/<company>/simonne-piriz-cover-letter-<company>.docx
```

`cover.js` adds her name header, contact line, and today's date, and drops the duplicate contact
line from the signature. `zip -d` removes folder entries that some cloud editors reject. Read the
Quick Look PNG to confirm it fits on one page and the bullets look right.

## Wrap up

Reply with the file link and a short summary of the angle. If the application has nowhere to
upload a letter, offer the three-page resume version from the tailored-resume skill.

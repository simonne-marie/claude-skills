---
name: tailored-resume
description: Build a tailored two-page resume PDF for Simonne for a specific job, starting from her closest existing resume, rendering it with fonts that display correctly everywhere, and checking the page count. Use whenever she says "do the resume", "build a resume for this", "tailor my resume", "make a relevant resume", or asks for a resume plus cover letter, and also when a role needs the cover letter added as a third page of the resume.
---

# Tailored resume

Every resume is an HTML file rendered to PDF. Tailoring means choosing the right base, then
re-aiming the headline, summary, Selected Work, bullet order, and skills at the posting, using
only facts she has already confirmed.

Read `../job-fit/references/private/candidate-profile.md` for what she can and cannot claim and the
writing rules. Also read `jobs/<company>/posting.md` if it exists.

## 1. Pick the closest base

Past resumes live in `jobs/*/resume/resume-*.html`. List their headlines to choose:

```bash
grep -o '<p class="headline">[^<]*' jobs/*/resume/resume-*.html
```

Rough guide: MOps or MarTech with Salesforce and Marketo, start from `icertis`. AI enablement or
communications, start from `lexisnexis`. AI GTM operations, start from `cordial`. Demand gen or
ABM, start from `strativ` or `coursedog`. Contractor-led marketing leadership, start from
`tax-workout-group`. Copy it to `jobs/<company>/resume/resume-<company>.html`.

## 2. Tailor

Edit with small exact string replacements (a short Python script with `assert old in s` before
each replace catches typos). Skills lines are `<p><b>Label:</b> ...</p>` with two-space
indentation; a regex on the label is the reliable way to swap one.

- Headline: three short phrases joined by ` · `, aimed at the role's title and core tools.
- Summary: 3 to 5 sentences. Years and industries, what she owns, how she builds with AI.
- Selected Work: 4 bold-led bullets, the results this employer will care about most.
- Experience: reorder bullets so the most relevant come first. Drop the least relevant if space
  is tight. Keep dates, titles, and company names exactly as they are.
- Skills: relabel and reorder to mirror the posting's language with real skills only.
- Paraphrase the posting's distinctive phrases. Standard tool names are fine.
- Check for em dashes: `grep -c "—" <file>` should print 0.

## 3. Render and check

```bash
cd jobs/<company>/resume
node ../../../resumes/source/pdf.mjs resume-<company>.html simonne-piriz-resume-<company>.pdf
grep -ac '/Type /Page$\|/Type /Page[^s]' simonne-piriz-resume-<company>.pdf   # must print 2
```

`pdf.mjs` loads Arial and Georgia Bold from files on purpose. System fonts render as scrambled
letters in pdf.js viewers, which many applicant tracking systems use.

If it prints 3, render page 3 to see how much spills over, then trim a low-value bullet or merge
two short ones. Look at both pages before delivering:

```bash
node <skill-dir>/scripts/renderp.mjs <pdf> <scratchpad>/p1.png 1   # then Read the PNG
```

Copy the final PDF to `resumes/`.

## 4. Optional: cover letter as page 3

When an application has nowhere to upload a cover letter:

```bash
python3 <skill-dir>/scripts/append_letter.py resume-<company>.html ../cover-letter.md resume-<company>-with-letter.html
node ../../../resumes/source/pdf.mjs resume-<company>-with-letter.html simonne-piriz-resume-and-cover-letter-<company>.pdf
```

Check that it's 3 pages and the letter starts on its own page.

## 5. Wrap up

Update the tracker entry's `next` field with the file path. Reply briefly: the file link, the
headline, what changed, and any facts you'd like her to confirm before sending.

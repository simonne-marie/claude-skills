---
name: application-answers
description: Answer job application form questions for Simonne in her voice (screening questions, "describe a time...", AI usage, salary, location, sponsorship, start date) and save them for reuse. Use whenever she pastes application questions, form fields, or "how should I answer this", even if she only pastes the questions with no instructions.
---

# Application answers

She pastes form questions mid-application and needs answers she can paste back right away.
Speed matters, and so does sounding like her.

Read `../job-fit/references/private/candidate-profile.md` for proof points and rules, and
`jobs/<company>/posting.md` for the role. Check `jobs/*/short-answers.md` for answers she already
approved to similar questions; reuse and adapt them.

## Standard logistics answers

- LinkedIn: https://www.linkedin.com/in/simonnepiriz
- Website: https://simonnemarie.com
- Requires sponsorship: No. Authorized to work in the U.S.: Yes. Countries authorized: United States.
- Location and time zone: "Orlando, Florida, United States. Eastern Time (ET)."
- Earliest start date: "Available immediately, and flexible to your timeline."
- Salary expectation: use the pay target in the private profile file. If the posted range tops
  out lower, flag it and suggest a number near the top of the range, then let her choose.
- "Where did you hear about us": ask if unknown (LinkedIn is the usual answer).

## Written answers

- Answer the exact question first, then one concrete example that carries the point.
- Short, plain sentences she'd say out loud. One personal line at most.
- Use real numbers from her confirmed results. Never invent a pipeline dollar figure, target, or
  team size; if the question asks for one she hasn't given, write around it and tell her where
  a number would help.
- Respect character limits when the form shows them.
- No em dashes, no "not X, it's Y", no summary tag lines, no praise tails about the company.

Approved voice example (InStride): "The most rewarding parts of my career have been in healthcare.
Helping families get easier access to care is personal to me. At HealthSnap, I moved our
campaigns and contacts from Zoho to HubSpot, connected HubSpot to Salesforce, and built lead
scoring and routing with sales so inquiries went straight to the right person."

## Save

- Append each question and final answer to `jobs/<company>/short-answers.md`.
- Update the tracker entry's `answers` field (ArtifactData `update`, url
  `https://claude.ai/artifact/MmAD3t1Y5zE7GCEDfQ3PGL`, collection `applications`, pin `if_version`).
- If she edits an answer, save her version, since it's the approved one.

## Reply

Each question in bold, the answer in a quote block ready to copy, then one line on anything to
check (like a missing number).

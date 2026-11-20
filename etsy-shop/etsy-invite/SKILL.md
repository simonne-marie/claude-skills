---
name: etsy-invite
description: Design a new editable invitation template for the Mini Magic Makers Etsy shop in Canva - theme concepts, approval, 5x7 front, matching back page, the customer guide, and tracker updates - following the shop's approved style rules. Use whenever she asks for a new invite, theme, holiday set, baby shower, birthday, bridal shower, or website invite design, or wants to revise an existing one.
---

# New Etsy invite

The shop sells editable Canva invitation templates. Every rule below came from real feedback, and
the project memory holds the current folder ids, master template ids, and helper scripts. Read
these memory notes before starting: invite build pipeline, invitation size and style, always
include the back page, white backgrounds, clean element cutouts, edge bleed and back gaps,
pop-culture themes, Canva credits, guide style, and folder layout.

## 1. Concepts and approval

- Propose themes with a short reason each (trend, season, gap in the shop). Party themes sell
  better when they paint a feeling the buyer can picture.
- Show options for review and wait for her pick before building. She approves designs; don't
  finalize anything she hasn't seen.
- No trademarked characters, names, or logos. Pop-culture ideas use generic, original takes.

## 2. Build the front

- Size 5x7 (480x672 in Canva) so Canva offers card mockups.
- Pure white background. Never cream or yellow.
- Never vintage storybook, pen-and-wash, or ink-outline watercolor art.
- Art elements stay movable, with clean cutouts (no smudge or halo behind them). Edge art bleeds
  past the page.
- Text uses integer font sizes; buyers edit text in Canva, so keep it real text.
- Reuse existing scenes and art before generating new ones. Generation spends her Canva AI credits.

## 3. Back page

Every invite gets a back. The back is the front's background pattern only, full bleed. Fill any
holes left when cloning art (the pattern_back helper fixes flawed patterns). Run the edge and gap
checks from the project scripts.

## 4. Guide and folders

- Copy the master guide template from the guide-style memory, retitle it, swap in the new
  preview, and link the template. Plain wording; keep the file-help tip.
- Move the design into the right folder (Baby Shower, Kids Birthday, Girls Night, with holiday
  subfolders).

## 5. Track it

Update the Invite and Guide Tracker artifact with the design link, guide link, template-link
fields, and checklist status (see the invite tracker memory). Then offer to build the listing
with the etsy-listing skill.

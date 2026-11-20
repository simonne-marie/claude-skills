"""Append a cover letter (from cover-letter.md) to a resume HTML as its own last page.

Use when an application has nowhere to upload a cover letter, so the letter rides along
as page 3 of the resume PDF.

usage: python3 append_letter.py <resume.html> <cover-letter.md> <out.html>
then:  node resumes/source/pdf.mjs <out.html> <out.pdf>
"""
import html
import sys
from datetime import date

resume_path, letter_path, out_path = sys.argv[1:4]
res = open(resume_path).read()
lines = open(letter_path).read().strip().split("\n")

# Split the letter into blocks on blank lines (same format cover.js reads)
blocks, cur = [], []
for line in lines:
    if line.strip() == "":
        if cur:
            blocks.append(cur)
            cur = []
    else:
        cur.append(line)
if cur:
    blocks.append(cur)

parts = []
for b in blocks:
    if b[0] == "Best,":  # signature: the contact line is already in the page header
        parts.append(f'<p class="sig">Best,<br>{html.escape(b[1])}</p>')
    elif all(l.startswith("- ") for l in b):
        parts.append("<ul>" + "".join(f"<li>{html.escape(l[2:])}</li>" for l in b) + "</ul>")
    else:
        parts.extend(f"<p>{html.escape(l)}</p>" for l in b)

css = """.letter { break-before: page; page-break-before: always; padding-top: 0.25in; }
.letter .body { font-size: 10.5pt; line-height: 1.5; margin-top: 22pt; }
.letter .body p { margin: 0 0 10pt; }
.letter .body ul { margin: 0 0 10pt; padding-left: 18pt; }
.letter .body li { margin-bottom: 5pt; }
.letter .date { margin-bottom: 14pt; }
.letter .sig { margin-top: 14pt; }
</style></head>"""

today = date.today().strftime("%B %-d, %Y")
letter = f"""<section class="letter">
  <h1>Simonne Piriz<span class="dot"></span></h1>
  <p class="contact">Orlando, FL · simonnemv@gmail.com · linkedin.com/in/simonnepiriz · simonnemarie.com</p>
  <div class="body">
    <p class="date">{today}</p>
    {''.join(parts)}
  </div>
</section>
</body></html>"""

res = res.replace("</style></head>", css, 1).replace("</body></html>", letter)
open(out_path, "w").write(res)
print("wrote", out_path)

// Builds a one-page cover letter .docx from a plain-text letter (first line greeting, "- " bullets, blank-line paragraphs).
const fs = require('fs');
const { Document, Packer, Paragraph, TextRun, AlignmentType, LevelFormat } = require('docx');
const [,, src, out] = process.argv;
const lines = fs.readFileSync(src, 'utf8').trim().split('\n');
const F = 'Arial', SZ = 22;
const T = (text, o = {}) => new TextRun({ text, font: F, size: SZ, ...o });
const kids = [
  new Paragraph({ spacing: { after: 40 }, children: [new TextRun({ text: 'Simonne Piriz', font: 'Georgia', size: 36, bold: true })] }),
  new Paragraph({ spacing: { after: 360 }, children: [T('Orlando, FL · simonnemv@gmail.com · linkedin.com/in/simonnepiriz · simonnemarie.com', { size: 19, color: '4A4743' })] }),
  new Paragraph({ spacing: { after: 240 }, children: [T(new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }))] }),
];
// split into blocks by blank lines
const blocks = []; let cur = [];
for (const l of lines) { if (l.trim() === '') { if (cur.length) blocks.push(cur); cur = []; } else cur.push(l); }
if (cur.length) blocks.push(cur);
for (const b of blocks) {
  if (b[0] === 'Best,') { // signature: drop the contact line, it's in the header
    kids.push(new Paragraph({ spacing: { before: 120, after: 0 }, children: [T('Best,')] }));
    kids.push(new Paragraph({ children: [T(b[1])] }));
    continue;
  }
  b.forEach((l, i) => {
    if (l.startsWith('- ')) kids.push(new Paragraph({ numbering: { reference: 'dots', level: 0 }, spacing: { after: i === b.length - 1 ? 200 : 80 }, children: [T(l.slice(2))] }));
    else kids.push(new Paragraph({ spacing: { after: 200, line: 276 }, children: [T(l)] }));
  });
}
const doc = new Document({
  creator: 'Simonne Piriz', title: 'Simonne Piriz Cover Letter',
  styles: { default: { document: { run: { font: F, size: SZ } } } },
  numbering: { config: [{ reference: 'dots', levels: [{ level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 540, hanging: 270 } } } }] }] },
  sections: [{ properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1296, bottom: 1296, left: 1296, right: 1296 } } }, children: kids }],
});
Packer.toBuffer(doc).then((buf) => { fs.writeFileSync(out, buf); console.log('wrote', out); });

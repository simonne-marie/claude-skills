#!/bin/bash
# Copies the live skills from each project into this repo, leaving out private files and installed packages.
# Run it after changing a skill, then commit and push.
set -e
cd "$(dirname "$0")"
copy() { # copy <live skill folder> <repo folder>
  mkdir -p "$2"
  rsync -a --delete --exclude node_modules --exclude private --exclude .DS_Store "$1/" "$2/"
}
RES="$HOME/Documents/Personal/Resumes/claude/.claude/skills"
STUDIO="$HOME/Desktop/simonne-piriz-services/.claude/skills"
ETSY="$HOME/Documents/Work Folders/Side Hustles/Etsy/MiniMagicMakers/.claude/skills"
USER_SKILLS="$HOME/.claude/skills"

for s in job-fit tailored-resume cover-letter application-answers interview-prep; do copy "$RES/$s" "job-search/$s"; done
copy "$RES/update-site" "portfolio-site/update-site"
copy "$STUDIO/kickoff-brief-review" "studio/kickoff-brief-review"
copy "$STUDIO/update-site" "studio/update-site"
copy "$ETSY/etsy-invite" "etsy-shop/etsy-invite"
copy "$ETSY/etsy-listing" "etsy-shop/etsy-listing"
copy "$USER_SKILLS/content-draft" "everywhere/content-draft"
copy "$USER_SKILLS/idea-check" "everywhere/idea-check"
echo "synced"

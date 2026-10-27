# Laptop installation and migration checklist — 2026-10-28

Scope: MARANATHUS BIBLE and Living Word only. This is a checklist, not evidence of installation.

## Phase 0: before God-Worker shutdown / GPU removal
- [ ] Save open work and stop running local build/test processes safely.
- [ ] For every active repository, check git status, local branches, uncommitted and unpushed commits.
- [ ] Back up untracked/ignored source, Unity assets, local DB and configuration files not in GitHub.
- [ ] Record Unity Editor version from ProjectSettings/ProjectVersion.txt and required modules.
- [ ] Record Node version, package manager lockfiles, Python version and requirements, environment variables by NAME only.
- [ ] Back up credentials through a secure password manager; never put secrets in Git or shared documents.
- [ ] Record running Windows scheduled tasks, Desktop Commander and local agent configurations; avoid duplicate writers.
- [ ] Confirm GitHub repository access from laptop before retiring God-Worker.

## Phase 1: laptop baseline
- [ ] Record laptop OS, CPU, RAM, GPU, free SSD capacity and network stability.
- [ ] Install Git and configure SSH or secure credential manager.
- [ ] Install VS Code and only needed extensions.
- [ ] Install project-compatible Node.js LTS and npm (or lockfile-specified package manager).
- [ ] Install Python 3 only if existing scripts require it; use project virtual environments.
- [ ] Clone repositories into separate directories; verify commit SHA and status.
- [ ] Install Git LFS only if the repository uses LFS.
- [ ] Configure scoped credentials and .env files locally; check .gitignore.

## Phase 2: MARANATHUS BIBLE
- [ ] Identify authoritative source repository (not yet verified).
- [ ] Inspect package.json and lockfile before choosing Node version.
- [ ] Install dependencies from lockfile and run documented dev/build/test commands.
- [ ] Verify original-language datasets and licensing; do not download or publish restricted translations.
- [ ] Verify book/chapter navigation, original-text rendering, word lookup, notes/highlights.

## Phase 3: Living Word
- [ ] Clone God-Worker/maranathus-mobile and locate the actual Unity project directory.
- [ ] Install Unity Hub and exact Editor version in ProjectSettings/ProjectVersion.txt.
- [ ] Install platform modules only as needed (Android Build Support / SDK / NDK / OpenJDK).
- [ ] Install Visual Studio or build tools only if required by project build target.
- [ ] Confirm laptop graphics capability before launching Unity/PlayMode.
- [ ] Run non-destructive static tests first; then EditMode; then PlayMode/build if supported.
- [ ] Preserve PlayerPrefs and user data; never overwrite active test profiles.
- [ ] Compare build artifacts and hashes; do not assume historical tests remain valid.

## Phase 4: automation
- [ ] GitHub Actions CI (cloud) verified with run URL and success logs.
- [ ] Desktop Commander Remote optional; do not reinstall unless needed.
- [ ] AI coding agent setup is separate from GitHub Actions and may require subscription/API usage approval.
- [ ] Configure laptop sleep/power behavior if running local jobs; do not require 24/7 laptop uptime.
- [ ] Single-writer protection and non-destructive branch/PR workflow validated.
- [ ] Do not stop existing scheduled tasks until their ownership and dependencies are audited.

## Not needed for current focus
- NOAH/Bedrock tools, Cheongbing collector development tools, Worship Setlist-specific stack, crypto trading software.
- Do not install unrelated software by default.

## Acceptance evidence
Laptop specs; tool versions; repository URLs and SHAs; dependency install logs; test command/results; Unity Editor version; build artifact paths/hashes; unresolved blockers.

## Safety
No purchases, forced migrations, deletion, public release, secrets disclosure, or main merges without approval.

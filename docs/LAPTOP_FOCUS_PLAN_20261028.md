# MARANATHUS Laptop-First Focus Plan
Date: 2026-10-28 (KST). Planning allocation, not a claim of execution.

## Capacity allocation (new development effort)
P1 Cheongbing 40%: stabilize collector and user-facing search; verify source freshness, links, deduplication, test runs.
P2 MARANATHUS BIBLE 35%: locate authoritative source, establish lightweight PWA baseline, book/chapter navigation, original-text provenance.
P3 MARANATHUS OS + Website 15%: single issue queue, reporting, cloud validation, uptime/permissions checks.
P4 Worship Setlist 10%: minimal feature spec and licensing inventory; defer large implementation.
P5 NOAH: preservation and critical fixes only; no graphics-heavy Bedrock testing until hardware validated.
P6 Living Word: preservation and critical fixes only; no Unity GPU-dependent testing until hardware validated.
Other content/media/paper-investing tasks: existing independent workflows; no new laptop development capacity allocated.

## Laptop cutover checklist
1. Identify laptop CPU/RAM/GPU/OS/storage and Unity/Bedrock feasibility.
2. On God-Worker before shutdown: inspect git status, unpushed commits, untracked files, working copies, backup and secrets inventory; do not assume GitHub is complete.
3. Confirm repository access and use separate laptop workspace clones.
4. Install Git/Node/Python as needed, use least-privilege credentials and scoped secrets; never commit credentials.
5. Validate Cheongbing tests, website checks, and BIBLE PWA baseline individually.
6. Check scheduled jobs to prevent laptop and cloud duplicate writers.
7. Enable local automation only after one successful controlled pilot and log review.
8. Ensure laptop is on AC power with appropriate sleep policy; no forced 24/7 operation.

## Success criteria (14 days after cutover)
- Cheongbing: reproducible green tests and freshness/deduplication report.
- BIBLE: locally runnable minimal PWA and documented text rights.
- OS: each active job has one owner and verifiable status.
- No unexpected main-branch writes, real trades, paid usage or public deployments.

## Guardrails
No deletion, forced deployment, billing, account changes, credential sharing, or real-money trading without explicit approval. Do not shut down or change God-Worker remotely.
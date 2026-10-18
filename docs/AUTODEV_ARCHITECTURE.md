# MARANATHUS Hybrid AutoDev — Pilot
Status: pilot / not deployed. No existing automation is disabled.

## Execution boundary
- GitHub: canonical source, issues, PR review, CI evidence and audit history.
- Cloud GitHub Actions: deterministic, bounded validation jobs; never assume Actions can write code without a separately configured coding agent.
- God-Worker Windows: Unity/Bedrock build and device-specific checks, only after inventory and runner safety review.
- Desktop Commander Remote: inspection and exceptional intervention, not a required development dependency.

## Rollout gates
1. Inventory current Windows tasks, scripts, credentials, branch writers, and game build prerequisites. Read-only.
2. Establish safe CI for this repository on a non-production branch.
3. Define issue -> isolated branch -> implementation -> independent review -> CI -> PR approval -> merge.
4. Pilot a single small non-destructive change; record commit, test outcome, artifact and rollback.
5. Expand one repository at a time after verified success.

## Safety
- No unattended writes to main; no automatic merges, deploys, purchases, credential changes or deletions.
- No concurrent writers in the same worktree; use per-task isolated worktrees.
- Max two automated fix attempts per task; stop and escalate after repeated failures.
- Do not run Unity tests against live PlayerPrefs or mutate active Unity projects.
- Secrets only in scoped secret stores; never in logs or repository.
- Default cash spend 0 KRW; monitor GitHub Actions quotas and stop before paid overage.
- Report status as VERIFIED only with commit SHA, workflow run and successful artifact/test evidence.

## Per-project split
- NOAH: static pack validation in cloud; Bedrock gameplay on supported Windows/device runner.
- Living Word: code checks in cloud; Unity license-aware build/test on controlled Windows runner.
- MARANATHUS BIBLE: web checks, schema/data provenance tests in cloud; content licensing gates.
- Cheongbing: collector fixtures and link validation with rate limits, no unauthorized scraping.
- Website: lint/build/preview checks; public deployment requires approval.

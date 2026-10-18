# MARANATHUS OS — Single Operating Model
Status: proposed rollout, not production-enabled.
Central control plane: God-Worker/maranathus-mission.
Product source repositories remain independent. Never relocate or rewrite source history as part of consolidation.

## Organization
Founder (direction, budget, theology, release approval)
  -> Chief AI / Portfolio Control (one priority queue, status, allocation)
     -> Product & Tech (NOAH, Mobile 001, Living Word, MARANATHUS BIBLE, Cheongbing, Worship Setlist, Website)
     -> Content & Media (Torah research, sermons, Suno/media)
     -> Business & Ops (support applications, security, finance/paper trading, infrastructure)

## Single source of truth
- Central project registry: docs/PROJECT_REGISTRY.csv
- Global status: docs/PORTFOLIO_STATUS.md
- Work requests: GitHub Issues with project ID and acceptance criteria
- Implementation: isolated branch/worktree in owning repository
- Proof of completion: commit SHA, PR, tests, build artifact and reviewer decision
- No status without evidence; unknown remains UNKNOWN.

## Execution pipeline
INTAKE -> TRIAGE -> CLAIM (single writer) -> IMPLEMENT -> REVIEW -> TEST -> PR -> APPROVAL -> RELEASE.
Automatic bounded repair may retry at most twice; on third failure mark BLOCKED.
Never auto-merge to main, release publicly, trade real funds, buy services, change accounts or delete important data.

## Infrastructure
Cloud GitHub Actions for source validation, data checks and web builds.
God-Worker for Windows/Unity/Bedrock/device-only builds.
Desktop Commander Remote for exceptional inspection, not the automation engine.
An AI coding agent requires separate setup; Actions alone do not generate code.
No new spending without Founder approval; avoid exceeding free CI limits.

## Migration
1. Keep existing 5 enabled ChatGPT automations intact until task ownership audit.
2. Register projects and assign one authoritative repository/owner per job.
3. Add non-destructive validation workflow per project.
4. Pilot one isolated end-to-end task with tests and PR.
5. Roll out sequentially after evidence; retire duplicates only after explicit verification.

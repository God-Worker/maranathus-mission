# MARANATHUS AutoDev Pilot Runbook

## Before activating a runner
- Confirm existing God-Worker tasks and process owners; do not duplicate watchdogs.
- Check repository permissions, protected branches, Actions availability and quotas.
- Establish a single-writer lock for each repository/worktree.
- Record baseline test results and source commit.
- Test rollback on a disposable branch before enabling any auto-coding agent.

## Job lifecycle
QUEUED -> CLAIMED -> IMPLEMENTED -> REVIEWED -> TESTED -> PR_OPEN -> APPROVED -> DONE.
On failure: BLOCKED with error log, command, source SHA and owner.

## STOP conditions
- Budget would exceed 0 KRW without approval.
- Test modifies live user data or production Unity state.
- Unknown running process owns the worktree.
- Repeated failure, missing credentials, license uncertainty, or potential destructive operation.
- Any unexpected main branch modification or public deployment request.

## Report evidence
Project | source SHA | task/PR | test command | CI run | artifact | verified status | blocker.

## Current status
This pilot introduces only documentation and a manual/PR-triggered GitHub Actions workflow.
It does not install a Windows agent, start autonomous coding, enable deployment, or claim project builds passed.

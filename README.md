# Sentinel Playground

Test repository for the **Sentinel Ghost Killer** GitHub Action.

## Expected Behavior

This repository is intentionally configured to **FAIL** the Sentinel check:

- ✅ **axios** is declared in `dependencies` and IS imported in `src/index.ts`
- ❌ **lodash** is declared in `dependencies` but is NOT imported anywhere (GHOST!)

When you create a Pull Request, Sentinel should:

1. Detect that `lodash` is unused
2. Fail the workflow
3. Report `lodash` as a ghost dependency

## Testing Instructions

1. Push this repository to GitHub
2. Create a new branch: `git checkout -b test-sentinel`
3. Make any small change (e.g., add a comment)
4. Create a Pull Request
5. Watch the Sentinel action catch the ghost!

## To Fix (Make it Pass)

Remove `lodash` from dependencies in `package.json`, then the workflow will pass.

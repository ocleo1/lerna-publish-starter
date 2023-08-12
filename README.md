# NPM Publish by using Lerna

[TOC]

## Requirements

- npm >=7. It starts support workspace. Node v16 shipped with npm v8, recommended.
- lerna =6. v7 has bootstrap and other commands deprecated.
- Others. Check `package.json` engines.

## Initialization

1. `npx lerna@6 clean --yes`
2. `npx lerna@6 bootstrap --force-local`

## Publish

1. `npx lerna@6 run build`
2. `npx lerna@6 version [major | minor | patch | premajor | preminor | prepatch | prerelease]`
3. `npx lerna@6 publish from-git`

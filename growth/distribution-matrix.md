# Distribution Matrix

This matrix separates actions Codex can prepare automatically from actions that require human approval because they post publicly, spend money, or touch third-party accounts.

## Automatic

| Channel | Action | Output |
| --- | --- | --- |
| GitHub repo | Improve README, releases, examples, SEO pages | Commit + Release |
| GitHub research | Find permissive-license targets | Target list |
| SEO | Create guide/comparison/tool pages | HTML + sitemap |
| Content | Draft Reddit, HN, dev.to, X, LinkedIn posts | Markdown drafts |
| Video | Draft shorts scripts and shot lists | Markdown scripts |
| Tracking | Generate UTM links | `node tools/utm-builder.mjs` |
| Packaging | Add growth assets to zip releases | Release assets |

## Needs Approval

| Channel | Why |
| --- | --- |
| Reddit posting | Public account reputation and subreddit rules |
| YouTube/TikTok upload | Public account action and content policy |
| Amazon listing | Marketplace policy, billing, refunds |
| Pull requests to upstream repos | Public GitHub action and maintainer trust |
| Paid ads | Spend and account risk |
| Email/DM outreach | Anti-spam and sender reputation |

## First Approved Batch

1. Publish one Reddit experience post to one relevant subreddit.
2. Upload one short video using Script 1.
3. Create one permissive-license fork with a real TKEN provider preset.
4. Submit one useful PR only if the upstream repo welcomes provider examples.
5. Track all links with campaign-specific UTM parameters.

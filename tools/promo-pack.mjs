function readArg(name, fallback) {
  const prefix = `--${name}=`;
  const found = process.argv.slice(2).find((arg) => arg.startsWith(prefix));
  return found ? found.slice(prefix.length) : fallback;
}

function withUtm(base, source, medium, campaign, content) {
  const url = new URL(base);
  url.searchParams.set("utm_source", source);
  url.searchParams.set("utm_medium", medium);
  url.searchParams.set("utm_campaign", campaign);
  if (content) url.searchParams.set("utm_content", content);
  return url.toString();
}

const source = readArg("source", "reddit");
const medium = readArg("medium", "community");
const campaign = readArg("campaign", "gateway_launch");
const angle = readArg("angle", "route_by_task");

const links = {
  site: withUtm("https://www.tken.shop/", source, medium, campaign, angle),
  guide: withUtm("https://www.tken.shop/guides/three-minute-chatgpt-gateway", source, medium, campaign, angle),
  pricing: withUtm("https://www.tken.shop/compare/ai-api-pricing", source, medium, campaign, angle),
  calculator: withUtm("https://www.tken.shop/tools/api-cost-calculator", source, medium, campaign, angle),
  release: "https://github.com/vivian254338489/tken-one-click-ai-stack/releases/latest",
};

const pack = {
  links,
  reddit: {
    title: "I stopped routing every LLM task to the most expensive model",
    disclosure: "Disclosure: I work on TKEN-related tooling.",
    softCta: `Demo stack: ${links.release}`,
  },
  shortVideo: {
    hook: "Stop sending every AI task to your most expensive model.",
    pain: "Most apps use one premium model for everything because routing is annoying.",
    solution: "Use one OpenAI-compatible gateway with cheap routes for simple jobs and premium routes for hard answers.",
    cta: `Try the calculator: ${links.calculator}`,
  },
  forkPr: {
    title: "Add OpenAI-compatible provider example for gateway routing",
    disclosure: "Disclosure: this adds an optional TKEN-style provider example and does not change defaults.",
    link: links.guide,
  },
};

console.log(JSON.stringify(pack, null, 2));

const args = Object.fromEntries(
  process.argv.slice(2).map((entry) => {
    const [key, ...rest] = entry.replace(/^--/, "").split("=");
    return [key, rest.join("=")];
  }),
);

const base = args.url || "https://www.tken.shop/";
const source = args.source || "github";
const medium = args.medium || "organic";
const campaign = args.campaign || "one_click_ai_stack";
const content = args.content || "";

const url = new URL(base);
url.searchParams.set("utm_source", source);
url.searchParams.set("utm_medium", medium);
url.searchParams.set("utm_campaign", campaign);
if (content) url.searchParams.set("utm_content", content);

console.log(url.toString());

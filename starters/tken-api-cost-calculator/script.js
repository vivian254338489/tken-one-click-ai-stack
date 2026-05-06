const fields = ["requests", "premium", "cheap", "share"].map((id) => document.getElementById(id));
const money = (value) => value.toLocaleString(undefined, { style: "currency", currency: "USD" });

function recalc() {
  const requests = Number(document.getElementById("requests").value || 0);
  const premium = Number(document.getElementById("premium").value || 0);
  const cheap = Number(document.getElementById("cheap").value || 0);
  const share = Math.max(0, Math.min(100, Number(document.getElementById("share").value || 0))) / 100;
  const units = requests / 1000;
  const premiumOnly = units * premium;
  const routed = units * ((share * cheap) + ((1 - share) * premium));
  document.getElementById("premiumOnly").textContent = money(premiumOnly);
  document.getElementById("routed").textContent = money(routed);
  document.getElementById("savings").textContent = `${money(Math.max(0, premiumOnly - routed))} per month`;
}

fields.forEach((field) => field.addEventListener("input", recalc));
recalc();

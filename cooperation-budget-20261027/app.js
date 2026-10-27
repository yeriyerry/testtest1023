const applications = [
  {
    "지자체명": "가람군",
    "인구수": 30000,
    "신청액": 250000
  },
  {
    "지자체명": "나봄시",
    "인구수": 45000,
    "신청액": 500000
  },
  {
    "지자체명": "다솔구",
    "인구수": 80000,
    "신청액": 600000
  },
  {
    "지자체명": "라윤시",
    "인구수": 60000,
    "신청액": 700000
  },
  {
    "지자체명": "마을군",
    "인구수": 25000,
    "신청액": 200000
  },
  {
    "지자체명": "바람시",
    "인구수": 100000,
    "신청액": 950000
  },
  {
    "지자체명": "사계구",
    "인구수": 55000,
    "신청액": 600000
  },
  {
    "지자체명": "아현시",
    "인구수": 70000,
    "신청액": 650000
  },
  {
    "지자체명": "자연군",
    "인구수": 40000,
    "신청액": 380000
  },
  {
    "지자체명": "차돌시",
    "인구수": 90000,
    "신청액": 880000
  }
];
const decide = (population, requested) => requested > population * 10 ? "반려" : "승인";
function render() {
  const tbody = document.querySelector("#results");
  let approved = 0, rejected = 0, total = 0;
  const format = value => new Intl.NumberFormat("ko-KR").format(value);
  for (const item of applications) {
    const cap = item.인구수 * 10;
    const status = decide(item.인구수, item.신청액);
    if (status === "승인") { approved++; total += item.신청액; } else { rejected++; }
    const tr = document.createElement("tr");
    for (const value of [item.지자체명, format(item.인구수), format(item.신청액), format(cap)]) {
      const td = document.createElement("td"); td.textContent = value; tr.appendChild(td);
    }
    const td = document.createElement("td"), badge = document.createElement("span");
    badge.textContent = status; badge.className = "badge " + (status === "승인" ? "yes" : "no");
    td.appendChild(badge); tr.appendChild(td); tbody.appendChild(tr);
  }
  document.querySelector("#approved").textContent = format(approved) + "건";
  document.querySelector("#rejected").textContent = format(rejected) + "건";
  document.querySelector("#approved-total").textContent = format(total);
}
render();

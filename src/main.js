const resume = {
  skills: [
    { title: "Java 基础", tag: "Core", text: "熟练掌握 JavaSE、集合、I/O、多线程与 JUC 并发编程。" },
    { title: "JVM", tag: "Runtime", text: "熟悉运行时内存区域、垃圾回收算法、类加载过程。" },
    { title: "数据库与缓存", tag: "Data", text: "熟悉 MySQL 库表设计、SQL、索引、事务、锁机制；掌握 Redis 缓存与分布式锁。" },
    { title: "后端框架", tag: "Service", text: "熟悉 Spring、SpringBoot、MyBatisPlus、RocketMQ、Redisson。" },
    { title: "AI / LLM", tag: "Agent", text: "具备 AI Agent 开发经验，熟悉 DeepSeek、Ollama、大模型集成、Prompt Engineering、MCP 与 Skills。" },
    { title: "检索工程", tag: "RAG", text: "自研 7 层混合检索管线：查询改写、多路并行召回、RRF 融合排序，应用于面试问答和 JD。" },
    { title: "工程工具", tag: "Tooling", text: "熟练使用 Maven、Git、IDEA、Apifox 等开发调试工具。" }
  ],
  internships: [
    {
      company: "北京互远志联科技有限公司",
      role: "AI 应用开发实习生",
      place: "成都",
      time: "2026.05 - 至今",
      points: ["参与 AI 应用开发与 Agent 工程流程沉淀。", "围绕大模型、检索、自动化执行链路进行产品化落地。"]
    },
    {
      company: "凯蓝管理有限公司",
      role: "Java 开发实习生",
      place: "重庆",
      time: "2025.04 - 2025.09",
      summary: "参与核心营销系统“老客召回平台”的后端开发与维护，平台面向 TheGreenParty 用户画像、价值分层与流失用户精准召回，总量约 5000 万用户数据。",
      points: [
        "短信发送防超发：用 Redis Lua 将查询配额、判断、扣减合并为原子操作，消除分布式竞态窗口。",
        "海量用户扫描与 A/B 实验：XXL-Job 分片广播配合用户 ID 取模，实现分布式并行扫表与实验分桶。",
        "营销短链生成：Base62 编码结合用户 ID 与券包金额绑定校验，Redis 原子自增保证多机编码不碰撞。",
        "消息防重复：Redis 抢锁、MQ 确认去重、数据库唯一索引三层兜底，确保重复投递只生效一次。"
      ]
    }
  ],
  project: {
    name: "Job AI 全自动化系统",
    role: "独立开发",
    time: "2026.04 - 至今",
    link: "https://gitee.com/zysdzc/py-boss-ai",
    description: "基于 Playwright + FastAPI + Ollama + DeepSeek 的全流程求职自动化系统，覆盖岗位搜索、智能投递、模拟面试与 AI 自主沟通，日均处理 50+ HR 会话。",
    points: [
      "浏览器反检测：注入 JS 覆盖多维度浏览器指纹，高风险操作改用原生 DOM 事件模拟真人行为。",
      "Plan-then-Execute：一次 LLM 规划、零 LLM 确定性执行、异常时重规划，结合 14 个原子工具与 3 个复合技能，LLM 调用降低 60%+。",
      "RAG 链路优化：查询改写、话题路由、全文/关键词/embedding 三路召回、RRF 融合排序、低置信度二次检索，MRR 提升约 60%、Recall@5 提升约 70%。",
      "对话式面试引擎：基于 JD 语义检索匹配题目，按历史面试记录动态加权出题并追踪薄弱点。",
      "风控退避与消息检测：按风控类别分级指数退避，DB 层兜底未回复状态，确保消息覆盖。"
    ]
  }
};

const stickerFiles = ["basketball-large", "tiktok-logo", "boy-holding-ball", "arm-sleeve", "blue-orange-sneaker", "orange-sneaker", "jump-shot-boy", "whistle", "water-bottle", "basket-hoop", "running-girl", "running-boy", "jersey-5", "trophy"];

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function createSkillTile(skill, index, isClone = false) {
  const tile = el("article", "skill-tile");
  tile.tabIndex = isClone ? -1 : 0;
  tile.style.setProperty("--tilt", index % 2 ? "1.5deg" : "-1.2deg");
  if (isClone) tile.setAttribute("aria-hidden", "true");
  const sticker = el("img", "skill-sticker");
  sticker.src = "./public/assets/stickers/" + stickerFiles[(index * 2 + 3) % stickerFiles.length] + ".png";
  sticker.alt = "";
  tile.append(sticker, el("span", "", skill.tag), el("h3", "", skill.title), el("p", "", skill.text), el("small", "", "Hover to unlock"));
  return tile;
}

function renderSkills() {
  const grid = document.querySelector("#skillGrid");
  if (!grid) return;
  const track = el("div", "skill-marquee-track");
  const originalSet = el("div", "skill-marquee-set");
  const cloneSet = el("div", "skill-marquee-set");
  cloneSet.setAttribute("aria-hidden", "true");
  resume.skills.forEach((skill, index) => {
    originalSet.append(createSkillTile(skill, index));
    cloneSet.append(createSkillTile(skill, index, true));
  });
  track.append(originalSet, cloneSet);
  grid.append(track);
}

function renderTimeline() {
  const timeline = document.querySelector("#timeline");
  if (!timeline) return;
  resume.internships.forEach((item, index) => {
    const article = el("article", "timeline-item");
    article.append(el("div", "timeline-marker", String(index + 1).padStart(2, "0")));
    const content = el("div", "timeline-content");
    content.append(el("p", "meta", item.time + " / " + item.place), el("h3", "", item.company), el("strong", "", item.role));
    if (item.summary) content.append(el("p", "", item.summary));
    const list = el("ul");
    item.points.forEach((point) => list.append(el("li", "", point)));
    content.append(list);
    article.append(content);
    timeline.append(article);
  });
}

function renderProject() {
  const board = document.querySelector("#projectBoard");
  if (!board) return;
  const intro = el("div", "project-intro");
  intro.append(el("p", "meta", resume.project.time + " / " + resume.project.role), el("h3", "", resume.project.name), el("p", "", resume.project.description));
  const link = el("a", "", "Gitee 项目地址");
  link.href = resume.project.link;
  link.target = "_blank";
  link.rel = "noreferrer";
  intro.append(link);
  const cards = el("div", "project-cards");
  resume.project.points.forEach((point, index) => {
    const card = el("article");
    const img = el("img");
    img.src = "./public/assets/stickers/" + stickerFiles[index % stickerFiles.length] + ".png";
    img.alt = "";
    card.append(img, el("span", "", String(index + 1).padStart(2, "0")), el("p", "", point));
    cards.append(card);
  });
  board.append(intro, cards);
}

function wireCursorGlow() {
  const cursorGlow = document.querySelector(".cursor-glow");
  if (!cursorGlow) return;
  window.addEventListener("pointermove", (event) => {
    cursorGlow.style.setProperty("--x", event.clientX + "px");
    cursorGlow.style.setProperty("--y", event.clientY + "px");
  });
}

function wireSkillMotion() {
  document.querySelectorAll(".skill-tile").forEach((tile) => {
    tile.addEventListener("pointermove", (event) => {
      const rect = tile.getBoundingClientRect();
      tile.style.setProperty("--mx", ((event.clientX - rect.left) / rect.width) * 100 + "%");
      tile.style.setProperty("--my", ((event.clientY - rect.top) / rect.height) * 100 + "%");
    });
  });
}

function wireReveal() {
  const blocks = document.querySelectorAll(".reveal-block");
  const children = document.querySelectorAll(".skill-tile, .timeline-item, .project-cards article, .flow-steps li");
  if (!("IntersectionObserver" in window)) {
    [...blocks, ...children].forEach((node) => node.classList.add("is-visible"));
    return;
  }
  const blockObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("is-visible", entry.isIntersecting);
    });
  }, { threshold: 0.24, rootMargin: "-8% 0px -18% 0px" });
  const childObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("is-visible", entry.isIntersecting);
    });
  }, { threshold: 0.2, rootMargin: "-4% 0px -12% 0px" });
  blocks.forEach((node) => blockObserver.observe(node));
  children.forEach((node) => childObserver.observe(node));
}

function wireScrollState() {
  const topbar = document.querySelector(".topbar");
  const navProgress = document.querySelector(".nav-progress span");
  const links = Array.from(document.querySelectorAll(".nav a[data-section]"));
  const sections = ["contact", "skills", "internships", "projects"];
  function update() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const progress = max > 0 ? Math.min(1, window.scrollY / max) : 0;
    if (navProgress) navProgress.style.transform = "scaleX(" + progress + ")";
    if (topbar) topbar.dataset.state = window.scrollY > 18 ? "scrolled" : "top";
    let active = "";
    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section && section.getBoundingClientRect().top < window.innerHeight * 0.42) active = id;
    });
    links.forEach((link) => link.classList.toggle("is-active", link.dataset.section === active));
  }
  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
}

function wireContactActions() {
  const toast = document.querySelector(".contact-toast");
  document.querySelectorAll(".action-card[data-copy]").forEach((card) => {
    card.addEventListener("click", () => {
      const value = card.dataset.copy;
      if (navigator.clipboard && value) navigator.clipboard.writeText(value).catch(() => {});
      if (!toast) return;
      toast.textContent = card.dataset.toast || "联系方式已复制";
      toast.classList.add("is-visible");
      window.clearTimeout(window.__contactToastTimer);
      window.__contactToastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 1800);
    });
  });
}

function markModelReady() {
  const model = document.querySelector(".portrait-model");
  if (!model) return;
  model.addEventListener("load", () => model.classList.add("is-loaded"));
  model.addEventListener("error", () => model.classList.add("has-error"));
}

document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderTimeline();
  renderProject();
  wireCursorGlow();
  wireReveal();
  wireSkillMotion();
  wireScrollState();
  wireContactActions();
  markModelReady();
});

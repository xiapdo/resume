export const resume = {
  name: "董真材",
  role: "Java 后端 / AI Agent 开发工程师",
  profile: "熟悉 Java 后端工程、分布式一致性、消息幂等与 AI Agent/RAG 系统落地，偏好把复杂流程拆成可验证、可复用的工程链路。",
  contact: { phone: "19112088223", email: "3283524938@qq.com", gender: "男", age: "21" },
  education: { school: "重庆邮电大学移通学院", major: "电气工程及其自动化（本科）", graduation: "2027-6" },
  skills: [
    { title: "Java 基础", tag: "Core", text: "熟练掌握 JavaSE、集合、I/O、多线程与 JUC 并发编程。" },
    { title: "JVM", tag: "Runtime", text: "熟悉运行时内存区域、垃圾回收算法、类加载过程。" },
    { title: "数据库与缓存", tag: "Data", text: "熟悉 MySQL 库表设计、SQL、索引、事务、锁机制；掌握 Redis 缓存与分布式锁。" },
    { title: "后端框架", tag: "Service", text: "熟悉 Spring、SpringBoot、MyBatisPlus、RocketMQ、Redisson。" },
    { title: "AI / LLM", tag: "Agent", text: "具备 AI Agent 开发经验，熟悉 DeepSeek、Ollama、大模型集成、Prompt Engineering、MCP 与 Skills。" },
    { title: "检索工程", tag: "RAG", text: "自研 7 层混合检索管线：查询改写、多路并行召回、RRF 融合排序，应用于面试问答和 JD。" },
    { title: "工程工具", tag: "Tooling", text: "熟练使用 Maven、Git、IDEA、Apifox 等开发调试工具。" },
  ],
  internships: [
    { company: "北京互远志联科技有限公司", role: "AI 应用开发实习生", place: "成都", time: "2026.05 - 至今", points: ["参与 AI 应用开发与 Agent 工程流程沉淀。", "围绕大模型、检索、自动化执行链路进行产品化落地。"] },
    { company: "凯蓝管理有限公司", role: "Java 开发实习生", place: "重庆", time: "2025.04 - 2025.09", summary: "参与核心营销系统“老客召回平台”的后端开发与维护，平台面向 TheGreenParty 用户画像、价值分层与流失用户精准召回，总量约 5000 万用户数据。", points: ["短信发送防超发：用 Redis Lua 将查询配额、判断、扣减合并为原子操作，消除分布式竞态窗口。", "海量用户扫描与 A/B 实验：XXL-Job 分片广播配合用户 ID 取模，实现分布式并行扫表与实验分桶。", "营销短链生成：Base62 编码结合用户 ID 与券包金额绑定校验，Redis 原子自增保证多机编码不碰撞。", "消息防重复：Redis 抢锁、MQ 确认去重、数据库唯一索引三层兜底，确保重复投递只生效一次。"] },
  ],
  project: {
    name: "Job AI 全自动化系统",
    role: "独立开发",
    time: "2026.04 - 至今",
    link: "https://gitee.com/zysdzc/py-boss-ai",
    description: "基于 Playwright + FastAPI + Ollama + DeepSeek 的全流程求职自动化系统，覆盖岗位搜索、智能投递、模拟面试与 AI 自主沟通，日均处理 50+ HR 会话。",
    points: ["浏览器反检测：注入 JS 覆盖多维度浏览器指纹，高风险操作改用原生 DOM 事件模拟真人行为。", "Plan-then-Execute：一次 LLM 规划、零 LLM 确定性执行、异常时重规划，结合 14 个原子工具与 3 个复合技能，LLM 调用降低 60%+。", "RAG 链路优化：查询改写、话题路由、全文/关键词/embedding 三路召回、RRF 融合排序、低置信度二次检索，MRR 提升约 60%、Recall@5 提升约 70%。", "对话式面试引擎：基于 JD 语义检索匹配题目，按历史面试记录动态加权出题并追踪薄弱点。", "风控退避与消息检测：按风控类别分级指数退避，DB 层兜底未回复状态，确保消息覆盖。"],
  },
};

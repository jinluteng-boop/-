const paperBank = {
    1: {
        single: [
            { q: "某住宅小区建筑高度大于多少米为高层？", opts: ["A.24m", "B.27m", "C.30m", "D.33m"], ans: "B", exp: "住宅≥27m为高层" },
            { q: "跨度≥4m的梁板模板是否需要起拱？", opts: ["A.不需要", "B.需要", "C.看情况", "D.随意"], ans: "B", exp: "≥4m必须起拱" },
            { q: "水泥初凝时间不得少于？", opts: ["A.30min", "B.45min", "C.60min", "D.90min"], ans: "B", exp: "≥45min" },
            { q: "大体积混凝土优先用什么水泥？", opts: ["A.硅酸盐", "B.普通", "C.矿渣", "D.快硬"], ans: "C", exp: "低热水泥" },
            { q: "砌体水平灰缝饱满度≥？", opts: ["A.70%", "B.80%", "C.90%", "D.100%"], ans: "B", exp: "≥80%" },
            { q: "高处作业最低高度？", opts: ["A.1.5m", "B.2m", "C.2.5m", "D.3m"], ans: "B", exp: "≥2m" },
            { q: "市区围挡高度≥？", opts: ["A.1.8m", "B.2.0m", "C.2.5m", "D.3.0m"], ans: "C", exp: "≥2.5m" },
            { q: "防水工程保修几年？", opts: ["A.2", "B.3", "C.5", "D.10"], ans: "C", exp: "5年" },
            { q: "索赔时限？", opts: ["A.14d", "B.28d", "C.30d", "D.56d"], ans: "B", exp: "28天" },
            { q: "临时用电原则？", opts: ["A.三级配电两级保护", "B.两级配电三级保护"], ans: "A", exp: "三级配电两级保护" },
            { q: "安全事故上报时间？", opts: ["A.0.5h", "B.1h", "C.2h", "D.4h"], ans: "B", exp: "1小时内" },
            { q: "24m以上防护栏杆高度≥？", opts: ["A.1.05m", "B.1.10m", "C.1.20m", "D.1.50m"], ans: "B", exp: "≥1.10m" },
            { q: "普通混凝土养护≥？", opts: ["A.7d", "B.14d", "C.21d", "D.28d"], ans: "A", exp: "≥7天" },
            { q: "检验批一般项目≥？", opts: ["A.70%", "B.80%", "C.90%", "D.100%"], ans: "B", exp: "≥80%" },
            { q: "分部工程谁组织验收？", opts: ["A.项目经理", "B.总监", "C.甲方", "D.监理"], ans: "B", exp: "总监理工程师" },
            { q: "挡脚板高度≥？", opts: ["A.120mm", "B.180mm", "C.200mm", "D.150mm"], ans: "B", exp: "≥180mm" },
            { q: "卷材搭接≥？", opts: ["A.80mm", "B.100mm", "C.120mm", "D.150mm"], ans: "B", exp: "≥100mm" },
            { q: "关键线路总时差？", opts: ["A.>0", "B.=0", "C.<0", "D.任意"], ans: "B", exp: "=0" },
            { q: "装修保修几年？", opts: ["A.1", "B.2", "C.3", "D.5"], ans: "B", exp: "2年" },
            { q: "隐蔽工程必须？", opts: ["A.先验收后覆盖", "B.先覆盖后验收"], ans: "A", exp: "先验收后覆盖" }
        ],
        multi: [
            { q: "大体积混凝土防裂措施", opts: ["A.低热水泥", "B.分层", "C.保温", "D.后浇带"], ans: ["A", "B", "C", "D"], exp: "全对" },
            { q: "索赔条件", opts: ["A.非乙方", "B.有损失", "C.按时", "D.自己错"], ans: ["A", "B", "C"], exp: "ABC" },
            { q: "危大工程", opts: ["A.深基坑", "B.模板", "C.脚手架", "D.抹灰"], ans: ["A", "B", "C"], exp: "ABC" },
            { q: "室内环境检测", opts: ["A.甲醛", "B.苯", "C.氨", "D.TVOC"], ans: ["A", "B", "C", "D"], exp: "全对" },
            { q: "临时用电", opts: ["A.一机一闸", "B.一漏一箱", "C.三级配电", "D.两级保护"], ans: ["A", "B", "C", "D"], exp: "全对" },
            { q: "混凝土裂缝原因", opts: ["A.材料", "B.养护", "C.温度", "D.沉降"], ans: ["A", "B", "C", "D"], exp: "全对" },
            { q: "高处防护", opts: ["A.高挂低用", "B.栏杆", "C.挡脚板", "D.攀爬"], ans: ["A", "B", "C"], exp: "ABC" },
            { q: "节能分部", opts: ["A.墙体", "B.门窗", "C.屋面", "D.幕墙"], ans: ["A", "B", "C", "D"], exp: "全对" },
            { q: "合同解释顺序", opts: ["A.协议", "B.中标", "C.投标", "D.专用"], ans: ["A", "B", "C", "D"], exp: "全对" },
            { q: "文明施工", opts: ["A.围挡", "B.硬化", "C.降尘", "D.降噪"], ans: ["A", "B", "C", "D"], exp: "全对" }
        ],
        case: [
            { q: "索赔成立三条件？", ans: "非乙方原因、有实际损失、28天内上报" },
            { q: "大体积混凝土防裂措施？", ans: "低热水泥、分层浇筑、保温养护、后浇带" },
            { q: "危大工程有哪些？", ans: "深基坑、模板、脚手架、吊装、拆除" },
            { q: "临时用电三级配电两级保护？", ans: "总箱→分配电箱→开关箱；总箱、开关箱设漏电保护" }
        ]
    },
    2: {
        single: [
            { q: "公共建筑大于多少米为高层？", opts: ["A.24m", "B.27m", "C.30m", "D.33m"], ans: "A", exp: "公共≥24m" },
            { q: "悬挑构件拆模强度？", opts: ["A.50%", "B.75%", "C.80%", "D.100%"], ans: "D", exp: "必须100%" },
            { q: "水泥终凝不超过？", opts: ["A.4h", "B.6.5h", "C.8h", "D.10h"], ans: "B", exp: "≤6.5h" },
            { q: "砌体斜槎长度≥高度的？", opts: ["A.1/2", "B.2/3", "C.3/4", "D.1/3"], ans: "B", exp: "≥2/3" },
            { q: "拆模顺序？", opts: ["A.先支先拆", "B.先支后拆", "C.同时", "D.随意"], ans: "B", exp: "先支后拆" },
            { q: "消防通道宽≥？", opts: ["A.2m", "B.3m", "C.4m", "D.5m"], ans: "C", exp: "≥4m" },
            { q: "外墙保温保修？", opts: ["A.2", "B.3", "C.5", "D.10"], ans: "C", exp: "5年" },
            { q: "TN-S系统是？", opts: ["A.三相三线", "B.三相四线", "C.三相五线", "D.两相三线"], ans: "C", exp: "三相五线" },
            { q: "每日砌筑高度≤？", opts: ["A.1.2m", "B.1.5m", "C.1.8m", "D.2.0m"], ans: "B", exp: "≤1.5m" },
            { q: "屋面分格缝间距≤？", opts: ["A.3m", "B.4m", "C.6m", "D.9m"], ans: "C", exp: "≤6m" },
            { q: "连墙件必须是？", opts: ["A.柔性", "B.刚性", "C.可不设", "D.铁丝"], ans: "B", exp: "刚性连接" },
            { q: "竣工验收谁组织？", opts: ["A.施工", "B.监理", "C.建设", "D.设计"], ans: "C", exp: "建设单位" },
            { q: "夜间施工时段？", opts: ["A.20:00-6:00", "B.22:00-6:00", "C.23:00-7:00", "D.21:00-5:00"], ans: "B", exp: "22点-6点" },
            { q: "后浇带保留≥？", opts: ["A.7d", "B.14d", "C.28d", "D.42d"], ans: "C", exp: "≥28天" },
            { q: "卫生间蓄水试验≥？", opts: ["A.12h", "B.24h", "C.36h", "D.48h"], ans: "B", exp: "≥24h" },
            { q: "深基坑深度≥？", opts: ["A.3m", "B.5m", "C.6m", "D.8m"], ans: "B", exp: "≥5m" },
            { q: "防水混凝土养护≥？", opts: ["A.7d", "B.14d", "C.21d", "D.28d"], ans: "B", exp: "≥14d" },
            { q: "小砌块龄期≥？", opts: ["A.7d", "B.14d", "C.28d", "D.30d"], ans: "C", exp: "≥28d" },
            { q: "安全文明施工费预付≥？", opts: ["A.30%", "B.40%", "C.50%", "D.60%"], ans: "C", exp: "≥50%" },
            { q: "防火重点部位？", opts: ["A.办公区", "B.木工棚", "C.宿舍", "D.围墙"], ans: "B", exp: "木工棚、易燃区" }
        ],
        multi: [
            { q: "拆模顺序", opts: ["A.先支后拆", "B.后支先拆", "C.先非承重", "D.先承重"], ans: ["A", "B", "C"], exp: "ABC" },
            { q: "不能留脚手眼的部位", opts: ["A.120墙", "B.过梁边", "C.洞口边", "D.转角边"], ans: ["A", "B", "C", "D"], exp: "全对" },
            { q: "消防要求", opts: ["A.配器材", "B.禁明火", "C.阻燃房", "D.堵通道"], ans: ["A", "B", "C"], exp: "ABC" },
            { q: "钢筋复检项目", opts: ["A.屈服", "B.抗拉", "C.伸长", "D.重量偏差"], ans: ["A", "B", "C", "D"], exp: "全对" },
            { q: "不可抗力处理", opts: ["A.工期顺延", "B.工程损失甲方", "C.机械损失乙方", "D.人员各自负责"], ans: ["A", "B", "C", "D"], exp: "全对" },
            { q: "地面基层", opts: ["A.砂石", "B.灰土", "C.混凝土", "D.陶粒"], ans: ["A", "B", "C", "D"], exp: "全对" },
            { q: "幕墙隐蔽", opts: ["A.预埋件", "B.节点", "C.防火", "D.保温"], ans: ["A", "B", "C", "D"], exp: "全对" },
            { q: "进度优化", opts: ["A.压缩关键工作", "B.调逻辑", "C.加资源", "D.压非关键"], ans: ["A", "B", "C"], exp: "ABC" },
            { q: "质量事故程序", opts: ["A.报告", "B.保护", "C.分析", "D.方案"], ans: ["A", "B", "C", "D"], exp: "全对" },
            { q: "绿色施工四节", opts: ["A.节能", "B.节地", "C.节水", "D.节材"], ans: ["A", "B", "C", "D"], exp: "全对" }
        ],
        case: [
            { q: "悬挑构件拆模强度要求？", ans: "必须达到100%设计强度方可拆模" },
            { q: "不可抗力责任划分？", ans: "工期顺延；工程损失甲方；机械、窝工乙方；人员各自负责" },
            { q: "扬尘控制措施？", ans: "围挡、硬化、裸土覆盖、洒水、车辆冲洗、密闭运输" },
            { q: "隐蔽工程流程？", ans: "自检→报验→验收→签字→留影像→覆盖" }
        ]
    },
    3: {
        single: [
            { q: "超高层高度≥？", opts: ["A.50m", "B.80m", "C.100m", "D.120m"], ans: "C", exp: "≥100m" },
            { q: "箍筋加密区在？", opts: ["A.跨中", "B.支座两端", "C.中间1/3", "D.任意"], ans: "B", exp: "支座两端" },
            { q: "砂浆使用时间≤？", opts: ["A.1h", "B.2h", "C.3h", "D.4h"], ans: "B", exp: "≤2h" },
            { q: "卷材施工温度≥？", opts: ["A.-5℃", "B.0℃", "C.5℃", "D.10℃"], ans: "C", exp: "≥5℃" },
            { q: "脚手架≥多少米需论证？", opts: ["A.24m", "B.30m", "C.50m", "D.60m"], ans: "C", exp: "≥50m" },
            { q: "预验收由谁组织？", opts: ["A.施工", "B.监理", "C.建设", "D.设计"], ans: "B", exp: "监理单位" },
            { q: "总时差=？", opts: ["A.最迟开始-最早开始", "B.最早-最迟", "C.完成-开始", "D.无"], ans: "A", exp: "最迟开始−最早开始" },
            { q: "临时房最多几层？", opts: ["A.1", "B.2", "C.3", "D.4"], ans: "B", exp: "2层" },
            { q: "工程变更签证时限？", opts: ["A.7d", "B.14d", "C.28d", "D.30d"], ans: "B", exp: "14天" },
            { q: "结构胶注胶在？", opts: ["A.露天", "B.专用车间", "C.脚手架", "D.室内"], ans: "B", exp: "专用车间" }
        ],
        multi: [
            { q: "冬施养护", opts: ["A.覆盖", "B.保温棚", "C.蓄热法", "D.加温"], ans: ["A", "B", "C", "D"], exp: "全对" },
            { q: "深基坑控制", opts: ["A.分层挖", "B.及时支护", "C.排水", "D.监测"], ans: ["A", "B", "C", "D"], exp: "全对" },
            { q: "观感质量等级", opts: ["A.好", "B.一般", "C.差", "D.合格"], ans: ["A", "B", "C"], exp: "ABC" },
            { q: "防水基层要求", opts: ["A.坚实", "B.平整", "C.无空鼓", "D.干燥"], ans: ["A", "B", "C", "D"], exp: "全对" },
            { q: "钢筋隐蔽", opts: ["A.规格", "B.保护层", "C.接头", "D.加密区"], ans: ["A", "B", "C", "D"], exp: "全对" }
        ],
        case: [
            { q: "深基坑安全要点？", ans: "分层开挖、严禁超挖、及时支护、降水排水、监测" },
            { q: "卫生间防水流程？", ans: "基层处理→涂刷防水→24h蓄水→保护层→面层" },
            { q: "脚手架核心构造？", ans: "基础垫板、扫地杆、连墙件、剪刀撑、栏杆挡脚板" },
            { q: "分部分项竣工验收组织？", ans: "分项：专监；分部：总监；竣工：建设单位" }
        ]
    }
};

let nowPaper = 1;
let tabIndex = 0;
let sIdx = 0, mIdx = 0, cIdx = 0;
let userSingle = {}, userMulti = {};

function changePaper() {
    nowPaper = document.getElementById("paperSelect").value;
    sIdx = 0; mIdx = 0; cIdx = 0;
    userSingle = {}; userMulti = {};
    loadAll();
    document.getElementById("resultBox").classList.add("hide");
}

function switchTab(i) {
    tabIndex = i;
    document.querySelectorAll(".tab").forEach((el, idx) => {
        el.classList.toggle("active", idx === i);
    });
    document.querySelectorAll(".content").forEach((el, idx) => {
        el.classList.toggle("hide", idx !== i);
    });
}

function loadSingle() {
    const list = paperBank[nowPaper].single;
    const q = list[sIdx];
    let html = `<div class="q-title">${sIdx+1}. ${q.q}</div>`;
    q.opts.forEach(item => {
        const cls = userSingle[sIdx] === item[0] ? "active" : "";
        html += `<div class="opt-item ${cls}" onclick="selectSingle('${item[0]}')">${item}</div>`;
    });
    html += `<div class="ans-explain" id="sAns"></div>`;
    document.getElementById("singleQBox").innerHTML = html;
}

function selectSingle(val) {
    userSingle[sIdx] = val;
    const q = paperBank[nowPaper].single[sIdx];
    const box = document.getElementById("sAns");
    box.style.display = "block";
    if (val === q.ans) {
        box.className = "ans-explain correct";
        box.innerHTML = "✅ 正确<br>解析：" + q.exp;
    } else {
        box.className = "ans-explain wrong";
        box.innerHTML = "❌ 错误<br>答案：" + q.ans + "<br>解析：" + q.exp;
    }
    loadSingle();
}

function prevSingle() { if (sIdx > 0) { sIdx--; loadSingle(); } }
function nextSingle() { const l = paperBank[nowPaper].single; if (sIdx < l.length - 1) { sIdx++; loadSingle(); } }

function loadMulti() {
    const list = paperBank[nowPaper].multi;
    const q = list[mIdx];
    let html = `<div class="q-title">${mIdx+1}. ${q.q}</div>`;
    q.opts.forEach(item => {
        const has = userMulti[mIdx]?.includes(item[0]) ? "active" : "";
        html += `<div class="opt-item ${has}" onclick="selectMulti('${item[0]}')">${item}</div>`;
    });
    html += `<div class="ans-explain" id="mAns"></div>`;
    document.getElementById("multiQBox").innerHTML = html;
}

function selectMulti(val) {
    if (!userMulti[mIdx]) userMulti[mIdx] = [];
    const arr = userMulti[mIdx];
    if (arr.includes(val)) arr.splice(arr.indexOf(val), 1);
    else arr.push(val);
    loadMulti();
}

function prevMulti() { if (mIdx > 0) { mIdx--; loadMulti(); } }
function nextMulti() { const l = paperBank[nowPaper].multi; if (mIdx < l.length - 1) { mIdx++; loadMulti(); } }

function loadCase() {
    const q = paperBank[nowPaper].case[cIdx];
    const html = `
        <div class="q-title">案例 ${cIdx+1}：${q.q}</div>
        <textarea class="case-text" placeholder="请输入答案"></textarea>
        <div class="ans-explain correct" style="display:block">参考答案：${q.ans}</div>
    `;
    document.getElementById("caseQBox").innerHTML = html;
}

function prevCase() { if (cIdx > 0) { cIdx--; loadCase(); } }
function nextCase() { const l = paperBank[nowPaper].case; if (cIdx < l.length - 1) { cIdx++; loadCase(); } }

function calcTotalScore() {
    let score = 0;
    const sList = paperBank[nowPaper].single;
    const mList = paperBank[nowPaper].multi;

    for (let i = 0; i < sList.length; i++) if (userSingle[i] === sList[i].ans) score += 1;
    for (let i = 0; i < mList.length; i++) {
        const u = userMulti[i] || [];
        const r = mList[i].ans;
        if (u.length === r.length && u.every(x => r.includes(x))) score += 2;
    }

    const box = document.getElementById("resultBox");
    box.classList.remove("hide");
    const pass = score >= 72 ? "✅ 合格" : "❌ 未达标";
    box.innerHTML = `<h3>得分：${score} 分（合格线72）</h3><p>${pass}</p>`;
}

function resetAllAnswer() {
    sIdx = mIdx = cIdx = 0;
    userSingle = {}; userMulti = {};
    loadAll();
    document.getElementById("resultBox").classList.add("hide");
}

function loadAll() {
    loadSingle();
    loadMulti();
    loadCase();
}

window.onload = loadAll;

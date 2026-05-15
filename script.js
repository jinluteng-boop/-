const paperBank = {
    1: {
        single: [
            {q:"某住宅小区建筑工程，根据民用建筑设计统一标准，住宅建筑高度大于多少米时划分为高层建筑？",opts:["A.24m","B.27m","C.30m","D.33m"],ans:"B",exp:"住宅≥27m为高层，公共建筑≥24m为高层。"},
{q:"某现浇钢筋混凝土框架结构主梁，净跨度为4.2m，施工模板搭设时，下列做法正确的是？",opts:["A.不需起拱","B.应按规范要求起拱","C.仅楼板起拱","D.仅次梁起拱"],ans:"B",exp:"跨度≥4m梁板模板应起拱，起拱高度1/1000～3/1000。"},
{q:"施工现场进场一批普通硅酸盐水泥，按规范要求，水泥初凝时间最低不得少于？",opts:["A.30min","B.45min","C.60min","D.90min"],ans:"B",exp:"六大常用水泥初凝时间均不得少于45min。"},
{q:"某大型设备基础为大体积混凝土工程，为降低水化热、防止温度裂缝，优先选用的水泥品种是？",opts:["A.硅酸盐水泥","B.普通硅酸盐水泥","C.矿渣硅酸盐水泥","D.快硬硅酸盐水泥"],ans:"C",exp:"大体积混凝土优先选用低水化热矿渣水泥。"},
{q:"某砖混结构砌体施工，水平灰缝砂浆饱满度按规范要求不得低于？",opts:["A.70%","B.80%","C.90%","D.95%"],ans:"B",exp:"砌体水平灰缝饱满度≥80%，竖向灰缝≥90%。"},
{q:"施工现场在外脚手架搭设、临边作业等场景中，高处作业的界定高度为离地多少米及以上？",opts:["A.1.5m","B.2.0m","C.2.5m","D.3.0m"],ans:"B",exp:"凡在坠落高度基准面2m及以上进行的作业均为高处作业。"},
{q:"市区主干道旁施工现场，围挡封闭设置高度最低不得小于？",opts:["A.1.8m","B.2.0m","C.2.5m","D.3.0m"],ans:"C",exp:"市区主要路段围挡高度不低于2.5m，一般路段不低于1.8m。"},
{q:"根据建设工程质量管理条例，屋面防水工程、有防水要求的卫生间最低保修年限为？",opts:["A.2年","B.3年","C.5年","D.10年"],ans:"C",exp:"防水防渗工程最低保修期5年。"},
{q:"工程施工中发生设计变更导致工期延误，施工单位提出索赔，按合同通用条款，索赔意向通知须在事件发生后多少天内提出？",opts:["A.14d","B.28d","C.30d","D.42d"],ans:"B",exp:"索赔意向通知须在事件发生28天内提交。"},
{q:"施工现场临时用电系统设置必须遵循的核心原则是？",opts:["A.两级配电三级保护","B.三级配电两级保护","C.三级配电三级保护","D.两级配电两级保护"],ans:"B",exp:"临时用电严格执行三级配电、两级保护。"},
{q:"施工现场发生安全事故，施工单位应立即上报，事故报告时限最长不得超过？",opts:["A.30分钟","B.1小时","C.2小时","D.4小时"],ans:"B",exp:"安全事故发生后1小时内向主管部门上报。"},
{q:"某建筑高度26m的外立面脚手架，临边防护栏杆上杆离地高度最低不小于？",opts:["A.1.05m","B.1.10m","C.1.20m","D.1.15m"],ans:"B",exp:"24m及以上高处防护栏杆上杆高度不低于1.10m。"},
{q:"采用普通硅酸盐水泥浇筑的常温养护混凝土，日常养护时间最低不宜少于？",opts:["A.7d","B.14d","C.21d","D.28d"],ans:"A",exp:"普通水泥常温养护不少于7d，掺外加剂不少于14d。"},
{q:"建筑工程检验批质量验收中，一般项目的合格点率最低不得低于？",opts:["A.70%","B.80%","C.90%","D.95%"],ans:"B",exp:"检验批一般项目合格点率≥80%。"},
{q:"建筑工程分部工程质量验收的组织主持单位是？",opts:["A.施工项目经理","B.总监理工程师","C.建设单位项目负责人","D.专业监理工程师"],ans:"B",exp:"分部工程由总监理工程师组织验收。"},
{q:"落地式脚手架作业层挡脚板设置高度最低不应小于？",opts:["A.120mm","B.150mm","C.180mm","D.200mm"],ans:"C",exp:"脚手架挡脚板高度不低于180mm。"},
{q:"屋面卷材防水施工中，卷材长边搭接宽度最小不应小于？",opts:["A.80mm","B.100mm","C.120mm","D.150mm"],ans:"B",exp:"屋面卷材长边搭接宽度不小于100mm。"},
{q:"双代号网络图中，关键线路上各项工作的总时差为？",opts:["A.大于0","B.等于0","C.小于0","D.任意数值"],ans:"B",exp:"关键线路上工作总时差均为0。"},
{q:"建筑装饰装修工程、电气管线工程最低保修年限为？",opts:["A.1年","B.2年","C.3年","D.5年"],ans:"B",exp:"装修、管线、设备安装工程最低保修2年。"},
{q:"隐蔽工程覆盖前正确的管理程序是？",opts:["A.先覆盖后验收","B.先验收合格再覆盖","C.边覆盖边验收","D.无需验收直接覆盖"],ans:"B",exp:"隐蔽工程必须先验收、签字、留影像，合格后方可覆盖。"}
        ],
        multi: [
           {q:"某大体积混凝土基础施工，为预防温度裂缝可采取的措施有？",opts:["A.选用低水化热水泥","B.分层分段浇筑","C.采取保温保湿养护","D.合理设置后浇带","E.加快浇筑速度提高入模温度"],ans:["A","B","C","D"],exp:"加快浇筑、提高入模温度会加大裂缝风险。"},
{q:"工程索赔成立必须同时具备的条件有？",opts:["A.非承包人自身原因造成","B.造成实际工期或费用损失","C.在合同约定时限内上报","D.承包人自身施工组织不当","E.口头通知即可无需书面"],ans:["A","B","C"],exp:"自身原因、无书面报备均不满足索赔条件。"},
{q:"下列工程属于危险性较大的分部分项工程的有？",opts:["A.深基坑开挖支护","B.模板及支撑体系","C.落地式脚手架工程","D.起重吊装工程","E.室内抹灰装饰工程"],ans:["A","B","C","D"],exp:"抹灰不属于危大工程。"},
{q:"民用建筑工程室内环境污染物浓度检测的项目有？",opts:["A.甲醛","B.苯","C.氨","D.TVOC","E.氡"],ans:["A","B","C","D","E"],exp:"室内环境五项必检：甲醛、苯、氨、TVOC、氡。"},
{q:"施工现场临时用电安全基本要求包括？",opts:["A.一机一闸","B.一漏一箱","C.三级配电","D.两级保护","E.可以一闸控制多台设备"],ans:["A","B","C","D"],exp:"严禁一闸多机。"},
{q:"钢筋混凝土结构产生裂缝的常见原因有？",opts:["A.原材料质量不合格","B.养护不及时不到位","C.温度应力变化过大","D.地基不均匀沉降","E.保护层厚度偏大"],ans:["A","B","C","D"],exp:"保护层偏大不是开裂主要原因。"},
{q:"高处作业安全防护基本要求有？",opts:["A."高挂低用"系挂安全带","B.设置规范防护栏杆","C.搭设合格挡脚板","D.随意攀爬脚手架上下","E.临边不设防护直接作业"],ans:["A","B","C"],exp:"随意攀爬、无防护作业属于违规。"},
{q:"建筑节能分部工程包含的子分部有？",opts:["A.墙体节能","B.门窗节能","C.屋面节能","D.幕墙节能","E.室内地面找平"],ans:["A","B","C","D"],exp:"地面找平不属于节能分部。"},
{q:"建设工程合同文件优先解释顺序包含的有？",opts:["A.合同协议书","B.中标通知书","C.投标文件","D.专用合同条款","E.施工日志"],ans:["A","B","C","D"],exp:"施工日志不属于合同解释顺序文件。"},
{q:"施工现场文明施工管理要求有？",opts:["A.连续封闭围挡","B.场地硬化排水通畅","C.洒水降尘控制扬尘","D.控制夜间施工噪声","E.建筑垃圾随意堆放"],ans:["A","B","C","D"],exp:"垃圾严禁随意堆放。"}
],
        case:[
{q:"简述工程索赔成立的三个必备条件及28天时限要求。",ans:"1.非承包人自身原因造成事件；2.已造成实际工期延误或经济损失；3.在合同约定28天内提交索赔意向通知及正式索赔报告。"},
{q:"简述大体积混凝土防止产生温度裂缝的主要施工措施。",ans:"选用低水化热水泥；分层分段浇筑；保温保湿养护；合理设置后浇带；二次抹面压实；控制混凝土入模及内外温差。"},
{q:"简述危险性较大分部分项工程范围及专项方案管理要求。",ans:"范围：深基坑、模板支撑、脚手架、起重吊装、拆除工程。管理要求：必须编制专项施工方案；超过一定规模的危大工程需组织专家论证。"},
{q:"简述施工现场临时用电三级配电、两级保护及一机一闸一漏一箱含义。",ans:"三级配电：总配电箱—分配电箱—开关箱；两级保护：总箱、开关箱各设漏电保护器；一机一闸一漏一箱：每台设备独立开关、独立漏电、独立箱体，严禁一闸多机。"}
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

// 试卷切换
function changePaper() {
    nowPaper = document.getElementById("paperSelect").value;
    sIdx = 0; mIdx = 0; cIdx = 0;
    userSingle = {}; userMulti = {};
    loadAll();
    document.getElementById("resultBox").classList.add("hide");
}

// 标签切换
function switchTab(i) {
    tabIndex = i;
    document.querySelectorAll(".tab").forEach((el, idx) => {
        el.classList.toggle("active", idx === i);
    });
    document.querySelectorAll(".content").forEach((el, idx) => {
        el.classList.toggle("hide", idx !== i);
    });
}

// 加载单选题
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

// 加载多选题
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

// 加载案例题
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

// 自动打分
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
    box.innerHTML = `<h3>得分：${score} 分（当前为样例题库，仅供测试）</h3>`;
}

// 重置所有
function resetAllAnswer() {
    sIdx = mIdx = cIdx = 0;
    userSingle = {}; userMulti = {};
    loadAll();
    document.getElementById("resultBox").classList.add("hide");
}

// 初始化加载
function loadAll() {
    loadSingle();
    loadMulti();
    loadCase();
}

window.onload = loadAll;

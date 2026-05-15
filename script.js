const questions = [
  {
    q: "住宅建筑高度大于多少米属于高层建筑？",
    opts: ["A.24m", "B.27m", "C.30m", "D.33m"],
    ans: "B",
    exp: "住宅≥27m为高层；公共建筑≥24m为高层。"
  },
  {
    q: "24m及以上建筑临边防护栏杆最小高度为？",
    opts: ["A.1.05m", "B.1.10m", "C.1.20m", "D.1.15m"],
    ans: "B",
    exp: "24m以下1.05m，24m及以上1.10m。"
  },
  {
    q: "现浇钢筋混凝土梁跨度大于等于多少米应起拱？",
    opts: ["A.3m", "B.4m", "C.5m", "D.6m"],
    ans: "B",
    exp: "跨度≥4m梁板模板应起拱，起拱高度1/1000～3/1000。"
  },
  {
    q: "普通水泥初凝时间不得少于？",
    opts: ["A.30min", "B.45min", "C.60min", "D.90min"],
    ans: "B",
    exp: "水泥初凝≥45min，终凝普通水泥≤6.5h。"
  },
  {
    q: "大体积混凝土优先选用哪种水泥？",
    opts: ["A.矿渣水泥", "B.普通水泥", "C.硅酸盐水泥", "D.快硬水泥"],
    ans: "A",
    exp: "大体积选用低水化热矿渣水泥，减少温度裂缝。"
  },
  {
    q: "砌体水平灰缝饱满度最低要求不小于？",
    opts: ["A.70%", "B.80%", "C.90%", "D.95%"],
    ans: "B",
    exp: "水平灰缝≥80%，竖向灰缝≥90%。"
  },
  {
    q: "基坑开挖正确原则是？",
    opts: ["A.分层分段对称限时", "B.一次开挖到位", "C.先挖后支护", "D.超挖后回填"],
    ans: "A",
    exp: "基坑遵循：分层、分段、对称、限时，严禁超挖。"
  },
  {
    q: "砌体斜槎长度不应小于高度的？",
    opts: ["A.1/2", "B.2/3", "C.3/4", "D.1/3"],
    ans: "B",
    exp: "斜槎长度≥高度2/3，严禁留直槎。"
  },
  {
    q: "高处作业定义为离地多少米及以上？",
    opts: ["A.1.5m", "B.2m", "C.2.5m", "D.3m"],
    ans: "B",
    exp: "离地2m及以上均为高处作业。"
  },
  {
    q: "屋面防水工程最低保修年限为？",
    opts: ["A.2年", "B.3年", "C.5年", "D.10年"],
    ans: "C",
    exp: "防水、防渗工程最低保修5年。"
  }
];

let current = 0;
let userAnswer = {};

const qEl = document.getElementById("question");
const optsEl = document.getElementById("options");
const ansBox = document.getElementById("answerBox");
const curEl = document.getElementById("current");
const totEl = document.getElementById("total");
const prevBtn = document.querySelector("button:nth-child(1)");
const nextBtn = document.querySelector("button:nth-child(2)");

totEl.textContent = questions.length;

function loadQuestion(){
  const q = questions[current];
  curEl.textContent = current + 1;
  qEl.textContent = q.q;
  optsEl.innerHTML = "";
  ansBox.style.display = "none";

  q.opts.forEach((text)=>{
    const btn = document.createElement("button");
    btn.className = "opt";
    btn.textContent = text;
    btn.onclick = ()=>chooseOpt(btn, text);
    optsEl.appendChild(btn);
  });

  prevBtn.disabled = current === 0;
  nextBtn.textContent = current === questions.length-1 ? "结束" : "下一题";

  if(userAnswer[current]){
    let allOpt = optsEl.querySelectorAll(".opt");
    allOpt.forEach(b=>{
      if(b.textContent === userAnswer[current]){
        b.classList.add("active");
      }
    });
  }
}

function chooseOpt(btn, text){
  userAnswer[current] = text;
  optsEl.querySelectorAll(".opt").forEach(b=>b.classList.remove("active"));
  btn.classList.add("active");

  const q = questions[current];
  let rightText = q.opts.find(x=>x.startsWith(q.ans));
  ansBox.style.display = "block";

  if(text.startsWith(q.ans)){
    ansBox.className = "ansbox correct";
    ansBox.innerHTML = "✅ 正确<br>解析：" + q.exp;
  }else{
    ansBox.className = "ansbox wrong";
    ansBox.innerHTML = "❌ 错误<br>正确答案：" + rightText + "<br>解析：" + q.exp;
  }
}

function prevQuestion(){
  if(current > 0){
    current--;
    loadQuestion();
  }
}

function nextQuestion(){
  if(current < questions.length - 1){
    current++;
    loadQuestion();
  }else{
    alert("已经是最后一题，刷题完成！");
  }
}

loadQuestion();

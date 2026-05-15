// 题库：单选
const questions = [
  {
    q:"一家使用多个机器学习模型的公司希望识别原始模型质量的变化,以便公司能够解决任何问题。哪种AWS服务或功能符合这些要求?",
    opts:["A 亚马逊SageMaker 快速入门","B 亚马逊SageMaker HyperPod","C 亚马逊SageMaker 数据抓取器","D 亚马逊SageMaker模型监控器"],
    ans:"D",
    exp:"模型监控器专门用于检测模型质量漂移/变化。"
  },
  // 你在这里继续加题，格式同上
  {
    q:"二建实务：住宅建筑高层建筑起始高度为？",
    opts:["A 24m","B 27m","C 30m"],
    ans:"B",
    exp:"住宅≥27m为高层；公共≥24m且≤100m为高层。"
  }
];

let current = 0;
let userAnswer = {};

const qEl = document.getElementById("question");
const optsEl = document.getElementById("options");
const ansBox = document.getElementById("answerBox");
const curEl = document.getElementById("current");
const totEl = document.getElementById("total");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

totEl.textContent = questions.length;

function loadQuestion(){
  const q = questions[current];
  curEl.textContent = current + 1;
  qEl.textContent = q.q;
  optsEl.innerHTML = "";
  ansBox.style.display = "none";

  q.opts.forEach((text,i)=>{
    const btn = document.createElement("button");
    btn.className = "opt";
    btn.textContent = text;
    btn.onclick = ()=>selectOption(i,btn);
    optsEl.appendChild(btn);
  });

  prevBtn.disabled = current === 0;
  nextBtn.textContent = current === questions.length-1 ? "提交" : "下一题";

  // 恢复已选
  if(userAnswer[current]!==undefined){
    const idx = userAnswer[current];
    optsEl.children[idx].classList.add("active");
  }
}

function selectOption(i,btn){
  // 清除同组active
  for(let b of optsEl.children) b.classList.remove("active");
  btn.classList.add("active");
  userAnswer[current] = i;

  const q = questions[current];
  const correctIdx = q.opts.findIndex(t=>t.startsWith(q.ans+" "));
  ansBox.style.display = "block";

  if(i === correctIdx){
    ansBox.className = "ansbox correct";
    ansBox.innerHTML = "✅ 正确：" + q.exp;
  }else{
    ansBox.className = "ansbox wrong";
    ansBox.innerHTML = "❌ 错误，正确答案：" + q.ans + "。" + q.exp;
  }
}

function prevQuestion(){
  if(current > 0) current--;
  loadQuestion();
}

function nextQuestion(){
  if(current < questions.length-1){
    current++;
    loadQuestion();
  }else{
    alert("已到最后一题");
  }
}

loadQuestion();
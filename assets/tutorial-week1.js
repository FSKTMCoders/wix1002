(() => {
  'use strict';
  const storageKey = 'wix1002-week1-tutorial-v1';
  const $ = selector => document.querySelector(selector);
  const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const choice = (id, prompt, marks, options, answer, why) => ({id,prompt,marks,options,answer,why,type:'choice'});
  const select = (id, prompt, marks, options, answer, why) => ({id,prompt,marks,options,answer,why,type:'select'});
  const number = (id, prompt, marks, answer, why) => ({id,prompt,marks,answer,why,type:'number'});
  const sections = [
    {id:'basics',title:'Java and testing basics',marks:4,items:[
      choice('instructions','Why must a computer’s instructions be precise?',1,['It follows the specified operations and their order.','It automatically guesses missing requirements.','It always understands ordinary English.'],0,'A program needs defined steps; vague instructions leave the intended behaviour unspecified.'),
      choice('compiler','What does javac normally produce from Java source?',1,['An executable flowchart','A .class file containing bytecode','A proof that the algorithm is correct'],1,'javac compiles Java source to bytecode; it does not prove the algorithm correct.'),
      choice('jvm','Which component executes Java bytecode?',1,['A Git repository','A text editor alone','The Java Virtual Machine (JVM)'],2,'The JVM executes bytecode. An IDE helps you edit and launch programs.'),
      choice('boundary','For the condition students > 40, which set best checks the decision boundary?',1,['10, 20, 30','39, 40, 41','100, 200, 300'],1,'Values just below, at, and just above 40 expose a mistaken > versus >= comparison.')
    ]},
    {id:'ipo',title:'Identify Input · Process · Output',marks:6,intro:'A distance converter reads a non-negative distance in metres and displays the equivalent centimetres. Classify each part.',items:[
      select('ipo-input','Distance typed in metres',2,['Input','Process','Output'],0,'The typed distance is the data received by the program.'),
      select('ipo-process','Multiply the distance by 100',2,['Input','Process','Output'],1,'Multiplication transforms metres into centimetres.'),
      select('ipo-output','Display the result with the unit cm',2,['Input','Process','Output'],2,'The displayed result is the output.')
    ]},
    {id:'algorithm',title:'Put the algorithm in order',marks:4,intro:'Assume a valid, non-negative numeric distance. Use the Up/Down buttons to arrange the four steps, then select “Use this order”. Each correct position earns 1 mark.',order:true},
    {id:'flowcharts',title:'Match flowchart symbols to their purpose',marks:4,intro:'Choose the conventional purpose of each symbol.',items:[
      select('oval','Oval',1,['Decision','Input / output','Start / stop','Process / calculation'],2,'An oval (terminator) marks the start or end of a flowchart.'),
      select('parallelogram','Parallelogram',1,['Decision','Input / output','Start / stop','Process / calculation'],1,'A parallelogram represents reading input or displaying output.'),
      select('rectangle','Rectangle',1,['Decision','Input / output','Start / stop','Process / calculation'],3,'A rectangle represents a process, such as a calculation or assignment.'),
      select('diamond','Diamond',1,['Decision','Input / output','Start / stop','Process / calculation'],0,'A diamond tests a condition and branches, commonly into Yes and No paths.')
    ]},
    {id:'trace',title:'Trace values and predict outputs',marks:6,intro:'Calculate these answers yourself. Each part is worth 2 marks.',items:[
      number('convert','A converter uses centimetres = metres × 100. For input 2.5 metres, how many centimetres are displayed? Enter a number.',2,250,'2.5 × 100 = 250 centimetres.'),
      {id:'loop',type:'text',prompt:'What values does this loop display? Enter them in order, separated by commas or spaces.',marks:2,answer:'1, 2, 3',why:'The increment happens before DISPLAY. The loop displays 1, 2, and 3; then count < 3 is false.',code:'count ← 0\nWHILE count < 3\n    count ← count + 1\n    DISPLAY count\nEND WHILE'},
      select('capacity','IF students > 40 THEN display “Extra classes” ELSE display “One class”. What is displayed for students = 40?',2,['Extra classes','One class','Both messages'],1,'40 > 40 is false, so only the ELSE branch runs.')
    ]},
    {id:'java',title:'Complete a first Java program',marks:4,intro:'The program is saved as HelloJava.java. Complete the conventional Java structure shown below.',code:'public class [A] {\n    public static void [B](String[] args) {\n        System.out.[C]("Welcome to Java!")[D]\n    }\n}',items:[
      select('class-name','[A] Public class name',1,['FirstProgram','HelloJava','helloJava'],1,'The public class name matches HelloJava.java, including capitalisation.'),
      select('main-name','[B] Entry-point method name',1,['start','run','main'],2,'The conventional entry point used in the lecture is public static void main(String[] args).'),
      select('output-name','[C] Print a line',1,['println','read','nextDouble'],0,'System.out.println displays a value and ends the line.'),
      select('semicolon','[D] End this output statement',1,[':',';',','],1,'This Java statement ends with a semicolon.')
    ]},
    {id:'errors',title:'Classify the error',marks:6,intro:'Select the primary error category for each example. Each part is worth 2 marks.',items:[
      select('syntax','A println statement is missing its final semicolon and compilation fails.',2,['Syntax / compile-time error','Runtime error','Logic error'],0,'The statement violates Java’s syntax, so the compiler reports an error.'),
      select('runtime','Scanner.nextDouble() receives abc and the program throws an input mismatch exception.',2,['Syntax / compile-time error','Runtime error','Logic error'],1,'The program can compile, but the exception occurs while reading input during execution.'),
      select('logic','A converter compiles and runs, but uses metres / 100 instead of metres * 100.',2,['Syntax / compile-time error','Runtime error','Logic error'],2,'The expression is legal Java, but it implements the wrong conversion rule.')
    ]},
    {id:'ai',title:'Vibe coding and responsible AI review',marks:6,items:[
      choice('vibe','Which description best matches prompt-based vibe coding?',2,['Describe intent in natural language, let AI generate code, and refine through prompts.','A compiler converts a flowchart directly to Java.','AI removes the need to understand requirements and test results.'],0,'Vibe coding describes generation and iteration through natural-language prompts. The lecture adds deliberate inspection and testing for learning.'),
      choice('ai-check','An AI proposes double centimetres = metres / 100;. What is a useful independent first check?',2,['Accept it because it compiles.','Manually calculate 2.5 m = 250 cm and compare the code’s result.','Ask the same AI to confirm that it is right, without testing.'],1,'An independently calculated expected answer reveals that this formula gives 0.025 instead of 250.'),
      choice('ai-prompt','Which follow-up gives the AI the clearest evidence to fix this converter?',2,['Make it better.','Try again; I do not like it.','For 2.5 metres, your code gives 0.025; I expect 250 cm because 1 m = 100 cm. Explain and correct the formula, then test zero and a negative input.'],2,'A useful follow-up identifies the input, actual result, expected result, and rule, then requests a revision and relevant tests.')
    ]}
  ];
  const steps = {start:'START',read:'READ distance in metres',process:'centimetres ← metres × 100',display:'DISPLAY centimetres, then STOP'};
  const correctOrder = ['start','read','process','display'];
  const blank = () => ({answers:{},order:['process','display','start','read'],confirmed:false,submission:null,attempts:0});
  const validAnswers = input => {
    const out = {};
    for (const section of sections) for (const item of section.items || []) {
      const value = input?.[item.id];
      if (typeof value !== 'string' || value.length > 200) continue;
      if (item.options && !item.options.some((_,i) => String(i) === value)) continue;
      out[item.id] = value;
    }
    return out;
  };
  const snapshot = () => ({answers:{...state.answers},order:[...state.order],confirmed:state.confirmed});
  const validOrder = order => Array.isArray(order) && order.length === 4 && new Set(order).size === 4 && order.every(id => correctOrder.includes(id));
  let state = blank();
  let storageAvailable = true;
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || 'null');
    if (saved && typeof saved === 'object') {
      state.answers = validAnswers(saved.answers);
      if (validOrder(saved.order)) state.order = saved.order;
      state.confirmed = saved.confirmed === true;
      state.attempts = Number.isSafeInteger(saved.attempts) && saved.attempts >= 0 ? saved.attempts : 0;
      if (saved.submission && validOrder(saved.submission.order)) state.submission = {answers:validAnswers(saved.submission.answers),order:saved.submission.order,confirmed:saved.submission.confirmed === true};
    }
  } catch (error) { storageAvailable = error.name === 'SyntaxError'; }
  function save() {
    try { localStorage.setItem(storageKey,JSON.stringify(state)); }
    catch { storageAvailable = false; }
    $('#saveStatus').textContent = storageAvailable ? 'Progress saved in this browser only.' : 'Browser storage is unavailable. Keep this page open or download your submitted result.';
  }
  const shape = id => {
    const paths = {oval:'<ellipse cx="60" cy="35" rx="52" ry="25"/>',parallelogram:'<polygon points="25,10 115,10 95,60 5,60"/>',rectangle:'<rect x="8" y="10" width="104" height="50" rx="2"/>',diamond:'<polygon points="60,3 115,35 60,67 5,35"/>'};
    return paths[id] ? '<svg class="shape" viewBox="0 0 120 70" role="img" aria-label="'+id+'">'+paths[id]+'</svg>' : '';
  };
  function renderItem(item) {
    const prompt = esc(item.prompt);
    let input;
    if (item.type === 'choice') input = '<fieldset><legend>'+prompt+' <span class="partmarks">('+item.marks+' '+(item.marks===1?'mark':'marks')+')</span></legend>'+item.options.map((option,i) => '<label class="option"><input type="radio" name="'+item.id+'" value="'+i+'" data-answer="'+item.id+'">'+esc(option)+'</label>').join('')+'</fieldset>';
    else {
      input = '<label class="question-label" for="'+item.id+'">'+shape(item.id)+prompt+' <span class="partmarks">('+item.marks+' '+(item.marks===1?'mark':'marks')+')</span></label>';
      if (item.code) input += '<pre><code>'+esc(item.code)+'</code></pre>';
      input += item.options ? '<select id="'+item.id+'" data-answer="'+item.id+'"><option value="">Choose an answer</option>'+item.options.map((o,i)=>'<option value="'+i+'">'+esc(o)+'</option>').join('')+'</select>' : '<input id="'+item.id+'" data-answer="'+item.id+'" type="text" maxlength="200"'+(item.type==='number'?' inputmode="decimal"':'')+' autocomplete="off">';
    }
    return '<div class="question">'+input+'<div id="feedback-'+item.id+'" class="answer-feedback" hidden></div></div>';
  }
  $('#activities').innerHTML = sections.map((section,i) => '<section class="tutorial-card" id="'+section.id+'" aria-labelledby="title-'+section.id+'"><div class="activity-heading"><h2 id="title-'+section.id+'">'+(i+1)+' · '+esc(section.title)+'</h2><span class="mark-badge" id="marks-'+section.id+'">'+section.marks+' marks</span></div>'+(section.intro?'<p>'+esc(section.intro)+'</p>':'')+(section.code?'<pre><code>'+esc(section.code)+'</code></pre>':'')+(section.order?'<ol id="orderList" class="order-list"></ol><button type="button" id="confirmOrder" class="button">Use this order</button><p id="orderStatus" role="status"></p><div id="feedback-order" class="answer-feedback" hidden></div>':section.items.map(renderItem).join(''))+'<a class="review-link" href="../../lectures/week1/#s'+({basics:6,ipo:8,algorithm:10,flowcharts:12,trace:13,java:14,errors:16,ai:18}[section.id])+'">Review lecture topic ↗</a></section>').join('');
  $('#topicLinks').innerHTML = sections.map((s,i)=>'<a href="#'+s.id+'">'+(i+1)+'. '+esc(s.title)+'</a>').join('');
  function renderOrder(focusId,direction) {
    $('#orderList').innerHTML = state.order.map((id,i)=>'<li><span class="step-number">'+(i+1)+'</span><span class="step-text">'+esc(steps[id])+'</span><div class="order-buttons"><button type="button" data-move="-1" data-step="'+id+'" aria-label="Move '+esc(steps[id])+' up"'+(i===0?' disabled':'')+'>↑ Up</button><button type="button" data-move="1" data-step="'+id+'" aria-label="Move '+esc(steps[id])+' down"'+(i===3?' disabled':'')+'>↓ Down</button></div></li>').join('');
    $('#orderStatus').textContent = state.confirmed ? 'Order ready for marking.' : 'Arrange the steps, then select “Use this order”.';
    $('#confirmOrder').textContent = state.confirmed ? 'Order confirmed' : 'Use this order';
    $('#confirmOrder').setAttribute('aria-pressed',String(state.confirmed));
    if (focusId) {
      const buttons = [...document.querySelectorAll('[data-step="'+focusId+'"]')];
      (buttons.find(b=>b.dataset.move===direction&&!b.disabled)||buttons.find(b=>!b.disabled))?.focus();
    }
  }
  for (const control of document.querySelectorAll('[data-answer]')) {
    const value = state.answers[control.dataset.answer];
    if (control.type === 'radio') control.checked = control.value === value;
    else control.value = value || '';
  }
  function answered(value) { return typeof value === 'string' && value.trim() !== ''; }
  function isCorrect(item,value) {
    if (!answered(value)) return false;
    if (item.options) return value === String(item.answer);
    if (item.type === 'number') return /^[+]?(?:\d+(?:\.\d*)?|\.\d+)$/.test(value.trim()) && Number(value) === item.answer;
    return value.trim().split(/[\s,;]+/).filter(Boolean).map(n=>/^\d+$/.test(n)?Number(n):NaN).join(',') === '1,2,3';
  }
  function grade(attempt) {
    return sections.map(section => {
      if (section.order) return {section,earned:attempt.confirmed?attempt.order.filter((id,i)=>id===correctOrder[i]).length:0,parts:[]};
      const parts = section.items.map(item=>({item,correct:isCorrect(item,attempt.answers[item.id]),attempted:answered(attempt.answers[item.id])}));
      return {section,parts,earned:parts.reduce((sum,p)=>sum+(p.correct?p.item.marks:0),0)};
    });
  }
  const total = results => results.reduce((sum,r)=>sum+r.earned,0);
  function dirty() { return state.submission && JSON.stringify(snapshot()) !== JSON.stringify(state.submission); }
  function update() {
    const attempted = sections.filter(s=>s.order?state.confirmed:s.items.some(q=>answered(state.answers[q.id]))).length;
    $('#completion').textContent = attempted+' / 8 activities started';
    $('#attemptCount').textContent = 'Submissions: '+state.attempts;
    const changed = dirty();
    $('#resultStatus').textContent = state.submission ? (changed?'Answers changed. Submit again to update your marks.':'Your submitted answers have been marked. You can edit and retry.') : 'Answer the activities, then submit for marks. Unanswered parts receive 0.';
    $('#score').textContent = state.submission ? total(grade(state.submission))+' / 40' : '— / 40';
    $('#scoreLabel').textContent = state.submission ? (changed?'Last submitted score':'Your score') : 'Total available marks';
    $('#download').disabled = !state.submission || Boolean(changed);
    $('#results').hidden = !state.submission || Boolean(changed);
    for (const feedback of document.querySelectorAll('.answer-feedback')) feedback.hidden = !state.submission || Boolean(changed);
    for (const section of sections) $('#marks-'+section.id).textContent = state.submission && !changed ? grade(state.submission).find(r=>r.section.id===section.id).earned+' / '+section.marks+' marks' : section.marks+' marks';
    if (state.submission && !changed) showFeedback();
    save();
  }
  function showFeedback() {
    const results = grade(state.submission);
    for (const result of results) {
      if (result.section.order) {
        const box = $('#feedback-order');box.className='answer-feedback '+(result.earned===4?'correct':'needs-review');
        box.textContent = result.earned+' / 4 marks. '+(state.submission.confirmed?'One mark per correct position. ':'No order was confirmed. ')+'Correct sequence: START → READ distance → multiply by 100 → DISPLAY result and STOP.';
      } else for (const part of result.parts) {
        const box = $('#feedback-'+part.item.id);box.className='answer-feedback '+(part.correct?'correct':'needs-review');
        const answer = part.item.options ? part.item.options[part.item.answer] : part.item.answer;
        box.textContent = (part.correct?'Correct':part.attempted?'Review this answer':'Unanswered')+' · '+(part.correct?part.item.marks:0)+' / '+part.item.marks+' marks. '+(!part.correct?'Answer: '+answer+'. ':'')+part.item.why;
      }
    }
    const score = total(results);
    $('#resultSummary').textContent = score+' / 40 marks ('+(score/40*100).toFixed(1)+'%). '+(score===40?'All parts correct. Explain your reasoning without looking at the answers.':'Use the explanations and lecture links to review the topics below, then retry.');
    $('#breakdown').innerHTML=results.map(r=>'<li><span>'+esc(r.section.title)+'</span><strong>'+r.earned+' / '+r.section.marks+'</strong></li>').join('');
  }
  $('#activities').addEventListener('input',e=>{
    if (!e.target.dataset.answer) return;
    state.answers[e.target.dataset.answer] = e.target.value;update();
  });
  $('#activities').addEventListener('click',e=>{
    const move=e.target.closest('[data-move]');
    if (move) {
      const i=state.order.indexOf(move.dataset.step),j=i+Number(move.dataset.move);
      if(j<0||j>=state.order.length)return;
      [state.order[i],state.order[j]]=[state.order[j],state.order[i]];state.confirmed=false;renderOrder(move.dataset.step,move.dataset.move);update();
    }
    if(e.target.id==='confirmOrder'){state.confirmed=true;renderOrder();update();}
  });
  $('#submit').addEventListener('click',()=>{
    state.submission=snapshot();state.attempts++;update();
    $('#results').focus();$('#results').scrollIntoView({behavior:'smooth',block:'start'});
    $('#announce').textContent='Submitted. '+total(grade(state.submission))+' out of 40 marks.';
  });
  $('#reset').addEventListener('click',()=>{$('#resetDialog').showModal();});
  $('#cancelReset').addEventListener('click',()=>$('#resetDialog').close());
  $('#confirmReset').addEventListener('click',()=>{
    state=blank();
    for(const control of document.querySelectorAll('[data-answer]')){if(control.type==='radio')control.checked=false;else control.value='';}
    renderOrder();update();$('#resetDialog').close();$('#announce').textContent='Tutorial reset. Answers and previous marks cleared.';$('#activities').scrollIntoView({behavior:'smooth'});
  });
  $('#download').addEventListener('click',()=>{
    if(!state.submission||dirty())return;
    const results=grade(state.submission);
    const text=['WIX1002 · Week 1 Practice Tutorial','Score: '+total(results)+' / 40','Submission number: '+state.attempts,'Self-practice result; not an authenticated assessment grade.','',...results.map(r=>r.section.title+': '+r.earned+' / '+r.section.marks),'','Answers:',...sections.flatMap(s=>s.order?['Algorithm: '+(state.submission.confirmed?state.submission.order.map(id=>steps[id]).join(' → '):'Unanswered')]:s.items.map(q=>q.prompt+' — '+(answered(state.submission.answers[q.id])?(q.options?q.options[Number(state.submission.answers[q.id])]:state.submission.answers[q.id]):'Unanswered')))].join('\n');
    const url=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='WIX1002-Week1-Tutorial-Result.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
  });
  renderOrder();update();
})();

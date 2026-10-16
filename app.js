(function(){
  var SCHEMES=[
    {id:"autumn",name:"Autumn (Brik)",bg:"#111111",colors:["#df291c","#5a614d","#6f2a51","#f3f14d","#ff8f44","#94b3c3","#f6f44d","#ff3422"]},
    {id:"roots",name:"Roots United",bg:"#0f0f0f",colors:["#2f6fd8","#3a2216","#e8ea4f","#bdbdba","#f48cb2"]},
    {id:"boniver",name:"Bon Iver",bg:"#050505",colors:["#a98bd0","#e8452e","#f2e87a","#5cbf5a","#f08c5a","#f3b9cc","#a9b44a","#8c7b2c"]},
    {id:"breuer",name:"Third Room",bg:"#0d0d0d",colors:["#dcae2b","#b99bf0","#a39a3a","#5f4390","#efe2b0"]},
    {id:"subvert",name:"Subvert zine",bg:"#0f0f0f",colors:["#f0a0b4","#d9472b","#f4d24a","#8cc4e8","#2e5fc4","#b8e2b0"]},
    {id:"weird",name:"Weird things",bg:"#0f0f0f",colors:["#f283a8","#f7e04a","#7fbf8f","#a6a02a","#9cc4e4","#e0457b"]},
    {id:"dandy",name:"Dandy takeout",bg:"#0e0e0e",colors:["#ee7a2e","#3b5bd0","#c9a8ee","#e3f06a","#6a7a3a","#f0a8c0"]},
    {id:"riso",name:"Riso workshop",bg:"#16110e",colors:["#f2a35e","#e86ea6","#3c8e6e","#4a90d9","#9a4a3a","#c99a3a","#e8733a","#9b8fd8"]}
  ];
  var INK="#1a120c", PAPER="#f6efdc";
  var uid=0;
  function mk(color,label,v,o){
    o=o||{};
    return {id:"s"+(++uid),kind:o.kind||"metric",label:label,eyebrow:o.eyebrow||"",body:o.body||"",anchor:o.anchor||"top",
      data:o.data||[o.val!==undefined?String(o.val):String(v)],prefix:o.prefix||"",unit:o.unit||"",
      arr:o.arr||"stack",orient:o.orient||"auto",capStyle:o.capStyle||"cond",numFont:o.numFont||"serif",
      numSize:o.numSize||0,capW:o.capW||0,vcenter:!!o.vcenter,tsize:o.tsize||0,stops:o.stops||[0,55,100],
      v:v,w:v,fill:o.fill||"solid",c:o.c||[color,color,color],angle:o.angle!==undefined?o.angle:180,ink:o.ink||"auto",showNum:o.showNum!==false,showCap:o.showCap!==false};
  }

  /* ---------- templates ---------- */
  function leaf(it){ return {id:it.id}; }
  function split(vertical,l,r){ return {vertical:vertical,l:l,r:r}; }
  var TEMPLATES={
    summer:function(){
      var items=[
        mk("#c1391f","Ice creams sold every second",20,{val:"4"}),
        mk("#c1391f","Dear summer lovers,",10,{kind:"text",body:"A short, statistical guide to the warmest season of the year."}),
        mk("#2b44c6","Kilometres of open beach",13,{val:"984"}),
        mk("#3a2415","Dollars of fireworks sold",11,{val:"5 500 000"}),
        mk("#d8b93a","Festival visitors",9,{val:"14 000"}),
        mk("#a9b5c4","Average ticket price, USD",8,{val:"53.75"}),
        mk("#1f6b57","Public pools in the city",7,{val:"39 800"}),
        mk("#d9708f","Hours of daylight",6,{val:"16"}),
        mk("#e2572a","Park area, hectares",6,{val:"400"}),
        mk("#cfe36a","Open-air concerts",5,{val:"106"}),
        mk("#7f6bd6","Days without rain",5,{val:"8"})
      ];
      return {settings:{title:"Summer in numbers",typo:"classic",scheme:"roots",fillMode:"solid",grain:35,mode:"percent",sizeSrc:"manual",frames:1,frame:0,numFit:"fixed",aspect:1.5,gap:0,radius:0},items:items,fixed:null,assign:true};
    },
    autumn:function(){
      var A=function(w,h){ return w*h/14580; };   /* percent of the 1080 x 1350 poster */
      var W=1080;
      var hero=mk("#94b3c3","Autumn Statistics",A(910,631),{kind:"text",eyebrow:"Data nobody collects",body:"",anchor:"bottom",tsize:210/W,
        fill:"gradient",c:["#94b3c3","#ff8f44","#df291c"],stops:[21.8,74.8,100],angle:180,ink:"dark"});
      var col=mk("#df291c","Fictional increase in hot coffee, tea, and cocoa",A(170,631),{val:"+42%",arr:"stack",orient:"autodown",vcenter:true,numSize:120/W,capStyle:"caps",
        c:["#df291c","#df291c","#df291c"],ink:"light"});
      var umb=mk("#6f2b51","Imaginary citywide estimate of umbrellas borrowed, shared, or accidentally left behind",A(422,398),{val:"1,284",arr:"flip",numSize:126/W,capStyle:"caps",
        fill:"gradient",c:["#6f2b51","#803744","#ff3422"],stops:[2.9,44.2,100],angle:180,ink:"light"});
      var leafs=mk("#ff8f44","Leaf photoshoots for Instagram per day",A(422,268),{val:"2.6M",arr:"stack",numSize:120/W,capStyle:"caps",
        fill:"gradient",c:["#ff8f44","#94b3c3","#ff8f44"],stops:[0,49.6,93.7],angle:180,ink:"dark"});
      var shoes=mk("#f6f44d","Wet shoes per day",A(658,330),{val:"36,720",arr:"stack",numSize:173/W,capStyle:"caps",
        fill:"gradient",c:["#f6f44d","#7b8561","#7b8561"],stops:[0,100,100],angle:180,ink:"dark"});
      var rain=mk("#5a614d","\u201CIt wasn't supposed to rain\u201D moments",A(658,222),{val:"8,419",arr:"flip",numSize:100.9/W,capStyle:"caps",
        c:["#5a614d","#5a614d","#5a614d"],ink:"light"});
      var day=mk("#6f2a51","Daylight disappearing",A(658,114),{val:"4 min",arr:"inline",numSize:84.3/W,capW:235/658,capStyle:"caps",
        c:["#6f2a51","#6f2a51","#6f2a51"],ink:"light"});
      var foot=mk("#f3f14d","The Unmeasured Autumn",A(1080,53),{val:"BRIK",arr:"inline",capStyle:"strip",numFont:"strip",
        c:["#f3f14d","#f3f14d","#f3f14d"],ink:"dark"});
      var items=[hero,col,umb,leafs,shoes,rain,day,foot];
      var fixed=split(false,
        split(false,
          split(true,leaf(hero),leaf(col)),
          split(true,
            split(false,leaf(umb),leaf(leafs)),
            split(false,leaf(shoes),split(false,leaf(rain),leaf(day))))),
        leaf(foot));
      return {settings:{title:"",typo:"poster",scheme:"autumn",fillMode:"solid",grain:6,mode:"values",sizeSrc:"manual",frames:1,frame:0,numFit:"fill",aspect:0.8,gap:0,radius:0},items:items,fixed:fixed,assign:false};
    }
  };

  var state={anim:"pop", speed:1, hover:false, boost:0.8, fixed:null, typo:"classic", sizeSrc:"manual", frames:1, frame:0, textFit:"clip", textScale:true, trimLines:true, typeMode:"first", frameNames:[], playSec:2.2, playLoop:"loop", minShare:0, decSep:"auto", orig:{}, spSize:1, spCount:1, spIntro:1, spHover:1, demoSec:2, items:[]};
  var initAssign=false;
  (function(){
    var t=TEMPLATES.autumn();
    for(var k in t.settings) state[k]=t.settings[k];
    state.items=t.items; state.fixed=t.fixed; initAssign=t.assign;
  })();

  var stage=document.getElementById("stage");
  var list=document.getElementById("list");
  var cells={}; var loadedOk=false;
  var liveTimer=null, liveBase=null;
  var fonts={n:40,t:16,s:16,e:16,p:12};
  var size={w:800,h:533};

  function clamp(x,a,b){return Math.max(a,Math.min(b,x))}
  var DESIGN=["fill","c","stops","angle","ink","arr","orient","capStyle","numFont","numSize","capW","vcenter","tsize","anchor","showNum","showCap"];
  function makeOrig(items){
    var o={};
    items.forEach(function(it){
      var e={};
      DESIGN.forEach(function(k){ if(it[k]!==undefined) e[k]=JSON.parse(JSON.stringify(it[k])); });
      o[it.id]=e;
    });
    return o;
  }
  /* the state as it should be stored: while a demo runs, the starting values, never the drifting ones */
  function persistable(){
    var o=JSON.parse(JSON.stringify(state));
    if(liveBase){
      o.items.forEach(function(i){ var b=liveBase.filter(function(x){return x.id===i.id;})[0]; if(b){ i.v=b.v; i.data=b.data.slice(); } });
      o.frame=Math.min(liveBase.frame||0,Math.max(0,(o.frames||1)-1));
    }
    o.items.forEach(function(i){ delete i._lb; });
    return o;
  }
  function save(){ try{ localStorage.setItem("gridviz12",JSON.stringify(persistable())); }catch(e){} }
  function normalizeState(){
    var d={anim:"pop",speed:1,hover:false,boost:0.8,fixed:null,typo:"classic",sizeSrc:"manual",frames:1,frame:0,textFit:"clip",
      textScale:true,trimLines:true,typeMode:"first",frameNames:[],playSec:2.2,playLoop:"loop",minShare:0,decSep:"auto",orig:{},spSize:1,spCount:1,spIntro:1,spHover:1,demoSec:2,
      mode:"values",numFit:"fixed",scheme:"autumn",fillMode:"solid",grain:6,aspect:0.8,gap:0,radius:0,title:""};
    Object.keys(d).forEach(function(k){ if(state[k]===undefined) state[k]=d[k]; });
    state.frames=clamp((state.frames|0)||1,1,12); state.frame=clamp(state.frame|0,0,state.frames-1);
    state.items.forEach(function(it){
      if(!it.data||!it.data.length) it.data=[String(it.v)];
      while(it.data.length<state.frames) it.data.push(it.data[it.data.length-1]);
      if(!it.stops) it.stops=[0,55,100];
      if(it.showNum===undefined) it.showNum=true;
      if(it.showCap===undefined) it.showCap=true;
      if(!it.orient) it.orient="auto";
      if(!it.anchor) it.anchor="top";
    });
  }
  function load(){
    try{
      var s=localStorage.getItem("gridviz12"); if(!s) return;
      var o=JSON.parse(s);
      if(o&&o.items&&o.items.length){
        o.items.forEach(function(i){var n=parseInt(String(i.id).slice(1),10); if(n>uid) uid=n;});
        state=o; loadedOk=true; normalizeState();
      }
    }catch(e){}
  }
  function lum(hex){
    var m=/^#?([0-9a-f]{6})$/i.exec(hex); if(!m) return 0.5;
    var n=parseInt(m[1],16);
    return (0.299*((n>>16)&255)+0.587*((n>>8)&255)+0.114*(n&255))/255;
  }
  function textFor(it){
    var poster=(state.typo==="poster");
    var I=poster?"#212121":INK, P=poster?"#f4f4f4":PAPER;
    if(it.ink==="dark") return I;
    if(it.ink==="light") return P;
    var cols=it.fill==="solid"?[it.c[0]]:it.c;
    var l=cols.reduce(function(sum,c){return sum+lum(c)},0)/cols.length;
    return l>0.58?I:P;
  }
  function fillCss(it){
    var c=it.c;
    if(it.fill==="gradient"){ var sp=it.stops||[0,55,100]; return "linear-gradient("+it.angle+"deg,"+c[0]+" "+sp[0]+"%,"+c[1]+" "+sp[1]+"%,"+c[2]+" "+sp[2]+"%)"; }
    if(it.fill==="stripes"){
      var seq=[c[1],c[0],c[1],c[0],c[2],c[0]], N=seq.length, st=[];
      for(var i=0;i<N;i++){
        var a=i*100/N+100/N*0.18, b=(i+1)*100/N-100/N*0.18;
        st.push(seq[i]+" "+a.toFixed(1)+"%", seq[i]+" "+b.toFixed(1)+"%");
      }
      return "linear-gradient("+it.angle+"deg,"+st.join(",")+")";
    }
    return c[0];
  }
  /* ---------- reading numbers: "5 500 000", "36,720", "2,6M", "1.234,5", "$4", "-12", "12-15", "+42%", "4 min" ---------- */
  var NUMTOK="(\\d[\\d\\s\\u00A0\\u202F.,]*\\d|\\d)";
  function numToken(tok,pref){
    var s=tok.replace(/[\u00A0\u202F]/g," ");
    var hasSpace=/\d \d/.test(s), t=s.replace(/ /g,"");
    var dots=(t.match(/\./g)||[]).length, commas=(t.match(/,/g)||[]).length;
    var decChar="", grp=hasSpace?" ":"";
    if(pref==="," || pref==="."){
      decChar=pref; var other=(pref===".")?",":".";
      if(t.indexOf(other)>=0) grp=other;
      if(t.indexOf(decChar)<0) decChar="";
    }else if(dots&&commas){
      decChar=(t.lastIndexOf(".")>t.lastIndexOf(","))?".":","; grp=(decChar===".")?",":".";
    }else if(commas){
      if(commas>1) grp=",";
      else{
        var after=t.length-t.indexOf(",")-1;
        /* one comma followed by exactly three digits reads as thousands (36,720); otherwise a decimal comma (2,6) */
        if(after===3 && t.indexOf(",")>0 && t.indexOf(",")<=3) grp=","; else decChar=",";
      }
    }else if(dots){
      if(dots>1) grp="."; else decChar=".";
    }
    var cleaned=t;
    if(grp && grp!==" ") cleaned=cleaned.split(grp).join("");
    if(decChar && decChar!==".") cleaned=cleaned.replace(decChar,".");
    var n=parseFloat(cleaned);
    var dec=0; if(decChar){ dec=t.length-t.lastIndexOf(decChar)-1; }
    return {num:n,dec:dec,grp:grp,decChar:decChar};
  }
  function parseVal(str){
    var s=String(str==null?"":str);
    var rg=new RegExp("^([^\\d]*?)"+NUMTOK+"\\s*[-\\u2013\\u2014]\\s*"+NUMTOK+"(.*)$").exec(s);
    if(rg){
      var a=numToken(rg[2],state.decSep), b=numToken(rg[3],state.decSep);
      if(!isNaN(a.num) && !isNaN(b.num)) return {ok:true,range:true,pre:rg[1],num:(a.num+b.num)/2,suf:rg[4],dec:0,grp:"",decChar:""};
    }
    var m=new RegExp("^([^\\d]*?)"+NUMTOK+"(.*)$").exec(s);
    if(!m) return {ok:false};
    var pre=m[1], neg=false;
    if(/[-\u2212]\s*$/.test(pre)){ neg=true; pre=pre.replace(/[-\u2212]\s*$/,""); }
    var t=numToken(m[2],state.decSep);
    if(isNaN(t.num)) return {ok:false};
    return {ok:true,range:false,pre:pre,num:neg?-t.num:t.num,suf:m[3],dec:t.dec,grp:t.grp,decChar:t.decChar};
  }
  function fmtNum(n,dec,grp,decChar){
    var neg=n<0, a=Math.abs(n).toFixed(dec), parts=a.split("."), ip=parts[0];
    if(grp) ip=ip.replace(/\B(?=(\d{3})+(?!\d))/g,grp);
    return (neg?"-":"")+ip+(parts[1]?(decChar||".")+parts[1]:"");
  }
  function scaleToNum(pv,n){ return pv.pre+fmtNum(n,pv.dec,pv.grp,pv.decChar)+pv.suf; }
  function parseNum(t){ var pv=parseVal(t); return pv.ok?pv.num:NaN; }
  function curData(it){
    var d=it.data||[]; var x=d[state.frame];
    return (x===undefined||x==="")?(d[0]||""):x;
  }
  function weightOf(it){
    if(it.kind!=="metric") return it.v;
    var src=state.sizeSrc||"manual";
    if(src==="abs"){ var n=Math.abs(parseNum(curData(it))); return (n>0)?n:0.0001; }
    if(src==="rel"){
      var n0=Math.abs(parseNum((it.data||[])[0])), n1=Math.abs(parseNum(curData(it)));
      if(n0>0 && n1>=0) return Math.max(it.v*n1/n0, it.v*0.03);
    }
    return it.v;
  }
  function textReq(it){
    var f=Math.max(11,fonts.t*0.85);
    var content=((it.label||"").length*1.39+(it.body||"").length*0.48+(it.eyebrow||"").length*0.4)*f*f;
    return clamp(content*1.9/(size.w*size.h),0.02,0.6);
  }
  function syncW(){
    var S=0, texts=[], reqs=[], R=0, metrics=[];
    state.items.forEach(function(it){
      it.w=weightOf(it);
      if(it.kind==="text"){
        var c=cells[it.id], rq=textReq(it)*((c&&c.mb)||1);
        texts.push(it); reqs.push(rq); R+=rq;
      }else{ S+=it.w; metrics.push(it); }
    });
    /* smallest allowed sector: lift very small data sectors so they stay readable */
    var m=(state.minShare||0)/100;
    if(m>0 && metrics.length>1){
      var T=S;
      for(var pass=0;pass<5;pass++){
        var low=metrics.filter(function(i){ return i.w<m*T-1e-9; });
        if(!low.length || low.length===metrics.length || low.length*m>=0.9) break;
        var rest=metrics.reduce(function(a,i){ return low.indexOf(i)<0?a+i.w:a; },0);
        var wl=m*rest/(1-low.length*m);
        low.forEach(function(i){ i.w=wl; });
        T=rest+wl*low.length;
      }
      S=metrics.reduce(function(a,i){ return a+i.w; },0);
    }
    if(!texts.length) return;
    if(R>0.85){ var k=0.85/R; reqs=reqs.map(function(x){return x*k;}); }
    /* with sizes that follow the data, a text block's size is its percentage of the whole grid */
    var base=texts.map(function(it){return it.v;});
    if((state.sizeSrc||"manual")==="abs"){
      var tp=Math.min(0.8,texts.reduce(function(a,it){return a+it.v;},0)/100);
      base=texts.map(function(it){return S*(it.v/100)/(1-tp);});
    }
    for(var n=0;n<24;n++){
      var tot=S; texts.forEach(function(it){tot+=it.w});
      texts.forEach(function(it,i){ it.w=Math.max(base[i],reqs[i]*tot); });
    }
  }
  function total(){return state.items.reduce(function(s,i){return s+i.v},0)}
  function fmt(x){return (Math.round(x*10)/10).toString()}

  /* ---------- palettes / fills ---------- */
  function scheme(){ for(var i=0;i<SCHEMES.length;i++){ if(SCHEMES[i].id===state.scheme) return SCHEMES[i]; } return SCHEMES[0]; }
  function paint(it,cols,bi,rank){
    var n=cols.length;
    it.c=[cols[bi%n],cols[(bi+2)%n],cols[(bi+3)%n]];
    var m=state.fillMode, f="solid";
    if(m==="gradient") f="gradient";
    else if(m==="mixed") f=["solid","gradient","stripes","gradient"][rank%4];
    it.fill=f;
    it.angle=(f==="stripes")?90:[180,165,195,180][rank%4];
    it.ink="auto";
  }
  function assign(shuffle){
    var cols=scheme().colors.slice();
    if(shuffle) cols.sort(function(){return Math.random()-.5});
    state.items.slice().sort(function(a,b){return b.w-a.w}).forEach(function(it,i){ paint(it,cols,i,i); });
  }
  function pickIndex(){
    var cols=scheme().colors, best=0, bc=Infinity;
    cols.forEach(function(c,i){
      var n=state.items.filter(function(it){return it.c[0]===c}).length;
      if(n<bc){ bc=n; best=i; }
    });
    return best;
  }
  function addItem(kind){
    var cols=scheme().colors;
    var it=mk(cols[0], kind==="text"?"New heading":"New sector", 5,
      {kind:kind, body:kind==="text"?"Write a short explanation here.":"", val:"0"});
    while(it.data.length<state.frames) it.data.push(it.data[0]);
    paint(it,cols,pickIndex(),state.items.length);
    state.items.push(it);
    if(state.orig) state.orig[it.id]=makeOrig([it])[it.id];
    return it;
  }
  function buildSchemes(){
    var box=document.getElementById("schemes"); box.innerHTML="";
    SCHEMES.forEach(function(s){
      var b=document.createElement("button"); b.className="scheme";
      b.setAttribute("aria-pressed",s.id===state.scheme?"true":"false");
      b.innerHTML='<span class="nm">'+s.name+'</span><span class="sw">'+s.colors.map(function(c){return '<i style="background:'+c+'"></i>';}).join("")+'</span>';
      b.addEventListener("click",function(){ state.scheme=s.id; assign(false); buildSchemes(); buildList(); render(); });
      box.appendChild(b);
    });
  }

  /* ---------- layout tree: fixed topology, proportions come from weights ---------- */
  var tree=null, treeKey="";
  function sumNode(n,vals){ return n.id ? vals[n.id] : sumNode(n.l,vals)+sumNode(n.r,vals); }
  /* auto layout: at every split try both directions and every cut, and keep the one that leaves the roundest sectors */
  function aspectOf(w,h){ return w>=h ? w/Math.max(h,1e-9) : h/Math.max(w,1e-9); }
  function buildNode(ids,vals,w,h){
    if(ids.length===1) return {id:ids[0]};
    var tot=0; ids.forEach(function(id){tot+=vals[id]});
    var best=null, acc=0;
    for(var k=1;k<ids.length;k++){
      acc+=vals[ids[k-1]];
      var f=acc/tot, nl=k, nr=ids.length-k;
      [true,false].forEach(function(vertical){
        var lw=vertical?w*f:w, lh=vertical?h:h*f, rw=vertical?w*(1-f):w, rh=vertical?h:h*(1-f);
        var score=Math.max(aspectOf(lw,lh)/Math.sqrt(nl), aspectOf(rw,rh)/Math.sqrt(nr)) + Math.abs(f-0.5)*0.15;
        if(!best || score<best.score) best={score:score,k:k,vertical:vertical,f:f};
      });
    }
    var L=ids.slice(0,best.k), R=ids.slice(best.k), f2=best.f, v=best.vertical;
    return {
      vertical:v,
      l: v?buildNode(L,vals,w*f2,h):buildNode(L,vals,w,h*f2),
      r: v?buildNode(R,vals,w*(1-f2),h):buildNode(R,vals,w,h*(1-f2))
    };
  }
  function place(n,vals,x,y,w,h,out){
    if(n.id){ out[n.id]={x:x,y:y,w:w,h:h}; return; }
    var sl=sumNode(n.l,vals), sr=sumNode(n.r,vals), f=sl/(sl+sr);
    if(n.vertical){
      place(n.l,vals,x,y,w*f,h,out);
      place(n.r,vals,x+w*f,y,w*(1-f),h,out);
    }else{
      place(n.l,vals,x,y,w,h*f,out);
      place(n.r,vals,x,y+h*f,w,h*(1-f),out);
    }
  }
  function leafIds(n,acc){ if(n.id) acc.push(n.id); else { leafIds(n.l,acc); leafIds(n.r,acc); } return acc; }
  function fixedMatches(){
    if(!state.fixed) return false;
    var a=leafIds(state.fixed,[]).sort().join(","), b=state.items.map(function(i){return i.id}).sort().join(",");
    return a===b;
  }
  var blend={active:false,p:0,from:{}};
  function ensureTree(){
    if(state.fixed && !fixedMatches()) state.fixed=null;
    var key=state.items.map(function(i){return i.id}).sort().join(",")+"|"+(state.fixed?"F":state.aspect);
    if(tree && key===treeKey) return;
    var vals={}; state.items.forEach(function(i){vals[i.id]=i.w});
    if(state.fixed){
      tree=JSON.parse(JSON.stringify(state.fixed));
    }else{
      var ids=state.items.map(function(i){return i.id}).sort(function(a,b){return vals[b]-vals[a]});
      tree=buildNode(ids,vals,state.aspect,1);
    }
    treeKey=key;
    var from={}, any=false;
    Object.keys(cells).forEach(function(id){ if(cells[id].rect){ from[id]=cells[id].rect; any=true; } });
    if(any){ blend={active:true,p:0,from:from}; }
  }

  /* ---------- text: typewriter, sticky layout ---------- */
  var digitEm={};
  function measureDigits(){
    try{
      var cv=document.createElement("canvas").getContext("2d"), out={};
      [["s7",'700 100px "Averia Serif Libre",Georgia,serif'],["s4",'400 100px "Averia Serif Libre",Georgia,serif'],
       ["c7",'700 100px "Roboto Condensed","Arial Narrow",sans-serif'],["c4",'400 100px "Special Gothic Condensed One","Arial Narrow",sans-serif']].forEach(function(p){
        cv.font=p[1]; var m=0; for(var d=0;d<10;d++){ m=Math.max(m,cv.measureText(String(d)).width); } out[p[0]]=m/100;
      });
      digitEm=out;
    }catch(e){}
  }
  /* while a number counts, every digit gets the same width, so the number never changes length from frame to frame */
  /* width of a number string in em (digits use the widest digit, like the fixed-width slots), for fitting it to its sector */
  function numWidthEm(text,strip){
    var poster=(state.typo==="poster");
    var ls=strip?(poster?-0.04:0):(poster?-0.09:-0.01);
    var adv=strip?((poster?digitEm.c7:digitEm.c4)||0.5):((poster?digitEm.s4:digitEm.s7)||0.56);
    var w=0;
    for(var i=0;i<text.length;i++){
      var ch=text.charAt(i);
      if(ch>="0"&&ch<="9") w+=adv+ls;
      else if(ch===","||ch==="."||ch===" ") w+=0.27+ls;
      else if(ch==="%") w+=0.9+ls;
      else if(ch==="+"||ch==="-"||ch==="\u2212") w+=0.58+ls;
      else w+=0.6+ls;
    }
    return w;
  }
  function setNumText(el,text,tab){
    if(!tab){ el.textContent=text; return; }
    el.textContent="";
    for(var i=0;i<text.length;i++){
      var ch=text.charAt(i);
      if(ch>="0" && ch<="9"){ var d=document.createElement("i"); d.className="dg"; d.textContent=ch; el.appendChild(d); }
      else el.appendChild(document.createTextNode(ch));
    }
  }
  function setSty(el,prop,val){ var k="_s"+prop; if(el[k]!==val){ el.style[prop]=val; el[k]=val; } }
  function startType(el,len,delay){
    el._type={t0:performance.now()+(delay||0), d:clamp(len*38,220,800)/state.speed};
    kick();
  }
  function typed(el,full,now){
    var t=el._type; if(!t) return full;
    var p=clamp((now-t.t0)/t.d,0,1);
    if(p>=1){ el._type=null; el.classList.remove("typing"); return full; }
    el.classList.add("typing");
    return full.slice(0,Math.ceil(full.length*p));
  }
  function flip(c,key,want){
    var el=c[key];
    if(el._cvert===undefined){ el._cvert=want; el.classList.toggle("vert",want); return; }
    if(el._cvert===want){
      if(el._ft){ clearTimeout(el._ft); el._ft=0; el.classList.remove("flipping"); }
      return;
    }
    var mode=state.typeMode||"first";
    var apply=function(){
      el._cvert=want; el.classList.toggle("vert",want);
      if(mode==="always") startType(el,key==="txt"?(c.label||"").length:(c.numTxt||"").length);
    };
    if(mode==="off"||mode==="always"){ apply(); return; }
    clearTimeout(el._ft); el.classList.add("flipping");
    el._ft=setTimeout(function(){ el._ft=0; apply(); el.classList.remove("flipping"); },110);
  }
  /* side padding shrinks in very narrow sectors so the text stays anchored to it instead of being cut */
  function padX(pw){ return Math.min(fonts.p,Math.max(3,pw*0.18)); }
  function autoNumSize(len,pw,ph,pad,arr,vert){
    var aw=Math.max(10,pw-2*padX(pw)), ah=Math.max(10,ph-2*pad), cap=size.w*0.16, L=Math.max(1,len), v;
    if(vert) v=Math.min(aw*0.72, ah*0.5/(L*0.6));
    else if(arr==="inline") v=Math.min(ph*0.62, aw*0.5/(L*0.58));
    else v=Math.min(aw*0.9/(L*0.58), ah*0.42);
    return clamp(v,12,cap);
  }
  /* The layout is "sticky": while a sector moves or resizes the committed layout is kept
     (text only fades if it no longer fits). It is recomputed once the sector has settled,
     and any visible reflow is hidden behind a short fade. */
  function layoutFor(it,c,pw,ph,len){
    var poster=(state.typo==="poster");
    var strip=(it.numFont==="strip");
    var ft=(it.capStyle==="strip")?fonts.s:fonts.t, pad=fonts.p, q=ft*2, P=c.L;
    var arr=it.arr||"stack";
    var forceV=(it.orient==="down"||it.orient==="up");
    var fill=(state.numFit==="fill");
    var explicit=(it.numSize>0) && !strip;
    var cw=poster?0.5:0.6;
    var numVert=false, txtVert=false;
    if(arr!=="inline"){
      var f0=strip?fonts.s:(explicit?it.numSize*size.w:(fill?autoNumSize(len,pw,ph,pad,arr,false):fonts.n));
      var numW=len*f0*(strip?0.5:cw)+2*pad;
      numVert=forceV || (ph>pw*1.15 && pw<numW*((P&&P.numVert)?1.08:0.98));
      txtVert=numVert || (ph>pw*1.6 && pw<(ft*4+2*pad)*((P&&P.txtVert)?1.1:0.95));
    }
    var nfs;
    if(strip) nfs=fonts.s;
    else if(explicit) nfs=it.numSize*size.w;
    else if(fill) nfs=autoNumSize(len,pw,ph,pad,arr,numVert);
    else{
      nfs=fonts.n;
      if(numVert) nfs=clamp(pw-2*pad,9,fonts.n); else if(ph-2*pad<fonts.n) nfs=clamp(ph-2*pad,9,fonts.n);
    }
    if(strip||explicit) nfs=Math.max(9,Math.round(nfs*2)/2);
    if(numVert && !strip) nfs=Math.max(9,Math.min(nfs,(pw-2*padX(pw))/(poster?0.8:1)));
    else{ var nmax=fill?size.w*0.2:fonts.n; nfs=Math.min(nmax,Math.max(9,Math.round(nfs/3)*3)); }
    if(it.showNum===false){ numVert=false; nfs=0; }
    var capLh=poster ? (it.capStyle==="strip"?1.17:0.8) : ((it.capStyle==="caps")?0.96:(it.capStyle==="strip"?1:1.1));
    var tfs=txtVert ? clamp((pw-2*padX(pw))/1.15,8,ft) : ft;
    tfs=Math.round(tfs*2)/2;
    var aw=pw-2*padX(pw), used, maxH, w;
    var numLenPx=len*nfs*(strip?0.5:(poster?0.5:0.58));
    if(arr==="inline"){
      used=0; maxH=ph;
      w=Math.max(0,aw-numLenPx-pad);
    }else{
      used=numVert ? len*nfs*(poster?0.54:0.62) : nfs*(poster&&!strip?0.8:1);
      maxH=Math.max(0,ph-used-3*pad);
      w=txtVert ? 0 : aw;
    }
    if(it.capW>0 && !txtVert) w=Math.max(0,Math.min(w||aw,pw*it.capW));
    var lh=tfs*capLh;
    var maxHq=txtVert ? maxH : Math.floor(maxH/lh)*lh;
    var thr=(arr==="inline")?1.0:((P&&P.on)?1.1:1.6);
    var on=(maxHq>=lh && maxH>=tfs*thr && pw>=tfs*1.1+pad && (arr!=="inline" || w>=ft*3));
    return {arr:arr,numVert:numVert,txtVert:txtVert,nfs:nfs,tfs:tfs,used:used,maxHq:maxHq,w:w,on:on,capLh:capLh,nlen:(numVert?len*nfs*(poster?0.54:0.62):numLenPx)};
  }
  /* The text layout (orientation, wrapping, font size) is decided from the sector's TARGET size, once per
     change, so it never waits for the animation to finish. Every frame the committed layout is only adapted
     to the current size: scaled with the sector, trimmed by whole lines, and clipped or faded if needed. */
  function applyLayout(it,c,L){
    flip(c,"num",L.numVert);
    flip(c,"txt",L.txtVert);
    var dn=(it.orient==="down"||it.orient==="autodown");
    c.num.classList.toggle("down",dn&&L.numVert);
    c.txt.classList.toggle("down",dn&&L.txtVert);
    c.L=L; c.lines=undefined;
  }
  function ease2(cur,tgt,k){
    if(cur===undefined || !isFinite(cur)) return tgt;
    var d=tgt-cur;
    return (Math.abs(d)<0.04) ? tgt : cur+d*k;
  }
  /* Per frame, the committed layout (decided from the TARGET size) is adapted to the current size. Font size and
     caption width glide toward their targets at the same pace as the sector itself, so text never jumps. */
  function adapt(it,c,r,now,ke){
    var L=c.L, pad=fonts.p;
    /* a visibility change only happens once it has lasted ~0.3 s, so a sector hovering around a threshold never blinks */
    var vis=function(key,want){
      var cur=c[key+"V"];
      if(cur===undefined){ c[key+"V"]=want; return want; }
      if(want===cur){ c[key+"T"]=null; return cur; }
      if(c[key+"T"]==null) c[key+"T"]=now;
      if(now-c[key+"T"]>=300){ c[key+"V"]=want; c[key+"T"]=null; return want; }
      return cur;
    };
    var pw=r.w*size.w-state.gap, ph=r.h*size.h-state.gap;
    var px=padX(pw), aw=pw-2*px, ah=ph-2*pad;
    var pxs=px.toFixed(1)+"px";
    if(c.pxs!==pxs){ c.pxs=pxs; c.inner.style.setProperty("--padx",pxs); }
    var scaleOn=(state.textScale!==false);
    /* a number never gets wider (or, when vertical, longer) than its sector; the size glides like everything else */
    var emW=numWidthEm(c.numTxt||"",it.numFont==="strip");
    var capN=(L.numVert?(ph-2*pad):aw)/Math.max(emW,0.1);
    var tN=(it.showNum===false)?0:Math.max(0,Math.min(L.nfs,capN));
    var nfs=scaleOn ? (c.sn=ease2(c.sn,tN,ke)) : (c.sn=tN);
    var tfs=scaleOn ? (c.st=ease2(c.st,L.tfs,ke)) : (c.st=L.tfs);
    var wS=0;
    if(!L.txtVert){ wS=scaleOn ? (c.sw=ease2(c.sw,L.w,ke)) : (c.sw=L.w); } else c.sw=undefined;
    var rN=L.nfs>0 ? nfs/L.nfs : 1, rT=L.tfs>0 ? Math.max(0.2,tfs/L.tfs) : 1;
    var used=L.used*rN;
    var lh=tfs*L.capLh;
    var availH=(L.arr==="inline") ? ph : Math.max(0,ph-used-3*pad);
    var maxHq=L.maxHq*rT;
    var trim=(state.trimLines!==false);
    if(trim){
      maxHq=Math.min(maxHq,availH);
      if(!L.txtVert){
        /* whole lines only, with a small hysteresis band so the line count does not flicker at the boundary */
        var raw=maxHq/Math.max(1,lh), fl=Math.floor(raw), curL=(c.lines===undefined)?fl:c.lines;
        if(raw<curL-0.12){ curL=fl; c.lnT=null; }              /* a line that no longer fits goes at once (never overlaps) */
        else if(fl>curL && raw-fl>0.12){                        /* a new line appears only after the room has lasted 0.2 s */
          if(c.lnT==null) c.lnT=now;
          if(now-c.lnT>=200){ curL=fl; c.lnT=null; }
        }else c.lnT=null;
        c.lines=curL; maxHq=curL*lh;
      }
    }
    var wA=L.txtVert?"":(wS.toFixed(1)+"px");
    setSty(c.num,"fontSize",nfs.toFixed(2)+"px");
    setSty(c.txt,"fontSize",tfs.toFixed(2)+"px");
    setSty(c.txt,"maxHeight",maxHq.toFixed(1)+"px");
    setSty(c.txt,"width",wA);
    /* a vertical caption keeps only the columns (lines) that fully fit the width; none is cut in half */
    if(L.txtVert) setSty(c.txt,"maxWidth",trim?(Math.floor(aw/Math.max(1,lh))*lh).toFixed(1)+"px":"100%");
    else setSty(c.txt,"maxWidth","");
    var txtOk=L.on && tfs>=5 && (!trim || maxHq>=lh*0.99);
    var numOk=nfs>=5;
    if(trim && L.txtVert && aw<lh) txtOk=false;
    if(state.textFit==="hide"){
      var wFit=L.txtVert ? pw>=tfs*1.1+pad : wS<=aw+0.5;
      var hFit=(L.arr==="inline") ? ph>=tfs : availH>=tfs*L.capLh;
      txtOk=txtOk && wFit && hFit;
      var nFit=L.numVert ? (L.nlen*rN<=ah+0.5 && nfs<=aw+0.5) : (L.nlen*rN<=aw+0.5);
      numOk=numOk && nFit;
    }
    var longest=0; (c.label||"").split(/\s+/).forEach(function(w){ if(w.length>longest) longest=w.length; });
    var wordPx=longest*tfs*(it.capStyle==="caps"?0.62:(it.capStyle==="strip"?0.5:0.42));
    if(L.txtVert){ if(wordPx>maxHq+0.5) txtOk=false; }
    else if(L.arr==="inline"){ if(wordPx>wS*1.06+0.5) txtOk=false; }
    txtOk=vis("txt",txtOk); numOk=vis("num",numOk);
    setSty(c.txt,"opacity",txtOk?"1":"0");
    setSty(c.num,"opacity",numOk?"1":"0");
    var eff=L.arr;
    if(c.eff!==eff){ c.eff=eff; c.inner.setAttribute("data-eff",eff); }
    var crossNum=L.numVert?nfs*(state.typo==="poster"?0.8:1):0;
    var crossTxt=L.txtVert?Math.ceil(((c.label||"").length*tfs*0.6)/Math.max(1,maxHq||1))*tfs*L.capLh:0;
    var vc=(it.vcenter && (L.numVert||L.txtVert) && Math.max(crossNum,crossTxt)<=aw+0.5)?"1":"0";
    if(c.vc!==vc){ c.vc=vc; c.inner.setAttribute("data-vc",vc); }
    var moving=(Math.abs(nfs-L.nfs)>0.05)||(Math.abs(tfs-L.tfs)>0.05)||(!L.txtVert && Math.abs(wS-L.w)>0.2);
    return moving || (c.txtT!=null) || (c.numT!=null) || (c.lnT!=null);
  }
  function fit(it,c,r,rT,numLen,now,ke){
    var tw=rT.w*size.w-state.gap, th=rT.h*size.h-state.gap;
    c.tw=tw; c.th=th;
    var key=Math.round(tw)+"|"+Math.round(th)+"|"+numLen+"|"+(it.capW||0);
    if(!c.L || c.lk!==key){ applyLayout(it,c,layoutFor(it,c,tw,th,numLen)); c.lk=key; }
    return adapt(it,c,r,now,ke);
  }

  /* text block: eyebrow on top, title (+ body) fills the rest of the box, anchored top or bottom.
     The font is fitted to the sector's TARGET box (or fixed with an explicit title size) and scaled with the
     current box each frame. A block can also read vertically (auto when narrow and tall, or forced): the same
     layout is simply measured and drawn rotated by 90 degrees. */
  function fitText(it,c,r,rT,now){
    var padFor=function(w,h){ return (state.typo==="poster")?clamp(size.w*0.01667,6,30):clamp(Math.min(w,h)*0.075,6,30); };
    var pwC=r.w*size.w-state.gap, phC=r.h*size.h-state.gap;
    var pwT=rT.w*size.w-state.gap, phT=rT.h*size.h-state.gap;
    var padC=padFor(pwC,phC), padT=padFor(pwT,phT);
    var bwC=Math.max(10,pwC-2*padC), bhC=Math.max(10,phC-2*padC);
    var bwT=Math.max(10,pwT-2*padT), bhT=Math.max(10,phT-2*padT);
    var el=c.txt, mn=c.mn, mw=c.mw;
    if(!mn||!mw) return false;
    var o=it.orient||"auto";
    var forceV=(o==="up"||o==="down"), autoV=(o==="auto"||o==="autodown");
    var ratio=bhT/bwT;
    var vertical=forceV || (autoV && (c.tv ? ratio>1.5 : ratio>1.8));
    c.tv=vertical;
    var down=(o==="down"||o==="autodown");
    var WT=vertical?bhT:bwT, HT=vertical?bwT:bhT, WC=vertical?bhC:bwC, HC=vertical?bwC:bhC;
    var key=Math.round(WT)+"|"+Math.round(HT)+"|"+fonts.t.toFixed(1)+"|"+(c.tkey||"")+"|"+(vertical?1:0);
    if(c.fk!==key){
      var fmin=Math.max(11,fonts.t*0.85), solo=!it.body;
      var fmax=solo?Math.max(fmin,size.w*0.24):Math.max(fmin,fonts.t*2.2);
      el.style.transform="none"; el._stransform=undefined;
      el.style.width=WT+"px"; el.style.height=HT+"px"; el._swidth=undefined; el._sheight=undefined;
      var availT=Math.max(10,HT-(c.ey?Math.ceil(c.ey.offsetHeight+padT*0.7):0));
      mn.style.transition="none";
      var f, over=false;
      if(it.tsize>0){ f=Math.max(8,it.tsize*size.w); }
      else{
        var fits=function(v){ mn.style.fontSize=v+"px"; return mw.offsetHeight<=availT+0.5 && mw.scrollWidth<=mn.clientWidth+0.5; };
        if(!fits(fmin)){ f=fmin; over=true; }
        else{
          var lo=fmin, hi=fmax;
          if(fits(hi)) lo=hi;
          else{ for(var i=0;i<9;i++){ var mid=(lo+hi)/2; if(fits(mid)) lo=mid; else hi=mid; } }
          f=Math.max(fmin,Math.floor(lo*4)/4);
        }
      }
      mn._sfontSize=undefined;
      c.fs0=f; c.fk=key; c.over=over; c.rbT={w:WT,h:HT};
      if(over && (c.mb||1)<5){ c.mb=(c.mb||1)*1.12; syncW(); }
    }
    setSty(el,"left",padC.toFixed(1)+"px"); setSty(el,"top",padC.toFixed(1)+"px");
    setSty(el,"width",WC.toFixed(1)+"px"); setSty(el,"height",HC.toFixed(1)+"px");
    setSty(el,"transformOrigin","0 0");
    setSty(el,"transform",vertical?(down?("translateX("+bwC.toFixed(2)+"px) rotate(90deg)"):("translateY("+bhC.toFixed(2)+"px) rotate(-90deg)")):"none");
    setSty(el,"gap",(padC*0.7).toFixed(1)+"px");
    var s=(state.textScale!==false) ? clamp(Math.min(WC/c.rbT.w, HC/c.rbT.h),0.04,1) : 1;
    setSty(mn,"fontSize",(c.fs0*s).toFixed(2)+"px");
    var ok=true;
    if(state.textFit==="hide" && state.textScale===false) ok=(WC>=WT*0.92 && HC>=HT*0.92);
    setSty(el,"opacity",ok?"1":"0");
    return false;
  }

  /* ---------- animation loop: weights ease -> layout recomputed every frame ---------- */
  var running=false,last=0;
  function ease(p){return p<.5?4*p*p*p:1-Math.pow(-2*p+2,3)/2}
  function spI(){ return state.speed*(state.spIntro||1); }
  function kick(){ if(!running){ running=true; last=performance.now(); requestAnimationFrame(frame); } }
  function targetText(it,pct){
    if(state.mode==="values") return (it.prefix||"")+curData(it)+(it.unit||"");
    return fmt(pct)+"%";
  }
  function frame(now){
    var dt=Math.min(0.05,Math.max(0,(now-last)/1000)); last=now;
    var sp=state.speed*(state.spSize||1);
    var k=1-Math.exp(-dt*sp/0.16), kc=1-Math.exp(-dt*state.speed*(state.spCount||1)/0.16), active=false;
    var vals={}, valsT={}, sum=0, tgt=0;
    state.items.forEach(function(it){
      var c=cells[it.id]; if(!c) return;
      tgt+=it.w;
      var diff=it.w-c.d;
      if(Math.abs(diff)>Math.max(0.003,Math.abs(it.w)*1e-4)){ c.d+=diff*k; active=true; } else c.d=it.w;
      var want=(state.hover&&c.hover)?1:0, hd=want-c.hv;
      if(Math.abs(hd)>0.002){ c.hv+=hd*(1-Math.exp(-dt*state.speed*(state.spHover||1)/0.12)); active=true; } else c.hv=want;
      vals[it.id]=c.d*(1+state.boost*c.hv); valsT[it.id]=it.w*(1+state.boost*want); sum+=c.d;
    });
    ensureTree();
    var rects={}; place(tree,vals,0,0,1,1,rects);
    var rectsT={}; place(tree,valsT,0,0,1,1,rectsT);
    var blending=blend.active, e=1;
    if(blending){
      blend.p=Math.min(1,blend.p+dt*sp/0.8); e=ease(blend.p);
      if(blend.p>=1) blend.active=false; else active=true;
    }
    var dpr=window.devicePixelRatio||1, sn=function(v){return Math.round(v*dpr)/dpr;};
    state.items.forEach(function(it){
      var c=cells[it.id]; if(!c) return;
      var r=rects[it.id], f=blending&&blend.from[it.id];
      if(f){ r={x:f.x+(r.x-f.x)*e, y:f.y+(r.y-f.y)*e, w:f.w+(r.w-f.w)*e, h:f.h+(r.h-f.h)*e}; }
      c.rect=r;
      var X0=sn(r.x*size.w), X1=sn((r.x+r.w)*size.w), Y0=sn(r.y*size.h), Y1=sn((r.y+r.h)*size.h);
      c.outer.style.left=X0+"px"; c.outer.style.top=Y0+"px";
      c.outer.style.width=(X1-X0)+"px"; c.outer.style.height=(Y1-Y0)+"px";
      /* the box edges are snapped to device pixels (no seams); text follows the exact edges instead */
      var rx0=r.x*size.w, rx1=(r.x+r.w)*size.w, ry0=r.y*size.h, ry1=(r.y+r.h)*size.h;
      var rk=rx0.toFixed(2)+"|"+rx1.toFixed(2)+"|"+ry0.toFixed(2)+"|"+ry1.toFixed(2);
      if(c.rk!==undefined && c.rk!==rk) c.mvUntil=now+120;
      c.rk=rk;
      var mvNow=(c.mvUntil!==undefined && now<c.mvUntil);
      if(mvNow){
        var ox0=rx0-X0, ox1=rx1-X1, oy0=ry0-Y0, oy1=ry1-Y1, st=c.inner.style;
        st.setProperty("--dx0",ox0.toFixed(3)+"px"); st.setProperty("--dx1",ox1.toFixed(3)+"px");
        st.setProperty("--dy0",oy0.toFixed(3)+"px"); st.setProperty("--dy1",oy1.toFixed(3)+"px");
        st.setProperty("--dxm",((ox0+ox1)/2).toFixed(3)+"px"); st.setProperty("--dym",((oy0+oy1)/2).toFixed(3)+"px");
        active=true;
      }else if(c.mvOn){
        var st2=c.inner.style;
        ["--dx0","--dx1","--dy0","--dy1","--dxm","--dym"].forEach(function(v){ st2.removeProperty(v); });
      }
      if(mvNow!==!!c.mvOn){ c.mvOn=mvNow; c.inner.classList.toggle("mv",mvNow); }
      if(c.intro){
        if(now>=c.intro.t0+c.intro.d) c.intro=null; else active=true;
      }
      if(it.kind==="text"){
        fitText(it,c,r,rectsT[it.id]||r,now);
        return;
      }
      var pct=c.d/sum*100;
      if(c.intro && state.mode!=="values"){
        var p=clamp((now-c.intro.t0)/c.intro.d,0,1);
        pct*=1-Math.pow(1-p,3);
      }
      var txt, cnt=false;
      if(state.mode==="values"){
        var cur=curData(it), pv=parseVal(cur);
        if(pv.ok && !pv.range){
          var tn=pv.num;
          if(c.dv===undefined || !isFinite(c.dv)) c.dv=tn;
          var dd=tn-c.dv;
          if(Math.abs(dd)>Math.max(1e-3,Math.abs(tn)*1e-4)){ c.dv+=dd*kc; active=true; cnt=true; } else c.dv=tn;
          txt=(it.prefix||"")+pv.pre+fmtNum(c.dv,pv.dec,pv.grp,pv.decChar)+pv.suf+(it.unit||"");
        }else{ c.dv=undefined; txt=(it.prefix||"")+cur+(it.unit||""); }
      }else{ txt=fmt(pct)+"%"; cnt=Math.abs(c.d-it.w)>Math.max(0.003,Math.abs(it.w)*1e-4); }
      c.numTxt=txt;
      var ns=typed(c.num,txt,now);
      if(!liveTimer&&!playTimer) c.keepTab=false; else if(cnt) c.keepTab=true;
      var tab=(cnt||!!c.keepTab), nk=ns+(tab?"\u0001":"");
      if(c.numShown!==nk){ setNumText(c.num,ns,tab); c.numShown=nk; }
      var ls=typed(c.txt,c.label||"",now); if(c.txtShown!==ls){ c.txt.textContent=ls; c.txtShown=ls; }
      if(c.num._type||c.txt._type) active=true;
      var tlen=targetText(it,tgt>0?it.w/tgt*100:0).length;
      if(fit(it,c,r,rectsT[it.id]||r,tlen,now,k)) active=true;
    });
    if(active) requestAnimationFrame(frame); else running=false;
  }

  /* ---------- stage / cells ---------- */
  function applyStage(){
    var pw0=stage.parentElement.clientWidth||800;
    var sw0=Math.max(200,Math.floor(Math.min(pw0,window.innerHeight*0.78*state.aspect)));
    stage.style.width=sw0+"px";
    stage.style.height=Math.round(sw0/state.aspect)+"px";
    stage.style.background=scheme().bg;
    stage.classList.toggle("poster",state.typo==="poster");
    stage.classList.toggle("notrim",state.trimLines===false);
    stage.style.setProperty("--dur",(0.8/spI()).toFixed(2)+"s");
    stage.style.setProperty("--ease","cubic-bezier(.4,0,.2,1)");
    stage.style.setProperty("--half",(state.gap/2)+"px");
    stage.style.setProperty("--radius",state.radius+"px");
    stage.style.setProperty("--grain",(state.grain/100*0.85).toFixed(2));
    size.w=stage.clientWidth||800; size.h=stage.clientHeight||size.w/state.aspect;
    var poster=(state.typo==="poster");
    fonts.n=clamp(size.w*0.05,18,60);
    fonts.t=poster?Math.max(9,size.w*0.02778):clamp(size.w*0.022,13,20);
    fonts.s=poster?Math.max(8,size.w*0.02222):fonts.t;
    fonts.e=poster?Math.max(8,size.w*0.02465):fonts.t;
    fonts.p=poster?clamp(size.w*0.01667,6,30):clamp(size.w*0.014,8,18);
    stage.style.setProperty("--fsn",fonts.n+"px");
    stage.style.setProperty("--fst",fonts.t+"px");
    stage.style.setProperty("--fse",fonts.e+"px");
    stage.style.setProperty("--pad",fonts.p+"px");
    stage.style.setProperty("--dgw",(state.typo==="poster"?((digitEm.s4||0.56)-0.09):((digitEm.s7||0.56)-0.01))+"em");
    stage.style.setProperty("--dgws",(state.typo==="poster"?((digitEm.c7||0.5)-0.04):(digitEm.c4||0.5))+"em");
  }
  function create(it){
    var outer=document.createElement("div"); outer.className="cell";
    var inner=document.createElement("div"); inner.className="inner";
    var num=document.createElement("div"); num.className="num";
    var txt=document.createElement("div"); txt.className="txt";
    inner.appendChild(num); inner.appendChild(txt); outer.appendChild(inner); stage.appendChild(outer);
    var cell=(cells[it.id]={outer:outer,inner:inner,num:num,txt:txt,d:it.w,rect:null,intro:null,tm:0,hv:0,hover:false,kind:"metric"});
    outer.addEventListener("pointerenter",function(){cell.hover=true; kick();});
    outer.addEventListener("pointerleave",function(){cell.hover=false; kick();});
    return cell;
  }
  function resetEl(el){
    Object.keys(el).forEach(function(k){ if(k.charAt(0)==="_") delete el[k]; });
    el.removeAttribute("style"); el.classList.remove("vert","typing","down","caps","strip"); el.textContent="";
  }
  function switchKind(c,it){
    c.kind=it.kind; c.L=null; c.TL=null; c.mb=1; c.fk=undefined; c.fs0=undefined; c.curF=undefined; c.over=false;
    c.fading=false; clearTimeout(c.ft); clearTimeout(c.tt);
    c.txtShown=undefined; c.numShown=undefined; c.tkey=undefined; c.label=undefined; c.sig=undefined;
    c.ey=null; c.mn=null; c.mw=null;
    resetEl(c.num); resetEl(c.txt);
    c.inner.classList.toggle("tsec",it.kind==="text");
    c.inner.removeAttribute("data-eff"); c.eff=undefined;
  }
  var ANIMS=["pre","pop","slide","fade","wipe"];
  function intro(c,delayMs){
    var inn=c.inner;
    clearTimeout(c.tm);
    ANIMS.forEach(function(a){inn.classList.remove(a)});
    if(state.anim==="none"){ inn.style.transitionDelay="0s"; c.intro=null; kick(); return; }
    inn.style.transition="none"; inn.style.transitionDelay="0s";
    inn.classList.add("pre",state.anim);
    void inn.offsetWidth;
    inn.style.transition=""; inn.style.transitionDelay=(delayMs/1000)+"s";
    inn.classList.remove("pre");
    c.intro={t0:performance.now()+delayMs,d:700/spI()};
    if(c.kind!=="text"){
      var tm=state.typeMode||"first", typing=(tm!=="off");
      if(typing) startType(c.txt,(c.label||"xxxxxxxxxxxxxx").length,delayMs);
      if(state.mode==="values"){
        var itx=state.items.filter(function(i){return cells[i.id]===c;})[0];
        if(itx && parseVal(curData(itx)).ok && !parseVal(curData(itx)).range){ c.dv=0; } else if(typing) startType(c.num,6,delayMs);
      }
    }
    c.tm=setTimeout(function(){inn.style.transitionDelay="0s";},delayMs+1000/spI()+100);
    kick();
  }
  function clearCells(){
    Object.keys(cells).forEach(function(id){
      clearTimeout(cells[id].tm); clearTimeout(cells[id].ft); clearTimeout(cells[id].tt);
      cells[id].outer.remove();
    });
    cells={}; tree=null; blend={active:false,p:0,from:{}};
  }
  function render(){
    applyStage();
    if(state.fixed && !fixedMatches()){
      state.fixed=null; tree=null;
      if(!restoring) toast("The template's hand-made layout was replaced by an automatic one because the sectors changed.",true);
    }
    syncW();
    var seen={}, first=!Object.keys(cells).length;
    state.items.forEach(function(it,idx){
      seen[it.id]=1;
      var c=cells[it.id];
      if(!c){ c=create(it); if(it.kind==="text") switchKind(c,it); intro(c, first? idx*90/spI() : 0); }
      else if(c.kind!==it.kind){ switchKind(c,it); }
      c.inner.style.background=fillCss(it);
      c.inner.style.color=textFor(it);
      if(it.kind==="text"){
        var key=[it.eyebrow,it.label,it.body,it.anchor].join("\u0001");
        if(c.tkey!==key){
          c.tkey=key; c.mb=1; c.fk=undefined; c.fs0=undefined; c.curF=undefined;
          c.txt.textContent=""; c.ey=null; c.txt.classList.toggle("bot",it.anchor==="bottom");
          if(it.eyebrow){ var ey=document.createElement("div"); ey.className="ey"; ey.textContent=it.eyebrow; c.txt.appendChild(ey); c.ey=ey; }
          var mn=document.createElement("div"); mn.className="mn"+(it.anchor==="bottom"?" bot":"");
          var mw=document.createElement("div"); mw.className="mw"+(it.body?"":" solo");
          var t1=document.createElement("div"); t1.className="tt"; t1.textContent=it.label; mw.appendChild(t1);
          if(it.body){ var t2=document.createElement("div"); t2.className="tb"; t2.textContent=it.body; mw.appendChild(t2); }
          mn.appendChild(mw); c.txt.appendChild(mn); c.mn=mn; c.mw=mw;
        }
      }else{
        if(c.label!==it.label){ c.label=it.label; }
        var sig=[it.arr,it.orient,it.capStyle,it.numFont,it.numSize,it.capW,it.showNum,it.showCap].join("|");
        if(c.sig!==sig){ c.sig=sig; c.L=null; }
        if(!c.eff){ c.eff=it.arr||"stack"; c.inner.setAttribute("data-eff",c.eff); }
        
        c.num.style.display=(it.showNum===false)?"none":"";
        c.txt.style.display=(it.showCap===false)?"none":"";
        c.num.classList.toggle("strip",it.numFont==="strip");
        c.txt.classList.toggle("caps",it.capStyle==="caps");
        c.txt.classList.toggle("strip",it.capStyle==="strip");
      }
    });
    Object.keys(cells).forEach(function(id){
      if(!seen[id]){ clearTimeout(cells[id].tm); clearTimeout(cells[id].ft); clearTimeout(cells[id].tt); cells[id].outer.remove(); delete cells[id]; }
    });
    syncAll();
    save();
    trackHistory();
    kick();
  }
  function replay(){
    syncW();
    state.items.forEach(function(it,idx){
      var c=cells[it.id]; if(!c) return;
      c.d=it.w; intro(c,idx*90/spI());
    });
  }

  /* ---------- notifications and history (undo / redo) ---------- */
  var toastTimer=null;
  function toast(msg,withUndo){
    var t=document.getElementById("toast"); if(!t) return;
    t.innerHTML="";
    var s=document.createElement("span"); s.textContent=msg; t.appendChild(s);
    if(withUndo){
      var b=document.createElement("button"); b.textContent="Undo";
      b.addEventListener("click",function(){ undo(); t.classList.remove("show"); });
      t.appendChild(b);
    }
    t.classList.add("show");
    clearTimeout(toastTimer); toastTimer=setTimeout(function(){ t.classList.remove("show"); },7000);
  }
  var undoStack=[], redoStack=[], histCur=null, lastBurst=0, restoring=false;
  function histString(){
    var o=persistable(); delete o.frame;
    o.items.forEach(function(i){ delete i.w; });
    return JSON.stringify(o);
  }
  function updateUndoUI(){
    var u=document.getElementById("undo"), r=document.getElementById("redo");
    if(u) u.disabled=!undoStack.length;
    if(r) r.disabled=!redoStack.length;
  }
  /* every change to the data or the design is recorded; a burst of edits (dragging, typing) is one step */
  function trackHistory(){
    if(restoring) return;
    var str=histString();
    if(histCur===null){ histCur=str; return; }
    if(str===histCur) return;
    var now=Date.now();
    if(now-lastBurst>700){ undoStack.push(histCur); if(undoStack.length>80) undoStack.shift(); redoStack.length=0; }
    lastBurst=now; histCur=str; updateUndoUI();
  }
  function applyHist(str){
    var o=JSON.parse(str);
    if(playTimer) stopPlay();
    if(liveTimer) stopDemo(false);
    var frame=state.frame;
    restoring=true;
    state=o; normalizeState();
    state.frame=Math.min(frame,state.frames-1);
    state.items.forEach(function(i){ i.w=i.v; });
    tree=null;
    pushControls(); buildSchemes(); buildList(); buildTable(); render();
    restoring=false; histCur=histString(); updateUndoUI();
  }
  function undo(){ if(!undoStack.length) return; redoStack.push(histCur); applyHist(undoStack.pop()); }
  function redo(){ if(!redoStack.length) return; undoStack.push(histCur); applyHist(redoStack.pop()); }

  /* ---------- shares, sectors ---------- */
  function frameLabel(k){ return (state.frameNames&&state.frameNames[k])||("Data "+(k+1)); }
  function totalW(){ return state.items.reduce(function(s,i){return s+i.w;},0); }
  /* type a share: the sector takes exactly that part of the grid, the others keep their relative sizes */
  function setShare(it,x){
    x=clamp(x,0.5,90);
    if((state.sizeSrc||"manual")==="abs" && it.kind==="text"){ it.v=x; return; }
    var others=0; state.items.forEach(function(o){ if(o!==it) others+=o.w; });
    var wNew=x*others/(100-x);
    var ratio=(it.w>0 && it.v>0)?it.w/it.v:1;
    it.v=Math.max(0.05,wNew/ratio);
  }
  function defaultNewData(){
    var nums=[], ref=null;
    state.items.forEach(function(i){ if(i.kind!=="metric") return; var pv=parseVal(curData(i)); if(pv.ok&&!pv.range){ nums.push(Math.abs(pv.num)); if(!ref) ref=pv; } });
    if(!nums.length||!ref) return "0";
    var mean=nums.reduce(function(a,b){return a+b;},0)/nums.length;
    return ref.pre+fmtNum(mean,ref.dec,ref.grp,ref.decChar)+ref.suf;
  }
  function addSector(kind){
    var it=addItem(kind);
    if(kind==="metric"){ it.data=[]; var d=defaultNewData(); for(var k=0;k<state.frames;k++) it.data.push(d); it.label="New sector"; }
    syncW(); setShare(it,8);
    state.fixed=null; tree=null;
    buildTable(); buildList(); render();
    return it;
  }
  function removeSector(it){
    if(state.items.length<=2){ toast("A grid needs at least two sectors."); return; }
    state.items=state.items.filter(function(x){return x!==it;});
    buildTable(); buildList(); render();
  }
  function resetSector(it){
    var o=state.orig&&state.orig[it.id];
    if(o){ DESIGN.forEach(function(k){ if(o[k]!==undefined) it[k]=JSON.parse(JSON.stringify(o[k])); }); }
    else{
      var rank=state.items.indexOf(it);
      paint(it,scheme().colors,rank,rank);
      it.arr="stack"; it.orient="auto"; it.capStyle="cond"; it.numFont="serif"; it.numSize=0; it.capW=0;
      it.vcenter=false; it.tsize=0; it.anchor="top"; it.showNum=true; it.showCap=true;
    }
    buildList(); render(); toast("Sector design reset.",true);
  }
  function groupSmall(thr){
    syncW(); var T=totalW();
    var small=state.items.filter(function(i){ return i.kind==="metric" && T>0 && i.w/T*100<thr; });
    if(small.length<2){ toast("Fewer than two sectors are below "+thr+"%."); return; }
    var other=addItem("metric");
    other.label="Other ("+small.length+")";
    other.data=[];
    for(var k=0;k<state.frames;k++){
      var sum=0, ok=true, ref=null;
      small.forEach(function(s){ var pv=parseVal(s.data[k]!==undefined?s.data[k]:s.data[0]); if(pv.ok&&!pv.range){ sum+=pv.num; if(!ref) ref=pv; } else ok=false; });
      other.data.push(ok&&ref?scaleToNum(ref,sum):"\u2014");
    }
    other.v=small.reduce(function(a,s){return a+s.v;},0);
    state.items=state.items.filter(function(i){ return small.indexOf(i)<0; });
    state.fixed=null; tree=null;
    buildTable(); buildList(); render();
    toast("Grouped "+small.length+" small sectors into \u201COther\u201D.",true);
  }

  /* ---------- data table ---------- */
  function mkInput(type,cls,val){
    var i=document.createElement("input"); i.type=type; i.className=cls; if(val!==undefined) i.value=val; return i;
  }
  function buildTable(){
    var tb=document.getElementById("dtable"); tb.innerHTML="";
    var N=state.frames;
    var thead=document.createElement("thead"), hr=document.createElement("tr");
    var th0=document.createElement("th"); th0.textContent="Sector"; hr.appendChild(th0);
    for(var k=0;k<N;k++){ (function(k){
      var th=document.createElement("th"); th.className="fh"; th.setAttribute("data-k",k);
      var w=document.createElement("div"); w.className="fhw";
      var b=document.createElement("button"); b.className="fsel"; b.textContent="\u25CF"; b.title="Show this column"; b.setAttribute("aria-label","Show column "+(k+1));
      b.addEventListener("click",function(){ setFrame(k); });
      var inp=mkInput("text","fn",state.frameNames[k]||""); inp.placeholder="Data "+(k+1); inp.setAttribute("aria-label","Name of column "+(k+1));
      inp.addEventListener("input",function(e){ state.frameNames[k]=e.target.value; updateFrameUI(); save(); });
      w.appendChild(b); w.appendChild(inp); th.appendChild(w); hr.appendChild(th);
    })(k); }
    var thS=document.createElement("th"); thS.textContent="Share, %"; hr.appendChild(thS);
    hr.appendChild(document.createElement("th"));
    thead.appendChild(hr); tb.appendChild(thead);
    var tbody=document.createElement("tbody");
    state.items.forEach(function(it){
      var tr=document.createElement("tr"); tr.setAttribute("data-id",it.id);
      var td=document.createElement("td"); td.className="lbtd";
      var tag=document.createElement("span"); tag.className="kindtag"; tag.textContent=(it.kind==="text")?"\u00B6":"\u25A3"; tag.title=(it.kind==="text")?"Text block":"Data sector";
      var lb=mkInput("text","lb",it.label); lb.setAttribute("aria-label","Sector name");
      lb.addEventListener("input",function(e){ it.label=e.target.value; render(); });
      td.appendChild(tag); td.appendChild(lb); tr.appendChild(td);
      for(var k=0;k<N;k++){ (function(k){
        var c=document.createElement("td"); c.setAttribute("data-k",k);
        var inp=mkInput("text","dc",(it.data&&it.data[k]!==undefined)?it.data[k]:"");
        inp.setAttribute("aria-label",it.label+", "+frameLabel(k));
        if(it.kind==="text"){ inp.disabled=true; inp.placeholder="\u2014"; inp.value=""; }
        inp.addEventListener("input",function(e){ it.data[k]=e.target.value; render(); });
        c.appendChild(inp); tr.appendChild(c);
      })(k); }
      var ts=document.createElement("td");
      var sh=mkInput("number","sh"); sh.min="0.5"; sh.max="90"; sh.step="0.5"; sh.setAttribute("aria-label","Share of the grid, %");
      sh.addEventListener("input",function(e){ var x=parseFloat(e.target.value); if(!(x>0)) return; setShare(it,x); render(); });
      ts.appendChild(sh); tr.appendChild(ts);
      var tr2=document.createElement("td");
      var rm=document.createElement("button"); rm.className="sm"; rm.textContent="\u00D7"; rm.title="Delete sector"; rm.setAttribute("aria-label","Delete sector "+it.label);
      rm.addEventListener("click",function(){ removeSector(it); });
      tr2.appendChild(rm); tr.appendChild(tr2);
      tbody.appendChild(tr);
    });
    tb.appendChild(tbody);
    syncTable();
  }
  function syncTable(){
    var T=0; state.items.forEach(function(i){ T+=i.w; });
    state.items.forEach(function(it){
      var tr=document.querySelector('#dtable tr[data-id="'+it.id+'"]'); if(!tr) return;
      var sh=tr.querySelector(".sh"), lb=tr.querySelector(".lb");
      if(document.activeElement!==sh) sh.value=(T>0?(it.w/T*100):0).toFixed(1);
      sh.disabled=((state.sizeSrc||"manual")==="abs" && it.kind==="metric");
      sh.title=sh.disabled?"Size follows the data":"Type a share to resize this sector";
      if(document.activeElement!==lb) lb.value=it.label;
      var dcs=tr.querySelectorAll(".dc");
      for(var k=0;k<dcs.length;k++){
        if(it.kind==="text") continue;
        if(document.activeElement!==dcs[k]) dcs[k].value=(it.data&&it.data[k]!==undefined)?it.data[k]:"";
      }
    });
  }
  function updateFrameUI(){
    var N=state.frames, fr=document.getElementById("frame");
    fr.max=N; fr.value=state.frame+1; fr.disabled=N<2;
    document.getElementById("frameName").textContent=N>1?("Showing \u201C"+frameLabel(state.frame)+"\u201D ("+(state.frame+1)+" of "+N+")"):"Add a column to animate between data sets.";
    document.querySelectorAll("#dtable [data-k]").forEach(function(c){
      c.classList.toggle("cur",N>1&&parseInt(c.getAttribute("data-k"),10)===state.frame);
    });
    ["play","playPrev","playNext"].forEach(function(id){ document.getElementById(id).disabled=N<2; });
    document.getElementById("frameMinus").disabled=N<2;
  }
  function updateSmallInfo(){
    var thr=parseFloat(document.getElementById("groupThr").value)||2, T=totalW();
    var n=state.items.filter(function(i){ return i.kind==="metric" && T>0 && i.w/T*100<thr; }).length;
    document.getElementById("smallInfo").textContent=(n>=2)?(n+" sectors are below "+thr+"% of the grid, so their text is hard to read. You can group them."):("No sectors are below "+thr+"% of the grid.");
    document.getElementById("groupSmall").disabled=n<2;
  }
  function syncAll(){
    syncTable();
    state.items.forEach(function(it){
      var t=list.querySelector('[data-id="'+it.id+'"] .ttl');
      if(t && document.activeElement!==t) t.value=it.label;
    });
    updateFrameUI(); updateSmallInfo();
  }

  /* ---------- sector list (design) ---------- */
  var openSet={};
  function buildList(){
    list.className=(state.mode==="values")?"show-data":"";
    list.innerHTML="";
    state.items.forEach(function(it){
      var d=document.createElement("div"); d.className="item"+(openSet[it.id]?" open":"");
      d.setAttribute("data-id",it.id); d.setAttribute("data-kind",it.kind); d.setAttribute("data-fill",it.fill);
      d.innerHTML=
        '<div class="head">'+
          '<button class="swatch" aria-label="Show design options" title="Show design options"></button>'+
          '<input type="text" class="ttl" aria-label="Sector name" placeholder="Name">'+
          '<button class="sm tog" aria-label="Toggle design options" title="Design options">\u22EF</button>'+
          '<button class="sm del" aria-label="Delete sector" title="Delete">\u00D7</button>'+
        '</div>'+
        '<div class="more">'+
          '<div><label>Type</label><select class="kind"><option value="metric">Number + caption</option><option value="text">Heading + text</option></select></div>'+
          '<div><label>Fill</label><select class="fill"><option value="solid">Solid</option><option value="gradient">Gradient</option><option value="stripes">Soft stripes</option></select></div>'+
          '<div class="full only-text"><label>Eyebrow (small caption)</label><input type="text" class="eyebrow"></div>'+
          '<div class="only-text"><label>Arrangement</label><select class="anchor"><option value="bottom">Eyebrow top, heading bottom</option><option value="top">Eyebrow and heading together on top</option></select></div>'+
          '<div class="full only-text"><label>Body text (optional)</label><textarea class="body" rows="3"></textarea></div>'+
          '<div class="full only-text"><label>Heading size, % of width (0 = fit to sector)</label><input type="number" class="tsize" min="0" max="40" step="0.1"></div>'+
          '<div class="only-metric"><label>Arrangement</label><select class="arr"><option value="stack">Number top, caption bottom</option><option value="flip">Caption top, number bottom</option><option value="inline">Caption left, value right</option></select></div>'+
          '<div><label>Orientation</label><select class="orient"><option value="auto">Auto, reads up when narrow</option><option value="autodown">Auto, reads down when narrow</option><option value="up">Always vertical, reads up</option><option value="down">Always vertical, reads down</option></select></div>'+
          '<div class="only-metric"><label>Caption style</label><select class="capStyle"><option value="cond">Condensed</option><option value="caps">Arial caps</option><option value="strip">Condensed caps</option></select></div>'+
          '<div class="only-metric"><label>Number font</label><select class="numFont"><option value="serif">Serif</option><option value="strip">Condensed caps</option></select></div>'+
          '<div class="only-metric"><label>Number size, % of width (0 = auto)</label><input type="number" class="numSize" min="0" max="40" step="0.1"></div>'+
          '<div class="only-metric"><label>Caption width, % of sector (0 = auto)</label><input type="number" class="capW" min="0" max="100" step="1"></div>'+
          '<div class="full only-metric"><label class="chk"><input type="checkbox" class="showNum"> Show number</label></div>'+
          '<div class="full only-metric"><label class="chk"><input type="checkbox" class="showCap"> Show caption</label></div>'+
          '<div class="full only-metric"><label class="chk"><input type="checkbox" class="vcenter"> Center vertical text in the sector</label></div>'+
          '<div class="full only-values"><label>Added to the number</label><div class="vals pu"><input type="text" class="pre" placeholder="Prefix"><input type="text" class="unit" placeholder="Unit"></div></div>'+
          '<div class="full colors"><input type="color" class="c0" aria-label="Color 1"><input type="color" class="c1 not-solid" aria-label="Color 2"><input type="color" class="c2 not-solid" aria-label="Color 3"><select class="ink" aria-label="Text color"><option value="auto">Text: auto</option><option value="dark">Text: dark</option><option value="light">Text: light</option></select></div>'+
          '<div class="full only-grad"><label>Gradient stops, %</label><div class="row"><input type="number" class="s0" min="0" max="100"><input type="number" class="s1" min="0" max="100"><input type="number" class="s2" min="0" max="100"></div></div>'+
          '<div class="full only-angle"><label>Angle: <span class="angv"></span>\u00B0</label><input type="range" class="angle" min="0" max="360" step="5"></div>'+
          '<div class="full"><button class="reset">Reset this sector\u2019s design</button></div>'+
        '</div>';
      function q(s){return d.querySelector(s);}
      function paintSwatch(){ q(".swatch").style.background=fillCss(it); }
      q(".ttl").value=it.label;
      q(".kind").value=it.kind; q(".fill").value=it.fill; q(".ink").value=it.ink;
      q(".eyebrow").value=it.eyebrow; q(".anchor").value=it.anchor||"top";
      q(".arr").value=it.arr; q(".orient").value=it.orient||"auto"; q(".capStyle").value=it.capStyle; q(".numFont").value=it.numFont;
      q(".body").value=it.body; q(".pre").value=it.prefix; q(".unit").value=it.unit;
      q(".c0").value=it.c[0]; q(".c1").value=it.c[1]; q(".c2").value=it.c[2];
      q(".angle").value=it.angle; q(".angv").textContent=it.angle;
      q(".numSize").value=Math.round((it.numSize||0)*1000)/10;
      q(".capW").value=Math.round((it.capW||0)*100);
      q(".showNum").checked=(it.showNum!==false); q(".showCap").checked=(it.showCap!==false);
      q(".vcenter").checked=!!it.vcenter;
      q(".tsize").value=Math.round((it.tsize||0)*1000)/10;
      q(".s0").value=it.stops[0]; q(".s1").value=it.stops[1]; q(".s2").value=it.stops[2];
      paintSwatch();
      function toggle(){ openSet[it.id]=!openSet[it.id]; d.classList.toggle("open",!!openSet[it.id]); }
      q(".swatch").addEventListener("click",toggle);
      q(".tog").addEventListener("click",toggle);
      q(".ttl").addEventListener("input",function(e){it.label=e.target.value;render();});
      q(".eyebrow").addEventListener("input",function(e){it.eyebrow=e.target.value;render();});
      q(".body").addEventListener("input",function(e){it.body=e.target.value;render();});
      q(".pre").addEventListener("input",function(e){it.prefix=e.target.value;render();});
      q(".unit").addEventListener("input",function(e){it.unit=e.target.value;render();});
      q(".numSize").addEventListener("input",function(e){it.numSize=(parseFloat(e.target.value)||0)/100; render();});
      q(".capW").addEventListener("input",function(e){it.capW=(parseFloat(e.target.value)||0)/100; render();});
      q(".tsize").addEventListener("input",function(e){it.tsize=(parseFloat(e.target.value)||0)/100; render();});
      q(".vcenter").addEventListener("change",function(e){it.vcenter=e.target.checked; render();});
      q(".showNum").addEventListener("change",function(e){it.showNum=e.target.checked; render();});
      q(".showCap").addEventListener("change",function(e){it.showCap=e.target.checked; render();});
      ["s0","s1","s2"].forEach(function(cl,i){
        q("."+cl).addEventListener("input",function(e){var v=parseFloat(e.target.value); it.stops[i]=isNaN(v)?0:clamp(v,0,100); paintSwatch(); render();});
      });
      ["c0","c1","c2"].forEach(function(cl,i){
        q("."+cl).addEventListener("input",function(e){it.c[i]=e.target.value; paintSwatch(); render();});
      });
      q(".angle").addEventListener("input",function(e){it.angle=parseInt(e.target.value,10); q(".angv").textContent=it.angle; paintSwatch(); render();});
      q(".fill").addEventListener("change",function(e){it.fill=e.target.value; d.setAttribute("data-fill",it.fill); paintSwatch(); render();});
      q(".ink").addEventListener("change",function(e){it.ink=e.target.value; render();});
      ["anchor","arr","orient","capStyle","numFont"].forEach(function(k){
        q("."+k).addEventListener("change",function(e){it[k]=e.target.value; render();});
      });
      q(".kind").addEventListener("change",function(e){
        it.kind=e.target.value;
        if(it.kind==="text" && !it.body && !it.eyebrow) it.body="Write a short explanation here.";
        buildList(); buildTable(); render();
      });
      q(".reset").addEventListener("click",function(){ resetSector(it); });
      q(".del").addEventListener("click",function(){ removeSector(it); });
      list.appendChild(d);
    });
  }

  /* ---------- playback through the data columns, and the demo preview ---------- */
  var playTimer=null, playDir=1;
  function setFrame(k){ state.frame=clamp(k,0,state.frames-1); syncAll(); render(); }
  function updatePlayUI(on){
    var b=document.getElementById("play");
    b.setAttribute("aria-pressed",on?"true":"false"); b.textContent=on?"Pause":"Play";
  }
  function stepPlay(){
    var N=state.frames, nxt=state.frame+playDir;
    if(state.playLoop==="pingpong"){
      if(nxt>=N||nxt<0){ playDir=-playDir; nxt=state.frame+playDir; }
    }else if(nxt>=N){
      if(state.playLoop==="once"){ stopPlay(); return; }
      nxt=0;
    }
    setFrame(nxt);
  }
  function startPlay(){
    if(state.frames<2){ toast("Add a second column to play."); return; }
    if(liveTimer) stopDemo(true);
    playDir=1; updatePlayUI(true);
    playTimer=setTimeout(function loop(){ stepPlay(); if(playTimer) playTimer=setTimeout(loop,state.playSec*1000); },state.playSec*1000);
  }
  function stopPlay(){ clearTimeout(playTimer); playTimer=null; updatePlayUI(false); }

  function demoUI(on){
    var b=document.getElementById("live");
    b.setAttribute("aria-pressed",on?"true":"false");
    b.innerHTML=on?'<span class="live-dot"></span>Stop demo':"Demo drift";
  }
  function demoTick(){
    state.items.forEach(function(i){
      if(i.kind!=="metric") return;
      var f=0.8+Math.random()*0.45, pv=parseVal(curData(i));
      var b=liveBase&&liveBase.filter(function(x){return x.id===i.id;})[0];
      if((state.mode==="values"||(state.sizeSrc||"manual")!=="manual") && pv.ok && !pv.range){
        var base=i._lb||(i._lb=(Math.abs(pv.num)||1));
        var n=clamp(Math.abs(pv.num)*f,base*0.35,base*2.8)*(pv.num<0?-1:1);
        i.data[Math.min(state.frame,i.data.length-1)]=scaleToNum(pv,n);
        if((state.sizeSrc||"manual")==="manual"){
          var nv=i.v*(n/(pv.num||1));
          i.v=b?clamp(nv,b.v*0.35,b.v*2.8):clamp(nv,0.5,200);
        }
      }else{
        var nv2=Math.round(i.v*f*2)/2;
        i.v=b?clamp(nv2,b.v*0.35,b.v*2.8):Math.max(1,Math.min(40,nv2));
      }
    });
    render();
  }
  function startDemo(){
    if(playTimer) stopPlay();
    liveBase=state.items.map(function(i){ return {id:i.id,v:i.v,data:(i.data||[]).slice()}; });
    liveBase.frame=state.frame;
    state.items.forEach(function(i){ delete i._lb; });
    demoUI(true);
    var every=function(){ return Math.max(500,(state.demoSec||2)*1000/state.speed); };
    liveTimer=setTimeout(function loop(){ demoTick(); liveTimer=setTimeout(loop,every()); },Math.max(500,(state.demoSec||2)*800/state.speed));
  }
  function stopDemo(restore){
    if(liveTimer){ clearTimeout(liveTimer); liveTimer=null; }
    demoUI(false);
    if(liveBase && restore){
      liveBase.forEach(function(b){
        var i=state.items.filter(function(x){return x.id===b.id;})[0];
        if(i){ i.v=b.v; i.data=b.data.slice(); delete i._lb; }
      });
      state.frame=Math.min(liveBase.frame||0,state.frames-1);
      liveBase=null; render();
    }else liveBase=null;
  }

  /* ---------- importing real data ---------- */
  function splitRow(line,d){
    var out=[], cur="", q=false;
    for(var i=0;i<line.length;i++){
      var ch=line.charAt(i);
      if(ch==='"'){ if(q && line.charAt(i+1)==='"'){ cur+='"'; i++; } else q=!q; }
      else if(ch===d && !q){ out.push(cur); cur=""; }
      else cur+=ch;
    }
    out.push(cur);
    return out.map(function(c){ return c.trim(); });
  }
  function parseTable(text){
    var lines=text.split(/\r?\n/).filter(function(r){ return r.trim(); });
    if(!lines.length) return null;
    var d=(text.indexOf("\t")>=0)?"\t":((text.indexOf(";")>=0)?";":((text.indexOf("|")>=0)?"|":","));
    var rows=lines.map(function(l){ return splitRow(l,d); }).filter(function(r){ return r[0]||r.length>1; });
    var names=null;
    if(rows.length>1){
      /* a first line of column names: words, or years, or a first cell such as "Sector" / "Name" */
      var h=rows[0].slice(1), isYear=function(c){ return /^(19|20)\d{2}$/.test(String(c).trim()); };
      var headNum=h.some(function(c){ return parseVal(c).ok; });
      var nextNum=rows[1].slice(1).some(function(c){ return parseVal(c).ok; });
      var yearsHead=h.length>0 && h.every(isYear) && !rows[1].slice(1).every(isYear);
      var labelHead=/^(sector|name|label|category|item|country|region|product|city|metric|segment)s?$/i.test(String(rows[0][0]||"").trim()) && nextNum;
      if(h.length && nextNum && (!headNum || yearsHead || labelHead)){ names=h; rows=rows.slice(1); }
    }
    return {rows:rows,names:names};
  }
  function importTable(text){
    var t=parseTable(text);
    if(!t||!t.rows.length){ toast("Nothing to import: paste one sector per line."); return; }
    if(playTimer) stopPlay();
    if(liveTimer) stopDemo(false);
    var rows=t.rows;
    var cols=clamp(Math.max(1,Math.max.apply(null,rows.map(function(r){return r.length-1;}))),1,12);
    state.items=state.items.filter(function(i){return i.kind==="text";});
    state.fixed=null; tree=null;
    state.frames=cols; state.frame=0;
    state.frameNames=t.names?t.names.slice(0,cols):[];
    var firsts=[];
    rows.forEach(function(r){
      var it=addItem("metric");
      it.label=r[0]||"Sector";
      var dd=r.slice(1);
      if(!dd.length) dd=["0"];
      while(dd.length<cols) dd.push(dd[dd.length-1]);
      it.data=dd.slice(0,cols);
      var n=Math.abs(parseNum(it.data[0])); if(n>0) firsts.push(n);
      it.v=10; it.arr="stack"; it.orient="auto"; it.numSize=0; it.capW=0; it.vcenter=false;
    });
    var spread=firsts.length>1?Math.max.apply(null,firsts)/Math.min.apply(null,firsts):1;
    state.mode="values"; state.sizeSrc=(spread>30&&cols>1)?"rel":"abs";
    pushControls(); buildTable(); buildList(); render(); replay();
    toast("Imported "+rows.length+" sectors \u00D7 "+cols+" column"+(cols>1?"s":"")+". Sizes follow the data "+(state.sizeSrc==="rel"?"relative to the first column (the numbers differ too much to compare directly)":"proportionally")+". Replaced the previous data sectors.",true);
  }

  /* ---------- global controls ---------- */
  var SIZE_HINTS={
    manual:"Sizes are the shares you set in the table. The numbers are shown but do not change the sizes.",
    abs:"Each sector's area is proportional to its number. Use it when all numbers share one unit.",
    rel:"Each sector keeps its own share and grows or shrinks with its number compared with the first column. Use it for mixed units."
  };
  function pushControls(){
    var g=function(id){return document.getElementById(id);};
    g("anim").value=state.anim; g("aspect").value=String(state.aspect); g("speed").value=state.speed;
    g("gap").value=state.gap; g("radius").value=state.radius; g("title").value=state.title||"";
    g("fillMode").value=state.fillMode; g("grain").value=state.grain; g("mode").value=state.mode;
    g("numFit").value=state.numFit||"fixed"; g("typo").value=state.typo||"classic"; g("sizeSrc").value=state.sizeSrc||"manual";
    g("decSep").value=state.decSep||"auto";
    g("sizeHint").textContent=SIZE_HINTS[state.sizeSrc||"manual"];
    g("textFit").value=state.textFit||"clip"; g("typeMode").value=state.typeMode||"first";
    g("textScale").checked=(state.textScale!==false); g("trimLines").checked=(state.trimLines!==false);
    g("playSec").value=state.playSec; g("playSecV").textContent=Number(state.playSec).toFixed(1)+" s"; g("playLoop").value=state.playLoop||"loop";
    g("minShare").value=state.minShare||0; g("minShareV").textContent=(state.minShare>0)?(state.minShare+"%"):"off";
    g("speedV").textContent="\u00D7"+Number(state.speed).toFixed(1);
    [["spSize"],["spCount"],["spIntro"],["spHover"]].forEach(function(a){
      var key=a[0]; g(key).value=state[key]; g(key+"V").textContent="\u00D7"+Number(state[key]).toFixed(2).replace(/0$/,"");
    });
    g("demoSec").value=state.demoSec; g("demoSecV").textContent=Number(state.demoSec).toFixed(1)+" s";
    document.querySelectorAll(".spPreset").forEach(function(b){ b.classList.toggle("primary",Math.abs(parseFloat(b.getAttribute("data-v"))-state.speed)<0.01); });
    g("gapV").textContent=state.gap; g("radiusV").textContent=state.radius; g("grainV").textContent=state.grain;
    var ht=g("hoverToggle");
    ht.setAttribute("aria-pressed",state.hover?"true":"false");
    ht.textContent="Hover growth: "+(state.hover?"on":"off");
    ht.classList.toggle("primary",!!state.hover);
    g("boostV").textContent=Math.round(state.boost*100); g("boost").value=Math.round(state.boost*100);
    updateFrameUI();
  }
  function applyTemplate(id){
    var tp=TEMPLATES[id]; if(!tp) return;
    if(playTimer) stopPlay();
    if(liveTimer) stopDemo(false);
    var r=tp();
    for(var k in r.settings) state[k]=r.settings[k];
    state.items=r.items; state.fixed=r.fixed;
    state.frameNames=[]; state.frames=1; state.frame=0; state.minShare=0;
    if(r.assign) assign(false);
    normalizeState();
    state.orig=makeOrig(state.items);
    openSet={};
    clearCells();
    pushControls(); buildSchemes(); buildList(); buildTable(); render();
    toast("Template loaded.",true);
  }
  function setFrames(n){
    if(playTimer) stopPlay();
    if(liveTimer) stopDemo(false);
    n=clamp(n,1,12);
    var before=state.sizeSrc||"manual";
    state.items.forEach(function(it){
      var dd=(it.data&&it.data.length)?it.data.slice():[String(it.v)];
      while(dd.length<n) dd.push(dd[dd.length-1]);
      it.data=dd.slice(0,n);
    });
    state.frames=n; state.frame=Math.min(state.frame,n-1);
    state.frameNames=(state.frameNames||[]).slice(0,n);
    var switched=false;
    if(n>1 && before==="manual"){ state.sizeSrc="rel"; switched=true; }
    pushControls(); buildTable(); buildList(); render();
    if(switched) toast("Sizes now follow each sector's change against the first column. You can change this under \u201CSector size comes from\u201D.",true);
  }
  function bindGlobal(){
    var g=function(id){return document.getElementById(id);};
    pushControls();
    /* tabs */
    function showTab(name){
      var data=(name==="data");
      g("paneData").hidden=!data; g("paneDesign").hidden=data;
      g("tabData").setAttribute("aria-selected",data?"true":"false");
      g("tabDesign").setAttribute("aria-selected",data?"false":"true");
    }
    g("tabData").addEventListener("click",function(){ showTab("data"); });
    g("tabDesign").addEventListener("click",function(){ showTab("design"); });
    /* design */
    g("anim").addEventListener("change",function(e){state.anim=e.target.value; save(); replay();});
    g("aspect").addEventListener("change",function(e){state.aspect=parseFloat(e.target.value); render();});
    g("speed").addEventListener("input",function(e){state.speed=parseFloat(e.target.value); pushControls(); applyStage(); save();});
    ["spSize","spCount","spIntro","spHover"].forEach(function(key){
      g(key).addEventListener("input",function(e){ state[key]=parseFloat(e.target.value); pushControls(); applyStage(); save(); });
    });
    g("demoSec").addEventListener("input",function(e){ state.demoSec=parseFloat(e.target.value); pushControls(); save(); });
    document.querySelectorAll(".spPreset").forEach(function(b){
      b.addEventListener("click",function(){ state.speed=parseFloat(b.getAttribute("data-v")); pushControls(); applyStage(); save(); });
    });
    g("gap").addEventListener("input",function(e){state.gap=parseInt(e.target.value,10); pushControls(); render();});
    g("radius").addEventListener("input",function(e){state.radius=parseInt(e.target.value,10); pushControls(); render();});
    g("grain").addEventListener("input",function(e){state.grain=parseInt(e.target.value,10); pushControls(); applyStage(); render();});
    g("fillMode").addEventListener("change",function(e){
      state.fillMode=e.target.value; syncW(); assign(false); buildList(); render();
      toast("Fill style applied to every sector. Custom colors and fills were replaced.",true);
    });
    g("recolor").addEventListener("click",function(){
      syncW(); assign(true); buildList(); render(); toast("Colors reshuffled within the palette.",true);
    });
    g("title").addEventListener("input",function(e){state.title=e.target.value; render();});
    g("typo").addEventListener("change",function(e){
      state.typo=e.target.value;
      state.items.forEach(function(it){ var c=cells[it.id]; if(c){ c.L=null; c.fk=undefined; c.fs0=undefined; c.curF=undefined; } });
      render();
    });
    g("numFit").addEventListener("change",function(e){
      state.numFit=e.target.value;
      state.items.forEach(function(it){ var c=cells[it.id]; if(c) c.L=null; });
      render();
    });
    g("textFit").addEventListener("change",function(e){ state.textFit=e.target.value; render(); });
    g("typeMode").addEventListener("change",function(e){ state.typeMode=e.target.value; render(); });
    g("textScale").addEventListener("change",function(e){ state.textScale=e.target.checked; render(); });
    g("trimLines").addEventListener("change",function(e){ state.trimLines=e.target.checked; stage.classList.toggle("notrim",!e.target.checked); render(); });
    g("replay").addEventListener("click",replay);
    g("hoverToggle").addEventListener("click",function(){state.hover=!state.hover; pushControls(); render();});
    g("boost").addEventListener("input",function(e){state.boost=parseInt(e.target.value,10)/100; pushControls(); render();});
    g("relayout").addEventListener("click",function(){ state.fixed=null; tree=null; render(); toast("Layout re-optimized for the current sizes.",true); });
    /* data */
    g("mode").addEventListener("change",function(e){ state.mode=e.target.value; pushControls(); buildList(); render(); replay(); });
    g("decSep").addEventListener("change",function(e){ state.decSep=e.target.value; render(); });
    g("sizeSrc").addEventListener("change",function(e){ state.sizeSrc=e.target.value; pushControls(); buildTable(); render(); });
    g("add").addEventListener("click",function(){ addSector("metric"); });
    g("addText").addEventListener("click",function(){ var it=addSector("text"); openSet[it.id]=true; buildList(); render(); });
    g("framePlus").addEventListener("click",function(){ setFrames(state.frames+1); });
    g("frameMinus").addEventListener("click",function(){ setFrames(state.frames-1); });
    g("pasteApply").addEventListener("click",function(){ importTable(g("paste").value); });
    g("frame").addEventListener("input",function(e){ setFrame(parseInt(e.target.value,10)-1); });
    g("playPrev").addEventListener("click",function(){ if(playTimer) stopPlay(); setFrame((state.frame-1+state.frames)%state.frames); });
    g("playNext").addEventListener("click",function(){ if(playTimer) stopPlay(); setFrame((state.frame+1)%state.frames); });
    g("play").addEventListener("click",function(){ if(playTimer) stopPlay(); else startPlay(); });
    g("playSec").addEventListener("input",function(e){ state.playSec=parseFloat(e.target.value); pushControls(); save(); });
    g("playLoop").addEventListener("change",function(e){ state.playLoop=e.target.value; save(); });
    g("live").addEventListener("click",function(){ if(liveTimer) stopDemo(true); else startDemo(); });
    g("minShare").addEventListener("input",function(e){ state.minShare=parseFloat(e.target.value); pushControls(); render(); });
    g("groupThr").addEventListener("change",updateSmallInfo);
    g("groupSmall").addEventListener("click",function(){ groupSmall(parseFloat(g("groupThr").value)||2); });
    /* top bar */
    g("tplLoad").addEventListener("click",function(){ applyTemplate(g("tpl").value); });
    g("undo").addEventListener("click",undo);
    g("redo").addEventListener("click",redo);
    document.addEventListener("keydown",function(e){
      if(!(e.metaKey||e.ctrlKey) || String(e.key).toLowerCase()!=="z") return;
      var a=document.activeElement, tag=a&&a.tagName;
      if(tag==="TEXTAREA" || (tag==="INPUT" && /^(text|number|search)$/.test(a.type))) return;
      e.preventDefault();
      if(e.shiftKey) redo(); else undo();
    });
  }

  load();
  if(!loadedOk){ normalizeState(); state.orig=makeOrig(state.items); }
  if(!loadedOk && initAssign){ syncW(); assign(false); state.orig=makeOrig(state.items); }
  syncW();
  buildSchemes();
  bindGlobal();
  buildList();
  buildTable();
  measureDigits();
  render();
  if(window.ResizeObserver){ new ResizeObserver(function(){requestAnimationFrame(function(){applyStage(); kick();});}).observe(stage.parentElement); }
  else { window.addEventListener("resize",function(){applyStage(); kick();}); }
  if(document.fonts&&document.fonts.ready){ document.fonts.ready.then(function(){measureDigits(); applyStage(); kick();}); }
})();

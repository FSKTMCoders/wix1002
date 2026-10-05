(() => {
  'use strict';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const coarsePointer = window.matchMedia('(pointer: coarse)');
  const parallax = [...document.querySelectorAll('[data-parallax]')];
  const container = document.createElement('div');
  container.className = 'programming-background';
  container.setAttribute('aria-hidden','true');
  document.body.prepend(container);
  document.body.classList.add('landing-motion');
  let sceneHandle = null;
  let loading = false;
  let scrollFrame = 0;
  let pointerX = 0, pointerY = 0;
  let lastPreference = reducedMotion.matches;
  let preferenceTimer = 0;
  const scriptUrl = document.currentScript.src;
  const threeUrl = new URL('vendor/three-r170.module.min.js',scriptUrl).href;

  function updateParallax() {
    scrollFrame = 0;
    const y = window.scrollY;
    for (const element of parallax) {
      const amount = reducedMotion.matches ? 0 : -Math.min(38,y*Number(element.dataset.parallax));
      element.style.setProperty('--parallax-y',amount+'px');
    }
    if (sceneHandle) sceneHandle.scroll = reducedMotion.matches ? 0 : Math.min(1,y/Math.max(1,document.documentElement.scrollHeight-innerHeight));
  }
  function onScroll() { if (!scrollFrame) scrollFrame=requestAnimationFrame(updateParallax); }
  window.addEventListener('scroll',onScroll,{passive:true});
  window.addEventListener('pointermove',e=>{
    if (coarsePointer.matches || reducedMotion.matches) return;
    pointerX=(e.clientX/innerWidth-.5)*2;
    pointerY=(e.clientY/innerHeight-.5)*2;
  },{passive:true});

  async function start() {
    if (reducedMotion.matches || sceneHandle || loading) return;
    loading = true;
    try {
      const THREE = await import(threeUrl);
      if (reducedMotion.matches) return;
      const renderer = new THREE.WebGLRenderer({alpha:true,antialias:false,powerPreference:'low-power'});
      renderer.setPixelRatio(Math.min(devicePixelRatio || 1,1.25));
      renderer.setClearColor(0x000000,0);
      renderer.domElement.setAttribute('aria-hidden','true');
      container.append(renderer.domElement);
      const scene = new THREE.Scene();
      const camera = new THREE.OrthographicCamera(-8,8,5,-5,.1,20);
      camera.position.z = 10;
      const glyphs = [];
      const resources = [];
      const mobile = innerWidth < 600;
      const words = mobile ? ['{ }','01','main()',';','if','( )'] : ['{ }','01','main()',';','if','( )','</>','++','return','[ ]'];
      words.forEach((word,i)=>{
        const canvas=document.createElement('canvas');canvas.width=256;canvas.height=96;
        const context=canvas.getContext('2d');
        context.font='600 48px Consolas, monospace';context.textAlign='center';context.textBaseline='middle';context.fillStyle=i%2?'#175db0':'#087f83';context.fillText(word,128,48);
        const texture=new THREE.CanvasTexture(canvas);
        const material=new THREE.SpriteMaterial({map:texture,transparent:true,opacity:.23,depthWrite:false});
        const sprite=new THREE.Sprite(material);
        sprite.scale.set(1.55,.58,1);
        sprite.userData={x:Math.sin(i*2.4)*.92,y:Math.cos(i*1.7)*4.1,phase:i*.83};
        scene.add(sprite);glyphs.push(sprite);resources.push(texture,material);
      });
      const nodeCount=mobile?16:24;
      const positions=[],segments=[];
      for(let i=0;i<nodeCount;i++){
        const x=Math.sin(i*2.17)*7.5,y=Math.cos(i*1.31)*4.4;
        positions.push(x,y,-1);
        if(i>0 && i%3!==0)segments.push(...positions.slice((i-1)*3,i*3),x,y,-1);
      }
      const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));
      const pointsMaterial=new THREE.PointsMaterial({color:0x087f83,size:.045,transparent:true,opacity:.24,depthWrite:false});
      const points=new THREE.Points(geometry,pointsMaterial);scene.add(points);
      const lineGeometry=new THREE.BufferGeometry();lineGeometry.setAttribute('position',new THREE.Float32BufferAttribute(segments,3));
      const lineMaterial=new THREE.LineBasicMaterial({color:0x175db0,transparent:true,opacity:.075,depthWrite:false});
      const lines=new THREE.LineSegments(lineGeometry,lineMaterial);scene.add(lines);
      resources.push(geometry,pointsMaterial,lineGeometry,lineMaterial);
      let frame=0,last=0,elapsed=0;
      const handle={scroll:0,stop:null};
      sceneHandle=handle;
      function resize(){
        renderer.setSize(innerWidth,innerHeight,false);
        const halfWidth=5*innerWidth/Math.max(1,innerHeight);
        camera.left=-halfWidth;camera.right=halfWidth;camera.updateProjectionMatrix();
        glyphs.forEach(sprite=>{sprite.position.x=sprite.userData.x*halfWidth;});
        renderer.render(scene,camera);
        onScroll();
      }
      function tick(now){
        if(reducedMotion.matches){handle.stop();updateParallax();return;}
        if(document.hidden)return;
        frame=requestAnimationFrame(tick);
        if(now-last<1000/24)return;
        elapsed+=Math.min((now-last)/1000,.1);last=now;
        for(const sprite of glyphs){
          sprite.position.y=sprite.userData.y+Math.sin(elapsed*.3+sprite.userData.phase)*.18-handle.scroll*.65;
          sprite.material.rotation=Math.sin(elapsed*.18+sprite.userData.phase)*.055;
        }
        camera.position.x+=(pointerX*.13-camera.position.x)*.08;
        camera.position.y+=(-pointerY*.1+handle.scroll*.28-camera.position.y)*.08;
        points.rotation.z=Math.sin(elapsed*.07)*.025;
        lines.rotation.z=points.rotation.z;
        renderer.render(scene,camera);
      }
      function visibility(){cancelAnimationFrame(frame);frame=0;if(!document.hidden && !reducedMotion.matches){last=performance.now();frame=requestAnimationFrame(tick);}}
      handle.stop=()=>{
        cancelAnimationFrame(frame);
        window.removeEventListener('resize',resize);
        document.removeEventListener('visibilitychange',visibility);
        resources.forEach(resource=>resource.dispose());renderer.dispose();renderer.domElement.remove();
        sceneHandle=null;document.body.dataset.backgroundMotion='static';
      };
      renderer.domElement.addEventListener('webglcontextlost',event=>{event.preventDefault();handle.stop();},{once:true});
      window.addEventListener('resize',resize,{passive:true});
      document.addEventListener('visibilitychange',visibility);
      resize();visibility();document.body.dataset.backgroundMotion='three';
    } catch {
      container.replaceChildren();document.body.dataset.backgroundMotion='static';
    } finally { loading=false; }
  }
  function syncMotion(force=false){
    if(document.hidden)return;
    if(!force && lastPreference===reducedMotion.matches)return;
    lastPreference=reducedMotion.matches;
    if(lastPreference){sceneHandle?.stop();document.body.dataset.backgroundMotion='static';}
    else start();
    updateParallax();
  }
  function watchPreferences(){if(!preferenceTimer)preferenceTimer=setInterval(()=>syncMotion(),1000);}
  reducedMotion.addEventListener('change',()=>syncMotion(true));
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)syncMotion(true);});
  window.addEventListener('pagehide',()=>{sceneHandle?.stop();clearInterval(preferenceTimer);preferenceTimer=0;if(scrollFrame)cancelAnimationFrame(scrollFrame);scrollFrame=0;});
  window.addEventListener('pageshow',()=>{watchPreferences();syncMotion(true);onScroll();});
  document.body.dataset.backgroundMotion='static';
  watchPreferences();updateParallax();start();
})();

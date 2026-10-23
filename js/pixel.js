// Pixel da Meta (ID 1385657756691922), carregado só depois que a pessoa aceita os cookies (LGPD).
(function(){
  var PIXEL_ID="1385657756691922",KEY="auto-cookies";
  var estado=null;try{estado=localStorage.getItem(KEY)}catch(e){}
  var carregado=false;

  function carregarPixel(){
    if(carregado)return;carregado=true;
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version="2.0";n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");
    window.fbq("init",PIXEL_ID);window.fbq("track","PageView");
  }
  function evento(nome){if(window.fbq&&carregado)window.fbq("track",nome)}

  // eventos de conversão
  // Lead: só quando a pessoa clica em um botão de WhatsApp (não na abertura da página)
  document.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest('a[data-wa],.wa-fab,a[href*="wa.me"],a[href*="api.whatsapp.com"]');if(a)evento("Lead")});
  window.addEventListener("auto-lead",function(){evento("Lead")});

  // aviso de cookies
  var estilo=document.createElement("style");
  estilo.textContent=".ck-bar{position:fixed;left:50%;bottom:16px;transform:translateX(-50%);z-index:2147483000;width:min(560px,calc(100vw - 32px));background:#0E1522;color:#ECEAE5;border:1px solid #6B7C93;border-radius:16px;padding:18px;box-shadow:0 16px 48px rgba(0,0,0,.55);font:400 15px/1.5 'Hanken Grotesk',system-ui,sans-serif}.ck-bar[hidden]{display:none}.ck-bar p{margin:0 0 14px}.ck-bar .ck-b{display:flex;gap:10px;flex-wrap:wrap}.ck-bar button{flex:1 1 140px;min-height:46px;border-radius:999px;border:1px solid #ECEAE5;background:transparent;color:#ECEAE5;font:600 15px 'Hanken Grotesk',system-ui,sans-serif;cursor:pointer}.ck-bar button.ck-ok{background:#ECEAE5;color:#03060E}.ck-bar button:focus-visible{outline:3px solid #9CC0EE;outline-offset:2px}.ck-link{background:none;border:0;padding:0;margin:0;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer;min-height:44px}.ck-link:focus-visible{outline:3px solid #9CC0EE;outline-offset:2px}";
  document.head.appendChild(estilo);
  var bar=document.createElement("div");bar.className="ck-bar";bar.setAttribute("role","dialog");bar.setAttribute("aria-labelledby","ck-t");bar.hidden=true;
  bar.innerHTML='<p id="ck-t">Usamos cookies e o Pixel da Meta para medir a eficácia dos nossos anúncios e melhorar o site. Você escolhe se aceita.</p><div class="ck-b"><button type="button" class="ck-no">Recusar</button><button type="button" class="ck-ok">Aceitar</button></div>';
  document.body.appendChild(bar);
  function decidir(v){try{localStorage.setItem(KEY,v)}catch(e){}estado=v;bar.hidden=true;if(v==="sim")carregarPixel();else if(window.fbq&&carregado){window.fbq("consent","revoke")}}
  bar.querySelector(".ck-ok").onclick=function(){decidir("sim")};
  bar.querySelector(".ck-no").onclick=function(){decidir("nao")};
  window.autoCookies={reabrir:function(){bar.hidden=false;bar.querySelector(".ck-no").focus()}};
  document.addEventListener("click",function(e){if(e.target.closest&&e.target.closest("[data-cookies]")){e.preventDefault();window.autoCookies.reabrir()}});
  if(estado==="sim")carregarPixel();else if(estado!=="nao")bar.hidden=false;
})();

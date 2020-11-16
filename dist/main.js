(()=>{"use strict";!function(){const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("header");const t=document.createElement("img");t.src="styles/img/medium-size.svg",t.classList.add("logo");const d=document.createElement("nav");d.classList.add("right");const c=document.createElement("li"),a=document.createElement("a");a.innerHTML="Menù",a.href="#",c.appendChild(a);const i=document.createElement("li"),l=document.createElement("a");l.innerHTML="Stories",l.href="#",i.appendChild(l);const o=document.createElement("li"),r=document.createElement("a");r.innerHTML="Reservations",r.id="a3Top",o.appendChild(r),d.appendChild(c),d.appendChild(i),d.appendChild(o),n.appendChild(t),n.appendChild(d),e.appendChild(n);const m=document.createElement("div");m.classList.add("imagesP");const p=document.createElement("div");p.id="firstImg",p.classList.add("images");const s=document.createElement("h1");s.innerHTML="Welcome to Mario's!";const h=document.createElement("p");h.innerHTML="Modern Italian cuisine, and dramatic design.<br>Mario's is an award-winning restaurant <br>which uses the finest ingredients<br>and expert traditional techniques to create <br> timeless yet innovative signature dishes.",p.appendChild(s),p.appendChild(h);const u=document.createElement("div");u.id="secondImg",u.classList.add("images");const C=document.createElement("p"),E=document.createElement("a");E.innerHTML="Listen to the <strong>stories</strong> of the people that have exerienced our great cusine",E.href="#",C.appendChild(E),u.appendChild(C);const L=document.createElement("div");L.id="thirdImg",L.classList.add("images");const T=document.createElement("p"),M=document.createElement("a");M.innerHTML="Take a look at our delicious <strong>menù</strong>",M.href="#",T.appendChild(M),L.appendChild(T),m.appendChild(p),m.appendChild(u),m.appendChild(L),e.appendChild(m);const H=document.createElement("footer");H.id="footer";const g=document.createElement("nav");g.classList.add("left");const y=document.createElement("li"),v=document.createElement("a");v.href="#",v.innerHTML="Contact",y.appendChild(v);const f=document.createElement("li"),S=document.createElement("a");S.href="#";const q=document.createElement("img");q.src="styles/img/insta.svg",q.classList.add("insta"),S.appendChild(q),f.appendChild(S),g.appendChild(y),g.appendChild(f);const b=document.createElement("img");b.src="styles/img/medium-size.svg",b.classList.add("logo");const k=document.createElement("nav");k.classList.add("rightB"),document.createElement("ul").classList.add("rightB");const I=document.createElement("li"),w=document.createElement("a");w.href="#",w.innerHTML="Allergen chart",I.appendChild(w);const W=document.createElement("li"),x=document.createElement("a");x.href="#",x.innerHTML="Accessibility policy",W.appendChild(x),k.appendChild(I),k.appendChild(W),H.appendChild(g),H.appendChild(b),H.appendChild(k),e.appendChild(H)}(),document.querySelector("#a3Top").addEventListener("click",(function(){e.removeChild(n),function(){const e=document.querySelector("#content"),n=document.createElement("p");n.innerHTML="Scoresby St 34";const t=document.createElement("p");t.innerHTML="Telephone 07451-770586";const d=document.createElement("p");d.innerHTML="Email mariosreservations@gmail.com";const c=document.createElement("div"),a=document.createElement("table"),i=document.createElement("caption");i.innerHTML="Working hours";const l=document.createElement("tr"),o=document.createElement("th");o.scope="col",o.innerHTML="Day";const r=document.createElement("th");r.scope="col",r.innerHTML="Open";const m=document.createElement("th");m.scope="col",m.innerHTML="Close",l.appendChild(o),l.appendChild(r),l.appendChild(m);const p=document.createElement("tr"),s=document.createElement("th");s.innerHTML="Monday";const h=document.createElement("th");h.innerHTML="19:00";const u=document.createElement("th");u.innerHTML="23:30",p.appendChild(s),p.appendChild(h),p.appendChild(u);const C=document.createElement("tr"),E=document.createElement("th");E.innerHTML="Tuesday";const L=document.createElement("th");L.innerHTML="19:00";const T=document.createElement("th");T.innerHTML="23:30",C.appendChild(E),C.appendChild(L),C.appendChild(T);const M=document.createElement("tr"),H=document.createElement("th");H.innerHTML="Wednesday";const g=document.createElement("th");g.innerHTML="19:00";const y=document.createElement("th");y.innerHTML="23:30",M.appendChild(H),M.appendChild(g),M.appendChild(y);const v=document.createElement("tr"),f=document.createElement("th");f.innerHTML="Thursday";const S=document.createElement("th");S.innerHTML="19:00";const q=document.createElement("th");q.innerHTML="23:30",v.appendChild(f),v.appendChild(S),v.appendChild(q);const b=document.createElement("tr"),k=document.createElement("th");k.innerHTML="Friday";const I=document.createElement("th");I.innerHTML="12:00";const w=document.createElement("th");w.innerHTML="23:30",b.appendChild(k),b.appendChild(I),b.appendChild(w);const W=document.createElement("tr"),x=document.createElement("th");x.innerHTML="Saturday";const z=document.createElement("th");z.innerHTML="12:00";const A=document.createElement("th");A.innerHTML="23:30",W.appendChild(x),W.appendChild(z),W.appendChild(A);const B=document.createElement("tr"),P=document.createElement("th");P.innerHTML="Sunday";const D=document.createElement("th");D.innerHTML="12:00";const F=document.createElement("th");F.innerHTML="23:30",B.appendChild(P),B.appendChild(D),B.appendChild(F),a.appendChild(i),a.appendChild(l),a.appendChild(p),a.appendChild(C),a.appendChild(M),a.appendChild(v),a.appendChild(b),a.appendChild(W),a.appendChild(B),c.appendChild(a);const O=document.createElement("div"),R=document.createElement("img");R.src="../../../dist/styles/img/map.png",O.appendChild(R),e.appendChild(n),e.appendChild(t),e.appendChild(d),e.appendChild(c),e.appendChild(O)}()}));let e=document.querySelector("#content"),n=(document.querySelector(".header"),document.querySelector(".imagesP"));document.querySelector("#footer")})();
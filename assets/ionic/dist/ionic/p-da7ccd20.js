import"./p-5701584d.js";import"./p-502e7dbf.js";import{c as t}from"./p-383feea1.js";import{g as o}from"./p-267c6fae.js";const r=(r,a)=>{const i="back"===a.direction,e=a.leavingEl,s=o(a.enteringEl),p=s.querySelector("ion-toolbar"),n=t();if(n.addElement(s).fill("both").beforeRemoveClass("ion-page-invisible"),i?n.duration(a.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):n.duration(a.duration||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform","translateY(40px)","translateY(0px)").fromTo("opacity",.01,1),p){const o=t();o.addElement(p),n.addAnimation(o)}if(e&&i){n.duration(a.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)");const r=t();r.addElement(o(e)).afterStyles({display:"none"}).fromTo("transform","translateY(0px)","translateY(40px)").fromTo("opacity",1,0),n.addAnimation(r)}return n};export{r as mdTransitionAnimation}
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9366:function(e,t,a){Promise.resolve().then(a.bind(a,5080))},5080:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return m}});var i=a(3827),s=a(4090),r=a(8737),l=a(8792),n=a(6690),o=e=>{let{onScrollDown:t}=e,a=(0,s.useRef)(null);return(0,s.useEffect)(()=>{let e;if(!a.current)return;let t=a.current,i=t.getContext("2d"),s=0,r=[],l=["hsl(354, 70%, 40%)","hsl(354, 70%, 50%)","hsl(15, 80%, 80%)","hsl(25, 100%, 85%)","hsl(190, 70%, 80%)","hsl(196, 64%, 30%)","hsl(350, 70%, 90%)"];for(let e=0;e<40;e++)r.push({x:Math.random()*t.width,y:Math.random()*t.height,size:80*Math.random()+40,speedX:(.8*Math.random()-.4)*.5,speedY:(.8*Math.random()-.4)*.5,color:l[Math.floor(Math.random()*l.length)],opacity:.12*Math.random()+.04,rotation:Math.random()*Math.PI*2,rotationSpeed:(.004*Math.random()-.002)*.8});let n=()=>{t.width=window.innerWidth,t.height=window.innerHeight,r.forEach(e=>{e.x=Math.random()*t.width,e.y=Math.random()*t.height})},o=a=>{e=requestAnimationFrame(o);let l=a-s;l<33.333333333333336||(s=a-l%33.333333333333336,i.clearRect(0,0,t.width,t.height),r.forEach(e=>{e.x+e.size<0||e.x-e.size>t.width||e.y+e.size<0||e.y-e.size>t.height||(i.save(),i.translate(e.x,e.y),i.rotate(e.rotation),i.globalAlpha=e.opacity,i.beginPath(),i.moveTo(0,0),i.bezierCurveTo(e.size/2,-e.size/3,e.size,-e.size/6,1.2*e.size,0),i.bezierCurveTo(e.size,e.size/6,e.size/2,e.size/3,0,0),i.fillStyle=e.color,i.fill(),i.restore(),e.x+=e.speedX,e.y+=e.speedY,e.rotation+=e.rotationSpeed,e.x<-(1.2*e.size)&&(e.x=t.width+e.size,e.y=Math.random()*t.height),e.x>t.width+1.2*e.size&&(e.x=-e.size,e.y=Math.random()*t.height),e.y<-(1.2*e.size)&&(e.y=t.height+e.size,e.x=Math.random()*t.width),e.y>t.height+1.2*e.size&&(e.y=-e.size,e.x=Math.random()*t.width))}))};return n(),window.addEventListener("resize",n),e=requestAnimationFrame(o),()=>{window.removeEventListener("resize",n),e&&cancelAnimationFrame(e)}},[]),(0,i.jsxs)("section",{className:"relative min-h-screen flex items-center justify-center overflow-hidden",children:[(0,i.jsxs)("div",{className:"fixed inset-0 pointer-events-none",children:[(0,i.jsx)("canvas",{ref:a,className:"w-full h-full",style:{opacity:.8,willChange:"transform",transform:"translateZ(0)"}}),(0,i.jsx)("div",{className:"absolute inset-0 bg-gradient-radial from-black/20 via-black/50 to-black/70",style:{willChange:"opacity"}})]}),(0,i.jsxs)("div",{className:"relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-20 lg:py-24",children:[(0,i.jsx)(r.EA.div,{className:"absolute inset-0 -m-6 border border-[hsl(15,80%,80%)]/30 rounded-3xl backdrop-blur-sm",initial:{opacity:0,scale:.96},animate:{opacity:1,scale:1},transition:{duration:1.5,ease:"easeOut"}}),(0,i.jsxs)("div",{className:"relative py-10 backdrop-blur-sm bg-black/20 rounded-2xl border border-white/10 space-y-8 sm:space-y-10",children:[(0,i.jsx)(r.EA.div,{className:"mx-auto max-w-xl",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:1,ease:"easeOut"},children:(0,i.jsx)("img",{src:"/images/saree-pattern-gold.png",alt:"Traditional Indian Saree Pattern",className:"h-16 mx-auto mb-8 opacity-80"})}),(0,i.jsxs)("div",{className:"space-y-6",children:[(0,i.jsx)(n.Z,{text:"Luxury Handcrafted Sarees",className:"text-4xl md:text-6xl lg:text-7xl font-serif font-thin text-gradient-sunrise drop-shadow-[0_0px_20px_rgba(229,57,53,0.3)]",once:!0,type:"words"}),(0,i.jsx)(r.EA.p,{className:"text-xl text-amber-300",initial:{opacity:0},animate:{opacity:1},transition:{duration:.8,delay:.5,ease:"easeOut"},children:"Starting from ₹12,999"})]}),(0,i.jsx)("div",{className:"flex flex-col items-center space-y-4",children:(0,i.jsxs)(r.EA.div,{className:"text-xl md:text-2xl text-gray-200 font-light max-w-2xl",initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.8,delay:.7,ease:"easeOut"},children:[(0,i.jsxs)(r.EA.div,{className:"flex items-center justify-center gap-3 mb-4",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.6,delay:.9},children:[(0,i.jsx)("svg",{className:"w-6 h-6 text-amber-400 flex-shrink-0",fill:"currentColor",viewBox:"0 0 20 20",children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}),(0,i.jsx)("span",{children:"Blockchain Verified Authenticity"})]}),(0,i.jsxs)(r.EA.div,{className:"flex items-center justify-center gap-3",initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.6,delay:1.1},children:[(0,i.jsxs)("svg",{className:"w-6 h-6 text-teal-400 flex-shrink-0",fill:"currentColor",viewBox:"0 0 20 20",children:[(0,i.jsx)("path",{d:"M10 12a2 2 0 100-4 2 2 0 000 4z"}),(0,i.jsx)("path",{fillRule:"evenodd",d:"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z",clipRule:"evenodd"})]}),(0,i.jsx)("span",{children:"Virtual Try-On Technology"})]})]})}),(0,i.jsxs)("div",{className:"flex flex-col sm:flex-row justify-center gap-6 pt-4",children:[(0,i.jsxs)(r.EA.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:1.3,ease:"easeOut"},className:"relative",children:[(0,i.jsx)(l.default,{href:"/collection",children:(0,i.jsxs)("button",{className:"group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium rounded-full overflow-hidden min-w-[200px] hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300",children:[(0,i.jsx)("div",{className:"absolute inset-0 w-full h-full transition-all duration-500 ease-out transform translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-amber-600 to-amber-700"}),(0,i.jsxs)("div",{className:"relative flex items-center justify-center gap-2",children:[(0,i.jsx)("span",{children:"Shop Now"}),(0,i.jsx)("svg",{className:"w-5 h-5 transition-transform duration-500 group-hover:translate-x-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M14 5l7 7m0 0l-7 7m7-7H3"})})]})]})}),(0,i.jsx)(r.EA.div,{className:"absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap",initial:{opacity:0,y:-10},animate:{opacity:1,y:0},transition:{duration:.6,delay:1.5},children:(0,i.jsx)("p",{className:"text-xs text-amber-300",children:"Free Shipping on Orders Above ₹25,000"})})]}),(0,i.jsx)(r.EA.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:1.4,ease:"easeOut"},children:(0,i.jsx)(l.default,{href:"/stylist",children:(0,i.jsx)("button",{className:"group relative px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-medium rounded-full overflow-hidden min-w-[200px] hover:bg-white/20 hover:shadow-lg hover:shadow-white/10 transition-all duration-300",children:(0,i.jsxs)("div",{className:"relative flex items-center justify-center gap-2",children:[(0,i.jsx)("span",{children:"Try AI Stylist"}),(0,i.jsx)("svg",{className:"w-5 h-5 transition-transform duration-500 group-hover:rotate-[15deg]",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 10V3L4 14h7v7l9-11h-7z"})})]})})})})]}),(0,i.jsxs)(r.EA.div,{className:"flex justify-center items-center gap-2 pt-8",initial:{opacity:0},animate:{opacity:1},transition:{duration:.8,delay:1.6,ease:"easeOut"},children:[(0,i.jsx)("div",{className:"flex text-amber-400",children:[1,2,3,4,5].map(e=>(0,i.jsx)(r.EA.svg,{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{duration:.3,delay:1.6+.1*e},children:(0,i.jsx)("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})},e))}),(0,i.jsxs)(r.EA.span,{className:"text-sm text-gray-300",initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.6,delay:2.1},children:[(0,i.jsx)("span",{className:"font-semibold text-amber-300",children:"4.9/5"})," from 2,500+ customers"]})]})]}),(0,i.jsx)(r.EA.div,{className:"absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20",initial:{opacity:0},animate:{opacity:1},transition:{duration:1,delay:2.3,ease:"easeOut"},onClick:t,whileHover:{scale:1.1},whileTap:{scale:.95},style:{willChange:"transform"},children:(0,i.jsxs)("div",{className:"w-14 h-14 relative",children:[(0,i.jsx)("div",{className:"absolute inset-0 border-2 border-[hsl(15,80%,80%)] rounded-full animate-ping opacity-75"}),(0,i.jsx)("div",{className:"flex items-center justify-center h-full",children:(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-7 w-7 text-[hsl(15,80%,80%)] animate-bounce",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 14l-7 7m0 0l-7-7m7 7V3"})})})]})})]})]})},c=a(6805),d=a(6600),x=a(4445),h=a(8750);function m(){let[e,t]=(0,s.useState)(!1),a=(0,s.useRef)(null);return(0,i.jsxs)("main",{className:"flex min-h-screen flex-col items-center justify-between",children:[(0,i.jsx)(o,{onScrollDown:()=>{var e;null===(e=a.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}}),(0,i.jsx)(h.Z,{ref:a,className:"w-full py-20 px-4 md:px-8",overlayColor:"from-[hsl(354,70%,40%)]/30 to-[hsl(196,64%,30%)]/80",backgroundOpacity:.2,children:(0,i.jsxs)("div",{className:"max-w-7xl mx-auto",children:[(0,i.jsx)(n.Z,{text:"Our Premium Collection",className:"text-3xl md:text-4xl font-bold text-center mb-12 text-white",once:!0,speed:.05}),(0,i.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[(0,i.jsx)(r.EA.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.7,delay:.1},viewport:{once:!0,margin:"-100px"},children:(0,i.jsx)(c.Z,{id:"1",imageUrl:"/images/saree1.jpg",sareeName:"Silk Banarasi Saree",weaverName:"Padmavati Textiles",price:"₹12,999",region:"Varanasi, UP",color:"hsl(354, 70%, 40%)"})}),(0,i.jsx)(r.EA.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.7,delay:.3},viewport:{once:!0,margin:"-100px"},children:(0,i.jsx)(c.Z,{id:"2",imageUrl:"/images/saree2.jpg",sareeName:"Embroidered Chiffon Saree",weaverName:"Gujarat Handlooms",price:"₹8,499",region:"Surat, Gujarat",color:"hsl(196, 64%, 30%)",isMinted:!0})}),(0,i.jsx)(r.EA.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.7,delay:.5},viewport:{once:!0,margin:"-100px"},children:(0,i.jsx)(c.Z,{id:"3",imageUrl:"/images/saree3.jpg",sareeName:"Handloom Cotton Saree",weaverName:"Bengal Weavers",price:"₹6,999",region:"West Bengal",color:"hsl(15, 80%, 80%)"})})]}),(0,i.jsx)(r.EA.div,{className:"text-center mt-12",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.7},viewport:{once:!0},children:(0,i.jsx)("a",{href:"/collection",className:"inline-block px-6 py-3 bg-gradient-to-r from-[hsl(354,70%,40%)] to-[hsl(354,80%,30%)] text-white rounded-full hover:shadow-lg hover:shadow-[hsl(354,70%,40%)]/30 transition-all duration-300 transform hover:-translate-y-1",children:"View Full Collection"})})]})}),(0,i.jsx)(h.Z,{className:"w-full py-20 px-4 md:px-8",overlayColor:"from-[hsl(196,64%,30%)]/80 to-[hsl(354,70%,40%)]/30",backgroundOpacity:.2,children:(0,i.jsxs)("div",{className:"max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12",children:[(0,i.jsxs)(r.EA.div,{className:"md:w-1/2",initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},transition:{duration:.7},viewport:{once:!0,margin:"-100px"},children:[(0,i.jsx)(n.Z,{text:"Personal AI Stylist",className:"text-3xl md:text-4xl font-bold mb-6 text-white",type:"words",once:!0}),(0,i.jsx)(n.Z,{text:"Not sure which saree suits you best? Our AI stylist can help you find the perfect match based on your preferences, occasion, and style.",className:"text-lg text-gray-300 mb-8",type:"words",speed:.01,once:!0,delay:.5}),(0,i.jsx)(r.EA.button,{onClick:()=>t(!0),className:"px-6 py-3 bg-gradient-to-r from-[hsl(15,80%,80%)] to-[hsl(354,70%,40%)] text-white rounded-full hover:shadow-lg hover:shadow-[hsl(354,70%,40%)]/30 transition-all duration-300 transform hover:-translate-y-1",whileHover:{scale:1.05},whileTap:{scale:.95},children:"Consult Our AI Stylist"})]}),(0,i.jsx)(r.EA.div,{className:"md:w-1/2 relative",initial:{opacity:0,x:30},whileInView:{opacity:1,x:0},transition:{duration:.7,delay:.3},viewport:{once:!0,margin:"-100px"},children:(0,i.jsxs)("div",{className:"animate-float relative",children:[(0,i.jsx)("div",{className:"absolute -inset-0.5 bg-gradient-to-r from-[hsl(354,70%,40%)] to-[hsl(196,64%,30%)] rounded-lg blur opacity-30"}),(0,i.jsx)("img",{src:"/images/ai-stylist.png",alt:"AI Stylist",className:"w-full max-w-md mx-auto rounded-lg shadow-xl relative"})]})})]})}),(0,i.jsx)(h.Z,{className:"w-full py-20 px-4 md:px-8",overlayColor:"from-[hsl(354,70%,40%)]/30 to-[hsl(196,64%,30%)]/80",backgroundOpacity:.2,children:(0,i.jsxs)(r.EA.div,{className:"max-w-7xl mx-auto text-center",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.7},viewport:{once:!0,margin:"-100px"},children:[(0,i.jsx)(n.Z,{text:"Own Your Digital Collection",className:"text-3xl md:text-4xl font-bold mb-6 text-white",once:!0}),(0,i.jsx)(n.Z,{text:"Each of our premium sarees comes with a digital certificate of authenticity. Mint your NFT to prove ownership and join our exclusive community.",className:"text-lg text-gray-300 mb-8 max-w-2xl mx-auto",type:"words",speed:.01,once:!0,delay:.3}),(0,i.jsx)(x.Z,{})]})}),e&&(0,i.jsx)(d.Z,{onClose:()=>t(!1)})]})}}},function(e){e.O(0,[384,689,800,172,792,147,581,184,445,971,69,744],function(){return e(e.s=9366)}),_N_E=e.O()}]);
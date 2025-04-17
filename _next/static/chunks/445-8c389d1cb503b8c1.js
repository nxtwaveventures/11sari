"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[445],{4445:function(e,t,a){var n=a(3827),s=a(4090),l=a(8737);let r={connectWallet:()=>new Promise(e=>setTimeout(()=>e({address:"0x123...abc"}),1e3)),mintNFT:e=>new Promise((e,t)=>{setTimeout(()=>{Math.random()>.05?e({transactionHash:"0x".concat(Math.random().toString(16).substring(2)),tokenId:Math.floor(1e4*Math.random())}):t(Error("Transaction failed"))},2e3)})},i=[{id:"connect",label:"Connect Wallet"},{id:"prepare",label:"Prepare Metadata"},{id:"upload",label:"Upload to IPFS"},{id:"mint",label:"Mint on Polygon"},{id:"confirm",label:"Confirm Transaction"}];t.Z=e=>{let{productId:t,productName:a,productImage:o,weaverId:c,metadata:d={},onSuccess:m}=e,[x,h]=(0,s.useState)(!1),[u,p]=(0,s.useState)("connect"),[g,b]=(0,s.useState)(null),[f,w]=(0,s.useState)(null),[j,N]=(0,s.useState)(null),[y,v]=(0,s.useState)(null),[k,C]=(0,s.useState)(!1),[M,T]=(0,s.useState)(!1),P=()=>{k||(h(!1),setTimeout(()=>{f||(p("connect"),b(null),v(null))},300))},S=async()=>{try{C(!0),v(null);let e=await r.connectWallet();b(e),p("prepare"),T(!0)}catch(e){v("Failed to connect wallet: ".concat(e.message))}finally{C(!1)}},F=async()=>{try{C(!0),v(null),p("prepare");let e={name:a,description:"An authentic handloom saree from 11Sari.com",image:o,attributes:[{trait_type:"Product ID",value:t},{trait_type:"Weaver ID",value:c},...Object.entries(d).map(e=>{let[t,a]=e;return{trait_type:t,value:a}})]};p("upload"),await new Promise(e=>setTimeout(e,1500)),p("mint");let n=await r.mintNFT(e);w(n.transactionHash),N(n.tokenId),p("confirm"),m&&m({txHash:n.transactionHash,tokenId:n.tokenId})}catch(e){v("Minting failed: ".concat(e.message))}finally{C(!1)}},W=()=>i.findIndex(e=>e.id===u);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(l.EA.button,{onClick:()=>{if(!M){C(!0),S();return}F()},className:"\n                    px-8 py-4 rounded-full font-medium text-lg relative overflow-hidden\n                    ".concat(M?"bg-gradient-to-r from-[hsl(354,70%,40%)] to-[hsl(15,80%,80%)] text-white":"bg-white text-[hsl(354,70%,40%)]","\n                    hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1\n                    flex items-center justify-center min-w-[220px]\n                "),whileHover:{scale:1.05},whileTap:{scale:.95},disabled:k,children:[k?(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsxs)("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-current",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,n.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,n.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),M?"Minting...":"Connecting..."]}):(0,n.jsxs)(n.Fragment,{children:[M?"Mint Your NFT":"Connect Wallet",(0,n.jsx)(l.EA.span,{className:"ml-2",animate:{rotate:[0,15,0,-15,0]},transition:{repeat:1/0,repeatDelay:3,duration:1.5},children:M?"\uD83D\uDC8E":"\uD83D\uDC5B"})]}),(0,n.jsx)("div",{className:"absolute inset-0 overflow-hidden opacity-30 pointer-events-none",children:(0,n.jsx)("div",{className:"absolute -inset-[100%] animate-slow-spin bg-gradient-to-r from-transparent via-white to-transparent",style:{height:"200%",width:"200%"}})})]}),x&&(0,n.jsx)("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4",children:(0,n.jsxs)(l.EA.div,{className:"bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl w-full max-w-md mx-auto overflow-hidden",variants:{hidden:{opacity:0,y:50,scale:.95},visible:{opacity:1,y:0,scale:1,transition:{duration:.3,ease:"easeOut"}},exit:{opacity:0,scale:.95,transition:{duration:.2,ease:"easeIn"}}},initial:"hidden",animate:"visible",exit:"exit",children:[(0,n.jsx)("div",{className:"bg-gradient-to-r from-purple-600 to-blue-500 p-4",children:(0,n.jsxs)("div",{className:"flex justify-between items-center",children:[(0,n.jsx)("h2",{className:"text-white text-xl font-bold",children:"Mint Your Saree NFT"}),!k&&(0,n.jsx)("button",{onClick:P,className:"text-white hover:bg-white/20 rounded-full p-1.5 transition-colors",children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]})}),(0,n.jsxs)("div",{className:"p-6",children:[(0,n.jsx)("div",{className:"mb-8",children:(0,n.jsx)("div",{className:"flex items-center justify-between",children:i.map((e,t)=>(0,n.jsxs)(s.Fragment,{children:[(0,n.jsxs)("div",{className:"flex flex-col items-center",children:[(0,n.jsx)("div",{className:"w-8 h-8 rounded-full flex items-center justify-center text-sm ".concat(t<W()?"bg-green-500 text-white":t===W()?"bg-blue-500 text-white":"bg-gray-700 text-gray-400"),children:t<W()?"✓":t+1}),(0,n.jsx)("span",{className:"text-xs mt-1 ".concat(t===W()?"text-blue-400":"text-gray-500"),children:e.label})]}),t<i.length-1&&(0,n.jsx)("div",{className:"h-0.5 w-full mx-1 ".concat(t<W()?"bg-green-500":"bg-gray-700")})]},e.id))})}),"connect"===u&&(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/2/24/Polygon_blockchain_logo.png",alt:"Polygon Logo",className:"w-16 h-16 mx-auto mb-4"}),(0,n.jsx)("h3",{className:"text-white text-lg font-medium mb-2",children:"Connect Your Wallet"}),(0,n.jsx)("p",{className:"text-gray-400 mb-6",children:"Connect your crypto wallet to mint this beautiful saree as an NFT on Polygon."}),(0,n.jsx)("button",{onClick:S,disabled:k,className:"w-full py-3 rounded-full text-white font-medium ".concat(k?"bg-gray-700 cursor-not-allowed":"bg-blue-600 hover:bg-blue-500"),children:k?(0,n.jsxs)("span",{className:"flex items-center justify-center",children:[(0,n.jsxs)("svg",{className:"animate-spin h-5 w-5 mr-2",viewBox:"0 0 24 24",children:[(0,n.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",fill:"none"}),(0,n.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Connecting..."]}):"Connect Wallet"})]}),("prepare"===u||"upload"===u||"mint"===u)&&(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsxs)("div",{className:"rounded-lg bg-gray-800 p-4 mb-6",children:[(0,n.jsx)("p",{className:"text-gray-300 text-sm mb-2",children:"Wallet Connected:"}),(0,n.jsx)("p",{className:"text-white font-mono text-sm",children:(null==g?void 0:g.address)||"0x123...abc"})]}),(0,n.jsxs)("h3",{className:"text-white text-lg font-medium mb-2",children:["prepare"===u&&"Preparing Metadata","upload"===u&&"Uploading to IPFS","mint"===u&&"Minting on Polygon"]}),(0,n.jsxs)("p",{className:"text-gray-400 mb-6",children:["prepare"===u&&"We are preparing the metadata for your Saree NFT.","upload"===u&&"Uploading your saree information to decentralized storage.","mint"===u&&"Creating your unique NFT on the Polygon blockchain."]}),"prepare"===u&&!k&&(0,n.jsx)("button",{onClick:F,className:"w-full py-3 rounded-full text-white font-medium bg-blue-600 hover:bg-blue-500",children:"Begin Minting Process"}),k&&(0,n.jsxs)("div",{className:"flex flex-col items-center",children:[(0,n.jsx)("div",{className:"w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"}),(0,n.jsxs)("p",{className:"text-gray-300",children:["prepare"===u&&"Preparing...","upload"===u&&"Uploading...","mint"===u&&"Minting..."]})]})]}),"confirm"===u&&(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("div",{className:"w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4",children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),(0,n.jsx)("h3",{className:"text-white text-lg font-medium mb-2",children:"NFT Minted Successfully!"}),(0,n.jsxs)("div",{className:"rounded-lg bg-gray-800 p-4 mb-4",children:[(0,n.jsxs)("div",{className:"mb-3",children:[(0,n.jsx)("p",{className:"text-gray-400 text-xs mb-1",children:"Transaction Hash:"}),(0,n.jsx)("p",{className:"text-white font-mono text-sm truncate",children:f})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:"text-gray-400 text-xs mb-1",children:"Token ID:"}),(0,n.jsx)("p",{className:"text-white font-mono text-sm",children:j})]})]}),(0,n.jsxs)("div",{className:"flex gap-2",children:[(0,n.jsx)("button",{onClick:P,className:"flex-1 py-2.5 rounded-full text-white font-medium border border-gray-600 hover:bg-gray-700",children:"Close"}),(0,n.jsx)("a",{href:"https://mumbai.polygonscan.com/tx/".concat(f),target:"_blank",rel:"noopener noreferrer",className:"flex-1 py-2.5 rounded-full text-white font-medium bg-blue-600 hover:bg-blue-500",children:"View on Explorer"})]})]}),y&&(0,n.jsx)("div",{className:"mt-4 p-3 bg-red-900/50 border border-red-500 rounded-lg",children:(0,n.jsx)("p",{className:"text-red-300 text-sm",children:y})})]})]})})]})}}}]);
"use strict";(()=>{var e={};e.id=744,e.ids=[744],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},6294:(e,t,a)=>{a.r(t),a.d(t,{originalPathname:()=>u,patchFetch:()=>h,requestAsyncStorage:()=>p,routeModule:()=>c,serverHooks:()=>d,staticGenerationAsyncStorage:()=>l});var r={};a.r(r),a.d(r,{POST:()=>i});var s=a(9303),n=a(8716),o=a(670);async function i(e){try{let{messages:t}=await e.json(),a=await fetch("https://apps.abacus.ai/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${process.env.ABACUSAI_API_KEY}`},body:JSON.stringify({model:"gpt-4.1-mini",messages:[{role:"system",content:`You are an AI sales assistant for a comprehensive sales-enablement platform. You help sales teams analyze customer interactions, provide insights, and suggest next best actions.

Your capabilities include:
- Analyzing sales call transcripts and emails
- Providing insights on customer sentiment and pain points
- Suggesting follow-up strategies and next steps
- Identifying opportunities and potential concerns
- Offering coaching tips for sales reps
- Analyzing deal progression and pipeline health
- Providing CRM recommendations and updates

Always provide actionable, specific, and professional advice. Be concise but thorough. When discussing deals or customers, reference realistic sales scenarios. Focus on practical recommendations that can drive sales success.

Current platform metrics:
- 127 total contacts in pipeline
- $847K monthly revenue 
- 73% win rate
- 23 active deals
- 156 AI insights generated this month`},...t],stream:!0,max_tokens:3e3,temperature:.7})});if(!a.ok)throw Error(`API call failed: ${a.status}`);let r=new TextEncoder,s=new TextDecoder,n=new ReadableStream({async start(e){try{let t=a.body?.getReader();if(!t)throw Error("No response body");for(;;){let{done:a,value:n}=await t.read();if(a)break;for(let t of s.decode(n).split("\n"))if(t.startsWith("data: ")){let a=t.slice(6);if("[DONE]"===a){e.enqueue(r.encode("data: [DONE]\n\n")),e.close();return}try{let t=JSON.parse(a),s=t.choices?.[0]?.delta?.content||"";s&&e.enqueue(r.encode(`data: ${JSON.stringify({content:s})}

`))}catch(e){}}}}catch(t){console.error("Streaming error:",t),e.error(t)}}});return new Response(n,{headers:{"Content-Type":"text/plain; charset=utf-8","Cache-Control":"no-cache"}})}catch(e){return console.error("Chat API error:",e),new Response(JSON.stringify({error:"Failed to process request"}),{status:500,headers:{"Content-Type":"application/json"}})}}let c=new s.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/api/chat/route",pathname:"/api/chat",filename:"route",bundlePath:"app/api/chat/route"},resolvedPagePath:"/home/ubuntu/ai-sales-platform/app/app/api/chat/route.ts",nextConfigOutput:"",userland:r}),{requestAsyncStorage:p,staticGenerationAsyncStorage:l,serverHooks:d}=c,u="/api/chat/route";function h(){return(0,o.patchFetch)({serverHooks:d,staticGenerationAsyncStorage:l})}},9303:(e,t,a)=>{e.exports=a(517)}};var t=require("../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[948],()=>a(6294));module.exports=r})();
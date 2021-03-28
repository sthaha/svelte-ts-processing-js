import{SvelteComponent as R,append as a,attr as p,check_outros as T,create_component as q,destroy_component as A,destroy_each as B,detach as y,element as d,group_outros as C,init as G,insert as k,mount_component as H,noop as M,safe_not_equal as S,space as w,text as D,transition_in as x,transition_out as b}from"../_snowpack/pkg/svelte/internal.js";import{Link as W}from"../_snowpack/pkg/svelte-routing.js";function L(c,n,i){const o=c.slice();return o[2]=n[i],o}function z(c){let n=c[2].summary+"",i;return{c(){i=D(n)},m(o,r){k(o,i,r)},p:M,d(o){o&&y(i)}}}function j(c){let n,i,o,r,m,f,h,g,u,l=c[2].description+"",_,t,s;return f=new W({props:{to:c[2].link,$$slots:{default:[z]},$$scope:{ctx:c}}}),{c(){n=d("tr"),i=d("td"),o=d("div"),r=d("div"),m=d("div"),q(f.$$.fragment),h=w(),g=d("td"),u=d("div"),_=D(l),t=w(),p(m,"class","text-sm font-medium text-gray-900"),p(r,"class","ml-4"),p(o,"class","flex items-center"),p(i,"class","px-6 py-4 whitespace-nowrap"),p(u,"class","text-sm text-gray-900"),p(g,"class","px-6 py-4 whitespace-nowrap")},m(e,v){k(e,n,v),a(n,i),a(i,o),a(o,r),a(r,m),H(f,m,null),a(n,h),a(n,g),a(g,u),a(u,_),a(n,t),s=!0},p(e,v){const $={};v&32&&($.$$scope={dirty:v,ctx:e}),f.$set($)},i(e){s||(x(f.$$.fragment,e),s=!0)},o(e){b(f.$$.fragment,e),s=!1},d(e){e&&y(n),A(f)}}}function E(c){let n,i,o,r,m,f,h,g,u=c[0],l=[];for(let t=0;t<u.length;t+=1)l[t]=j(L(c,u,t));const _=t=>b(l[t],1,1,()=>{l[t]=null});return{c(){n=d("div"),i=d("div"),o=d("div"),r=d("table"),m=d("thead"),m.innerHTML=`<tr><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Demo</th> 
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th></tr>`,f=w(),h=d("tbody");for(let t=0;t<l.length;t+=1)l[t].c();p(m,"class","bg-gray-50"),p(h,"class","bg-white divide-y divide-gray-200"),p(r,"class","min-w-full divide-y divide-gray-200"),p(o,"class","shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"),p(i,"class","py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"),p(n,"class","-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8")},m(t,s){k(t,n,s),a(n,i),a(i,o),a(o,r),a(r,m),a(r,f),a(r,h);for(let e=0;e<l.length;e+=1)l[e].m(h,null);g=!0},p(t,[s]){if(s&1){u=t[0];let e;for(e=0;e<u.length;e+=1){const v=L(t,u,e);l[e]?(l[e].p(v,s),x(l[e],1)):(l[e]=j(v),l[e].c(),x(l[e],1),l[e].m(h,null))}for(C(),e=u.length;e<l.length;e+=1)_(e);T()}},i(t){if(!g){for(let s=0;s<u.length;s+=1)x(l[s]);g=!0}},o(t){l=l.filter(Boolean);for(let s=0;s<l.length;s+=1)b(l[s]);g=!1},d(t){t&&y(n),B(l,t)}}}function F(c,n,i){let{location:o}=n,r=[{link:"/demo/2D",summary:"2D Demo",description:"A simple 2D Demo to test svelte integration"},{link:"/demo/3D",summary:"3D Demo",description:"Test 3D WebGL Rendering"}];return c.$$set=m=>{"location"in m&&i(1,o=m.location)},[r,o]}class I extends R{constructor(n){super();G(this,n,F,E,S,{location:1})}}export default I;

var z=Object.defineProperty;var k=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var j=(a,e,s)=>e in a?z(a,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[e]=s,c=(a,e)=>{for(var s in e||(e={}))L.call(e,s)&&j(a,s,e[s]);if(k)for(var s of k(e))$.call(e,s)&&j(a,s,e[s]);return a};import{r as T,j as t}from"./main-183.js";import{_ as i}from"./bi.430.0.js";import{z as S,a8 as E}from"./bi.554.440.js";import{b as _,g as B}from"./bi.16.913.js";import{T as N,t as D}from"./bi.170.714.js";import"./bi.929.9.js";function q({formID:a,discordConf:e,setDiscordConf:s,step:b,setstep:f,isLoading:m,setIsLoading:p,setSnackbar:v,redirectLocation:I,isInfo:r}){const[o,y]=T.useState(!1),[h,u]=T.useState({accessToken:""}),{discord:n}=D,A=()=>{B(e,s,p),setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),f(2)},d=l=>{const g=c({},e),x=c({},h);x[l.target.name]="",g[l.target.name]=l.target.value,u(x),s(g)},w=`
            <h4>${i("Get Access Token few step","bit-integrations")}</h4>
            <ul>
                <li>${i("First create app.","bit-integrations")}</li>
                <li>${i("Click on OAuth2.","bit-integrations")}</li>
                <li>${i("Select <b>bot</b> from scopes.","bit-integrations")}</li>
                <li>${i("Select permissions from <b>Bot Permissions</b>.","bit-integrations")}</li>
                <li>${i("Then copy the <b>generated url</b> and paste it in the browser and hit enter.","bit-integrations")}</li>
                <li>${i("Then click on <b>Bot</b>  from left navbar and copy the <b>Access token</b>.","bit-integrations")}</li>
            </ul>`;return t.jsxs("div",{className:"btcd-stp-page",style:{width:b===1&&900,height:b===1&&"auto"},children:[(n==null?void 0:n.youTubeLink)&&t.jsx(N,{title:"Discord",youTubeLink:n==null?void 0:n.youTubeLink}),(n==null?void 0:n.docLink)&&t.jsx(N,{title:"Discord",docLink:n==null?void 0:n.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"name",value:e.name,type:"text",placeholder:i("Integration Name...","bit-integrations"),disabled:r}),t.jsxs("small",{className:"d-blk mt-5",children:[i("To get access Token , Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://discord.com/developers/applications",target:"_blank",rel:"noreferrer",children:i("Discord Console","bit-integrations")})]}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("Access Token:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"accessToken",value:e.accessToken,type:"text",placeholder:i("Access Token...","bit-integrations"),disabled:r}),t.jsx("div",{style:{color:"red"},children:h.accessToken}),!r&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{onClick:()=>_(e,s,u,y,p,v),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:o||m,children:[o?i("Authorized ✔","bit-integrations"):i("Authorize","bit-integrations"),m&&t.jsx(S,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:A,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!o,children:[i("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx(E,{note:w})]})}export{q as default};

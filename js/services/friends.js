utils.jq((()=>{$((function(){const a=document.getElementsByClassName("ds-friends");for(var t=0;t<a.length;t++){const e=a[t],r=e.getAttribute("api");if(null==r)continue;const n=def.avatar,l=()=>{utils.request(e,r,(function(a){for(let r of a.content||a){var t='<div class="grid-cell user-card">';t+=`<a class="card-link" target="_blank" rel="external nofollow noopener noreferrer" href="${r.html_url||r.url}">`,t+=`<img src="${r.avatar_url||r.avatar||r.icon||n}" onerror="javascript:this.src='${n}';"/>`,t+='<div class="name image-meta">',t+=`<span class="image-caption">${r.title||r.login}</span>`,t+="</div>",t+="</a>",t+="</div>",$(e).find(".grid-box").append(t)}}))},i=e.hasAttribute("lazyload");util.viewportLazyload(e,l,i)}}))}));
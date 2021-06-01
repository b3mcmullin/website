System.register(["./chunk-vendor.js","./chunk-frameworks.js","./chunk-ref-selector.js"],(function(){"use strict";var e,t,r,o,n,s,i,a,c,l,d,u,p,f,h,m,g,y,j,S,v,q,b,w,k,L;return{setters:[function(m){e=m._,t=m.t,r=m.g,o=m.e,n=m.c,s=m.h,i=m.f,a=m.o,c=m.a,l=m.r,d=m.F,u=m.n,p=m.C,f=m.a6,h=m.i},function(e){m=e.c,g=e.t,y=e.$,j=e.b,S=e.r,v=e.A,q=e.z,b=e.R,w=e._,k=e.a9,L=e.aS},function(){}],execute:function(){let A=class BranchFilterElement extends HTMLElement{constructor(){super(...arguments),this.abortSearch=null,this.originalSelectedItem=null}submit(e){e.preventDefault()}resetField(e){if("Escape"!==s(e))return;const t=this.field.value.trim();this.field.value="",t&&this.search()}reset(){this.field.focus(),this.field.value="",i(this.field,"input")}get activeFilter(){var e;return null!==(e=this.filters.find((e=>e.classList.contains("selected"))))&&void 0!==e?e:null}async search(){var e;this.originalSelectedItem||(this.originalSelectedItem=this.activeFilter);const t=this.field.value.trim().length>0,r=function(e){const t=e.form;if(e.value.trim()){const r=new URL(t.action,window.location.origin),o=new URLSearchParams(r.search.slice(1)),n=t.elements.namedItem("utf8");return n instanceof HTMLInputElement&&o.append("utf8",n.value),o.append("query",e.value),r.search=o.toString(),r.toString()}return t.getAttribute("data-reset-url")}(this.field);this.classList.toggle("is-search-mode",t),this.classList.add("is-loading");for(const s of this.filters)s.classList.remove("selected");t?this.allFilter.classList.add("selected"):this.originalSelectedItem&&(this.originalSelectedItem.classList.add("selected"),this.originalSelectedItem=null),null===(e=this.abortSearch)||void 0===e||e.abort();const{signal:o}=this.abortSearch=new AbortController;try{const e=await m(document,r,{signal:o});g(null,"",r),this.result.innerHTML="",this.result.appendChild(e)}catch(n){}o.aborted||this.classList.remove("is-loading")}};e([t],A.prototype,"field",void 0),e([t],A.prototype,"result",void 0),e([t],A.prototype,"allFilter",void 0),e([r],A.prototype,"filters",void 0),e([o(100)],A.prototype,"search",null),A=e([n],A);let C=class BranchFilterItemElement extends HTMLElement{get branch(){return this.getAttribute("branch")}get branches(){const e=this.closest("branch-filter").querySelectorAll("branch-filter-item");return Array.from(e).filter((e=>e.branch===this.branch))}loading(e){for(const t of this.branches)t.spinner.hidden=!e,t.destroyButton&&(t.destroyButton.hidden=e)}set mode(e){for(const t of this.branches)t.classList.toggle("Details--on","restore"===e)}async restore(e){e.preventDefault(),this.loading(!0);const t=e.target;let r;try{r=await fetch(t.action,{method:t.method,body:new FormData(t),headers:{"X-Requested-With":"XMLHttpRequest"}})}catch(o){}finally{r&&r.ok||location.reload(),this.loading(!1)}this.mode="destroy"}async destroy(e){e.preventDefault(),this.loading(!0);const t=e.target;let r;try{r=await fetch(t.action,{method:t.method,body:new FormData(t),headers:{"X-Requested-With":"XMLHttpRequest"}})}catch(o){}finally{r&&r.ok||location.reload(),this.loading(!1)}this.mode="restore"}};e([t],C.prototype,"destroyButton",void 0),e([t],C.prototype,"spinner",void 0),C=e([n],C),a(".js-new-badge-autodismiss",{constructor:HTMLFormElement,add:e=>{const t=e.closest("details");t.addEventListener("toggle",(()=>{t.hasAttribute("open")&&fetch(e.action,{method:e.method,body:new FormData(e),headers:{"X-Requested-With":"XMLHttpRequest"}})}))}}),a(".js-fetch-upstream-details-content",{constructor:HTMLElement,initialize(e){e.hidden=!0}}),c("click",".js-fetch-upstream-summary",(async function(){const e=document.querySelector(".js-fetch-upstream-details-content"),t=document.querySelector(".js-fetch-upstream-details-spinner"),r=e.querySelector(".js-fetch-upstream-conflicts-ui"),o=e.querySelector(".js-fetch-upstream-no-conflicts-ui"),n=e.querySelector(".js-fetch-upstream-conflicts-error-message"),s=e.querySelector(".js-fetch-upstream-conflicts-no-error-message");if(t.hidden)return;if(0===parseInt(e.getAttribute("data-behind")))return r.hidden=!0,o.hidden=!1,e.hidden=!1,void(t.hidden=!0);const i=e.getAttribute("data-mergeability-check-url"),a=await fetch(i,{headers:{Accept:"application/json"}});if(e.hidden=!1,t.hidden=!0,a.ok){"clean"===(await a.json()).state?o.hidden=!1:r.hidden=!1}else r.hidden=!1,n.hidden=!1,s.hidden=!0}));let T=class GetRepoElement extends HTMLElement{constructor(){super(...arguments),this.shouldRefreshList=!1}showDownloadMessage(e){const t=this.findPlatform(e);t&&this.showPlatform(t)}showCodespaces(e){const t=this.findPlatform(e);t&&(this.showPlatform(t),this.loadAndUpdateContent())}showOpenOrCreateInCodespace(){this.openOrCreateInCodespace&&(this.openOrCreateInCodespace.hidden=!1)}removeOpenOrCreateInCodespace(){this.openOrCreateInCodespace&&this.openOrCreateInCodespace.remove()}refreshList(){this.shouldRefreshList&&(this.shouldRefreshList=!1,this.loadAndUpdateContent())}trackDelete(){this.shouldRefreshList=!0}hideSpinner(){this.codespaceLoadingMenu.hidden=!0,this.codespaceList.hidden=!1}showSpinner(){this.codespaceLoadingMenu.hidden=!1,this.codespaceList.hidden=!0}onDetailsToggle(){this.modal.hidden=!1;for(const e of this.platforms)e.hidden=!0}showPlatform(e){this.modal.hidden=!0;for(const t of this.platforms)t.hidden=t.getAttribute("data-platform")!==e}findPlatform(e){return e.currentTarget.getAttribute("data-open-app")||y()}refreshOnError(){window.location.reload()}pollForVscode(e){this.showPlatform("vscode");const t=e.currentTarget.getAttribute("data-src");t&&this.vscodePoller.setAttribute("src",t)}backToCodespacesFromVscodePolling(){this.loadAndUpdateContent(),this.showPlatform("codespaces")}loadAndUpdateContent(){this.codespaceList.setAttribute("src",this.codespaceList.getAttribute("data-src"))}};e([t],T.prototype,"modal",void 0),e([t],T.prototype,"codespaceForm",void 0),e([t],T.prototype,"codespaceLoadingMenu",void 0),e([t],T.prototype,"codespaceList",void 0),e([t],T.prototype,"openOrCreateInCodespace",void 0),e([t],T.prototype,"vscodePoller",void 0),e([r],T.prototype,"platforms",void 0),T=e([n],T),a(".repository-import",{subscribe:e=>j(e,"socket:message",(function(e){const t=e.detail.data;t.redirect_to&&(document.location.href=t.redirect_to,e.stopImmediatePropagation())}))}),c("change","input.js-repository-import-lfs-opt",(function({currentTarget:e}){const t=parseInt(e.getAttribute("data-percent-used")||""),r=e.closest(".js-repository-import-lfs-container"),o=e.getAttribute("data-used")||"";r.querySelector(".js-repository-import-lfs-warn").classList.toggle("d-none",!(t>100)),r.querySelector(".js-usage-bar").classList.toggle("exceeded",t>=100),r.querySelector(".js-usage-bar").setAttribute("aria-label",t+"%"),r.querySelector(".js-repository-import-lfs-progress").style.width=t+"%",r.querySelector("span.js-usage-text").textContent=o})),l(".js-repository-import-author-form",(async function(e,t){const r=await t.html();e.closest(".js-repository-import-author").replaceWith(r.html)})),c("click",".js-repository-import-projects-cancel-button",(function(){const e=document.querySelector(".js-repository-import-projects-cancel-form");S(e)}));let _=!1;function x(){const e=document.querySelector(".js-repo-name");i(e,"input");const t=document.querySelector('.js-owner-container [aria-checked="true"]'),r="false"!==t.getAttribute("data-org-allow-public-repos"),o=document.querySelector(".js-privacy-toggle[value=public]");E(r,o,document.querySelector(".js-privacy-toggle-label-public"),document.querySelector(".js-public-description"),document.querySelector(".js-public-restricted-by-policy-description"));const n=function(e,t){let r=!1;const o=document.querySelectorAll(".js-new-repo-internal-visibility");for(const n of o){n.hidden=!0;const e=n.querySelector(".js-privacy-toggle[value=internal]");e instanceof HTMLInputElement&&e.checked&&(r=!0)}if(e){const o=document.querySelector("#new-repo-internal-visibility-"+e);if(o){o.hidden=!1;const e=o.querySelector(".js-privacy-toggle-label-internal"),n=o.querySelector(".js-internal-description"),s=o.querySelector(".js-internal-restricted-by-policy-description"),a=o.querySelector(".js-privacy-toggle[value=internal]");if(a instanceof HTMLInputElement)return"false"===t.getAttribute("data-org-allow-internal-repos")?(a.disabled=!0,e&&e.classList.add("color-text-tertiary"),n&&(n.hidden=!0),s&&(s.hidden=!1)):(r&&(a.checked=!0,i(a,"change")),a.disabled=!1,e&&e.classList.remove("color-text-tertiary"),n&&(n.hidden=!1),s&&(s.hidden=!0)),a}}return null}(t.getAttribute("data-business-id"),t),s="false"!==t.getAttribute("data-org-allow-private-repos"),a=document.querySelector(".js-privacy-toggle[value=private]"),c=document.querySelector(".js-privacy-toggle-label-private"),l=document.querySelector(".js-private-description"),d=document.querySelector(".js-private-restricted-by-policy-description");E(s,a,c,l,d),function(){const e=document.querySelectorAll('.js-org-upgrade-link:not([hidden=""]');for(const t of e)t.hidden=!0}();const u="false"!==t.getAttribute("data-org-private-restricted-by-plan"),p=document.querySelector(".js-upgrade-private-description"),f="false"!==t.getAttribute("data-org-show-upgrade"),h=t.getAttribute("data-org-name"),m=h?document.querySelector(`a[data-upgrade-link="${h}"]`):null,g=document.querySelector(".js-ask-owner-message");s||!u?(p&&(p.hidden=!0),m&&(m.hidden=!0),g&&(g.hidden=!0)):(d&&(d.hidden=u),p&&(p.hidden=!1),m&&(m.hidden=!f),g&&(g.hidden=f));const y=t.getAttribute("data-default-new-repo-branch"),j=document.querySelector(".js-new-repo-owner-default-branch");j&&(j.textContent=y);const S=t.getAttribute("data-owner-settings-link-prefix"),v=document.querySelector(".js-new-repo-owner-settings-link-prefix");v&&(v.textContent=S);const q=t.getAttribute("data-owner-settings-url"),b=document.querySelector(".js-repo-owner-default-branch-settings-link-container"),w=document.querySelector(".js-org-repo-owner-default-branch-settings-info");if(q){const e=document.querySelector(".js-new-repo-owner-settings-link");e&&(e.href=q,b&&(b.hidden=!1)),w&&(w.hidden=!0)}else if(b&&(b.hidden=!0,w)){const e=t.hasAttribute("data-viewer-is-org-admin");w.hidden=!e}const k="true"===t.getAttribute("data-org-show-trade-controls"),L="true"===t.getAttribute("data-viewer-is-org-admin"),A="true"===t.getAttribute("data-user-show-trade-controls"),C=k&&!s,T=document.querySelector(".js-trade-controls-description"),x=document.querySelector(".js-individual-trade-controls-description");if(A||C){const e=!A&&!L&&C;d&&(d.hidden=!e),a.disabled=!0,l&&(l.hidden=!0),p&&(p.hidden=!0),m&&(m.hidden=!0),g&&(g.hidden=!0)}else T&&(T.hidden=!0),x&&(x.hidden=!0);A?(T&&(T.hidden=!0),x&&(x.hidden=!1)):C&&T&&(T.hidden=!L),function(e,t,r,o){let n=null;"private"!==e.getAttribute("data-default")||o.disabled?"internal"===e.getAttribute("data-default")&&r&&!r.disabled?n=r:t&&!t.disabled?n=t:r&&!r.disabled&&(n=r):n=o;if(!n)return;const s=t&&t.disabled&&t.checked||o.disabled&&o.checked||r&&r.disabled&&r.checked,a=!(t&&t.checked||r&&r.checked||o.checked);!1!==_&&!0!==s&&!0!==a||(n.checked=!0,i(n,"change"))}(t,o,n,a),function(e){for(const o of document.querySelectorAll(".js-with-permission-fields"))o.hidden=!e;for(const o of document.querySelectorAll(".js-without-permission-fields"))o.hidden=e;const t=document.querySelector(".errored"),r=document.querySelector("dl.warn");t&&(t.hidden=!e);r&&(r.hidden=!e)}("yes"===t.getAttribute("data-permission")),function(){const e=document.querySelector("#js-upgrade-container");if(!e)return;const t=document.querySelector("#js-payment-methods-form");e.firstElementChild&&t.appendChild(e.firstElementChild);const r=document.querySelector("input[name=owner]:checked").value,o=t.querySelector(`.js-upgrade[data-login="${r}"]`);o&&e.appendChild(o)}(),I();const M=document.querySelector(".js-quick-install-container");if(M){const e=M.querySelector(".js-quick-install-divider");e.hidden=!0;const t=document.querySelector("input[name=owner]:checked").parentElement;if(t){const r=t.querySelector(".js-quick-install-list-template");if(r instanceof HTMLTemplateElement){const t=M.querySelector(".js-account-apps");t.innerHTML="",t.append(r.content.cloneNode(!0)),r.children.length>0&&(e.hidden=!1)}}}}function E(e,t,r,o,n){e?(t&&(t.disabled=!1),r&&r.classList.remove("color-text-tertiary"),o&&(o.hidden=!1),n&&(n.hidden=!0)):(t&&(t.disabled=!0),r&&r.classList.add("color-text-tertiary"),o&&(o.hidden=!0),n&&(n.hidden=!1))}function I(e){const t=document.querySelector("#js-upgrade-container");if(!t)return;const r=t.querySelector(".js-billing-section"),o=t.querySelector(".js-confirm-upgrade-checkbox");let n=e?e.target:null;n||(n=document.querySelector(".js-privacy-toggle:checked")),"false"===n.value?(t.hidden=!1,r&&r.classList.remove("has-removed-contents"),o&&(o.checked=!0)):(t.hidden=!0,r&&r.classList.add("has-removed-contents"),o&&(o.checked=!1)),M()}function M(){const e=document.querySelector(".js-repo-form"),t=e.querySelector(".js-repository-owner-choice:checked"),r=e.querySelector(".js-repo-name"),o=e.querySelector(".js-repo-url"),n=e.querySelector(".js-repo-gitignore"),s=e.querySelector(".js-repo-license");let i=!o||!o.classList.contains("is-autocheck-errored");if(i=i&&!!t,i&&r&&(i=r.classList.contains("is-autocheck-successful"),"private"===document.querySelector(".js-privacy-toggle:checked").value&&(i=i&&function(){const e=document.querySelector("#js-upgrade-container");if(!e)return!0;if(e.querySelector(".js-ofac-sanction-notice"))return!1;const t=e.querySelector(".js-confirm-upgrade-checkbox");if(t instanceof HTMLInputElement&&!t.checked)return!1;const r=e.querySelector(".js-zuora-billing-info");if(r&&r.classList.contains("d-none"))return!1;return!0}())),n&&n.checked){const t=e.querySelector('input[name="repository[gitignore_template]"]:checked');i=i&&""!==t.value}if(s&&s.checked){const t=e.querySelector('input[name="repository[license_template]"]:checked');i=i&&""!==t.value}e.querySelector("button[type=submit]").disabled=!i}async function R(e){const t=e.form;t.querySelector("#release_draft").value="1",F(e,"saving");const r=await fetch(t.action,{method:t.method,body:new FormData(t),headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"}});if(!r.ok)return void F(e,"failed");const o=await r.json();return F(e,"saved"),setTimeout(F,5e3,e,"default"),i(t,"release:saved",{release:o}),o}function H(e){const t=e.closest(".js-releases-marketplace-publish-container").querySelector(".js-releases-marketplace-publish-preview");e.checked?t.classList.remove("d-none"):t.classList.add("d-none")}function F(e,t){for(const r of e.querySelectorAll(".js-save-draft-button-state"))r.hidden=r.getAttribute("data-state")!==t;e.disabled="saving"===t}function P(e){const t=document.querySelector(".js-release-target-wrapper");if(null!=t){switch(e){case"valid":t.classList.add("d-none");break;case"loading":break;default:t.classList.remove("d-none")}for(const t of document.querySelectorAll(".js-tag-status-message"))t.hidden=t.getAttribute("data-state")!==e}}a("#js-upgrade-container .js-zuora-billing-info:not(.d-none)",M),a(".page-new-repo",(function(){const e=document.querySelector("#js-upgrade-container");e&&(e.hidden=!0),x();const t=document.querySelector(".js-repo-form"),r=t.querySelector(".js-repo-url");if(r)return void r.focus();const o=t.querySelector(".js-template-repository-select");if(o)return void o.focus();const n=t.querySelector(".js-owner-select");n&&n.focus()})),c("click",".js-reponame-suggestion",(function(e){const t=document.querySelector(".js-repo-name");t.value=e.currentTarget.textContent,i(t,"input",!1)})),c("click",".js-privacy-toggle",(function(){_=!0})),c("change",".js-privacy-toggle",I),c("details-menu-selected",".js-owner-container",x,{capture:!0}),c("change","#js-upgrade-container input",M),v("#js-upgrade-container input",M),v(".js-owner-reponame .js-repo-name",(function(e){const t=document.querySelector(".js-personal");if(t){const r=document.querySelector(".js-owner-container input.js-repository-owner-is-viewer"),o=e.target,n=!(r&&r.checked&&r.defaultValue.toLowerCase()===o.value.toLowerCase());t.hidden=n;document.querySelector("#repo-name-suggestion").hidden=!n}M()})),c("auto-check-send",".js-repo-name-auto-check",(function(e){const t=e.currentTarget.form.querySelector("input[name=owner]:checked").value;e.detail.body.append("owner",t)})),c("auto-check-complete","#repository_name",(function(){M()})),v(".js-repo-url",(function(e){const t=e.target;if(!(t instanceof HTMLInputElement))return;const r=t.closest(".form-group");if(!(r instanceof HTMLDListElement))return;const o=document.querySelector(".js-insecure-url-warning"),n=document.querySelector(".js-svn-url-error"),s=document.querySelector(".js-git-url-error"),i=t.value.toLowerCase();o.hidden=!i.startsWith("http://"),n.hidden=!i.startsWith("svn://"),s.hidden=!i.startsWith("git://"),i.startsWith("svn://")||i.startsWith("git://")?(t.classList.add("is-autocheck-errored"),r.classList.add("errored")):(t.classList.remove("is-autocheck-errored"),r.classList.remove("errored")),M()})),c("change",".js-toggle-repo-init-setting",(e=>{const t=e.currentTarget;t.checked||function(e){const t=e.closest(".js-repo-init-setting-container");if(!t)return;const r=t.querySelector(".js-repo-init-setting-unchecked-menu-option");r.checked||(r.checked=!0,i(r,"change"))}(t),M()})),c("change",".js-repo-init-setting-unchecked-menu-option",(e=>{const t=e.currentTarget;t.checked&&function(e){const t=e.closest(".js-repo-init-setting-container");if(!t)return;const r=t.querySelector(".js-toggle-repo-init-setting");r.checked&&(r.checked=!1,i(r,"change"))}(t),M()})),c("change",".js-repo-init-setting-menu-option",M),c("change",".js-repo-readme",M),c("change",".js-toggle-new-repo-default-branch-info",(e=>{!function(e){const t=e.closest("form"),r=t.querySelector(".js-new-repo-default-branch-info");if(!r)return;const o=t.querySelectorAll(".js-toggle-new-repo-default-branch-info:checked").length>0;r.hidden=!o}(e.currentTarget)})),c("tab-container-changed",".js-branches-tags-tabs",(async function(e){const t=e.detail.relatedTarget,r=e.currentTarget;if(!r)return;let o,n;for(const i of r.querySelectorAll("[data-controls-ref-menu-id]")){if(!(i instanceof d||i instanceof u))return;const e=i.getAttribute("data-controls-ref-menu-id"),r=t.id===e;i.hidden=!r,r?n=i:o||(o=i.input?i.input.value:"")}const s=n&&n.input;s&&(n&&void 0!==o&&(s.value=o),s.focus())})),a(".js-pulse-contribution-data",(e=>{!async function(e){const t=e.getAttribute("data-pulse-diffstat-summary-url");let r;try{t&&(r=await async function(e){return m(document,e)}(t),function(e,t){t.innerHTML="",t.appendChild(e)}(r,e))}catch(o){const t=e.querySelector(".js-blankslate-loading"),r=e.querySelector(".js-blankslate-error");t.classList.add("d-none"),r.classList.remove("d-none")}}(e)})),c("change",".js-releases-marketplace-publish-field",(function(e){H(e.currentTarget)})),a(".js-releases-marketplace-publish-field",(function(e){H(e)})),c("click",".js-save-draft",(function(e){R(e.currentTarget),e.preventDefault()})),c("click",".js-timeline-tags-expander",(function(e){e.currentTarget.closest(".js-timeline-tags").classList.remove("is-collapsed")})),c("release:saved",".js-release-form",(function(e){const t=e.detail.release,r=e.currentTarget,o=r.getAttribute("data-repo-url"),n=t.update_url||O("tag",o,t.tag_name);if(r.setAttribute("action",n),t.update_authenticity_token){r.querySelector("input[name=authenticity_token]").value=t.update_authenticity_token}const s=t.edit_url||O("edit",o,t.tag_name);g(q(),document.title,s);const i=document.querySelector("#delete_release_confirm form");if(i){const e=t.delete_url||O("tag",o,t.tag_name);if(i.setAttribute("action",e),t.delete_authenticity_token){i.querySelector("input[name=authenticity_token]").value=t.delete_authenticity_token}}const a=r.querySelector("#release_id");if(!a.value){a.value=t.id;const e=document.createElement("input");e.type="hidden",e.name="_method",e.value="put",r.appendChild(e)}})),c("click",".js-publish-release",(function(){document.querySelector("#release_draft").value="0"}));const z=new WeakMap;async function D(e){if(!e.value)return;if(e.value===z.get(e))return;P("loading"),z.set(e,e.value);const t=e.getAttribute("data-url"),r=new URL(t,window.location.origin),o=new URLSearchParams(r.search.slice(1));o.append("tag_name",e.value),r.search=o.toString();const n=await fetch(r.toString(),{headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"}});if(!n.ok)return void P("invalid");const s=await n.json();"duplicate"===s.status&&parseInt(e.getAttribute("data-existing-id"))===parseInt(s.release_id)?P("valid"):(document.querySelector(".js-release-tag .js-edit-release-link").setAttribute("href",s.url),P(s.status))}function O(e,t,r){return`${t}/releases/${e}/${r}`}function W(e){const t=e.closest("form").querySelector(".js-previewable-comment-form");if(!t)return;let r=t.getAttribute("data-base-preview-url");r||(r=String(t.getAttribute("data-preview-url")),t.setAttribute("data-base-preview-url",r));const o=e.querySelectorAll('input[name="release[tag_name]"], input[name="release[target_commitish]"]:checked'),n=new URL(r,window.location.origin),s=new URLSearchParams(n.search.slice(1));for(const i of o)i.value&&s.append(i.name,i.value);n.search=s.toString(),t.setAttribute("data-preview-url",n.toString())}a("input.js-release-tag-field",{constructor:HTMLInputElement,initialize(e){D(e),e.addEventListener("blur",(function(){D(e)}))}}),c("change",".js-release-tag",(function(e){W(e.currentTarget)})),a(".js-release-form .js-previewable-comment-form",(function(e){W(e.closest("form").querySelector(".js-release-tag"))})),c("auto-check-message-updated",".js-rename-branch-input",(function(e){!function(e){const t=e.closest(".js-rename-branch-form"),r=t.querySelectorAll(".js-rename-branch-new-name");let o=e.value;if(o!==e.defaultValue&&""!==o){const e=t.querySelector(".js-rename-branch-autocheck-message");e&&e.hasAttribute("data-normalized-name")&&(o=e.getAttribute("data-normalized-name"));for(const t of r)t.textContent=o}}(e.currentTarget)})),c("change",".js-template-repository-choice",(function(e){const t=e.target,r=t.checked&&""!==t.value,o=t.form;o.querySelector(".js-repository-auto-init-options").classList.toggle("has-removed-contents",r);const n=o.querySelectorAll(".js-template-repository-setting"),s=o.querySelectorAll(".js-template-repository-name-display");if(r){const e=t.closest(".js-template-repository-choice-container").querySelector(".js-template-repository-name"),r=t.getAttribute("data-owner"),n=o.querySelector(`.js-repository-owner-choice[value="${r}"]`);if(n instanceof HTMLInputElement)n.checked=!0,i(n,"change");else{const e=o.querySelector(".js-repository-owner-choice.js-repository-owner-is-viewer");e.checked=!0,i(e,"change")}for(const t of s)t.textContent=e.textContent}else for(const i of s)i.textContent="";for(const i of n)i.hidden=!r})),b("keydown",".js-tree-finder-field",(e=>{"Escape"===e.key&&(e.preventDefault(),history.back())}));a(".js-tree-finder",(e=>{const t=e.querySelector(".js-tree-finder-field"),r=e.querySelector(".js-tree-browser-results");if(r.childElementCount>0)return;(async e=>{if(!(e instanceof w))return;const t=e.getAttribute("data-url"),r=e.querySelector(".js-tree-browser-result-template"),o=await fetch(t,{headers:{"X-Requested-With":"XMLHttpRequest"}}),{paths:n}=await o.json();e.addLazyItems(n,(e=>{const t=r.content.cloneNode(!0).firstElementChild,o=t.querySelector(".js-tree-browser-result-anchor"),n=o.querySelector(".js-tree-browser-result-path"),s=new URL(o.href,window.location.origin);return s.pathname=`${s.pathname}/${encodeURI(e)}`,o.href=String(s),o.id="entry-"+Math.random().toString().substr(2,5),n.textContent=e,t})),e.sort()})(e);const o=new p(t,r);o.start(),e.addEventListener("fuzzy-list-will-sort",(()=>{o.stop()})),e.addEventListener("fuzzy-list-sorted",(()=>{o.start(),o.navigate()}))}));let U=null;a(".js-pjax-files",(e=>{if(!U)return void(U=window.location.pathname);const t=e.querySelector(`a[href='${U}']`);t&&setTimeout((function(){document.activeElement&&document.activeElement!==document.body||t.focus()}),200),U=window.location.pathname}));let X=null;const $=new WeakMap;function B(e){e.classList.remove("is-progress-bar");const t=e.closest(".js-upload-manifest-file-container");t.querySelector(".js-upload-progress").hidden=!0;t.querySelector(".js-upload-meter-text .js-upload-meter-filename").textContent=""}function N(e){B(e.currentTarget)}function V(e){return e.closest("form").querySelector("#release_id").value}c("file-attachment-accept",".js-upload-manifest-file",(function(e){const{attachments:t}=e.detail,r=parseInt(e.currentTarget.getAttribute("data-directory-upload-max-files")||"",10);t.length>r&&(e.preventDefault(),e.currentTarget.classList.add("is-too-many"))})),c("document:drop",".js-upload-manifest-tree-view",(async function(e){const{transfer:t}=e.detail,r=e.currentTarget,o=await f.traverse(t,!0),n=document.querySelector("#js-repo-pjax-container");n.addEventListener("pjax:success",(()=>{n.querySelector(".js-upload-manifest-file").attach(o)}),{once:!0});const s=r.getAttribute("data-drop-url");k({url:s,container:n})})),c("upload:setup",".js-upload-manifest-file",(async function(e){const{batch:t,form:r,preprocess:o}=e.detail,n=e.currentTarget;function s(){r.append("upload_manifest_id",$.get(n))}if(function(e,t){const r=e.closest(".js-upload-manifest-file-container").querySelector(".js-upload-progress");r.hidden=!1,e.classList.add("is-progress-bar");const o=r.querySelector(".js-upload-meter-text");o.querySelector(".js-upload-meter-range-start").textContent=String(t.uploaded()+1),o.querySelector(".js-upload-meter-range-end").textContent=String(t.size)}(n,t),$.get(n))return void s();if(X)return void o.push(X.then(s));const i=n.closest(".js-upload-manifest-file-container").querySelector(".js-upload-manifest-form");X=fetch(i.action,{method:i.method,body:new FormData(i),headers:{Accept:"application/json"}});const[a,c]=function(){let e;return[new Promise((t=>{e=t})),e]}();o.push(a.then(s));const l=await X;if(!l.ok)return;const d=await l.json();document.querySelector(".js-manifest-commit-form").elements.namedItem("manifest_id").value=d.upload_manifest.id,$.set(n,d.upload_manifest.id),X=null,c()})),c("upload:start",".js-upload-manifest-file",(function(e){const{attachment:t,batch:r}=e.detail,o=e.currentTarget.closest(".js-upload-manifest-file-container").querySelector(".js-upload-progress").querySelector(".js-upload-meter-text");o.querySelector(".js-upload-meter-range-start").textContent=r.uploaded()+1;o.querySelector(".js-upload-meter-filename").textContent=t.fullPath})),c("upload:complete",".js-upload-manifest-file",(function(e){const{attachment:t,batch:r}=e.detail,o=document.querySelector(".js-manifest-commit-file-template").querySelector(".js-manifest-file-entry").cloneNode(!0);o.querySelector(".js-filename").textContent=t.fullPath;const n=t.id;o.querySelector(".js-remove-manifest-file-form").elements.namedItem("file_id").value=n;const s=document.querySelector(".js-manifest-file-list");s.hidden=!1,e.currentTarget.classList.add("is-file-list");s.querySelector(".js-manifest-file-list-root").appendChild(o),r.isFinished()&&B(e.currentTarget)})),c("upload:progress",".js-upload-manifest-file",(function(e){const{batch:t}=e.detail;e.currentTarget.closest(".js-upload-manifest-file-container").querySelector(".js-upload-meter").style.width=t.percent()+"%"})),c("upload:error",".js-upload-manifest-file",N),c("upload:invalid",".js-upload-manifest-file",N),l(".js-remove-manifest-file-form",(async function(e,t){await t.html();const r=e.closest(".js-manifest-file-list-root");if(e.closest(".js-manifest-file-entry").remove(),!r.hasChildNodes()){r.closest(".js-manifest-file-list").hidden=!0;document.querySelector(".js-upload-manifest-file").classList.remove("is-file-list")}})),a(".js-manifest-ready-check",{initialize(e){!async function(e){const t=e.getAttribute("data-redirect-url");try{await L(e.getAttribute("data-poll-url")),window.location.href=t}catch(r){document.querySelector(".js-manifest-ready-check").hidden=!0,document.querySelector(".js-manifest-ready-check-failed").hidden=!1}}(e)}}),c("click",".js-release-remove-file",(function(e){const t=e.currentTarget.closest(".js-release-file");t.classList.add("delete"),t.querySelector("input.destroy").value="true"})),c("click",".js-release-undo-remove-file",(function(e){const t=e.currentTarget.closest(".js-release-file");t.classList.remove("delete"),t.querySelector("input.destroy").value=""}));let G=null;function J(e,t){t.append("release_id",V(e));const r=Array.from(document.querySelectorAll(".js-releases-field .js-release-file.delete .id"));if(r.length){const e=r.map((e=>e.value));t.append("deletion_candidates",e.join(","))}}c("release:saved",".js-release-form",(function(e){const t=e.currentTarget;G=null;let r=!1;for(const n of t.querySelectorAll(".js-releases-field .js-release-file"))n.classList.contains("delete")?n.remove():n.classList.contains("js-template")||(r=!0);const o=t.querySelector(".js-releases-field");o.classList.toggle("not-populated",!r),o.classList.toggle("is-populated",r)})),c("upload:setup",".js-upload-release-file",(function(e){const{form:t,preprocess:r}=e.detail,o=e.currentTarget;if(V(o))return void J(o,t);if(!G){const e=document.querySelector(".js-save-draft");G=R(e)}const n=J.bind(null,o,t);r.push(G.then(n))})),c("upload:start",".js-upload-release-file",(function(e){const t=e.detail.policy;e.currentTarget.querySelector(".js-upload-meter").classList.remove("d-none");const r=t.asset.replaced_asset;if(r)for(const o of document.querySelectorAll(".js-releases-field .js-release-file .id"))Number(o.value)===r&&o.closest(".js-release-file").remove()})),c("upload:complete",".js-upload-release-file",(function(e){const{attachment:t}=e.detail,r=document.querySelector(".js-releases-field"),o=r.querySelector(".js-template").cloneNode(!0);o.classList.remove("d-none","js-template"),o.querySelector("input.id").value=t.id;const n=t.name||t.href.split("/").pop();for(const i of o.querySelectorAll(".js-release-asset-filename"))i instanceof HTMLInputElement?i.value=n:i.textContent=n;const s=`(${(t.file.size/1048576).toFixed(2)} MB)`;o.querySelector(".js-release-asset-filesize").textContent=s,r.appendChild(o),r.classList.remove("not-populated"),r.classList.add("is-populated");e.currentTarget.querySelector(".js-upload-meter").classList.add("d-none")})),c("upload:progress",".js-upload-release-file",(function(e){const{attachment:t}=e.detail;e.currentTarget.querySelector(".js-upload-meter").style.width=t.percent+"%"}));let K=class RepoCodespacesCountElement extends HTMLElement{constructor(){super(...arguments),this.count=0}connectedCallback(){a("get-repo",{constructor:T,add:e=>{this.handleGetRepoElement(e)}})}handleGetRepoElement(e){e.openOrCreateInCodespace&&(0===this.count?e.showOpenOrCreateInCodespace():e.removeOpenOrCreateInCodespace())}};e([h],K.prototype,"count",void 0),K=e([n],K)}}}));
//# sourceMappingURL=repositories-5894f689.js.map

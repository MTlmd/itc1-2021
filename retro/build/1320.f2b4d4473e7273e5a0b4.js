(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[1320],{61320:(e,t,n)=>{"use strict";n.r(t),n.d(t,{savingStatusPlugin:()=>w,pathStatusPlugin:()=>b,downloadPlugin:()=>f,openBrowserTabPlugin:()=>y,default:()=>x});var o,a=n(88647),r=n(19573),i=n(87939),d=n(70381),l=n(23127),c=n(94257),s=n(44588),u=n(34016),m=n(17179),g=n(79028),p=n(66065),v=n(77031);!function(e){e.clone="docmanager:clone",e.deleteFile="docmanager:delete-file",e.newUntitled="docmanager:new-untitled",e.open="docmanager:open",e.openBrowserTab="docmanager:open-browser-tab",e.reload="docmanager:reload",e.rename="docmanager:rename",e.nameOnSave="docmanager:name-on-save",e.del="docmanager:delete",e.restoreCheckpoint="docmanager:restore-checkpoint",e.save="docmanager:save",e.saveAll="docmanager:save-all",e.saveAs="docmanager:save-as",e.download="docmanager:download",e.toggleAutosave="docmanager:toggle-autosave",e.toggleNameFileOnSave="docmanager:toggle-name-file-on-save",e.showInFileBrowser="docmanager:show-in-file-browser"}(o||(o={}));const h="@jupyterlab/docmanager-extension:plugin",_={id:h,provides:d.IDocumentManager,requires:[s.ISettingRegistry,m.ITranslator],optional:[a.ILabStatus,r.ICommandPalette,a.ILabShell,c.IMainMenu,r.ISessionContextDialogs,l.IDocumentProviderFactory],activate:(e,t,n,a,i,l,c,s,u)=>{var m;const v=n.load("jupyterlab"),_=e.serviceManager,w=new WeakSet,b={open:(t,n)=>{t.id||(t.id="document-manager-"+ ++D.id),t.title.dataset=Object.assign({type:"document-title"},t.title.dataset),t.isAttached||e.shell.add(t,"main",n||{}),e.shell.activateById(t.id);const o=x.contextForWidget(t);o&&!w.has(o)&&(a&&function(e,t){let n=null;const o=(t,o)=>{"dirty"===o.name&&(!0===o.newValue?n||(n=e.setDirty()):n&&(n.dispose(),n=null))};t.ready.then((()=>{t.model.stateChanged.connect(o),t.model.dirty&&(n=e.setDirty())})),t.disposed.connect((()=>{n&&n.dispose()}))}(a,o),w.add(o))}},f=e.docRegistry,y=e.restored.then((()=>{})),x=new d.DocumentManager({registry:f,manager:_,opener:b,when:y,setBusy:null!==(m=a&&(()=>a.setBusy()))&&void 0!==m?m:void 0,sessionDialogs:s||void 0,translator:n,collaborative:!0,docProviderFactory:null!=u?u:void 0});!function(e,t,n,a,i,l,c,s){const u=i.load("jupyterlab"),{commands:m,shell:p}=e,v=u.__("File Operations"),_=()=>{const{currentWidget:e}=p;return!(!e||!t.contextForWidget(e))};l&&function(e,t,n,a,i,l){const c=i.load("jupyterlab"),{commands:s}=e,u=()=>{var o;const a=/[Pp]ath:\s?(.*)\n?/,r=e.contextMenuHitTest((e=>{var t;return!!(null===(t=e.title)||void 0===t?void 0:t.match(a))})),i=null==r?void 0:r.title.match(a);return null!==(o=i&&t.findWidget(i[1],null))&&void 0!==o?o:n.currentWidget},m=()=>{const{currentWidget:e}=n;return!(!e||!t.contextForWidget(e))};s.addCommand(o.clone,{label:()=>c.__("New View for %1",F(u(),t)),isEnabled:m,execute:e=>{const n=u(),o=e.options||{mode:"split-right"};if(!n)return;const r=t.cloneWidget(n);r&&a.open(r,o)}}),s.addCommand(o.rename,{label:()=>{let e=F(u(),t);return e&&(e=" "+e),c.__("Rename%1…",e)},isEnabled:m,execute:()=>{if(m()){const e=t.contextForWidget(u());return(0,d.renameDialog)(t,e.path)}}}),s.addCommand(o.nameOnSave,{label:()=>c.__("Rename %1…",F(u(),t)),isEnabled:m,execute:()=>{if(m()){const e=t.contextForWidget(u());return(0,d.nameOnSaveDialog)(t,e)}}}),s.addCommand(o.del,{label:()=>c.__("Delete %1",F(u(),t)),isEnabled:m,execute:async()=>{if(m()){const n=t.contextForWidget(u());if(!n)return;(await(0,r.showDialog)({title:c.__("Delete"),body:c.__("Are you sure you want to delete %1",n.path),buttons:[r.Dialog.cancelButton({label:c.__("Cancel")}),r.Dialog.warnButton({label:c.__("Delete")})]})).button.accept&&await e.commands.execute("docmanager:delete-file",{path:n.path})}}}),s.addCommand(o.showInFileBrowser,{label:()=>c.__("Show in File Browser"),isEnabled:m,execute:async()=>{const e=u(),n=e&&t.contextForWidget(e);n&&(await s.execute("filebrowser:activate",{path:n.path}),await s.execute("filebrowser:go-to-path",{path:n.path}))}}),e.contextMenu.addItem({command:o.rename,selector:'[data-type="document-title"]',rank:1}),e.contextMenu.addItem({command:o.del,selector:'[data-type="document-title"]',rank:2}),e.contextMenu.addItem({command:o.clone,selector:'[data-type="document-title"]',rank:3}),e.contextMenu.addItem({command:o.showInFileBrowser,selector:'[data-type="document-title"]',rank:4})}(e,t,l,n,i),m.addCommand(o.deleteFile,{label:()=>`Delete ${F(p.currentWidget,t)}`,execute:e=>{const n=void 0===e.path?"":e.path;if(!n){const e=o.deleteFile;throw new Error(`A non-empty path is required for ${e}.`)}return t.deleteFile(n)}}),m.addCommand(o.newUntitled,{execute:e=>{const n=e.error||u.__("Error"),o=void 0===e.path?"":e.path,a={type:e.type,path:o};return"file"===e.type&&(a.ext=e.ext||".txt"),t.services.contents.newUntitled(a).catch((e=>(0,r.showErrorMessage)(n,e)))},label:e=>e.label||`New ${e.type}`}),m.addCommand(o.open,{execute:e=>{const n=void 0===e.path?"":e.path,o=e.factory||void 0,a=null==e?void 0:e.kernel,r=e.options||void 0;return t.services.contents.get(n,{content:!1}).then((()=>t.openOrReveal(n,o,a,r)))},icon:e=>e.icon||"",label:e=>e.label||e.factory,mnemonic:e=>e.mnemonic||-1}),m.addCommand(o.reload,{label:()=>u.__("Reload %1 from Disk",F(p.currentWidget,t)),caption:u.__("Reload contents from disk"),isEnabled:_,execute:()=>{if(!_())return;const e=t.contextForWidget(p.currentWidget),n=F(p.currentWidget,t);return e?e.model.dirty?(0,r.showDialog)({title:u.__("Reload %1 from Disk",n),body:u.__("Are you sure you want to reload the %1 from the disk?",n),buttons:[r.Dialog.cancelButton({label:u.__("Cancel")}),r.Dialog.warnButton({label:u.__("Reload")})]}).then((t=>{if(t.button.accept&&!e.isDisposed)return e.revert()})):e.isDisposed?void 0:e.revert():(0,r.showDialog)({title:u.__("Cannot Reload"),body:u.__("No context found for current widget!"),buttons:[r.Dialog.okButton({label:u.__("Ok")})]})}}),m.addCommand(o.restoreCheckpoint,{label:()=>u.__("Revert %1 to Checkpoint",F(p.currentWidget,t)),caption:u.__("Revert contents to previous checkpoint"),isEnabled:_,execute:()=>{if(!_())return;const e=t.contextForWidget(p.currentWidget);return e?e.listCheckpoints().then((n=>{if(n.length<1)return;const o=n[n.length-1];if(!o)return;const a=F(p.currentWidget,t);return(0,r.showDialog)({title:u.__("Revert %1 to checkpoint",a),body:new C(o,u,a),buttons:[r.Dialog.cancelButton({label:u.__("Cancel")}),r.Dialog.warnButton({label:u.__("Revert")})]}).then((t=>{if(!e.isDisposed)return t.button.accept?e.model.readOnly?e.revert():e.restoreCheckpoint().then((()=>e.revert())):void 0}))})):(0,r.showDialog)({title:u.__("Cannot Revert"),body:u.__("No context found for current widget!"),buttons:[r.Dialog.okButton({label:u.__("Ok")})]})}}),m.addCommand(o.save,{label:()=>u.__("Save %1",F(p.currentWidget,t)),caption:u.__("Save and create checkpoint"),isEnabled:()=>{const{currentWidget:e}=p;if(!e)return!1;const n=t.contextForWidget(e);return!!(n&&n.contentsModel&&n.contentsModel.writable)},execute:()=>{if(_()){const e=t.contextForWidget(p.currentWidget);return e?e.model.readOnly?(0,r.showDialog)({title:u.__("Cannot Save"),body:u.__("Document is read-only"),buttons:[r.Dialog.okButton({label:u.__("Ok")})]}):e.save(!0).then((()=>e.createCheckpoint())).catch((e=>{if("Cancel"!==e.message)throw e})):(0,r.showDialog)({title:u.__("Cannot Save"),body:u.__("No context found for current widget!"),buttons:[r.Dialog.okButton({label:u.__("Ok")})]})}}}),m.addCommand(o.saveAll,{label:()=>u.__("Save All"),caption:u.__("Save all open documents"),isEnabled:()=>(0,g.some)((0,g.map)(p.widgets("main"),(e=>t.contextForWidget(e))),(e=>{var t,n;return null!==(n=null===(t=null==e?void 0:e.contentsModel)||void 0===t?void 0:t.writable)&&void 0!==n&&n})),execute:()=>{const e=[],n=new Set;return(0,g.each)(p.widgets("main"),(o=>{const a=t.contextForWidget(o);!a||a.model.readOnly||n.has(a.path)||(n.add(a.path),e.push(a.save()))})),Promise.all(e)}}),m.addCommand(o.saveAs,{label:()=>u.__("Save %1 As…",F(p.currentWidget,t)),caption:u.__("Save with new path"),isEnabled:_,execute:()=>{if(_()){const e=t.contextForWidget(p.currentWidget);return e?e.saveAs():(0,r.showDialog)({title:u.__("Cannot Save"),body:u.__("No context found for current widget!"),buttons:[r.Dialog.okButton({label:u.__("Ok")})]})}}}),m.addCommand(o.toggleAutosave,{label:u.__("Autosave Documents"),isToggled:()=>t.autosave,execute:()=>{const e=!t.autosave,n="autosave";return a.set(h,n,e).catch((e=>{console.error(`Failed to set ${h}:${n} - ${e.message}`)}))}}),m.addCommand(o.toggleNameFileOnSave,{label:u.__("Name File on First Save"),isToggled:()=>t.nameFileOnSave,execute:()=>{const e=!t.nameFileOnSave,n="nameFileOnSave";return a.set(h,n,e).catch((e=>{console.error(`Failed to set ${h}:${n} - ${e.message}`)}))}}),t.optionChanged.connect((()=>{var e;const n="nameFileOnSave",o=null===(e=a.plugins[h])||void 0===e?void 0:e.data.user[n];o==t.nameFileOnSave&&a.set(h,n,!o).catch((e=>{console.error(`Failed to set ${h}:${n} - ${e.message}`)}))})),t.activateRequested.connect(((e,t)=>{const n=e.findWidget(t);n&&n.shouldNameFile&&n.shouldNameFile.connect((()=>{if(e.nameFileOnSave&&n==p.currentWidget){const t=e.contextForWidget(n);return(0,d.nameOnSaveDialog)(e,t)}}))})),e.contextMenu.addItem({command:"filemenu:create-console",selector:'[data-type="document-title"].jp-mod-current',rank:6}),c&&[o.reload,o.restoreCheckpoint,o.save,o.saveAs,o.toggleAutosave].forEach((e=>{c.addItem({command:e,category:v})})),s&&s.settingsMenu.addGroup([{command:o.toggleAutosave},{command:o.toggleNameFileOnSave}],5)}(e,x,b,t,n,l,i,c);const S=t=>{const n=t.get("autosave").composite;x.autosave=!0!==n&&!1!==n||n,e.commands.notifyCommandChanged(o.toggleAutosave);const a=t.get("autosaveInterval").composite;x.autosaveInterval=a||120;const r=t.get("nameFileOnSave").composite;x.nameFileOnSave!=r&&(x.nameFileOnSave=r,e.commands.notifyCommandChanged(o.nameOnSave));const i=t.get("defaultViewers").composite,d={};Object.keys(i).forEach((e=>{f.getFileType(e)?(f.getWidgetFactory(i[e])||console.warn(`Document viewer ${i[e]} not found`),d[e]=i[e]):console.warn(`File Type ${e} not found`)})),(0,g.each)(f.fileTypes(),(e=>{try{f.setDefaultWidgetFactory(e.name,d[e.name])}catch(t){console.warn(`Failed to set default viewer ${d[e.name]} for file type ${e.name}`)}}))};return Promise.all([t.load(h),e.restored]).then((([e])=>{e.changed.connect(S),S(e)})).catch((e=>{console.error(e.message)})),t.transform(h,{fetch:e=>{const t=(0,g.toArray)(f.fileTypes()).map((e=>e.name)).join("    \n"),n=(0,g.toArray)(f.widgetFactories()).map((e=>e.name)).join("    \n"),o=v.__('Overrides for the default viewers for file types.\nSpecify a mapping from file type name to document viewer name, for example:\n\ndefaultViewers: {\n  markdown: "Markdown Preview"\n}\n\nIf you specify non-existent file types or viewers, or if a viewer cannot\nopen a given file type, the override will not function.\n\nAvailable viewers:\n%1\n\nAvailable file types:\n%2',n,t),a=p.JSONExt.deepCopy(e.schema);return a.properties.defaultViewers.description=o,Object.assign(Object.assign({},e),{schema:a})}}),f.changed.connect((()=>t.reload(h))),x}},w={id:"@jupyterlab/docmanager-extension:saving-status",autoStart:!0,requires:[d.IDocumentManager,a.ILabShell,m.ITranslator],optional:[u.IStatusBar],activate:(e,t,n,o,a)=>{if(!a)return;const r=new d.SavingStatus({docManager:t,translator:o});r.model.widget=n.currentWidget,n.currentChanged.connect((()=>{r.model.widget=n.currentWidget})),a.registerStatusItem(w.id,{item:r,align:"middle",isActive:()=>!0,activeStateChanged:r.model.stateChanged})}},b={id:"@jupyterlab/docmanager-extension:path-status",autoStart:!0,requires:[d.IDocumentManager,a.ILabShell],optional:[u.IStatusBar],activate:(e,t,n,o)=>{if(!o)return;const a=new d.PathStatus({docManager:t});a.model.widget=n.currentWidget,n.currentChanged.connect((()=>{a.model.widget=n.currentWidget})),o.registerStatusItem(b.id,{item:a,align:"right",rank:0,isActive:()=>!0})}},f={id:"@jupyterlab/docmanager-extension:download",autoStart:!0,requires:[m.ITranslator,d.IDocumentManager],optional:[r.ICommandPalette,c.IMainMenu],activate:(e,t,n,a,i)=>{const d=t.load("jupyterlab"),{commands:l,shell:c}=e,s=()=>{const{currentWidget:e}=c;return!(!e||!n.contextForWidget(e))};l.addCommand(o.download,{label:d.__("Download"),caption:d.__("Download the file to your computer"),isEnabled:s,execute:()=>{if(s()){const e=n.contextForWidget(c.currentWidget);return e?e.download():(0,r.showDialog)({title:d.__("Cannot Download"),body:d.__("No context found for current widget!"),buttons:[r.Dialog.okButton({label:d.__("OK")})]})}}});const u=d.__("File Operations");a&&a.addItem({command:o.download,category:u}),i&&i.fileMenu.addGroup([{command:o.download}],6)}},y={id:"@jupyterlab/docmanager-extension:open-browser-tab",autoStart:!0,requires:[m.ITranslator,d.IDocumentManager],activate:(e,t,n)=>{const a=t.load("jupyterlab"),{commands:r}=e;r.addCommand(o.openBrowserTab,{execute:e=>{const t=void 0===e.path?"":e.path;if(t)return n.services.contents.getDownloadUrl(t).then((e=>{const t=window.open();if(!t)throw new Error("Failed to open new browser tab.");t.opener=null,t.location.href=e}))},icon:e=>e.icon||"",label:()=>a.__("Open in New Browser Tab")})}},x=[_,b,w,f,y];class C extends v.Widget{constructor(e,t,n="notebook"){super({node:D.createRevertConfirmNode(e,n,t)})}}function F(e,t){if(!e)return"File";const n=t.contextForWidget(e);if(!n)return"";const o=t.registry.getFileTypesForPath(n.path);return o.length&&o[0].displayName?o[0].displayName:"File"}var D;!function(e){e.id=0,e.createRevertConfirmNode=function(e,t,n){const o=document.createElement("div"),a=document.createElement("p"),r=document.createTextNode(n.__("Are you sure you want to revert the %1 to the latest checkpoint? ",t)),d=document.createElement("strong");d.textContent=n.__("This cannot be undone."),a.appendChild(r),a.appendChild(d);const l=document.createElement("p"),c=document.createTextNode(n.__("The checkpoint was last updated at: ")),s=document.createElement("p"),u=new Date(e.last_modified);return s.style.textAlign="center",s.textContent=i.Time.format(u,"dddd, MMMM Do YYYY, h:mm:ss a")+" ("+i.Time.formatHuman(u)+")",l.appendChild(c),l.appendChild(s),o.appendChild(a),o.appendChild(l),o}}(D||(D={}))}}]);
//# sourceMappingURL=1320.f2b4d4473e7273e5a0b4.js.map
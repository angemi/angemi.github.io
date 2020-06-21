(this["webpackJsonpgrapher-web"]=this["webpackJsonpgrapher-web"]||[]).push([[0],{134:function(e,t,a){e.exports=a(177)},171:function(e,t,a){},172:function(e,t,a){},173:function(e,t,a){},174:function(e,t,a){},177:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(10),o=a.n(r),l=a(41),i=a(221),u=a(224),d=a(226),s=a(59),p=a(228),E=a(227),h=a(115),m=a.n(h),f=a(114),b=a.n(f),O=Object(i.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),g=function(){var e=O();return c.a.createElement(u.a,{position:"relative"},c.a.createElement(d.a,null,c.a.createElement(E.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},c.a.createElement(b.a,null)),c.a.createElement(s.a,{align:"center",variant:"h6",className:e.title},"Grapher",c.a.createElement(m.a,{style:{marginLeft:"5px"}})),c.a.createElement(p.a,{color:"inherit"},"Login")))},j=a(4),_=a(25),k=a(14),N=a(243),y=a(234),v=a(244),D=a(240),C=a(236),L=a(235),w=a(233),T=a(246),G=a(119),A=a(239),I=a(245),R=a(241),P=a(22),S=function(e){var t=Object(l.c)();return Object.entries(e).reduce((function(e,a){var n=Object(k.a)(a,2),c=n[0],r=n[1];return Object(j.a)(Object(j.a)({},e),{},Object(P.a)({},c,(function(){return t(r.apply(void 0,arguments))})))}),{})},W=["INPUT","TEXTAREA"],F=function(e,t){switch(t.type){case"set-key-down":return Object(j.a)(Object(j.a)({},e),{},Object(P.a)({},t.key,!0));case"set-key-up":return Object(j.a)(Object(j.a)({},e),{},Object(P.a)({},t.key,!1));default:return e}},U=function(e,t){if(!Array.isArray(e)||!e.length)throw new Error("The first parameter to `useKeyboardShortcut` must be an array containing at least one `KeyboardEvent.key` string.");if(!t||"function"!==typeof t)throw new Error("The second parameter to `useKeyboardShortcut` must be a function that will be invoked when the keys are pressed.");var a=e.reduce((function(e,t){return Object(j.a)(Object(j.a)({},e),{},Object(P.a)({},t,!1))}),{}),c=Object(n.useReducer)(F,a),r=Object(k.a)(c,2),o=r[0],l=r[1],i=Object(n.useCallback)((function(t){var a=t.key,n=t.target;t.repeat||W.includes(n.tagName)||e.includes(a)&&(o[a]||l({type:"set-key-down",key:a}))}),[e,o]),u=Object(n.useCallback)((function(t){var a=t.key,n=t.target;W.includes(n.tagName)||e.includes(a)&&o[a]&&l({type:"set-key-up",key:a})}),[e,o]);Object(n.useEffect)((function(){return window.addEventListener("keydown",i,!0),function(){return window.removeEventListener("keydown",i,!0)}}),[i]),Object(n.useEffect)((function(){return window.addEventListener("keyup",u,!0),function(){return window.removeEventListener("keyup",u,!0)}}),[u]),Object(n.useEffect)((function(){Object.values(o).filter((function(e){return!e})).length||t(o)}),[t,o])},X=a(58),B=a.n(X),J=function(e,t,a){var n=B.a.post(e,a);return function(e){return e({type:"".concat(t,"_PENDING")}),n.then((function(a){var n=a.data;e({type:"".concat(t,"_FULFILLED"),payload:n})})).catch((function(a){e({type:"".concat(t,"_REJECTED"),payload:a.message})}))}},Y="https://grapher-app.herokuapp.com/graphs/nodes",H=function(){return function(e,t){var a=B.a.get(e,{});return function(e){return e({type:"".concat(t,"_PENDING")}),a.then((function(a){var n=a.data;e({type:"".concat(t,"_FULFILLED"),payload:n})})).catch((function(a){e({type:"".concat(t,"_REJECTED"),payload:a.message})}))}}("https://grapher-app.herokuapp.com/graphs?space=20","FETCH_GRAPH_DATA")},x=function(e){return J(Y,"CREATE_NODE",e)},K=function(e){return function(e,t,a){var n=B.a.put(e,a);return function(e){return e({type:"".concat(t,"_PENDING")}),n.then((function(a){var n=a.data;e({type:"".concat(t,"_PENDING"),payload:n})})).catch((function(a){e({type:"".concat(t,"_REJECTED"),payload:a.message})}))}}("".concat(Y,"/").concat(e.id),"UPDATE_NODE",e)},M=function(e){return function(e,t,a){var n=B.a.delete(e,Object(j.a)(Object(j.a)({},{}),a&&Object.keys(a).length>0?{data:a}:{}));return function(e){return e({type:"".concat(t,"_PENDING"),payload:a}),n.then((function(a){var n=a.data;e({type:"".concat(t,"_FULFILLED"),payload:n})})).catch((function(a){e({type:"".concat(t,"_REJECTED"),payload:a.message})}))}}("".concat(Y,"/").concat(e),"DELETE_NODE")},z=function(e){return J("https://grapher-app.herokuapp.com/graphs/links","ADD_LINK",e)},V=a(116),Z=function(e){var t=e.selectedGraph,a=e.graphConfig,n=e.onRightClickNode,r=e.onRightClickLink;return c.a.createElement(V.Graph,{id:"graph",className:"Workspace__Graph",data:t,config:a,onRightClickNode:n,onRightClickLink:r})};Z.defaultProps={selectedGraph:{nodes:[],edges:[]},graphConfig:{labelProperty:"name"}};var $=Z,q=a(231),Q=a(179),ee=a(232),te=a(230),ae=(a(171),function(e){var t=e.orphans,a=e.handleOpenDialog,n=e.onRightClickNode;return c.a.createElement("div",{className:"Orphanage"},c.a.createElement("div",{className:"Orphanage__actions"},c.a.createElement(p.a,{className:"Orphanage__button",onClick:a,color:"primary",variant:"contained",size:"large"},"Add node")),c.a.createElement("div",{className:"Orphanage__wrapper"},c.a.createElement(s.a,{className:"Orphanage__title",variant:"h6",noWrap:!0},"Orphanage"),c.a.createElement(te.a,{className:"Orphanage__divider"}),c.a.createElement(q.a,null,(t||[]).map((function(e){var t=e.id,a=e.name;return c.a.createElement("div",{key:t,onContextMenu:function(e){return n(e,t)}},c.a.createElement(Q.a,{button:!0},c.a.createElement(ee.a,{primary:a})))})))))});ae.defaultProps={orphans:[]};var ne=ae,ce=(a(172),{automaticRearrangeAfterDropNode:!0,minZoom:1,node:{labelProperty:"name",color:"#d3d3d3",fontColor:"black",fontSize:8,fontWeight:"normal",highlightColor:"SAME",highlightFontSize:8,highlightFontWeight:"normal",highlightStrokeColor:"SAME",highlightStrokeWidth:"SAME",mouseCursor:"pointer",opacity:1,size:500,strokeColor:"none",strokeWidth:1.5,symbolType:"circle"}}),re={mouseX:null,mouseY:null},oe=function(){var e=S({getGraphData:H,createNode:x,updateNode:K,deleteNode:M,addLink:z}),t=e.getGraphData,a=e.createNode,r=e.updateNode,o=e.deleteNode,i=e.addLink,u=Object(l.d)((function(e){var t=e.workspaceReducer;return{selectedGraph:t.selectedGraph,orphans:t.orphans,nodesByIds:t.nodesByIds,fetching:t.fetching}}),l.b),d=u.selectedGraph,E=u.orphans,h=u.nodesByIds,m=u.fetching,f=Object(n.useState)(!1),b=Object(k.a)(f,2),O=b[0],g=b[1],P=Object(n.useState)(!1),W=Object(k.a)(P,2),F=W[0],X=W[1],B=Object(n.useState)(!1),J=Object(k.a)(B,2),Y=J[0],V=J[1],Z=Object(n.useState)(!1),q=Object(k.a)(Z,2),Q=q[0],ee=q[1],te=Object(n.useState)(""),ae=Object(k.a)(te,2),oe=ae[0],le=ae[1],ie=Object(n.useState)(""),ue=Object(k.a)(ie,2),de=ue[0],se=ue[1],pe=Object(n.useState)(""),Ee=Object(k.a)(pe,2),he=Ee[0],me=Ee[1],fe=Object(n.useState)(re),be=Object(k.a)(fe,2),Oe=be[0],ge=be[1],je=Object(n.useState)(re),_e=Object(k.a)(je,2),ke=_e[0],Ne=_e[1],ye=Object(n.useState)(null),ve=Object(k.a)(ye,2),De=ve[0],Ce=ve[1],Le=Object(n.useState)(null),we=Object(k.a)(Le,2),Te=we[0],Ge=we[1],Ae=(d||{}).nodes,Ie=void 0===Ae?[]:Ae,Re=Object(n.useCallback)(t,[]);Object(n.useEffect)((function(){Re()}),[Re]);var Pe=function(){return g(!0)},Se=function(){g(!1),se("")},We=function(){X(!1),se(""),Ce(null)},Fe=function(){V(!1),me(""),Ce(null)},Ue=function(){ee(!1),Ce("")};U(["Shift","N"],(function(){O||Pe()}));var Xe,Be,Je=function(e){e.preventDefault();var t=e.target.value;se(t)},Ye=function(e,t){e.preventDefault(),Ce(t),ge({mouseX:e.clientX,mouseY:e.clientY})};return c.a.createElement(w.a,{container:!0,className:"Workspace",spacing:0},c.a.createElement(w.a,{item:!0,xs:9},c.a.createElement(y.a,{id:"Workspace__Graph-wrapper",className:"Workspace__Graph-wrapper",fixed:!0},d&&c.a.createElement($,{selectedGraph:d,graphConfig:Object(j.a)(Object(j.a)({},ce),{},{width:document.getElementById("Workspace__Graph-wrapper").offsetWidth,height:document.getElementById("Workspace__Graph-wrapper").offsetHeight}),onRightClickNode:Ye,onRightClickLink:function(e,t){e.preventDefault(),Ge(t),Ne({mouseX:e.clientX,mouseY:e.clientY})}})),c.a.createElement(v.a,{open:Q,onClose:Ue,"aria-labelledby":"form-dialog-title"},c.a.createElement(L.a,{id:"form-dialog-title"},"Create new link"),c.a.createElement(C.a,null,c.a.createElement(T.a,{id:"Workspace__source-node-select"},"Source node: "),c.a.createElement(R.a,{labelId:"Workspace__source-node-select",className:"Workspace__add-link-select",value:De,disabled:!0},[].concat(Object(_.a)(Ie),Object(_.a)(E||[])).map((function(e){var t=e.id,a=e.name;return c.a.createElement(A.a,{key:t,value:t},a)}))),c.a.createElement(T.a,{id:"Workspace__target-node-select"},"Target node: "),c.a.createElement(R.a,{className:"Workspace__add-link-select",labelId:"Workspace__target-node-select",value:oe,onChange:function(e){var t=e.target.value;le(t)}},(Xe=Ie,Be=De,Xe.filter((function(e){return e.id!==Be}))).map((function(e){var t=e.id,a=e.name;return c.a.createElement(A.a,{key:t,value:t},a)})))),c.a.createElement(D.a,null,c.a.createElement(p.a,{onClick:function(){var e=Object(N.a)();i({id:e,source:De,target:oe,properties:{space:"20",type:"API"}}).then((function(){Re(),le(""),Ce(""),Ue()}))},color:"primary",disabled:!oe||m.addLink},"Add link"),c.a.createElement(p.a,{onClick:Ue},"Cancel"))),c.a.createElement(v.a,{open:O,onClose:Se,"aria-labelledby":"form-dialog-title"},c.a.createElement(L.a,{id:"form-dialog-title"},"Create new node"),c.a.createElement(C.a,null,c.a.createElement(I.a,{margin:"dense",id:"name",label:"Node name",fullWidth:!0,onChange:Je})),c.a.createElement(D.a,null,c.a.createElement(p.a,{onClick:function(){a({properties:{name:de,space:"20"}}).then((function(){Re(),se(""),Se()}))},color:"primary",disabled:!de||m.createNode},"Add node"),c.a.createElement(p.a,{onClick:Se},"Cancel"))),c.a.createElement(v.a,{open:F,onClose:Se,"aria-labelledby":"form-dialog-title"},c.a.createElement(L.a,{id:"form-dialog-title"},"Edit node"),c.a.createElement(C.a,null,c.a.createElement(I.a,{margin:"dense",id:"name",label:"Node name",value:de,fullWidth:!0,onChange:Je})),c.a.createElement(D.a,null,c.a.createElement(p.a,{onClick:function(){var e=d.nodes,t=[].concat(Object(_.a)(e),Object(_.a)(E)).find((function(e){return e.id===De})),a=t.id,n=t.properties,c={id:a,properties:Object(j.a)(Object(j.a)({},n),{},{name:de})};r(c).then((function(){Re(),We()}))},color:"primary",disabled:!de||m.updateNode},"Update"),c.a.createElement(p.a,{onClick:We},"Cancel"))),c.a.createElement(v.a,{open:Y,onClose:Fe,"aria-labelledby":"form-dialog-title"},c.a.createElement(L.a,{id:"form-dialog-title"},"Delete node"),c.a.createElement(C.a,null,c.a.createElement(s.a,{variant:"body1"},"Do you want to delete node ",c.a.createElement("strong",null,he),"?")),c.a.createElement(D.a,null,c.a.createElement(p.a,{onClick:function(){o(De).then((function(){Re(),Fe()}))},color:"primary"},"Delete"),c.a.createElement(p.a,{onClick:Fe},"Cancel")))),c.a.createElement(w.a,{className:"Workspace__Graph-wrapper",item:!0,xs:3},c.a.createElement(ne,{orphans:E,handleOpenDialog:Pe,onRightClickNode:Ye})),c.a.createElement(G.a,{keepMounted:!0,open:null!==Oe.mouseY,onClose:function(){ge(re),Ce(null)},anchorReference:"anchorPosition",anchorPosition:null!==Oe.mouseY&&null!==Oe.mouseX?{top:Oe.mouseY,left:Oe.mouseX}:void 0},c.a.createElement(A.a,{onClick:function(){ge(re),ee(!0)}},"Add Link"),c.a.createElement(A.a,{onClick:function(){var e=h[De].name;ge(re),se(e),X(!0)}},"Edit node"),c.a.createElement(A.a,{onClick:function(){var e=d.nodes,t=[].concat(Object(_.a)(e),Object(_.a)(E)).find((function(e){return e.id===De})).name;me(t),ge(re),V(!0)}},"Delete node")),c.a.createElement(G.a,{keepMounted:!0,open:null!==ke.mouseY,onClose:function(){Ne(re),Ge(null)},anchorReference:"anchorPosition",anchorPosition:null!==ke.mouseY&&null!==ke.mouseX?{top:ke.mouseY,left:ke.mouseX}:void 0},c.a.createElement(A.a,{onClick:function(){console.log("id",Te)}},"Delete Link")))};a(173);var le=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(g,null),c.a.createElement(oe,null))},ie=a(32),ue=a(118),de=a(120),se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(j.a)(Object(j.a)({},e),{},{name:e.properties.name})}))},pe={fetching:{selectedGraph:!1,createNode:!1,updateNode:!1,deleteNode:!1,addLink:!1},selectedGraph:null,orphans:null,displayedGraph:null,nodesByIds:null},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"".concat("FETCH_GRAPH_DATA","_PENDING"):return Object(j.a)(Object(j.a)({},e),{},{fetching:Object(j.a)(Object(j.a)({},e.fetching),{},{selectedGraph:!0})});case"".concat("FETCH_GRAPH_DATA","_FULFILLED"):var a=t.payload,n=a.orphans,c=Object(de.a)(a,["orphans"]),r=c.nodes,o=se(r),l=se(n),i=Object(j.a)(Object(j.a)({},c),{},{nodes:o,focusedNodeId:""}),u=[].concat(Object(_.a)(o),Object(_.a)(l)).reduce((function(e,t){return Object(j.a)(Object(j.a)({},e),{},Object(P.a)({},t.id,Object(j.a)({},t)))}),{});return Object(j.a)(Object(j.a)({},e),{},{selectedGraph:i,orphans:l,nodesByIds:u,fetching:Object(j.a)(Object(j.a)({},e.fetching),{},{selectedGraph:!1})});case"".concat("FETCH_GRAPH_DATA","_REJECTED"):return Object(j.a)(Object(j.a)({},e),{},{fetching:Object(j.a)(Object(j.a)({},e.fetching),{},{selectedGraph:!1})});case"".concat("CREATE_NODE","_PENDING"):return Object(j.a)(Object(j.a)({},e),{},{fetching:Object(j.a)(Object(j.a)({},e.fetching),{},{createNode:!0})});case"".concat("CREATE_NODE","_FULFILLED"):case"".concat("CREATE_NODE","_REJECTED"):return Object(j.a)(Object(j.a)({},e),{},{fetching:Object(j.a)(Object(j.a)({},e.fetching),{},{createNode:!1})});case"".concat("UPDATE_NODE","_PENDING"):return Object(j.a)(Object(j.a)({},e),{},{fetching:Object(j.a)(Object(j.a)({},e.fetching),{},{updateNode:!0})});case"".concat("UPDATE_NODE","_FULFILLED"):case"".concat("UPDATE_NODE","_REJECTED"):return Object(j.a)(Object(j.a)({},e),{},{fetching:Object(j.a)(Object(j.a)({},e.fetching),{},{updateNode:!1})});case"".concat("DELETE_NODE","_PENDING"):return Object(j.a)(Object(j.a)({},e),{},{fetching:Object(j.a)(Object(j.a)({},e.fetching),{},{deleteNode:!0})});case"".concat("DELETE_NODE","_FULFILLED"):case"".concat("DELETE_NODE","_REJECTED"):return Object(j.a)(Object(j.a)({},e),{},{fetching:Object(j.a)(Object(j.a)({},e.fetching),{},{deleteNode:!1})});case"".concat("ADD_LINK","_PENDING"):return Object(j.a)(Object(j.a)({},e),{},{fetching:Object(j.a)(Object(j.a)({},e.fetching),{},{addLink:!0})});case"".concat("ADD_LINK","_FULFILLED"):case"".concat("ADD_LINK","_REJECTED"):return Object(j.a)(Object(j.a)({},e),{},{fetching:Object(j.a)(Object(j.a)({},e.fetching),{},{addLink:!1})});default:return e}},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.type,e},me=Object(ie.c)({appReducer:he,workspaceReducer:Ee}),fe=Object(ie.e)(me,Object(ie.d)(Object(ie.a)(ue.a),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(174);o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(l.a,{store:fe},c.a.createElement(le,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[134,1,2]]]);
//# sourceMappingURL=main.e68884e7.chunk.js.map
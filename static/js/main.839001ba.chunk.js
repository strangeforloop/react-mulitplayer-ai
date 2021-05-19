(this["webpackJsonpreact-multiplayer-ai"]=this["webpackJsonpreact-multiplayer-ai"]||[]).push([[0],{66:function(e,t,n){},67:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(10),o=n.n(i),s=(n(66),n(11)),c=n(24),l=n(116),u=(n(67),n(4)),d=function(e){var t=e.move,n=e.onClick,r=e.disabled,a=e.borderRadiusStyle,i=a.topLeftStyle,o=a.topRightStyle,s=a.bottomRightStyle,c=a.bottomLeftStyle;return Object(u.jsx)("div",{className:"box",style:{display:"inline-block"},children:Object(u.jsx)(l.a,{className:"content",style:{position:"absolute",width:"100%",borderRadius:"".concat(i," ").concat(o," ").concat(s," ").concat(c)},onClick:null!==t||r?void 0:n,children:t})})},j=function(e,t,n){return t*Math.sqrt(e.length)+n},b=function(e){for(var t=0;t<e.length;t++)if(null===e[t])return!0;return!1},h=function(e){var t=function(e){for(var t=0;t<Math.sqrt(e.length);t++){for(var n=new Set,r=0;r<Math.sqrt(e.length);r++){var a=j(e,t,r);n.add(e[a])}if(1===n.size&!n.has(null))return n.values().next().value}}(e)||function(e){for(var t=0;t<Math.sqrt(e.length);t++){for(var n=new Set,r=0;r<Math.sqrt(e.length);r++){var a=j(e,r,t);n.add(e[a])}if(1===n.size&!n.has(null))return n.values().next().value}}(e)||function(e){var t,n=new Set,r=new Set;t=Math.sqrt(e.length)+1;for(var a=0;a<e.length;a+=t)n.add(e[a]);if(1===n.size&&!n.has(null))return n.values().next().value;var i=Math.sqrt(e.length)-1;t=Math.sqrt(e.length)-1;for(var o=i;o<e.length-1;o+=t)r.add(e[o]);return 1!==r.size||r.has(null)?void 0:r.values().next().value}(e);return{isTie:!b(e)&&void 0===t,winner:t}},m={playerOne:"x",playerTwo:"o"},y=function(e){var t=e.board,n=e.setBoard,a=e.boardDimension,i=e.currentPlayer,o=e.handleTurn,s=e.disabled,l=e.setIsGameOver,j=e.setWinningPlayer,b=function(e,t){return e*a+t},y=h(t),O=y.isTie,f=y.winner;return Object(r.useEffect)((function(){(f||O)&&(l(!0),j(f))}),[O,f]),Object(u.jsx)("div",{style:{width:"max-content"},children:Array(a).fill(null).map((function(e,r){return Object(u.jsx)("div",{children:Array(a).fill(null).map((function(e,l){var j=b(r,l),h=0===r&&0===l?"5px":"0",y=0===r&&l===a-1?"5px":"0",O=r===a-1&&0===l?"5px":"0",f=r===a-1&&l===a-1?"5px":"0";return Object(u.jsx)(d,{borderRadiusStyle:{topLeftStyle:h,topRightStyle:y,bottomRightStyle:f,bottomLeftStyle:O},disabled:s,move:t[j],onClick:function(){o(function(e){return"playerOne"===e?"playerTwo":"playerOne"}(i));var e=function(e,t,n,r){var a=Object(c.a)(e);return a[b(t,n)]=r,a}(t,r,l,m["".concat(i)]);n(e)}},l)}))},r)}))})},O=n(53),f=n.n(O),v=n(77),x=n(107),p=function(e){var t=e.isGameOver,n=e.currentPlayer,a=e.winningPlayer,i=e.dimension,o=3===i?"Tic Tac Toe":"Connect Four",s=Object(r.useRef)(null);return Object(u.jsxs)("div",{children:[Object(u.jsx)(v.a,{variant:"h3",children:o}),function(){return t?void 0===a?Object(u.jsx)(v.a,{variant:"h6",children:"There is a tie!"}):Object(u.jsx)(x.a,{ref:s,in:!0,style:{transitionDelay:"80ms"},children:Object(u.jsx)(v.a,{ref:s,variant:"h6",color:"primary",children:"".concat(a.toUpperCase()," Won!")})}):Object(u.jsxs)(v.a,{variant:"h6",children:[(e=n,f()(e)),"'s Turn"]});var e}()]})},g=n(110),w=n(115),S=n(113),T=n(54),P=n(108),C=n(109),k=n(42),M=Object(T.a)({palette:{primary:{main:P.a[500],contrastText:C.a[900]},secondary:{main:C.a[500],contrastText:P.a[600]},textSecondary:{main:k.a[400],contrastText:"#7A9E7E"},text:{disabled:P.a[500]}}});M.props={MuiButton:{disableElevation:!0,variant:"contained"}},M.overrides={MuiButton:{disabled:{backgroundColor:P.a[500],textColor:C.a[500]}},MuiInputLabel:{root:{color:"orange","&$focused":{color:"blue"}}}};var I,B=M,E=function(e){var t=e.setNewInstance,n=e.setDimension,a=Object(r.useState)(!0),i=Object(s.a)(a,2),o=i[0],c=i[1],d=Object(r.useState)(!0),j=Object(s.a)(d,2),b=j[0],h=j[1],m=function(e){return 3===parseInt(e,10)||4===parseInt(e,10)};return Object(u.jsx)(g.a,{theme:B,children:Object(u.jsxs)("div",{style:{maxWidth:"900px",margin:"3rem auto"},children:[Object(u.jsx)(v.a,{variant:"h4",style:{marginBottom:"1rem"},children:"Let's play Tic Tac Toe or Connect Four"}),Object(u.jsx)(v.a,{variant:"h5",color:"primary",children:"Enter board dimensions:"}),Object(u.jsxs)(w.a,{style:{marginTop:"1rem"},children:[Object(u.jsx)(S.a,{onInput:function(e){if(m(e.target.value)){h(!0),c(!1);var t=parseInt(e.target.value,10);n(t)}else h(!1),c(!0)},placeholder:"Enter board dimensions",helperText:"Please enter a dimension of either 3 or 4.",InputLabelProps:{classes:{root:{color:"green"}}},InputProps:{classes:{}},error:!b,onKeyDown:function(e){"Enter"===e.key&&m(e.target.value)&&t(!1)},style:{marginBottom:"1rem"}}),Object(u.jsx)("br",{}),Object(u.jsx)(l.a,{disabled:o,onClick:function(){return t(!1)},color:"primary",children:"Play Game"})]})]})})},N=n(111),R=n(112),W=function(e){var t=e.dimension,n=e.setNumberOfPlayers,r=e.setPlayerNumberWasChosen;return Object(u.jsx)(g.a,{theme:B,children:Object(u.jsxs)("div",{style:{margin:"3rem"},children:[Object(u.jsx)(v.a,{variant:"h4",style:{marginBottom:"1rem"},children:"Configuring board . . ."}),Object(u.jsx)(v.a,{variant:"h5",color:"primary",children:"Choose the number of players:"}),Object(u.jsxs)(N.a,{container:!0,style:{maxWidth:"900px",margin:"auto",display:"flex",justifyContent:"center"},children:[3===t?Object(u.jsxs)(N.a,{item:!0,sm:6,style:{width:"100%",marginTop:"1rem"},children:[Object(u.jsx)(l.a,{style:{width:"50%"},variant:"contained",onClick:function(){n(1),r(!0)},color:"primary",children:"1 Player"}),Object(u.jsxs)(w.a,{px:3,paddingTop:2,children:[Object(u.jsx)(v.a,{variant:"body1",style:{marginBottom:"1rem"},children:"1 Player mode pits you against an AI player that uses the Minimax algorithm, a game theory strategy, to choose the best move to make."}),Object(u.jsx)(R.a,{href:"https://en.wikipedia.org/wiki/Minimax",style:{color:"#34e048"},target:"_blank",rel:"noopener",children:"Click to read more about the AI logic!"})]})]}):"",Object(u.jsxs)(N.a,{item:!0,sm:6,style:{width:"100%",marginTop:"1rem"},children:[Object(u.jsx)(l.a,{style:{width:"50%"},variant:"contained",onClick:function(){n(2),r(!0)},color:"primary",children:"2 Players"}),Object(u.jsx)(w.a,{px:3,paddingTop:2,children:Object(u.jsx)(v.a,{variant:"body1",children:"2 Player mode pits you against a real person."})})]})]})]})})},q=function e(t,n){var r,a={o:1,x:-1,Tie:0},i=h(t),o=i.isTie,s=i.winner;if(o)return a.Tie;if(s)return a[s];if(n){r=-1/0;for(var l=0;l<t.length;l++)if(null===t[l]){var u=Object(c.a)(t);u[l]="o";var d=e(u,!1);r=Math.max(r,d)}return r}r=1/0;for(var j=0;j<t.length;j++)if(null===t[j]){var b=Object(c.a)(t);b[j]="x";var m=e(b,!0);r=Math.min(r,m)}return r},G=function(e){return function(){var t=Object(r.useState)(!0),n=Object(s.a)(t,2),a=n[0],i=n[1],o=Object(r.useState)(3),c=Object(s.a)(o,2),l=c[0],d=c[1];return a?Object(u.jsx)(E,{setNewInstance:i,setDimension:d}):Object(u.jsx)(e,{dimension:l})}}((I=function(e){var t=e.numberOfPlayers,n=e.dimension,a=new Array(n*n).fill(null),i=Object(r.useState)(a),o=Object(s.a)(i,2),d=o[0],j=o[1],b=Object(r.useState)("playerOne"),m=Object(s.a)(b,2),O=m[0],f=m[1],v=Object(r.useState)(!1),x=Object(s.a)(v,2),w=x[0],S=x[1],T=Object(r.useState)(void 0),P=Object(s.a)(T,2),C=P[0],k=P[1],M=1===t&&"playerOne"!==O;return Object(r.useEffect)((function(){M&&void 0===C&&setTimeout((function(){!function(e,t,n,r,a){var i=h(e),o=i.isTie,s=i.winner;if(s||o)return t(!0),void n(s);for(var l,u=-1/0,d=Object(c.a)(e),j=0;j<e.length;j++)if(null===e[j]){var b=Object(c.a)(e);b[j]="o";var m=q(b,!1);b[j]="",m>u&&(u=m,l=j)}d[l]="o",r(d),a("playerOne")}(d,S,k,j,f)}),1500)}),[M]),Object(u.jsx)(g.a,{theme:B,children:Object(u.jsxs)("div",{className:"content",children:[Object(u.jsx)(p,{isGameOver:w,currentPlayer:O,winningPlayer:C,dimension:n}),Object(u.jsxs)(N.a,{style:{marginBottom:"1rem"},children:[Object(u.jsx)(l.a,{color:"primary",style:{fontWeight:"bold"},onClick:function(){j(a),f("playerOne"),S(!1),k(void 0)},children:"Restart Game"}),Object(u.jsx)(l.a,{color:"secondary",style:{fontWeight:"bold"},onClick:function(){window.location.reload()},children:"Go to Start Screen"})]}),Object(u.jsx)(y,{board:d,setBoard:j,boardDimension:n,handleTurn:f,currentPlayer:O,setIsGameOver:S,setWinningPlayer:k,disabled:M||w})]})})},function(e){var t=e.dimension,n=Object(r.useState)(!1),a=Object(s.a)(n,2),i=a[0],o=a[1],c=Object(r.useState)(1),l=Object(s.a)(c,2),d=l[0],j=l[1];return i?Object(u.jsx)(I,{numberOfPlayers:d,dimension:t}):Object(u.jsx)(W,{dimension:t,setNumberOfPlayers:j,setPlayerNumberWasChosen:o})}));o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(G,{})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.839001ba.chunk.js.map
(this.webpackJsonpfirstspa=this.webpackJsonpfirstspa||[]).push([[0],{103:function(e,t,A){"use strict";A.d(t,"a",(function(){return o})),A.d(t,"b",(function(){return c}));var n=A(37),a=A(9),r={usersData:[{id:1,name:"Dima"},{id:2,name:"Sveta"},{id:3,name:"Katya"},{id:4,name:"Kolya"},{id:5,name:"Valera"}],messagesData:[{id:1,text:"Hi!"},{id:2,text:"How are you ?"},{id:3,text:"Yo!"},{id:4,text:"Kolya"},{id:5,text:"Valera"}]},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":var A=t.newMessage,o={id:e.messagesData[e.messagesData.length-1].id+1,text:A};return Object(a.a)({},e,{messagesData:[].concat(Object(n.a)(e.messagesData),[o])});default:return e}},c=function(e){return{type:"SEND-MESSAGE",newMessage:e}}},129:function(e,t,A){"use strict";var n=A(8),a=A.n(n),r=A(18),o=A(37),c=A(9),i=A(16),s=function(e,t,A,n){return e.map((function(e){return e[A]===t?Object(c.a)({},e,{},n):e}))};A.d(t,"f",(function(){return l})),A.d(t,"c",(function(){return E})),A.d(t,"d",(function(){return f})),A.d(t,"b",(function(){return h})),A.d(t,"a",(function(){return w})),A.d(t,"e",(function(){return S}));var u={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(c.a)({},e,{users:s(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(c.a)({},e,{users:s(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(c.a)({},e,{users:t.users});case"SET_CURRENT_PAGE":return Object(c.a)({},e,{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(c.a)({},e,{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(c.a)({},e,{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING":return Object(c.a)({},e,{followingInProgress:t.isFollowing?[].concat(Object(o.a)(e.followingInProgress),[t.userId]):Object(o.a)(e.followingInProgress.filter((function(e){return e!==t.userId})))});default:return e}},p=function(e){return{type:"FOLLOW",userId:e}},m=function(e){return{type:"UNFOLLOW",userId:e}},E=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},d=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},f=function(e,t){return{type:"TOGGLE_IS_FOLLOWING",isFollowing:e,userId:t}},h=function(e,t){return function(){var A=Object(r.a)(a.a.mark((function A(n){var r;return a.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return n(d(!0)),A.next=3,i.c.getUsers(e,t);case 3:r=A.sent,n(d(!1)),n({type:"SET_USERS",users:r.items}),n({type:"SET_TOTAL_USERS_COUNT",count:r.totalCount});case 7:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}()},g=function(){var e=Object(r.a)(a.a.mark((function e(t,A,n,r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(f(!0,A)),e.next=3,n(A);case 3:0===e.sent.data.resultCode&&t(r(A)),t(f(!1,A));case 6:case"end":return e.stop()}}),e)})));return function(t,A,n,a){return e.apply(this,arguments)}}(),w=function(e){return function(){var t=Object(r.a)(a.a.mark((function t(A){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:g(A,e,i.c.follow.bind(i.c),p);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(r.a)(a.a.mark((function t(A){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:g(A,e,i.c.unfollow.bind(i.c),m);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},135:function(e,t){e.exports="data:image/gif;base64,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"},136:function(e,t,A){e.exports={content:"Profile_content__2QeyL"}},137:function(e,t,A){e.exports={item:"Post_item__zQjcp"}},138:function(e,t,A){"use strict";A.d(t,"a",(function(){return m}));var n=A(28),a=A(29),r=A(31),o=A(30),c=A(32),i=A(0),s=A.n(i),u=A(25),l=A(10),p=function(e){return{isAuth:e.auth.isAuthenticated}},m=function(e){var t=function(t){function A(){return Object(n.a)(this,A),Object(r.a)(this,Object(o.a)(A).apply(this,arguments))}return Object(c.a)(A,t),Object(a.a)(A,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(e,this.props):s.a.createElement(u.a,{to:"/login"})}}]),A}(s.a.Component);return Object(l.b)(p)(t)}},16:function(e,t,A){"use strict";A.d(t,"c",(function(){return r})),A.d(t,"b",(function(){return o})),A.d(t,"a",(function(){return c}));var n=A(130),a=A.n(n).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"1b95658b-9031-4f4e-a216-a8df40226f99"}}),r={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please use profileAPI object instead."),o.getProfile(e)}},o={getProfile:function(e){return a.get("profile/".concat(e))},getStatus:function(e){return a.get("/profile/status/".concat(e))},updateStatus:function(e){return a.put("/profile/status",{status:e})}},c={me:function(){return a.get("auth/me")},login:function(e,t){var A=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:A})},logout:function(){return a.delete("auth/login")}}},164:function(e,t,A){e.exports=A(290)},165:function(e,t,A){},21:function(e,t,A){e.exports={nav:"Navbar_nav__1qUQY",item:"Navbar_item__3O96G",active:"Navbar_active__w7awk"}},248:function(e,t,A){},290:function(e,t,A){"use strict";A.r(t);A(165),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var n=A(7),a=A(8),r=A.n(a),o=A(18),c=A(37),i=A(9),s=A(16),u={postsRawData:[{id:1,text:"Post 1",likesCount:"1"},{id:2,text:"Post 2",likesCount:"231"},{id:3,text:"Post 3",likesCount:"547"},{id:4,text:"Post 4",likesCount:"14"},{id:5,text:"Post 5",likesCount:"1"},{id:6,text:"Post 6",likesCount:"8"}],profile:null,status:""},l=function(e){return{type:"SET_USER_STATUS",status:e}},p=A(103),m=A(129),E=A(47),d={userId:null,email:null,login:null,isAuthenticated:!1},f=function(e,t,A,n){return{type:"KAMA/AUTH/SET_USER_DATA",data:{userId:e,email:t,login:A,isAuth:n}}},h=function(){return function(){var e=Object(o.a)(r.a.mark((function e(t){var A;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.me();case 2:0===(A=e.sent).data.resultCode&&t(f(A.data.data.id,A.data.data.email,A.data.data.login,!0));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},g=A(131),w=A(128),S={isInitialized:!1},Q=Object(n.c)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var A={id:e.postsRawData[e.postsRawData.length-1]+1,text:t.postText,likesCount:0};return Object(i.a)({},e,{newPostText:"",postsRawData:[].concat(Object(c.a)(e.postsRawData),[A])});case"SET_USER_PROFILE":return Object(i.a)({},e,{profile:t.profile});case"SET_USER_STATUS":return Object(i.a)({},e,{status:t.status});case"DELETE_POST_BY_INDEX":return Object(i.a)({},e,{postsRawData:e.postsRawData.filter((function(e){return e.id!==t.index}))});default:return e}},dialogsPage:p.a,usersPage:m.f,auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"KAMA/AUTH/SET_USER_DATA":return Object(i.a)({},e,{},t.data,{isAuthenticated:t.data.isAuth});default:return e}},form:w.a,app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INITIALIZED":return Object(i.a)({},e,{isInitialized:!0});default:return e}}}),U=Object(n.e)(Q,Object(n.a)(g.a));window.store=U;var k=U,C=A(0),b=A.n(C),v=A(64),I=A.n(v),B=A(12),R=A(28),O=A(29),T=A(31),y=A(30),x=A(32),j=(A(248),A(21)),M=A.n(j),D=function(){return b.a.createElement("nav",{className:M.a.nav},b.a.createElement("div",{className:M.a.item},b.a.createElement(B.b,{activeClassName:M.a.active,to:"/profile"},"Profile")),b.a.createElement("div",{className:M.a.item},b.a.createElement(B.b,{activeClassName:M.a.active,to:"/dialogs"},"Messages")),b.a.createElement("div",{className:M.a.item},b.a.createElement(B.b,{activeClassName:M.a.active,to:"/users"},"Users")),b.a.createElement("div",{className:M.a.item},b.a.createElement(B.b,{to:"profile"},"News")),b.a.createElement("div",{className:M.a.item},b.a.createElement(B.b,{to:"profile"},"Music")),b.a.createElement("div",{className:M.a.item},b.a.createElement(B.b,{to:"profile"},"Settings")))},G=A(25),H=A(89),F=A.n(H),N=function(e){return b.a.createElement("header",{className:F.a.header},b.a.createElement("img",{alt:"",src:"https://i-love-png.com/images/yoga-logo-png-25.png"}),b.a.createElement("div",{className:F.a.loginBlock},e.isAuthenticated?b.a.createElement("div",null,e.login," - ",b.a.createElement("button",{onClick:e.logout},"Log out")):b.a.createElement(B.b,{to:"/login"},"Login")))},z=A(10),L=function(e){function t(){return Object(R.a)(this,t),Object(T.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(x.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return b.a.createElement(N,this.props)}}]),t}(b.a.Component),P=Object(z.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,login:e.auth.login}}),{logout:function(){return function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.logout();case 2:0===e.sent.data.resultCode&&t(f(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(L),J=A(126),K=A(127),Y=A(42),q=A(43),W=A(54),Z=A.n(W),_=Object(K.a)({form:"login"})((function(e){var t=e.handleSubmit,A=e.error;return b.a.createElement("form",{onSubmit:t},b.a.createElement("div",null,b.a.createElement(J.a,{component:Y.a,validate:[q.b],placeholder:"Email",name:"email"})),b.a.createElement("div",null,b.a.createElement(J.a,{type:"password",component:Y.a,validate:[q.b],placeholder:"Password",name:"password"})),b.a.createElement("div",null,b.a.createElement(J.a,{component:Y.a,type:"checkbox",name:"rememberMe"}),"remember me"),A&&b.a.createElement("div",{className:Z.a.formSummaryError},A),b.a.createElement("div",null,b.a.createElement("button",null,"Login")))})),V=Object(z.b)((function(e){return{isAuth:e.auth.isAuthenticated}}),{login:function(e,t,A){return function(){var n=Object(o.a)(r.a.mark((function n(a){var o,c;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.a.login(e,t,A);case 2:0===(o=n.sent).data.resultCode?a(h()):(c=o.data.messages.length>0?o.data.messages[0]:"Credentials are wrong",a(Object(E.a)("login",{_error:c})));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})((function(e){return e.isAuth?b.a.createElement(G.a,{to:"/profile"}):b.a.createElement("div",null,b.a.createElement("h1",null,"Login"),b.a.createElement(_,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}))})),X=A(40),$=A(136),ee=A.n($),te=A(92),Ae=A.n(te),ne=A(137),ae=A.n(ne),re=function(e){return b.a.createElement("div",{className:ae.a.item},b.a.createElement("img",{alt:"asd",src:"https://components4developers.blog/wp-content/uploads/2018/07/Post_Danmark_Post_boxes_in_F%C3%A5borg_Denmark.jpg"}),b.a.createElement("br",null),e.text,b.a.createElement("div",null,b.a.createElement("span",null,"Like ",e.likesCount)))},oe=Object(q.a)(10),ce=Object(K.a)({form:"profileAddNewPostForm"})((function(e){return b.a.createElement("form",{onSubmit:e.handleSubmit},b.a.createElement("div",null,b.a.createElement(J.a,{component:Y.b,name:"newPostText",validate:[q.b,oe]})),b.a.createElement("button",null,"Add post"))})),ie=b.a.memo((function(e){var t=e.profilePage.postsRawData.map((function(e){return b.a.createElement(re,{key:e.id,text:e.text,likesCount:e.likesCount})}));return b.a.createElement("div",{className:Ae.a.postsBlock},b.a.createElement("h3",null,"My posts"),b.a.createElement("div",null,"New post"),b.a.createElement(ce,{onSubmit:function(t){e.addNewPost(t.newPostText)}}),b.a.createElement("div",{className:Ae.a.posts},"Posts:",t))})),se=Object(z.b)((function(e){return{profilePage:e.profilePage}}),(function(e){return{addNewPost:function(t){e(function(e){return{type:"ADD-POST",postText:e}}(t))}}}))(ie),ue=A(41),le=A(93),pe=A.n(le),me=A(86),Ee=function(e){var t=Object(C.useState)(!1),A=Object(me.a)(t,2),n=A[0],a=A[1],r=Object(C.useState)(e.status),o=Object(me.a)(r,2),c=o[0],i=o[1];Object(C.useEffect)((function(){i(e.status)}),[e.status]);return b.a.createElement(b.a.Fragment,null,!n&&b.a.createElement("div",null,b.a.createElement("span",{onDoubleClick:function(){a(!0)}},e.status||"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0442\u0430\u0442\u0443\u0441!")),n&&b.a.createElement("div",null,b.a.createElement("input",{onChange:function(e){i(e.currentTarget.value)},autoFocus:!0,onBlur:function(){a(!1),e.updateStatus(c)},value:c})))},de=function(e){var t=e.profile,A=e.status,n=e.updateStatus;Object(ue.a)(e,["profile","status","updateStatus"]);return t?b.a.createElement("div",null,b.a.createElement("div",{className:pe.a.descriptionBlock},b.a.createElement("div",null,b.a.createElement("img",{className:pe.a.avatar,alt:"avatar",src:t.photos.small}),b.a.createElement(Ee,{status:A,updateStatus:n})))):b.a.createElement(X.a,null)},fe=function(e){return b.a.createElement("div",{className:ee.a.content},b.a.createElement(de,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),b.a.createElement(se,null))},he=(A(138),function(e){function t(){return Object(R.a)(this,t),Object(T.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(x.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=5509)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getUserStatus(e)}},{key:"render",value:function(){return b.a.createElement(fe,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateUserStatus}))}}]),t}(b.a.Component)),ge=Object(n.d)(Object(z.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuthenticated}}),{getUserProfile:function(e){return function(){var t=Object(o.a)(r.a.mark((function t(A){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.c.getProfile(e);case 2:n=t.sent,A({type:"SET_USER_PROFILE",profile:n.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getUserStatus:function(e){return function(){var t=Object(o.a)(r.a.mark((function t(A){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.getStatus(e);case 2:n=t.sent,A(l(n.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateUserStatus:function(e){return function(){var t=Object(o.a)(r.a.mark((function t(A){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&A(l(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),G.f)(he),we=function(e){return function(t){return b.a.createElement(b.a.Suspense,{fallback:b.a.createElement(X.a,null)},b.a.createElement(e,t))}},Se=b.a.lazy((function(){return A.e(4).then(A.bind(null,297))})),Qe=b.a.lazy((function(){return A.e(3).then(A.bind(null,296))})),Ue=function(e){function t(){return Object(R.a)(this,t),Object(T.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(x.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.isInitialized?b.a.createElement("div",{className:"app-wrapper"},b.a.createElement(P,null),b.a.createElement(D,null),b.a.createElement("div",{className:"app-wrapper-content"},b.a.createElement(G.b,{path:"/profile/:userId?",render:function(){return b.a.createElement(ge,null)}}),b.a.createElement(G.b,{path:"/dialogs",render:we(Se)}),b.a.createElement(G.b,{path:"/users",render:we(Qe)}),b.a.createElement(G.b,{path:"/login",render:function(){return b.a.createElement(V,null)}}))):b.a.createElement(X.a,null)}}]),t}(C.Component),ke=Object(n.d)(G.f,Object(z.b)((function(e){return{isInitialized:e.app.isInitialized}}),{initializeApp:function(){return function(e){e(h()).then((function(){e({type:"SET_INITIALIZED"})}))}}}))(Ue);I.a.render(b.a.createElement(B.a,null,b.a.createElement(z.a,{store:k},b.a.createElement(ke,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},40:function(e,t,A){"use strict";var n=A(135),a=A.n(n),r=A(0),o=A.n(r);t.a=function(e){return o.a.createElement("div",null,o.a.createElement("img",{alt:"preloader-gif",src:a.a}))}},42:function(e,t,A){"use strict";A.d(t,"b",(function(){return s})),A.d(t,"a",(function(){return u}));var n=A(41),a=A(0),r=A.n(a),o=A(54),c=A.n(o),i=function(e){e.input;var t=e.meta,A=(e.child,Object(n.a)(e,["input","meta","child"])),a=t.touched&&t.error;return r.a.createElement("div",{className:c.a.formControl+" "+(a&&c.a.error)},r.a.createElement("div",null,A.children),r.a.createElement("div",null,a&&r.a.createElement("span",null,t.error)))},s=function(e){var t=e.input,A=(e.meta,e.child,Object(n.a)(e,["input","meta","child"]));return r.a.createElement(i,e,r.a.createElement("textarea",Object.assign({},t,A)))},u=function(e){var t=e.input,A=(e.meta,e.child,Object(n.a)(e,["input","meta","child"]));return r.a.createElement(i,e,r.a.createElement("input",Object.assign({},t,A)))}},43:function(e,t,A){"use strict";A.d(t,"b",(function(){return n})),A.d(t,"a",(function(){return a}));var n=function(e){if(!e)return"Field is required."},a=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols.")}}},54:function(e,t,A){e.exports={formControl:"FormControls_formControl__2BsZS",error:"FormControls_error__3Wvjp",formSummaryError:"FormControls_formSummaryError__pNAd3"}},89:function(e,t,A){e.exports={header:"Header_header__35CnV",loginBlock:"Header_loginBlock__2IAFv"}},92:function(e,t,A){e.exports={postsBlock:"MyPosts_postsBlock__sVozG",posts:"MyPosts_posts__1dVd9"}},93:function(e,t,A){e.exports={content_main_image:"ProfileInfo_content_main_image__2KRhH",avatar:"ProfileInfo_avatar__1PGxu",descriptionBlock:"ProfileInfo_descriptionBlock__sJrPo"}}},[[164,1,2]]]);
//# sourceMappingURL=main.0a1fd6b0.chunk.js.map
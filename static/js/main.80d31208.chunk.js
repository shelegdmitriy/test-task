(this["webpackJsonpjoin-to-it-test"]=this["webpackJsonpjoin-to-it-test"]||[]).push([[0],{274:function(e,t,n){e.exports=n(436)},435:function(e,t,n){},436:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(43),c=n.n(l),o=n(38),i=n(20),s=n(237),m=n(238),d=n(452),u=n(98),p={siteLoading:!1,events:[]},v="test-task/calendar/add-event",h=Object(i.combineReducers)({calendarReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SITE_LOADING":return Object(u.a)(Object(u.a)({},e),{},{siteLoading:t.payload});case v:return Object(u.a)(Object(u.a)({},e),{},{events:t.payload});default:return e}},form:d.a}),E=Object(i.createStore)(h,Object(s.composeWithDevTools)(Object(i.applyMiddleware)(m.a))),f=n(52),b=n(53),O=n(55),y=n(54),g=n(261),k=n(60),j=n(66),C=function(e){var t=e.children;return r.a.createElement("div",{className:"side-menu-item__component"},t)},D=function(){return r.a.createElement("div",{className:"side-menu__component"},r.a.createElement("div",{className:"header-item"},r.a.createElement("span",null,"impekable")),[{key:"home",text:"Home",icon:"home"},{key:"dashboard",text:"Dashboard",icon:"industry"},{key:"inbox",text:"Inbox",icon:"mail outline"},{key:"products",text:"Products",icon:"barcode"},{key:"invoices",text:"Invoices",icon:"book"},{key:"customers",text:"Customers",icon:"user outline"},{key:"chat-room",text:"Chat Room",icon:"comments"},{key:"calendar",text:"Calendar",icon:"calendar alternate outline"},{key:"help-center",text:"Help Center",icon:"life ring outline"},{key:"settings",text:"Settings",icon:"setting"}].map((function(e){return r.a.createElement(C,{key:"side_menu_item_".concat(e.key)},r.a.createElement(j.a,{name:e.icon}),r.a.createElement("span",null,e.text))})))},N=n(263),w=function(e){var t=e.children;return r.a.createElement("div",{className:"content-layout__component"},r.a.createElement("div",{className:"content-layout-header"},r.a.createElement("div",{className:"search-section"},r.a.createElement(j.a,{name:"search"}),r.a.createElement("span",null,"Search transactions, invoices or help")),r.a.createElement("div",{className:"user-wrapper"},r.a.createElement("div",{className:"helpers-icon"},r.a.createElement(j.a,{name:"life ring outline"}),r.a.createElement(j.a,{name:"comments"}),r.a.createElement(j.a,{name:"bell"})),r.a.createElement("div",{className:"divider"}),r.a.createElement("div",{className:"user-info"},r.a.createElement("span",null,"John Doe"),r.a.createElement(j.a,{name:"angle down"}),r.a.createElement(N.a,{avatar:!0,src:"https://cdn1.iconfinder.com/data/icons/user-avatars-2/300/10-512.png"})))),r.a.createElement("h1",null,"Calendar"),t)},x=n(242),M=n(80),S=n(243),_=n(244),R=n(449),F=n(447),A=n(450),G=n(453),T=n(448),V=n(437),I=n(446),W=n(97),H=function(e){Object(O.a)(n,e);var t=Object(y.a)(n);function n(){return Object(f.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this.props,t=e.input,n=e.label,a=e.type,l=e.placeholder,c=e.disabled,o=e.min,i=e.max,s=e.meta,m=s.touched,d=s.error;return"id"in t||(t.id="id_".concat(t.name)),r.a.createElement(F.a.Field,{error:Boolean(m&&d)},n&&r.a.createElement("label",{htmlFor:t.id},n),r.a.createElement(I.a,Object.assign({},t,{disabled:c,type:a,min:o,max:i,placeholder:l,labelPosition:"right corner"})),m&&d&&r.a.createElement(W.a,{color:"red",pointing:!0},d))}}]),n}(a.Component);H.defaultProps={label:null,placeholder:null,disabled:!1,min:null,max:null};var P=H,B=function(e){Object(O.a)(n,e);var t=Object(y.a)(n);function n(){var e;Object(f.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).submitForm=function(t){var n=e.props.events||[];t.eventName&&t.eventDate&&t.eventTime&&(n.push(t),e.props.setCalendarEvent(n)),e.props.closeModal()},e.resetForm=function(){e.props.reset()},e}return Object(b.a)(n,[{key:"render",value:function(){return r.a.createElement(F.a,{onSubmit:this.props.handleSubmit(this.submitForm)},r.a.createElement(A.a,{component:P,name:"eventName",placeholder:"enter name"}),r.a.createElement(A.a,{component:P,name:"eventDate",placeholder:"enter date"}),r.a.createElement(A.a,{component:P,name:"eventTime",placeholder:"enter time"}),r.a.createElement(A.a,{component:P,name:"eventNotes",placeholder:"notes"}),r.a.createElement(V.a,{onClick:this.resetForm},"Cancel"),r.a.createElement(V.a,{submit:!0},"Save"))}}]),n}(a.Component),J=function(e,t){return t?(console.log("editMode",e),{eventName:e.event.title,eventDate:e.event.start.getDay(),eventTime:e.event.start.getTime()}):{eventDate:e.dateStr}},L=Object(o.b)((function(e,t){var n=t.columnData,a=t.editMode,r=Object(G.a)("EventForm");return{initialValues:J(n,a),eventName:r(e,"eventName"),events:e.calendarReducer.events}}),{setCalendarEvent:function(e){return function(t){t({type:v,payload:e})}}})(Object(T.a)({form:"EventForm",validate:function(e){var t={};return e.eventName||(t.eventName="Required"),t},enableReinitialize:!0})(B)),q=(n(385),n(386),n(387),function(e){Object(O.a)(n,e);var t=Object(y.a)(n);function n(){var e;Object(f.a)(this,n);for(var l=arguments.length,c=new Array(l),o=0;o<l;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).calendarRef=Object(a.createRef)(),e.state={currentView:"dayGridMonth",modal:null,modalOpen:!1,eventData:null,modalEditOpen:!1},e.handleDateClick=function(t){e.setState({modalOpen:!0,eventData:t})},e.handleEventClick=function(t){e.setState({modalEditOpen:!0,eventData:t})},e.handleModalOpen=function(t){return r.a.createElement(R.a,{open:e.state.modalOpen,onClose:function(){e.setState({modalOpen:!1})}},r.a.createElement(R.a.Content,null,r.a.createElement(L,{handler:e.calendarRef.current,editMode:!1,columnData:t,handleCreateEvent:e.state.apiHandler,closeModal:function(){e.setState({modalOpen:!1})}})))},e.handleEditModalOpen=function(t){return r.a.createElement(R.a,{open:e.state.modalEditOpen,onClose:function(){e.setState({modalEditOpen:!1})}},r.a.createElement(R.a.Content,null,r.a.createElement(L,{editMode:!0,columnData:t,handleCreateEvent:e.state.apiHandler,closeModal:function(){e.setState({modalEditOpen:!1})}})))},e.handleViewChange=function(t){e.setState({currentView:t})},e.handleEventChange=function(t){return e.calendarRef.current.getApi()[t]},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.calendarRef.current.getApi().getEvents()}},{key:"componentDidUpdate",value:function(e){e.events!==this.props.events&&this.calendarRef.current.getApi().getEvents()}},{key:"render",value:function(){var e=this.props.events,t=e&&e.length>0?e.map((function(e){return{title:e.eventName,start:e.eventDate,end:"allDay"}})):[];return r.a.createElement("div",{className:"calendar-view__component"},r.a.createElement("h3",null,"Calendar View"),r.a.createElement(x.a,{ref:this.calendarRef,header:{left:"prev,next today",center:"title",right:"dayGridMonth,timeGridWeek,timeGridDay,listWeek"},dateClick:this.handleDateClick,defaultView:"dayGridMonth",plugins:[M.d,S.a,_.a],events:t,eventClick:this.handleEventClick}),this.handleModalOpen(this.state.eventData),this.handleEditModalOpen(this.state.eventData))}}]),n}(a.PureComponent)),z=Object(o.b)((function(e){return{events:e.calendarReducer.events}}),null)(q),U=function(){return r.a.createElement("div",{className:"main-landing-page__component"},r.a.createElement(D,null),r.a.createElement(w,null,r.a.createElement(z,null)))},$=function(){return r.a.createElement(a.Fragment,null,r.a.createElement(g.a,null,r.a.createElement(k.c,null,r.a.createElement(k.a,{exact:!0,path:"/",component:U}))))},K=function(e){Object(O.a)(n,e);var t=Object(y.a)(n);function n(){return Object(f.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return r.a.createElement($,null)}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(435);var Q=r.a.createElement(o.a,{store:E},r.a.createElement(K,null));c.a.render(Q,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[274,1,2]]]);
//# sourceMappingURL=main.80d31208.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,a){},,,,function(e,t,a){e.exports=a(25)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(1),s=a(2),r=a(4),n=a(3),l=a(0),c=a.n(l),o=a(8),u=a.n(o),m=(a(17),function(e){Object(r.a)(a,e);var t=Object(n.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{id:"homepage",onScroll:this.handleScroll},c.a.createElement("div",{class:"conquerContainer"},c.a.createElement("h1",null,"CONQUER"),c.a.createElement("h4",null,"Simple Bootstrap Template")))}}]),a}(c.a.Component)),d=(a(18),a(19),a(7),function(e){Object(r.a)(a,e);var t=Object(n.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).state={title:s.props.title,titleStyle:s.props.titleStyle?s.props.titleStyle:"bootstrapTitle",body:s.props.body,buttonText:s.props.buttonText,imgLink:s.props.imgLink,buttonClass:s.props.buttonClass,buttonColor:s.props.cardColor,buttonWrapper:s.props.buttonWrapper},s}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{class:this.props.cardStyle},c.a.createElement("img",{src:this.props.imgLink,alt:"1"}),c.a.createElement("div",{class:"bootstrapText"},c.a.createElement("div",{class:"cardContents"},c.a.createElement("h2",{class:"title "+this.state.titleStyle},this.state.title),this.state.body.split("<br>").map(function(e,t){return t>0?c.a.createElement("span",{class:"bootstrapBody bootstrapBody--lineBreak"},e):c.a.createElement("span",{class:"bootstrapBody"},e)})),c.a.createElement("div",{class:this.state.buttonWrapper},this.props.hidden?c.a.createElement("button",{class:"cardButton--hidden"},this.state.buttonText):c.a.createElement("button",{class:"btn "+this.state.buttonColor},this.state.buttonText))))}}]),a}(c.a.Component));var p=function(){return c.a.createElement("div",{id:"about"},c.a.createElement("div",{class:"flexCards"},c.a.createElement("div",{class:"flexWrapper"},[{title:"Bootstrap v3.3.6",cardColor:"green",body:"Morbi sagittis justo a velit placerat ullamcorper quis quis velit. Sed convallis at risus ullamcorper auctor. Praesent quis velit neque. Quisque semper porta nisi vitae suscipit. Duis lectus magna, ornare ac scelerisque.",buttonText:"Button Green",imgLink:"/images/1-1.jpg"},{title:"Responsive Design",cardColor:"blue",body:"Conquer Template is provided by templatemo for free of charge. You can use this template for any kind of website. No credit link is required. All images by Unsplash. Thank you for visiting our website. Please come again!",buttonText:"See Details",imgLink:"/images/1-2.jpg"},{title:"Parallax Layout",cardColor:"red",body:"Morbi sagittis justo a velit placerat ullamcorper quis quis velit. Sed convallis at risus ullamcorper auctor. Praesent quis velit neque. Quisque semper porta nisi vitae suscipit. Duis lectus magna, ornare ac scelerisque.",buttonText:"Button Red",imgLink:"/images/1-3.jpg"},{title:"Two Column Left Side",cardColor:"grey",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor eros eget eros maximus, ut cursus sem euismod. Donec iaculis tristique odio at consectetur. Nullam dignissim varius suscipit. Sed in leo sit amet velit finibus pretium.<br>Vestibulum vel mauris at erat mattis accumsan et ac lorem. Cras non venenatis orci, sed tincidunt massa. Duis nisl lectus, auctor eu sodales at, dignissim eu orci. Sed vitae venenatis magna, in blandit metus.",imgLink:"/images/2-1.jpg",hidden:!0},{title:"Two Column Right Side",cardColor:"grey",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor eros eget eros maximus, ut cursus sem euismod. Donec iaculis tristique odio at consectetur. Nullam dignissim varius suscipit. Sed in leo sit amet velit finibus pretium.<br>Vestibulum vel mauris at erat mattis accumsan et ac lorem. Cras non venenatis orci, sed tincidunt massa. Duis nisl lectus, auctor eu sodales at, dignissim eu orci. Sed vitae venenatis magna, in blandit metus.",buttonText:"Read More",imgLink:"/images/2-2.jpg",buttonStyle:"cardButton"}].map(function(e,t){return t<3?c.a.createElement(d,{cardStyle:"card__aboutTopRow",title:e.title,titleStyle:"title--alignLeft title--"+e.cardColor,body:e.body,buttonText:e.buttonText,imgLink:e.imgLink,buttonClass:"topRowButtons",cardColor:"btn--"+e.cardColor}):c.a.createElement(d,{cardStyle:"card__aboutBottomRow",title:e.title,titleStyle:"title--"+e.cardColor,body:e.body,buttonText:e.buttonText,imgLink:e.imgLink,buttonClass:"topRowButtons",cardColor:"btn--"+e.cardColor,buttonWrapper:e.buttonStyle,hidden:e.hidden})}))))},b=a(5),h=(a(20),function(e){Object(r.a)(a,e);var t=Object(n.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("a",{href:this.props.href,onClick:function(){return e.props.onClick(e.props.index)},class:this.props.selected?"active "+this.props.class:"none "+this.props.class},this.props.title)}}]),a}(c.a.Component)),v=(a(21),function(e){Object(r.a)(a,e);var t=Object(n.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).handleScroll=function(e){var t=e.target.documentElement.scrollTop,a=e.target.getElementById("homepage").clientHeight,i=e.target.getElementById("about").clientHeight;t+73<a?s.setState({active:0}):t-a+73<i?s.setState({active:1}):s.setState({active:2})},s.handleClick=function(e){s.setState({active:e})},s.state={active:0},s.handleScroll=s.handleScroll.bind(Object(b.a)(s)),s}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e,t=this,a=[{title:"Homepage",href:"#homepage",index:0,selected:0===this.state.active},{title:"About Us",href:"#about",index:1,selected:1===this.state.active},{title:"Services",href:"#services",index:2,selected:2===this.state.active},{title:"Contact",href:"#contact",index:3,selected:3===this.state.active},{title:"External",href:"#external",index:4,selected:4===this.state.active}];return e=this.props.newHam&&this.props.showNav?"hamburgerList hamburgerList__new":!this.props.newHam&&this.props.showNav?"hamburgerList":"null",c.a.createElement("ul",{class:e},c.a.createElement("div",{class:this.props.showNav?"hamburgerNavbar":"navbar"},this.props.showNav?a.map(function(e){return c.a.createElement("li",{class:"hamburgerListItem",onClick:t.props.onClick},c.a.createElement(h,{title:e.title,href:e.href,index:e.index,selected:e.selected,onClick:t.handleClick,class:"hamburgerLink"}))}):a.map(function(e){return c.a.createElement("li",null,c.a.createElement(h,{title:e.title,href:e.href,index:e.index,selected:e.selected,onClick:t.handleClick}))}),"}};"))}}]),a}(c.a.Component)),g=(a(22),function(e){Object(r.a)(a,e);var t=Object(n.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).showHamburger=function(){s.setState({ham:!s.state.ham})},s.hamburgerStyle=function(){s.setState({legacy:!s.state.legacy})},s.state={ham:!1,legacy:!0},s.showHamburger=s.showHamburger.bind(Object(b.a)(s)),s}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{class:"hamburgerWrapper",style:{display:"flex"}},c.a.createElement("div",{class:"container",onClick:this.showHamburger},c.a.createElement("div",{class:"bar1"}),c.a.createElement("div",{class:"bar2"}),c.a.createElement("div",{class:"bar3"})),c.a.createElement("button",{class:this.state.ham?"btn btn--hidden":"btn btn__hamburger",onClick:this.hamburgerStyle},this.state.legacy?"Legacy":"New")),c.a.createElement("div",{class:this.state.legacy&&this.state.ham?"hamburgerMenu hamburgerMenu__visible":"hamburgerMenu"},c.a.createElement(v,{showNav:this.state.ham&&this.state.legacy,onClick:this.showHamburger})),c.a.createElement("div",{class:this.state.legacy&&this.state.ham?"hamburgerOpen hamburgerOpen__visible":"hamburgerOpen",onClick:this.showHamburger}),c.a.createElement("div",{class:!this.state.legacy&&this.state.ham?"box box__visible":"box"},c.a.createElement(v,{showNav:this.state.ham&&!this.state.legacy,newHam:!this.state.legacy,onClick:this.showHamburger})))}}]),a}(c.a.Component));a(23);var E=function(){return c.a.createElement("div",{id:"services"},c.a.createElement("div",{class:"parallax parallax__servicespage"},c.a.createElement("p",{class:"testHeader testHeader__services"},"Our Services"),c.a.createElement("p",{class:"testParagraph"},"Nunc diam leo, fringilla vulputate elit lobortis, consectetur vestibulum quam. Sed id",c.a.createElement("br",null),"felis ligula. In euismod libero at magna dapibus, in rutrum velit lacinia.",c.a.createElement("br",null),"Etiam a mi quis arcu varius condimentum.")),c.a.createElement("div",{class:"flexServices flexServices__TopSection"},c.a.createElement(d,{cardStyle:"card__servicesTopRow",title:"Column One",titleStyle:"title--grey",body:"Morbi sagittis justo a velit placerat ullamcorper quis quis\r velit. Sed convallis at risus ullamcorper auctor. Praesent quis\r velit neque. Quisque semper porta nisi vitae suscipit. Duis\r lectus magna, ornare ac scelerisque.",imgLink:"/images/4-1.jpg",cardColor:"green",buttonWrapper:"cardButton--hidden"}),c.a.createElement(d,{cardStyle:"card__servicesTopRow",title:"Column Two",titleStyle:"title--grey",body:"Morbi sagittis justo a velit placerat ullamcorper quis quis\r velit. Sed convallis at risus ullamcorper auctor. Praesent quis\r velit neque. Quisque semper porta nisi vitae suscipit. Duis\r lectus magna, ornare ac scelerisque.",buttonText:"Read It",imgLink:"/images/4-2.jpg",buttonClass:"topRowButtons",cardColor:"btn--white"}),c.a.createElement(d,{cardStyle:"card__servicesTopRow",title:"Column Three",titleStyle:"title--grey",body:"Morbi sagittis justo a velit placerat ullamcorper quis quis\r velit. Sed convallis at risus ullamcorper auctor. Praesent quis\r velit neque. Quisque semper porta nisi vitae suscipit. Duis\r lectus magna, ornare ac scelerisque.",buttonText:"Button Green",imgLink:"/images/4-3.jpg",buttonClass:"topRowButtons",cardColor:"green",buttonWrapper:"cardButton--hidden"}),c.a.createElement(d,{cardStyle:"card__servicesTopRow",title:"Column Four",titleStyle:"title--grey",body:"Morbi sagittis justo a velit placerat ullamcorper quis quis\r velit. Sed convallis at risus ullamcorper auctor. Praesent quis\r velit neque. Quisque semper porta nisi vitae suscipit. Duis\r lectus magna, ornare ac scelerisque.",buttonText:"Details",imgLink:"/images/4-4.jpg",buttonClass:"topRowButtons",cardColor:"btn--white"})),c.a.createElement("div",{class:"flexServices"},c.a.createElement(d,{cardStyle:"card__servicesBottomRow",title:"One Big Column",titleStyle:"title--alignLeft title--grey",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor eros eget eros maximus, ut cursus sem euismod. Donec iaculis tristique odio at consectetur. Nullam dignissim varius suscipit. Sed in leo sit amet velit finibus pretium. Vivamus dictum nisi ac fermentum interdum. Vestibulum vel mauris at erat mattis accumsan et ac lorem. Cras non venenatis orci, sed tincidunt massa. Duis nisl lectus, auctor eu sodales at, dignissim eu orci. Sed vitae venenatis magna, in blandit metus. Praesent volutpat cursus rhoncus. Aenean arcu diam, suscipit ac neque in, sollicitudin convallis orci.\r <br>\r Fusce eu porta massa, sed tincidunt turpis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus a urna tellus. Integer pharetra vitae nisi et lacinia. Morbi sagittis justo a velit placerat ullamcorper quis quis velit. Sed convallis at risus ullamcorper auctor. Praesent quis velit neque. Quisque semper porta nisi vitae suscipit. Duis lectus magna, ornare ac scelerisque quis, maximus eget nisi.",buttonText:"Read More",imgLink:"/images/4-5.jpg",buttonWrapper:"btn__services--leftjustify",cardColor:"btn--white"})))},y=a(10),f=a(9),C=(a(24),function(e){Object(r.a)(a,e);var t=Object(n.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).handleChange=function(e){s.setState(Object(f.a)({},e.target.name,e.target.value))},s.state={name:"",email:"",character:"",tableList:[]},s.handleChange=s.handleChange.bind(Object(b.a)(s)),s.handleClick=s.handleClick.bind(Object(b.a)(s)),s.baseState=s.state,s}return Object(s.a)(a,[{key:"resetState",value:function(){this.setState({name:""}),this.setState({email:""}),this.setState({character:""})}},{key:"handleClick",value:function(e){e.preventDefault();var t={name:this.state.name,email:this.state.email,character:this.state.character};this.setState({tableList:[].concat(Object(y.a)(this.state.tableList),[t])}),this.resetState()}},{key:"render",value:function(){return c.a.createElement("div",{id:"contact"},c.a.createElement("div",{class:"parallax parallax__contactpage"},c.a.createElement("div",{class:"contactBody"},c.a.createElement("h2",{class:"testHeader"},"Contact Form"),c.a.createElement("div",{class:"contactSubtext"},c.a.createElement("span",null,"Nunc diam leo, fringilla vulputate elit lobortis, consectetur vestibulum quam. Sed id"),c.a.createElement("span",null,"felis ligula. In euismod libero at magna dapibus, in rutrum velit lacinia."),c.a.createElement("span",null,"Etiam a mi quis arcu varius condimentum.")),c.a.createElement("form",{class:"btn-center",onSubmit:this.handleClick},c.a.createElement("div",{class:"contactInfo"},c.a.createElement("input",{type:"text",name:"name",placeholder:"Name",value:this.state.name,onChange:this.handleChange}),c.a.createElement("input",{type:"text",name:"email",placeholder:"Email",value:this.state.email,onChange:this.handleChange}),c.a.createElement("input",{type:"text",name:"character",placeholder:"Character",value:this.state.character,onChange:this.handleChange})),c.a.createElement("div",{class:"messageInfo"},c.a.createElement("textarea",null),c.a.createElement("button",{type:"submit",class:"btn btn--white"},"Submit"))))),c.a.createElement("div",{class:"flex__container"},c.a.createElement("div",{class:"gridTable"},c.a.createElement("div",{class:"tableEntries"},c.a.createElement("strong",null,"Name")),c.a.createElement("div",{class:"tableEntries"},c.a.createElement("strong",null,"Email")),c.a.createElement("div",{class:"tableEntries"},c.a.createElement("strong",null,"Character")),this.state.tableList.map(function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{class:"tableEntries"},e.name),c.a.createElement("div",{class:"tableEntries"},e.email),c.a.createElement("div",{class:"tableEntries"},e.character))}))))}}]),a}(c.a.Component)),S=function(e){Object(r.a)(a,e);var t=Object(n.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(v,null),c.a.createElement(g,null),c.a.createElement(m,null),c.a.createElement(p,null),c.a.createElement(E,null),c.a.createElement(C,null))}}]),a}(c.a.Component),q=document.getElementById("root");u.a.render(c.a.createElement(S,null),q)}],[[11,1,2]]]);
//# sourceMappingURL=main.b47c60d6.chunk.js.map
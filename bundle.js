/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var ReactDOM = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var Home = __webpack_require__(178);
	var HomeHeader = __webpack_require__(182);
	var MainFoot = __webpack_require__(185);
	var Main = React.createClass({displayName: "Main",
		render:function(){
			return (
				React.createElement("div", {className: "rootBox"}, 
					React.createElement("header", {id: "header"}, "header"), 
					React.createElement("section", {id: "content"}), 
					React.createElement("footer", {id: "footer"})
				)
			)
		}
	});


	ReactDOM.render(React.createElement(Main, null),document.getElementById("app"));
	ReactDOM.render(React.createElement(HomeHeader, null),document.getElementById("header"));
	ReactDOM.render(React.createElement(Home, null),document.getElementById("content"));
	ReactDOM.render(React.createElement(MainFoot, null),document.getElementById("footer"));

/***/ },

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var ProList = __webpack_require__(179);
	var Home = React.createClass({displayName: "Home",
		getInitialState:function(){
			return {
				imgsList:""
			}
		},
		componentWillMount:function(){
			var that = this;
			$.ajax({
				method:"get",
				url:"http://datainfo.duapp.com/shopdata/getBanner.php?callback=",
				dataType:"JSONP",
				success:function(data){	
					console.log(data)
	/*				var result = data;
					var data = eval(result);
					var len = data.length;
					var arr = [];
					for(var i = 0; i　< len; i++){
						arr.push(<div className="swiper-slide" key={'banner'+i}><img src={JSON.parse(data[i].goodsBenUrl)[0]}/></div>)
					}
					console.log(arr)
					that.setState({
						imgsList:arr
					})*/
				}
			});
		},	
		render:function(){
			return (
				React.createElement("div", {className: "homeContent"}, 				
					React.createElement("div", {className: "swiper-container"}, 
						React.createElement("div", {className: "swiper-wrapper"}, 
							this.state.imgsList
						), 
						React.createElement("div", {className: "swiper-pagination"})
					), 
					React.createElement("ul", {className: "homeKind"}, 
						React.createElement("li", null, 
							React.createElement("i", {className: "iconfont"}, ""), 
							React.createElement("p", null, "运动")
						), 
						React.createElement("li", null, 
							React.createElement("i", {className: "iconfont"}, ""), 
							React.createElement("p", null, "服饰")
						), 
						React.createElement("li", null, 
							React.createElement("i", {className: "iconfont"}, ""), 
							React.createElement("p", null, "鞋包")
						), 
						React.createElement("li", null, 
							React.createElement("i", {className: "iconfont"}, ""), 
							React.createElement("p", null, "美妆")
						), 
						React.createElement("li", null, 
							React.createElement("i", {className: "iconfont"}, ""), 
							React.createElement("p", null, "配饰")
						), 
						React.createElement("li", null, 
							React.createElement("i", {className: "iconfont"}, ""), 
							React.createElement("p", null, "生活")
						)
					), 
					React.createElement(ProList, {mountType: "home"})						
				)			
			)
		},
		componentDidUpdate:function(){
			var swiper = new Swiper(".swiper-container",{
				"pagination":".swiper-pagination",
				autoplay:2000,
				loop:true,
				autoplayDisableOnInteraction:false
			});

		}
	});

	module.exports = Home;

/***/ },

/***/ 179:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var ReactDOM = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var ProList = React.createClass({displayName: "ProList",
		getInitialState:function(){
			/*console.log("test",this.props.mountType)*/
			return {
				mountType:this.props.mountType,
				proList:""
			}
		},
		componentWillMount:function(){
			var that = this;
			$.ajax({
				method:"get",
				url:"http://datainfo.duapp.com/shopdata/getGoods.php?callback=",
				dataType:"JSONP",
				success:function(data){				
					var result = data;
					var data = eval(result);
					var len = data.length;
					var arr = [];
					for(var i = 0; i　< len; i++){
						arr.push(React.createElement("li", {key: 'item0'+i, "data-type": that.state.mountType, className: "proItem", "data-goodsID": data[i].goodsID}, 
						React.createElement("div", {className: "proImg"}, 
							React.createElement("img", {src: data[i].goodsListImg})
						), 
						React.createElement("div", {className: "proInfo"}, 
							React.createElement("p", null, data[i].goodsName), 
							React.createElement("p", null, React.createElement("span", null, "￥", React.createElement("b", null, data[i].discount==0?data[i].price:data[i].price*data[i].discount/10)), " ", React.createElement("del", null, "￥", data[i].price)), 
							React.createElement("p", null, data[i].discount == 0 ? "不打": data[i].discount, "折"), 
							React.createElement("span", {className: "cartBtn", "data-goodsID": data[i].goodsID}, React.createElement("i", {className: "iconfont"}, ""))
						)
					))
					}
					that.setState({
						proList:arr
					})
				}
			})
		},
		render:function(){
			return(
		
						React.createElement("ul", {id: "proList"}, 
							this.state.proList
						)
		
			)
		},
		componentDidUpdate:function(){
			var that = this;
			$(".proItem").on("click",function(){			
				var goodsID = $(this).attr("data-goodsID");
				var Detail = __webpack_require__(180);
				var DetailHeader = __webpack_require__(181);
				ReactDOM.unmountComponentAtNode(document.getElementById("header"));
				ReactDOM.render(React.createElement(DetailHeader, {type: that.state.mountType}),document.getElementById("header"));
				ReactDOM.unmountComponentAtNode(document.getElementById("content"));
				ReactDOM.render(React.createElement(Detail, {goodsID: goodsID}),document.getElementById("content"));
			})
		}
	});

	module.exports = ProList;

/***/ },

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var Detail = React.createClass({displayName: "Detail",
		componentWillMount:function(){
			$.ajax({
				method:"get",
				url:"http://datainfo.duapp.com/shopdata/getGoods.php?callback=",
				data:{
					goodsID:this.props.goodsID
				},
				dataType:"JSONP",
				success:function(data){
					var result = data;
					var data = eval(result);
					console.log("DETAIL",data)
				}
			})
		},
		render:function(){
			console.log(this.props.goodsID)
			return (
				React.createElement("div", null, 
				"详情", this.props.goodsID
				)
				
			)
		}
	});

	module.exports = Detail;

/***/ },

/***/ 181:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var ReactDOM = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var DetailHeader = React.createClass({displayName: "DetailHeader",
		backHandler:function(){
			console.log(this.props.type)
			var content = document.getElementById("content");
			var header = document.getElementById("header");
			if(this.props.type == "home"){
				var Home = __webpack_require__(178);
					var HomeHeader = __webpack_require__(182);
					ReactDOM.unmountComponentAtNode(header);
					ReactDOM.render(React.createElement(HomeHeader, null),header);
					ReactDOM.unmountComponentAtNode(content);
					ReactDOM.render(React.createElement(Home, null),content);
			}else if(this.props.type == "kind"){
				var Kind = __webpack_require__(183);
					var KindHeader = __webpack_require__(184);
					ReactDOM.unmountComponentAtNode(header);
					ReactDOM.render(React.createElement(KindHeader, null),header);
					ReactDOM.unmountComponentAtNode(content);
					ReactDOM.render(React.createElement(Kind, null),content);
			}
		},
		render:function(){
			return (
				React.createElement("ul", null, 
					React.createElement("li", {className: "logo", id: "back", onClick: this.backHandler}, 
						React.createElement("i", {className: "iconfont"}, "")
					), 
					React.createElement("li", null, 
						"产品详情"
					), 
					React.createElement("li", null
						
					)
				)
				
			)
		}
	});

	module.exports = DetailHeader;

/***/ },

/***/ 182:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var HomeHeader = React.createClass({displayName: "HomeHeader",
		render:function(){
			return (
				React.createElement("div", null, 
				"首页"
				)
				
			)
		}
	});

	module.exports = HomeHeader;

/***/ },

/***/ 183:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var ProList = __webpack_require__(179);
	var Kind = React.createClass({displayName: "Kind",
		render:function(){
			
			return (
				React.createElement("div", {className: "kindContent"}, 
				React.createElement(ProList, {mountType: "kind"})
				)
				
			)
		}
	});

	module.exports = Kind;

/***/ },

/***/ 184:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var KindHeader = React.createClass({displayName: "KindHeader",
		render:function(){
			return (
				React.createElement("div", null, 
				"分类"
				)
				
			)
		}
	});

	module.exports = KindHeader;

/***/ },

/***/ 185:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var ReactDOM = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var MainFoot = React.createClass({displayName: "MainFoot",
		getInitialState:function(){
			return {
				activeIndex : 0
			}
		},
		clickHandle:function(e){
	//		console.log(e.target.getAttribute('data-id'));
			var ev = e | window.event;
			var currentIndex = e.target.getAttribute("data-id")*1;
			this.setState({
				activeIndex:currentIndex
			});
			var content = document.getElementById("content");
			var header = document.getElementById("header");
			switch (currentIndex){
				case 0:
					var Home = __webpack_require__(178);
					var HomeHeader = __webpack_require__(182);
					ReactDOM.unmountComponentAtNode(header);
					ReactDOM.render(React.createElement(HomeHeader, null),header);
					ReactDOM.unmountComponentAtNode(content);
					ReactDOM.render(React.createElement(Home, null),content);
					break;
				case 1:
					var Kind = __webpack_require__(183);
					var KindHeader = __webpack_require__(184);
					ReactDOM.unmountComponentAtNode(header);
					ReactDOM.render(React.createElement(KindHeader, null),header);
					ReactDOM.unmountComponentAtNode(content);
					ReactDOM.render(React.createElement(Kind, null),content);
					break;
				case 2:
					var Cart = __webpack_require__(186);
					var CartHeader = __webpack_require__(187);
					ReactDOM.unmountComponentAtNode(header);
					ReactDOM.render(React.createElement(CartHeader, null),header);
					ReactDOM.unmountComponentAtNode(content);
					ReactDOM.render(React.createElement(Cart, null),content);
					break;
				case 3:
					var User = __webpack_require__(188);
					var UserHeader = __webpack_require__(189);
					ReactDOM.unmountComponentAtNode(header);
					ReactDOM.render(React.createElement(UserHeader, null),header);
					ReactDOM.unmountComponentAtNode(content);
					ReactDOM.render(React.createElement(User, null),content);
					break;
				default:
					break;
			}
		},
		render:function(){
			return (
				React.createElement("ul", null, 
					React.createElement("li", {className: this.state.activeIndex == 0? 'active':'', onClick: this.clickHandle, "data-id": "0"}, 
						"首页"
					), 
					React.createElement("li", {className: this.state.activeIndex == 1? 'active':'', onClick: this.clickHandle, "data-id": "1"}, 
						"分类"
					), 
					React.createElement("li", {className: this.state.activeIndex == 2? 'active':'', onClick: this.clickHandle, "data-id": "2"}, 
						"购物车"
					), 
					React.createElement("li", {className: this.state.activeIndex == 3? 'active':'', onClick: this.clickHandle, "data-id": "3"}, 
						"我的"
					)
				)
				
			)
		}
	});

	module.exports = MainFoot;

/***/ },

/***/ 186:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var Cart = React.createClass({displayName: "Cart",
		render:function(){
			return (
				React.createElement("div", null, 
				"购物车"
				)
				
			)
		}
	});

	module.exports = Cart;

/***/ },

/***/ 187:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var CartHeader = React.createClass({displayName: "CartHeader",
		render:function(){
			return (
				React.createElement("div", null, 
				"购物车"
				)
				
			)
		}
	});

	module.exports = CartHeader;

/***/ },

/***/ 188:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var User = React.createClass({displayName: "User",
		render:function(){
			return (
				React.createElement("div", null, 
				"用户中心"
				)
				
			)
		}
	});

	module.exports = User;

/***/ },

/***/ 189:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var UserHeader = React.createClass({displayName: "UserHeader",
		render:function(){
			return (
				React.createElement("div", null, 
				"我的"
				)
				
			)
		}
	});

	module.exports = UserHeader;

/***/ }

/******/ });
var React = require("react");
var ReactDOM = require("react-dom");
var MainFoot = React.createClass({
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
				var Home = require("./Home");
				var HomeHeader = require("./HomeHeader");
				ReactDOM.unmountComponentAtNode(header);
				ReactDOM.render(<HomeHeader/>,header);
				ReactDOM.unmountComponentAtNode(content);
				ReactDOM.render(<Home/>,content);
				break;
			case 1:
				var Kind = require("./Kind");
				var KindHeader = require("./KindHeader");
				ReactDOM.unmountComponentAtNode(header);
				ReactDOM.render(<KindHeader/>,header);
				ReactDOM.unmountComponentAtNode(content);
				ReactDOM.render(<Kind/>,content);
				break;
			case 2:
				var Cart = require("./Cart");
				var CartHeader = require("./CartHeader");
				ReactDOM.unmountComponentAtNode(header);
				ReactDOM.render(<CartHeader/>,header);
				ReactDOM.unmountComponentAtNode(content);
				ReactDOM.render(<Cart/>,content);
				break;
			case 3:
				var User = require("./User");
				var UserHeader = require("./UserHeader");
				ReactDOM.unmountComponentAtNode(header);
				ReactDOM.render(<UserHeader/>,header);
				ReactDOM.unmountComponentAtNode(content);
				ReactDOM.render(<User/>,content);
				break;
			default:
				break;
		}
	},
	render:function(){
		return (
			<ul>
				<li className={this.state.activeIndex == 0? 'active':''} onClick={this.clickHandle} data-id = "0">
					首页
				</li>
				<li className={this.state.activeIndex == 1? 'active':''} onClick={this.clickHandle}  data-id = "1">
					分类
				</li>
				<li className={this.state.activeIndex == 2? 'active':''} onClick={this.clickHandle}  data-id = "2">
					购物车
				</li>
				<li className={this.state.activeIndex == 3? 'active':''} onClick={this.clickHandle}  data-id = "3">
					我的
				</li>
			</ul>
			
		)
	}
});

module.exports = MainFoot;
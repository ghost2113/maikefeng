var React = require("react");
var ProList = require("./ProList");
var Home = React.createClass({
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
			<div className="homeContent">				
				<div className="swiper-container">
					<div className="swiper-wrapper">
						{this.state.imgsList}
					</div>
					<div className="swiper-pagination"></div>
				</div>
				<ul className="homeKind">
					<li >
						<i className="iconfont">&#xe629;</i>
						<p>运动</p>
					</li>
					<li>
						<i className="iconfont">&#xe60d;</i>
						<p>服饰</p>
					</li>
					<li>
						<i className="iconfont">&#xe602;</i>
						<p>鞋包</p>
					</li>
					<li>
						<i className="iconfont">&#xe607;</i>
						<p>美妆</p>
					</li>
					<li>
						<i className="iconfont">&#xe601;</i>
						<p>配饰</p>
					</li>
					<li>
						<i className="iconfont">&#xe601;</i>
						<p>生活</p>
					</li>
				</ul>
				<ProList mountType="home"/>						
			</div>			
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
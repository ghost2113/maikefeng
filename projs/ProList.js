var React = require("react");
var ReactDOM = require("react-dom");
var ProList = React.createClass({
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
					arr.push(<li key={'item0'+i}  data-type={that.state.mountType} className="proItem" data-goodsID = {data[i].goodsID}>
					<div className="proImg">
						<img src={data[i].goodsListImg}/>
					</div>
					<div className="proInfo">
						<p>{data[i].goodsName}</p>
						<p><span>￥<b>{data[i].discount==0?data[i].price:data[i].price*data[i].discount/10}</b></span> <del>￥{data[i].price}</del></p>
						<p>{data[i].discount == 0 ? "不打": data[i].discount}折</p>
						<span className="cartBtn" data-goodsID = {data[i].goodsID}><i className="iconfont">&#xe602;</i></span>
					</div>
				</li>)
				}
				that.setState({
					proList:arr
				})
			}
		})
	},
	render:function(){
		return(
			<div id="wrapperlo">
				<div id="iscroll">
					<div id="pullDown">下拉刷新</div>
					<ul id="proList">
						{this.state.proList}
					</ul>
					<div id="pullUp">上啦加载</div>
				</div>
			</div>
		)
	},
	componentDidUpdate:function(){
		var that = this;
		$(".proItem").on("click",function(){			
			var goodsID = $(this).attr("data-goodsID");
			var Detail = require("./Detail");
			var DetailHeader = require("./DetailHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<DetailHeader type={that.state.mountType}/>,document.getElementById("header"));
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Detail goodsID={goodsID}/>,document.getElementById("content"));
		})
		$(".cartBtn").on("click",function(e){
			e.stopPropagation();
			console.log($(this).attr("data-goodsID"))
			var Register = require("./Register");
			//var RegisterHeader = require("./RegisterHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("app"));
		//  ReactDOM.render(<RegisterHeader type={that.state.mountType}/>,document.getElementById("header"));
			ReactDOM.unmountComponentAtNode(document.getElementById("app"));
			ReactDOM.render(<Register />,document.getElementById("app"));
		})
	}
});

module.exports = ProList;
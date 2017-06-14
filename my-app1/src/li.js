import React, { Component } from 'react';
//子组件
class Li extends Component {
	constructor(props){
		//有constructor，必有super()，不然会报错
		super(props)//父组件的数据传递用props,this.props是整个数据对象都拿到手
		//前提是父组件自己更改自己的数据
		//1.数据接收后，这里的this.props只有第一次接受的数据
	}
	render(){
		//2.这里的this.props才会是时时拿到的是父组件传递过来的数据
		return(
			<li>{this.props.content}</li>
		)
	}
}

export default Li;
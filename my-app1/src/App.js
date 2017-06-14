import React,{Component} from 'react';
import Li from './li';
//父组件，构造函数。类式继承(数字母大写)
class App extends Component{
	//属性继承
	constructor(){
		super();//属性继承，可传递数据用props
		//数据，初始化状态（第一颗虚拟DOM树）state和setState是一对
		this.state = {
			title:'我是小列表',
			arr:[1,2,3,4,5]
		};
		//用bind修改this指向这个实例化对象，bind类似apply,但是不会调用执行
		this.click = this.click.bind(this);
	}
	//(提供)函数，必须将要虚拟dom树return出去
	render(){
		//对象解构
		let {arr,title} = this.state;
		//此处存放逻辑代码，遍历数组，将子组件的dom数据一一存放在新的数组里
		let arr1 = arr.map((e,i)=>{
			//必须有key值且不可重复，可以为对象的形式存放
			let data = {
				key:+new Date + i,
				content:e
			}
			//语法糖，扩展（缩写）||[...data]
			//父组件数据传递给子组件：在子组件的JSX（<Li/>）模型下添加一个自定义的属性。
			return <Li {...data} />//子组件的jsx模型
		});
		
		//存放渲染视图
		return (
			<div>
				<h1>{title}</h1>
//				事件必须是小驼峰{}里是this.事件名
				<button onClick={this.click}>我是按钮</button>
				<ul>
					{arr1}//此处数据用{}，arr1是存着标签的数组，自动会把数组的每一个一一解析出来成虚拟dom树
				</ul>
			</div>
		)
	}
	//事件函数
	click(){
		//没修改this指向之前，事件函数的this的指向为null
		
		//对象解构
		let {arr} = this.state;
		arr.push(arr.length);
		//监听数据变化并更改数据，渲染视图（第二颗DOM树，对比第一颗DOM树，只更改数据不同的视图）
		this.setState({
			arr : arr
		});
	}
}
//默认的输出{App}也可这么写
export default App;
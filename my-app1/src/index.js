import React from 'react';//内部文件
import ReactDOM from 'react-dom';//内部文件
import App from './App';//自己的根组件
import registerServiceWorker from './registerServiceWorker';
//将虚拟dom输出在#root下成为真正的dom
ReactDOM.render(<App />,document.getElementById('root'));
registerServiceWorker();//登记服务工作，render(提供)


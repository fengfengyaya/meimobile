import React,{Component} from 'react'
import  './header.scss'


class Header extends Component{
	render(){
		return <ul className='header'>
			<li className='li1'><span className='loginbtn'>登录</span></li>
			<li className='li2'><div><strong><span className='iconfont'>&#xe68d;</span>MICHAEL KORS</strong></div></li>
			<li className='li3'><div><span className='iconfont'>&#xe63a;</span></div></li>
		</ul>
	}
	
}

export default Header
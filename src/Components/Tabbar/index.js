import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import  './tabbar.scss'

class Tabbar extends Component{
	render(){
		return <div className='nav'>
			<ul className='ul'>
				<li>
					<NavLink to='/index' activeClassName='active' >推荐</NavLink>
				</li>
				<li>
					<NavLink to='/crossborder' activeClassName='active'>海外</NavLink>
				</li>
				<li>
					<NavLink to='/women' activeClassName='active'>女士</NavLink>
				</li>
				<li>
					<NavLink to='/men' activeClassName='active'>男士</NavLink>
				</li>
				<li>
					<NavLink to='/cosmetics' activeClassName='active'>美妆</NavLink>
				</li>
				<li>
					<NavLink to='/lifestyle' activeClassName='active'>家居</NavLink>
				</li>
				<li>
					<NavLink to='/kids' activeClassName='active'>婴童</NavLink>
				</li>
				<li>
					<NavLink to='/upcoming' activeClassName='active'>即将上新</NavLink>
				</li>
			</ul>
		</div>
	}
}

export default Tabbar
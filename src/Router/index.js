import React from 'react'
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'
import App from '../App.js'
import Index from '../Views/Index'
import Crossborder from '../Views/Crossborder'
import Women from '../Views/Women'
import Men from '../Views/Men'
import Cosmetics from '../Views/Cosmetics'
import Lifestyle from '../Views/Lifestyle'
import Kids from '../Views/Kids'
import Upcoming from '../Views/Upcoming'
//import {Provider} from 'react-redux'
//import store from '../Redux/store'
document.documentElement.style.fontSize = window.innerWidth/750*100+'px'

const router = (
	
		<BrowserRouter>
			<App>
				<Switch>
					<Route path='/index' component={Index} /> 
					<Route path='/crossborder' component={Crossborder} /> 
					<Route path='/women' component={Women} /> 
					<Route path='/men' component={Men} /> 
					<Route path='/cosmetics' component={Cosmetics} /> 
					<Route path='/lifestyle' component={Lifestyle} /> 
					<Route path='/kids' component={Kids} /> 
					<Route path='/upcoming' component={Upcoming} /> 
					<Redirect from='/' to='/index' />
				</Switch>
			</App>
		</BrowserRouter>
	
	
)

export default router
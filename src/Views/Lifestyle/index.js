import React,{Component} from 'react'
import axios from 'axios'
import './lifestyle.scss'
import Household from './Household'
import Fashing from './Fashing'

class Lifestyle extends Component{
	state={
		url:'',
		content1:'',
		content2:'',
		content3:'',
		urldatalist:[],
		page:2
	}
	render(){
		return <div className='lifestyle'>
			<Household></Household>
			<Fashing></Fashing>
			<ul className='detailul'>
				{
					this.state.urldatalist.map(item=>
						<li key={item.eventId}>
							<img src={item.imageUrl} alt=''/>
							<div>
								<h3 className='t4'>{item.englishName}</h3>
								<h6 className='t5'>{item.chineseName}</h6>
								<h6 className='t6'>{item.discountText}</h6>
							</div>
						</li>	
					)
				}
			</ul>
			<footer>
				<p className='p1'>
					400 - 664 - 6698
				</p>
				<ul>
					<li>首页</li>
					<li>客户端</li>
					<li>登录</li>
					<li>注册</li>
				</ul>
				<p className='p2'>
					浙ICP备16004860号-1
				</p>
			</footer>
		</div>
	}
	componentDidMount(){
		axios({
			url:'http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000001&platform_code=PLATEFORM_H5'
		}).then(res=>{
//			console.log(res.data.banners[0].main_title)
			this.setState({
				url:res.data.banners[0].main_image,
				content1:res.data.banners[0].main_title,
				content2:res.data.banners[0].sub_title,
				content3:res.data.banners[0].description
			})
		})
		axios({
			url:'http://www.mei.com/appapi/silo/eventForH5?categoryId=lifestyle&pageIndex=1&timestamp=1561776501778&summary=f21439eb3cb5e92f158129445a437a4b&platform_code=H5'
		}).then(res=>{
//			console.log(res.data.eventList)
			this.setState({
				urldatalist:res.data.eventList
			})
		})
		window.onscroll = ()=>{
			
			//懒加载
			if(document.documentElement.offsetHeight-document.documentElement.scrollTop === document.documentElement.clientHeight){
//				console.log('shuaxin')
				if(this.state.urldatalist.length%20!==0){
					return
				}
				axios({
					url:`http://www.mei.com/appapi/silo/eventForH5?categoryId=lifestyle&pageIndex=${this.state.page}&timestamp=1561776501778&summary=f21439eb3cb5e92f158129445a437a4b&platform_code=H5`
				}).then(res=>{
//					console.log(res.data.eventList)
					
					this.setState({
						urldatalist:[...this.state.urldatalist,...res.data.eventList],
						page:this.state.page+1
					})
//					console.log(this.state.urldatalist)
				})
			}
			//吸顶
			if(document.documentElement.scrollTop>0){
				document.querySelector('.header').style.position = 'fixed'
				document.querySelector('.header').style.top = 0
				document.querySelector('.header').style.left = 0
				document.querySelector('.header').style.background = '#fff'
				document.querySelector('.nav').style.position = 'fixed'
				document.querySelector('.nav').style.top = '.88rem'
				document.querySelector('.nav').style.left = 0
				document.querySelector('.nav').style.background = '#fff'
			}else{
				document.querySelector('.header').style.background = 'transparent'
				document.querySelector('.nav').style.background = 'transparent'
				
			}
		}
		
	}
	
}

export default Lifestyle




import React,{Component} from 'react'
import {Carousel} from 'antd-mobile';
import axios from 'axios';
import css from './index.module.css';


class Child extends Component{

	state = {
		datalist:[]
	}
	
	render(){
		return <div className={css.swiperchild}>
			<Carousel
				autoplay={false}
				infinite
				dotStyle={{
					display:'inline-block',
					position: 'absolute',
					bottom: '.906667rem',
					transition: '.3s',
					transform: 'translateZ(0)',
					width: '.133333rem',
					height: '.133333rem',
					borderRadius:'20%',
					margin: '0 .066667rem',
					background:'#fff',
    				opacity: .5,

				}}
				dotActiveStyle={{
					display:'inline-block',
					position: 'relative',
					bottom: '.906667rem',
					transition: '.3s',
					transform: 'translateZ(0)',
					width: '.4rem',
					height: '.133333rem',
					borderRadius:'20%',
					margin: '0 .066667rem',
					background:'#fff',
    				opacity: 1

				}}
				beforeChange={(from, to) => {}}
				afterChange={index => {}}
				>
				{
					this.state.datalist.map(val => (
					<div  key={val.id} className={css.banner}><img src={val.main_image} alt='' className={css.banner_img}  onLoad={() => {
                  // fire window resize event to change height
					window.dispatchEvent(new Event('resize'));
					this.setState({ imgHeight: 'auto' });
                	}}/>
						<div className={css.banner_box}>
							<h3>{val.main_title}</h3>
							<h4>{val.sub_title}</h4>
							<p>{val.description}</p>
						</div>
					</div>
					
				))
				}
			</Carousel>
		</div>
	}

	componentDidMount(){
		axios({
			url:'http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000005&platform_code=PLATEFORM_H5'
		}).then((result)=>{
//			console.log(result)
			this.setState({
				datalist:result.data.banners
			})
//			console.log(this.state.datalist)
		})
	}
}

export default Child
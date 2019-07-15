import axios from 'axios'

const getPromiseList = ()=>{
	return axios({
				url:'http://www.mei.com/appapi/silo/eventForH5?categoryId=crossborder&pageIndex=1&timestamp=1561633112920&summary=e792f4818e35ab5030cbe358dd350edc&platform_code=H5'
			}).then(res=>{
//				this.setState({
//					urldatalist:res.data.eventList
//				})
//				console.log(res.data.eventList)
				return {
					type:'updateCrossborderList',
					payload:res.data.eventList
				}
			})
}

export {getPromiseList}

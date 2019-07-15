import React,{Component} from 'react';
import axios from 'axios'
import css from './index.module.css'
class Fashing extends Component {
    state={
        datalist:[]
    }
  render(){
    return <div>
      <div>
        {
            this.state.datalist.map(item=>(
                <img src={item.imageUrl} alt='' key={this.state.datalist.length} className={css.pic}/>
            ))
        }
      </div>
    </div>
  }
  componentDidMount(){
      axios.get('http://www.mei.com/appapi/cms/cmsDetail/v3?silo=2013000100000000004&ids=2121000100000000291&timestamp=1561595983828&summary=e4431ce016cfb30e639d70975181ffca&platform_code=H5').then(res=>{
//        console.log(res.data.resultList[0])
          this.setState({
                datalist: res.data.resultList[0].data
          })
      })
  }
}


export default Fashing;
import css from './index.module.css'
import React, { Component } from 'react';
import axios from 'axios'
class Mian extends Component {
    state = {
        datal: []
    }
    render() {
        return <div className={css.cate}>
            <ul className={css.fen}>
                <li>
                    {
                        this.state.datal.map((val,index) => (
                            <img src={val.categoryImgStr} alt='' key={this.state.datal[index].categoryTwoId} className={css.fe}/>
                        ))
                    }

                </li>
            </ul>
        </div>
    }
    componentDidMount() {
        axios('http://www.mei.com/appapi/cms/cmsDetail/v3?silo=2013000100000000003&ids=2042000100000000431&timestamp=1561547684202&summary=8e641f81299c00e8b16d9029b1b060a9&platform_code=H5').then(res => {
//          console.log(res.data.resultList[0].data)
            this.setState({
                datal: res.data.resultList[0].data
            })
        })
    }
}


export default Mian;
import css from './index.module.css'
import React, { Component } from 'react';
import axios from 'axios'
class Dress extends Component {
    state = {
        datal: []
    }
    render() {
        return <div className={css.cate}>
            <ul className={css.fen}>
                <li>
                    {
                        this.state.datal.map(val => (
                            <img src={val.categoryImgStr} alt='' key={val.categoryTwoId} className={css.fe}/>
                        ))
                    }

                </li>
            </ul>
        </div>
    }
    componentDidMount() {
        axios('http://www.mei.com/appapi/cms/cmsDetail/v3?silo=2013000100000000005&ids=2120000100000000146&timestamp=1561597782425&summary=a6e963ced693dd820a926cc715356028&platform_code=H5').then(res => {
//          console.log(res.data.resultList[0].data)
            this.setState({
                datal: res.data.resultList[0].data
            })
        })
    }
}


export default Dress;
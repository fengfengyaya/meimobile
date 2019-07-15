import React, { Component } from 'react';
import img4 from './images/4.jpg'
import css from './index.module.css'
import axios from 'axios'
class First extends Component {
    state = {
        eventlist: []
    }
    render() {
        return <div>
            <div>
                <img src={img4} className={css.im} alt=''/>
            </div>
            {
                this.state.eventlist.length?
                    <div className={css.N}>
                        <div className={css.block1}>
                            <div className={css.title}>
                                <p className={css.text}>{this.state.eventlist[0].main_title}</p>
                                <p className={css.time}>{this.state.eventlist[0].sub_title}</p>
                            </div>
                            <div className={css.items}>
                                <img className={css.img} src={this.state.eventlist[0].products[0].picUrl} alt=''/>
                                <img className={css.img} src={this.state.eventlist[0].products[1].picUrl} alt=''/>
                                <div className={css.tag1}>{this.state.eventlist[0].products[0].tag}</div>
                                <div className={css.tag2}>{this.state.eventlist[0].products[1].tag}</div>
                            </div>
                        </div>
                        <div className={css.block2}>
                            <div className={css.title}>
                                <p className={css.text}>{this.state.eventlist[1].main_title}</p>
                                <p className={css.time}>{this.state.eventlist[1].sub_title}</p>
                            </div>
                            <div className={css.items}>
                                <img className={css.img} src={this.state.eventlist[1].products[0].picUrl} alt=''/>
                                <img className={css.img} src={this.state.eventlist[1].products[1].picUrl} alt=''/>
                                <div className={css.tag3}>{this.state.eventlist[1].products[0].tag}</div>
                                <div className={css.tag4}>{this.state.eventlist[1].products[1].tag}</div>
                            </div>
                        </div>
                    </div>
                    : null
            }
        </div>
    }
    componentDidMount() {
        axios.get('http://www.mei.com/appapi/ninenew/operational/v1?credential=').then(res => {
//          console.log(res.data.show2[0])
            this.setState({
                eventlist: res.data.show2
            })
        })
    }
}
export default First;
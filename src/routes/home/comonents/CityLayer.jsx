import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import request from '../../../util/request';
import './CityLayer.css';

export default class CityLayer extends Component {
    constructor(props){
        super(props);
        this.state = {
            hot: [], // 热门城市
            all: {} // 全部城市
        }
    }

    getData = async () =>{
        const data = await request('/city');
        const { hot, all } = data;

        this.setState({
            hot,
            all
        });
        console.log(this.state);
    }

    componentWillMount(){
        this.getData();
        this.popup = document.createElement('div');
        document.body.appendChild(this.popup);
    }
    componentWillUnmount(){
       document.body.removeChild(this.popup);
        this.popup = null;
    }
    render() {
        const {onCloseCityLayer, selectedCity} = this.props;
        const { hot, all } = this.state;
        const alphabetKeys = Object.keys(all);
        return ReactDOM.createPortal(
            <div className="cityLayer">
                <div className="cityLayer__top">
                    <span onClick={()=> {onCloseCityLayer()}}>关闭</span>
                    选择城市
                </div>
                <div className="cityLayer__content">
                    <input type="text" className="cityLayer__search" placeholder="请输入城市名或拼音"/>
                    <div className="cityLayer__current">
                        <span>定位城市</span>
                        <div className="cityLayer__current--wrapper">
                            {hot.map((item) => item.selected && <span className="current" key={item.id}>{item.regionName}</span> )}         
                        </div>
                    </div>
                    <div className="cityLayer__hot">
                        <span>热门城市</span>
                        <div className="cityLayer__hot--wrapper">
                            {hot.map((item)=><span onClick={() => {selectedCity(item.regionName)}} key={item.id} className={item.selected && "current"}>{item.regionName}</span>)}
                        </div>
                    </div>
                </div>
                <ul className="cityLayer__list">
                    {alphabetKeys.map((item)=>(
                        <li id={item} key={item}>
                            <p className="cityLayer__list--letter">{item}</p>
                            <div className="cityLayer__list--citys">
                                {all[item].map((city)=>(
                                    <p className="cityLayer__list--city"  onClick={()=>{selectedCity(city.regionName)}} key={city.id}>{city.regionName}</p>
                                ))}
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="cityLayer__letterList">
                    <span>定位热门</span>
                     <ul>
                         {alphabetKeys.map((item) => <li key={item}><a href={'#'+ item}>{item}</a></li>)}
                     </ul>
                </div>
            </div>,
            this.popup
        );
    }
}

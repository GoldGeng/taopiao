import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import TopBar from './comonents/TopBar';
import MovieItem from './comonents/MovieItem';
import Slider from './comonents/Slide';
import TabMenu from '../../components/TabMenu';
import CityLayer from './comonents/CityLayer';
import request from '../../util/request';
import './index.css';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            city: '', // 当前城市
            poster: [], // slide 海报
            movie: [], // 当前热映电影
            cityLayerVisible: false // 城市浮层是否展现
        };

        this.onClickCity = this.onClickCity.bind(this);
        this.onCloseCityLayer = this.onCloseCityLayer.bind(this);
    }
    componentWillMount(){
        this.getData();
    }
    getData = async () => {
        const data = await request('/index');
        const { city, poster, movie } = data;

        this.setState({
            city,
            poster,
            movie
        });

    }
    onClickCity () {
        let isShow = this.state.cityLayerVisible;
        this.setState({
            cityLayerVisible: !isShow
        });
        console.log(this.state.cityLayerVisible);
    }
    selectedCity (city) {
        this.setState({
            city
        });
    }
    onCloseCityLayer () {
        this.setState({
            cityLayerVisible: false
        });
    }
    render() {
        const {city, poster, movie, cityLayerVisible} = this.state;
        const topBarProps = {
            onClickCity: this.onClickCity,
            city
        }
        const cityProps = {
            onCloseCityLayer: this.onCloseCityLayer,
            selectedCity: this.selectedCity.bind(this)
        }
        return (
            <div className="home">
               {/* 顶部 */}
               <TopBar {...topBarProps}/>
               {/* 滚动部位 */}
               <div className="home__slide">
                    <div className="home__slideWrap">
                         <Slider/>
                    </div>
               </div>
               {/* 展示 */}
               <ul className="home__content">
                    
                    {movie.map( item => <li key={item.name}><Link to="/"><MovieItem data={item}/></Link></li>)}
               </ul>
               {/* 底部导航 */}
               <TabMenu current="movie"/>
               {/* 城市选择层 */}
               {cityLayerVisible && <CityLayer {...cityProps}/>}
            </div>
        );
    }
}

export default Home;
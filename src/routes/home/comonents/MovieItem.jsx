import React, { Component } from 'react';
import './MovieItem.css';

const MovieItem = ({data}) => {
    // console.log(data);
    return (
        <div className="movieItem">
            <div className="movieItem__poster">
                <img src={data.poster}/>
            </div>
            <div className="movieItem__detail">
                <div className="movieItem__name">{data.name}</div>
                <div className="movieItem__score">观众评分 <span>{data.score}</span></div>
                <div className="movieItem__director">导演: {data.director}</div>
                <div className="movieItem__actor">主演: {data.actor}</div>
                <div className="movieItem__tag">
                    {
                        data.tags.map((tag, i) => {
                            if (i%2) {
                                return <span key={tag} className="tag tag-blue">{tag}</span>
                            }
                            return <span key={tag} className="tag tag-red">{tag}</span>
                        })
                    }
                    
                </div>
            </div>
            <div className="movieItem__btn">
                <button>购票</button>
                <span>9.9元起</span>
            </div>
        </div>
    );
};
export default MovieItem;
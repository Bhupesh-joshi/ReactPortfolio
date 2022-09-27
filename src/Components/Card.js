import React from 'react';

const Card = (props) => {
    return (
        <>
                <div className="portfolio-item padd-15">
                    <div className="portfolio-item-inner shadow-dark">
                        <div className="portfolio-content">
                            <img src={props.img} className="card-img-top" alt='props.img' />
                            <h5 className="portfolio-card-title">{props.title}</h5>
                            <p className='portfolio-description'>{props.description}</p>
                            
                                <a href={props.liveDemo}>
                                    <div className='portfolio-demo-link'> Live Demo </div>
                                </a>
                                <a href={props.github}>
                                    <div className='portfolio-demo-link' style={{margin: 0}}> GitHub </div>
                                </a>
                            
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Card

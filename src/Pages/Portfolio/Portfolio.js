import React from 'react';
import Card from '../../Components/Card';
import CardData from '../../Components/CardData';
import './Portfolio.css'

const Portfolio = () => {
  return (
    <>
      <section className="portfolio active section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Portfolio</h2>
            </div>
          </div>
          <div className="row">
            <div className="portfolio-heading padd-15">
              <h2>My Last Projects :</h2>
            </div>
          </div>

          <div className="row">
          {
            CardData.map((val, index) => {
              return <Card key={index}
                img={val.img}
                title={val.title}
                description={val.description}
                liveDemo={val.liveDemo}
                github={val.github}
              />
            })
          }
          </div>

        </div>
      </section>
    </>
  )
}

export default Portfolio

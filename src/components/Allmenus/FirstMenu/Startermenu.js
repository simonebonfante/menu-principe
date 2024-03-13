import React from 'react'
import { Link } from 'react-router-dom'
import bgone from '../../../assets/images/background/bg-16.png'
import bgtwo from '../../../assets/images/background/bg-17.png'
import bgthree from '../../../assets/images/background/bg-18.png'

const menu = require('../../../menu.json');
const images = require.context("../../../assets/images/resource/", true);
function Startermenu() {
  console.log(menu);
  const isOdd = number => number % 2 !== 0;

  return (
    <>
      {menu.menu.map((category, index) => {
        const imagePath = images(`./${category.bg}`);
        
        if (!isOdd(index)) {
          const section = <section className={`menu-one ${index === 0 ? 'first-item-menu': ''}`} key={index}>
            <div className="right-bg"><img src={bgone} alt="" title="" /></div>
            <div className="auto-container">
              <div className="title-box centered">
                <div className="subtitle"><span>{category.category}</span></div>
                <div className="pattern-image">
                  <img src={require('../../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
                </div>
              </div>
              <div className="row clearfix">
                <div className="image-col col-lg-7 col-md-12 col-sm-12">
                  <div className="inner">
                    <div className="image"><img src={imagePath} alt="" /></div>
                  </div>
                </div>
                <div className="menu-col col-lg-5 col-md-12 col-sm-12">
                  <div className="inner">
                    {category.items.map((el, idx) => {
                      return (
                        <div key={idx}>
                          <div className="dish-block">
                            <div className="inner-box">
                              <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">{el.name}</Link></h5></div><div className="price"><span>{el.price}</span></div></div>
                              <div className="text desc"><Link to="#">{el.description}</Link></div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>
          return (
            <>
              {section}
            </>
          )
        } else {
          return (
            <section className="menu-one alternate" key={index}>
              <div className="left-bg"><img src={bgtwo} alt="" title="" /></div>
              <div className="right-bg-2"><img src={bgthree} alt="" title="" /></div>
              <div className="auto-container">
                <div className="title-box centered">
                  <div className="subtitle"><span>{category.category}</span></div>
                  <div className="pattern-image">
                    <img src={require('../../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
                  </div>
                </div>
                <div className="row clearfix">
                  <div className="image-col col-lg-7 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="image"><img src={imagePath} alt="" /></div>
                    </div>
                  </div>
                  <div className="menu-col col-lg-5 col-md-12 col-sm-12">
                    <div className="inner">
                      {category.items.map((el, idx) => {
                        return (
                          <div className="dish-block" key={idx}>
                            <div className="inner-box">
                              <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">{el.name}</Link></h5></div><div className="price"><span>{el.price}</span></div></div>
                              <div className="text desc"><Link to="#">{el.description}</Link></div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )
        }
      })}
    </>
  )
}

export default Startermenu
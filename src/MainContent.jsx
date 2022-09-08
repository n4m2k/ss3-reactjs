import React from 'react'
import PostPreview from './PostPreview'
const MainContent = () => {
  const List = [
    {
      title: 'Man must explore, and this is exploration at its greatest',
      subtitle:'Problems look mighty small from 150 miles up',
      author: 'Start Bootstrap',
      date: 'September 24, 2022'
    },
    {
      title: "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
      author: 'Start Bootstrap',
      date: 'September 18, 2022'
    },
    {
      title: 'Science has not yet mastered prophecy',
      subtitle:'We predict too much for the next year and yet far too little for the next ten.',
      author: 'Start Bootstrap',
      date: 'August 24, 2022'
    },
    {
      title: 'Failure is not an option',
      subtitle:'Many say exploration is part of our destiny, but it’s actually our duty to future generations.',
      author: 'Start Bootstrap',
      date: 'July 8, 2022'
    }
  ]
  return (
    <div>
    <header className="masthead" style={{backgroundImage: 'url("assets/img/home-bg.jpg")'}}>
        <div className="container position-relative px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
                <div className="site-heading">
                <h1>Clean Blog</h1>
                <span className="subheading">A Blog Theme by Start Bootstrap</span>
                </div>
            </div>
            </div>
        </div>
    </header>
    <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
            {
              List.map((element, index) =>{
                return (
                  <PostPreview key={index} title={element.title} subtitle={element.subtitle} author={element.author} date={element.date}></PostPreview>
                )
              })
            }
            {/* Pager*/}
            <div className="d-flex justify-content-end mb-4"><a className="btn btn-primary text-uppercase" href="#!">Older Posts →</a></div>
            </div>
        </div>
    </div>
  </div>
  )
}

export default MainContent
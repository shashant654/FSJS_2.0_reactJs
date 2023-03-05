import React from 'react'

function News({news}) {  // i passed news as props
  return (
    <div className='news-card'>
        <img src={news.urlToImage} alt={news.title} />
        <h2>{news.title}</h2>
        <p>{news.description}</p>
        <button className='btn-read-more' onClick={() => window.open(news.url)}>Read More</button>
    </div>
  )
}

export default News
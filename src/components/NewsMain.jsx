import { useEffect, useState } from "react"
import NewsItem from "./NewsItem";

const NewsMain = ({category}) => { 
  
  const [articles, setArticles] = useState([ ]);
  let apiKey = ""; //removed from github add your while running on local

  useEffect(()=>{
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
    fetch(url).then(res => res.json()).then(data=> setArticles(data.articles))
  }, [category])
  return (
    <>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      {articles.map((news, index)=> { 
        return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
      })}
    </>
  )
}

export default NewsMain
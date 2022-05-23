import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

//styles
import './News.css'

export default function News() {
   const [news, setNews] = useState([])
   const [isPending, setIsPending] = useState(false)
   const [error, setError] = useState(false)

   var url = 'https://newsapi.org/v2/everything?' +
            'q=Apple&' +
            'from=2022-05-17&' +
            'sortBy=popularity&' +
            'apiKey=969385a462b4463aa581b130363f6d88';
   
   //Get news when comp is loaded
   useEffect(() => {
      const controller = new AbortController()
      // function that is going to fetch the data 
      const fetchData = async () => {
         setIsPending(true)

         try {
            const res = await fetch(url, {signal: controller.signal})
            if (!res.ok) {
               throw new Error(res.statusText)
            }
            const data = await res.json()
            console.log(data.articles);
            setIsPending(false)
            setError(null)
            setNews(data.articles)
         } catch (err) {
            if (err.name === 'AbortError') {
               console.log('Aborted by the user');
            } else {
               setError('Could not fetch data')
            }
         }
      }
      fetchData()
   }, [url])

   // JSX
   return (
    <div className=''>
       <h1>News!</h1>
       {isPending && <div>Loading...</div>}
       {error && <div>Error: {error}</div>}
       {news && news.map((singleNew) => (
          <div key={singleNew.id} className="card">
             <h3> {singleNew.title} </h3>
             <p> {singleNew.author} </p>
             <Link to={`/news/${singleNew.id}`} key={singleNew.id}>
                Read more...
             </Link>
          </div>
       ))}
    </div>
  )
}

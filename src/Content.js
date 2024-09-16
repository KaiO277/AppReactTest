import { useEffect, useState } from "react";

const tabs = ['posts', 'comments','albums']

function Content(){
    
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    const [showGoToTop, setShowGoToTop] = useState(false)

    const [size, setSize] = useState(window.innerWidth)

    useEffect(()=>{
      const handleResize = () => {
        setSize(window.innerWidth)
      }
  
      window.addEventListener('resize', handleResize)
  
      return () =>{
        window.removeEventListener('resize', handleResize)
      }
      
    },[])
    

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res=> res.json())
        .then(posts=> {
            setPosts(posts)
        })
    },[type])

    useEffect(()=>{
      const handleScroll = ()=>{
          if (window.scrollY >= 200){
            setShowGoToTop(true)
          }else{
            setShowGoToTop(false)
          }   
      }

      window.addEventListener('scroll', handleScroll)
      console.log('addEventListener')
      return ()=>{
        window.removeEventListener('scroll', handleScroll)
        console.log('removeEventListener')
      }
    },[])


    return (
      <div className="content">
        <h1>{size}</h1>
        <div>
          {tabs.map(tab => (
            <button 
            key={tab}  
            style={type === tab ? {
              color: '#fff',
              backgroundColor: '#333',
            } : {}}
            onClick={()=> setType(tab)}
            >
              {tab}
            </button>
          ))}
          {posts.map(post => (
            <div 
              key={post.id}>
              <h3>{post.name || post.title}</h3>
            </div>
          ))}
          {
            showGoToTop && (
              <button 
                style={{
                  position: 'fixed',
                  right: 20,
                  bottom: 20,
                }}
              >
                Go to Top
              </button>
            )
          }
        </div>
      </div>
      );
    }

export default Content;
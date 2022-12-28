import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import '../styles/Home.css'
import ImageCards from './ImageCards'

function Home() {

    const cardsData = [{
        "_id": 1,
        "image_url": "https://i.pinimg.com/originals/a4/96/c2/a496c2b6bc5d7cfe0e0674f6598c38ad.jpg",
        "title": "nature1",
        "likes": 0
      },
    
      {
        "_id": 2,
        "image_url": "https://static.sadhguru.org/d/46272/1633199491-1633199490440.jpg",
        "title": "nature2",
        "likes": 0
      },
    
      {
        "_id": 3,
        "image_url": "https://wallpapercave.com/wp/u9AVLry.jpg",
        "title": "nature3",
        "likes": 0
    }]

    let [totalNumOfLikes, setTotalNumOfLikes] = useState(0);

    const updateTotalLikes = () => {
        setTotalNumOfLikes(totalNumOfLikes + 1)
      }

  return (
    <>
        <h2 className='home-title'>Total Number of Likes: {totalNumOfLikes}</h2>
        <div className='cards-wrapper'>
            {cardsData.map((item, index) => {
                return (
                    <ImageCards 
                        key={index}
                        img_url={item.image_url}
                        title={item.title}
                        updateTotalLikes={updateTotalLikes}
                    />
                )
            })}

        </div>
    </>
  );
}

export default Home;
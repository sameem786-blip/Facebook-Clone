import React, { useContext } from 'react';
import "./stories.scss"
import { AuthContext } from '../../context/authContext';

const Stories = () => {

    const { currentUser } = useContext(AuthContext);

    const stories = [
        {
            id: 1,
            name: "Angelica",
            img: "https://images.pexels.com/photos/6913375/pexels-photo-6913375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 2,
            name: "Christopher",
            img: "https://images.pexels.com/photos/6913375/pexels-photo-6913375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 3,
            name: "Tony",
            img: "https://images.pexels.com/photos/6913375/pexels-photo-6913375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
    ]
  return (
      <div className="stories">
          <div className="story">
                  <img src={currentUser.profilePic} alt="" />
              <span>{currentUser.name}</span>
              <button>+</button>
              </div>
          {stories.map(story => (
              <div className="story" key={ story.id}>
                  <img src={story.img} alt="" />
                  <span>{story.name}</span>
              </div>
          ))}
    </div>
  )
}

export default Stories;
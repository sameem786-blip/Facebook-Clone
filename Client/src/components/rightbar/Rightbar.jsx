import React from 'react'
import './rightbar.scss'
import Profile2 from '../../assets/images/profile2.jpg';

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <span>Suggestions for you</span>
            <div className="user">
              <div className="userInfo">
                <img src={Profile2} alt="" />
                <span>Bekkah Allmark</span>
              </div>
                <div className="buttons">
                  <button >Follow</button>
                  <button >Dismiss</button>
                </div>
            </div>
            <div className="user">
              <div className="userInfo">
                <img src={Profile2} alt="" />
                <span>Bekkah Allmark</span>            
              </div>
                <div className="buttons">
                  <button >Follow</button>
                  <button >Dismiss</button>
                </div>
            </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
              <div className="userInfo">
                <img src={Profile2} alt="" />
                <p>
                <span>Bekkah Allmark</span>
                changed their profile picture.
                </p>            
              </div>
              <span>1 min ago</span>
          </div>
          <div className="user">
              <div className="userInfo">
                <img src={Profile2} alt="" />
                <p>
                <span>Bekkah Allmark</span>
                changed their profile picture.
                </p>            
              </div>
              <span>1 min ago</span>
          </div>
          <div className="user">
              <div className="userInfo">
                <img src={Profile2} alt="" />
                <p>
                <span>Bekkah Allmark</span>
                changed their profile picture.
                </p>            
              </div>
              <span>1 min ago</span>
          </div>
          <div className="user">
              <div className="userInfo">
                <img src={Profile2} alt="" />
                <p>
                <span>Bekkah Allmark</span>
                changed their profile picture.
                </p>            
              </div>
              <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
              <div className="userInfo">
              <img src={Profile2} alt="" />
              <div className="online" />
                <span>Bekkah Allmark</span>           
              </div>
          </div>
          <div className="user">
              <div className="userInfo">
              <img src={Profile2} alt="" />
              <div className="online" />
                <span>Bekkah Allmark</span>           
              </div>
          </div>
          <div className="user">
              <div className="userInfo">
              <img src={Profile2} alt="" />
              <div className="online" />
                <span>Bekkah Allmark</span>           
              </div>
          </div>
          <div className="user">
              <div className="userInfo">
              <img src={Profile2} alt="" />
              <div className="online" />
                <span>Bekkah Allmark</span>           
              </div>
          </div>
          <div className="user">
              <div className="userInfo">
              <img src={Profile2} alt="" />
              <div className="online" />
                <span>Bekkah Allmark</span>           
              </div>
          </div>
          <div className="user">
              <div className="userInfo">
              <img src={Profile2} alt="" />
              <div className="online" />
                <span>Bekkah Allmark</span>           
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}


  // <div className="item">
  //             <span>Latest Activities</span>
  //             <div className="user">
  //             <div className="userInfo">
  //               <img src={Profile2} alt="" />
  //                 <p><span>Bekkah Allmark</span>changed their cover picture</p>
  //               </div>
  //               <span>1 min ago</span>
  //           </div>
export default Rightbar;
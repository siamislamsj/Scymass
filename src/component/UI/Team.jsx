import React from 'react'
import '../../styles/team.css'
import team01 from '../../images/team-01.png'
// import team02 from '../../images/team-02.png'
import team03 from '../../images/team-03.png'
import team04 from '../../images/team-04.png'

const teamMembers = [
  {
    imgUrl: team01,
    name: 'Mirza Alamin',
    position: 'Web Developer'
  },
  {
    imgUrl: team04,
    name: 'Siam Islam',
    position: 'App Developer'
  },
  {
    imgUrl: team03,
    name: 'Shoeb Hossain Shaown',
    position: 'Front-End Developer'
  },
  // {
  //   imgUrl: team02,
  //   name: 'kala mia',
  //   position: 'kisu ekta'
  // },
]

const Team = () => {
  return <section className='our_team'>
    <div className="container">
      <div className="team_content">
        <h6 className='subtitle'>Our Team</h6>
        <h2>Meet with <span className='highlight'>our team</span>
        </h2>
      </div>
      <div className="team_wrapper">
        {
          teamMembers.map((item,index)=>(
            <div className="team_item" key={index}>
          <div className="team_img">
            <img src={item.imgUrl} alt="" />
            </div>
            <div className="team_details">
              <h4>{item.name}</h4>
              <p className='description'>{item.position}</p>
              <div className="team_member-social">
                <span>
                  <i className='ri-linkedin-line'></i>
                  </span>
                <span>
                 <i class="ri-twitter-line"></i>
                  </span>
                  <span>
                  <i class="ri-facebook-line"></i>
                  </span>
              </div>
            </div>
        </div>
          ))
        }
      </div>
    </div>
  </section>
}

export default Team
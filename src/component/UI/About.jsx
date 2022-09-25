import React from 'react'
import '../../styles/about.css'
import aboutImg from '../../images/about-us.jpg'

const chooseData = [
  {
    icon: 'ri-wifi-line',
    title:"First Working Process",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum commodi ratione distinctio quisquam voluptatem minima totam molestias, animi maxime soluta?"
  }, 
  {
    icon: 'ri-team-line',
    title:"Dedicated team",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum commodi ratione distinctio quisquam voluptatem minima totam molestias, animi maxime soluta?"
  }, 
  {
    icon: 'ri-customer-service-2-line',
    title:"24/7 Hours support",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum commodi ratione distinctio quisquam voluptatem minima totam molestias, animi maxime soluta?"
  },
]

const About = () => {
  return (
    <section id='about'>
      <div className="container">
        <div className="about_wrapper">
          <div className="about_content">
          <h6 className='subtitle'>Why choose us</h6>
        <h2>Specialist in aviding clients on</h2>
        <h2 className="highlight">financial challenges</h2>
        <p className="description about_content_desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
         Nobis sint voluptas impedit labore unde sed.Quibusdam voluptas, 
         reiciendis doloremque architecto maxime porro
         quaerat accusamus, ea temporibus, optio illo facere quod?
         </p>
         <div className='choose_item-wrapper'>
          {
            chooseData.map((item,index)=>(
              <div className="choose_us-item" key={index}>
          <span className="choose_us-icon">
            <i className={item.icon}></i>
          </span>
          <div>
          <h4 className="choose_us-title">{item.title}s</h4>
          <p className="description">{item.desc}</p>
          </div>
         </div>
            ))
          }
         </div>
          </div>

            <div className='about_img'>
              <img src={aboutImg} alt="" />
            </div>
        </div>
      </div>
    </section>
  )
}

export default About
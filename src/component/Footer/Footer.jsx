import React from 'react'
import './footer.css'

const quicklinks01 =[
  {
    path:'#',
    display:"Marketing"
  },
  {
    path:'#',
    display:"Analytics"
  },
  {
    path:'#',
    display:"Commerce"
  },
]
const quicklinks02 =[
  {
    path:'#',
    display:"Pricing"
  },
  {
    path:'#',
    display:"Documentation"
  },
  {
    path:'#',
    display:"Guides"
  },
]
const quicklinks03 =[
  {
    path:'#about',
    display:"About"
  },
  {
    path:'#',
    display:"jobs"
  },
  {
    path:'#blog',
    display:"Blog"
  },
]

const year =new Date().setFullYear()
const Footer = () => {
  return <footer className='footer'>
    <div className="container">
      <div className="footer_wrapper">
        <div className="footer_logo">
          <h2>Scymass</h2>
          <p className="description">Grow with us</p>
          <p className="small_text description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto veritatis pariatur ipsa distinctio voluptates quia placeat, accusamus molestias asperiores obcaecati?</p>
        </div>
        <div className="footer_quick-links">
          <h3 className="quick_links-title">Solutions</h3>
          <ul className="quick_links">
            {
              quicklinks01.map((item,index) => ( <li className='quick_link-item' key={index}><a href={item.path}>{item.display}</a></li>))
            }
          </ul>
        </div>
        <div className="footer_quick-links">
          <h3 className="quick_links-title">Support</h3>
          <ul className="quick_links">
            {
              quicklinks02.map((item,index) => ( <li className='quick_link-item' key={index}><a href={item.path}>{item.display}</a></li>))
            }
          </ul>
        </div>
        <div className="footer_quick-links">
          <h3 className="quick_links-title">Company</h3>
          <ul className="quick_links">
            {
              quicklinks03.map((item,index) => ( <li className='quick_link-item' key={index}><a href={item.path}>{item.display}</a></li>))
            }
          </ul>
        </div>
      </div>
      <p className='copyright'>Copyright 2022, developed By Scymass. All rights reserved.{" "}</p>
    </div>
  </footer>
}

export default Footer
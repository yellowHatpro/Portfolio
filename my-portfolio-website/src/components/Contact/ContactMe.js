import React from 'react'
import './ContactMe.css'
import { ContactList } from './ContactList';

function ContactMe() {
  return (
    <div className='contact_me'>
      <div className="heading-box">
      <h1 className='contact-heading'> Contact Me</h1>
      </div>
      <div className="linktree">
      <ul className="contact-items">
        {ContactList.map((item, index) => {
          return (

                      <li key={index}>
              <a className="contact-items-links" href={item.link}>
                <div className="contact-card">
                  <i className={`contact-icon ${item.icon}`}></i>
                 <div className='contact-title'>{item.name}</div>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
      </div>
    </div>
  )
}

export default ContactMe
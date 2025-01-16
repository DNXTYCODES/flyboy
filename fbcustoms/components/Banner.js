import React from "react"
import { Title, TitleLogo } from "./common/Title"

const Banner = () => {
  return (
    <>
      <section className='banner'>
        <div className='container'>
          <div>
            {/* <Title title='Get Started with Us' /> <br /> */}
            <TitleLogo title='Let’s Get That Car Shining Again!' />
          </div>
          <div>
            <button className='button-primary'>
              <a href="/contact">
              Contact Us
              </a>
              </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner

import { showcase } from "@/assets/data/dummydata"
import { Card } from "@/components/common/Card"
import { Title, TitleSm } from "@/components/common/Title"
import React from "react"

const ShowCase = () => {
  return (
    <>
      <section className='showcase bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='SHOWCASE' /> <br />
            <br />
            <Title title='Here Are Some of Our Past Works.' className='title-bg' />
          </div>
          <br />
          <br />
          <div className='grid-3'>
            {showcase.map((item) => (
              <Card data={item} keHy={item.id} caption={item.post} />
            ))}
          </div>
          {/* <div className='py btn'>
            <button className='secondary-button sb'>
              <a href="https://www.instagram.com/_event360withfafali/">View More</a>
            </button>
          </div> */}
        </div>
      </section>
    </>
  )
}

export default ShowCase

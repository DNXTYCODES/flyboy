import React from "react"
import { Title } from "./common/Title"
import { expertise } from "@/assets/data/dummydata"
import { Card } from "./common/Card"

const Expertise = () => {
  return (
    <>
      <section className='expertise'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='OUR EXPERTISE' />
            {/* <p>
              Event 360 with Fafali is a lifestyle show;
              that showcases educative and informative issues on
              it's weekly and episodes intended to give a heads up
              happenings and trends on the events industry to its viewers.
            </p>
            <Title title='ARE YOU A BUSINESS?' />
            <p>
              Endeavour to sponsor the show and gain mention and visibity
              of your Products and Services by way of advert placement.
            </p>
            <Title title='TOP NOTCH SERVICE PROVIDER?' />
            <p>
              Are you a Top Notch Service Provider in the event industry
              and haven't featured on event360withFafali yet?
              Book Your Space Now!!!
            </p> */}
          </div>
          <div className='hero-content grid-4' >
            {expertise.map((item) => (
              <Card data={item} key={item.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Expertise

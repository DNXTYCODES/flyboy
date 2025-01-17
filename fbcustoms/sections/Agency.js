import Banner from "@/components/Banner";
import Brand from "@/components/Brand";
import Testimonial from "@/components/Testimonial";
import { Title, TitleSm } from "@/components/common/Title";
import Head from "next/head";

const Agency = () => {
  return (
    <>
      <Head>
        {/* Page Title */}
        <title>Our Services | Premium Car Detailing</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Discover expert car detailing services with us. From exterior polishing to interior cleaning, we transform your car into showroom condition. Contact us today!"
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="car detailing, exterior polishing, interior cleaning, paint protection, car restoration"
        />

        {/* Author */}
        <meta name="author" content="Your Company Name" />
      </Head>

      <main>
        <section className="agency bg-top">
          <div className="container">
            <div className="heading-title">
              <TitleSm title="Our Services – Premium Car Detailing for Every Need" />{" "}
              <br />
              <br />
              <Title title="Our Expertise" className="title-bg" />
            </div>

            <div className="content flex1">
              <div className="left w-60 py">
                <TitleSm title="WHAT WE OFFER" />
                <p className="desc-p">
                  1. Exterior Detailing
                  <br></br>
                  Transform your car’s exterior with our meticulous detailing
                  services that leave every inch of your vehicle gleaming.{" "}
                  <br />
                  <li>Hand wash and wax</li>
                  <li>Paint correction and polishing</li>
                  <li>Scratch and swirl mark removal</li>
                  <li>Headlight restoration</li>
                  <li>Ceramic coating for long-lasting shine and protection</li>
                  2. Interior Detailing
                  <br></br>
                  Refresh and rejuvenate your car’s interior for a comfortable
                  and hygienic driving experience.
                  <li>Deep cleaning of carpets, mats, and upholstery</li>
                  <li>Leather cleaning and conditioning</li>
                  <li>Stain and odor removal</li>
                  <li>Dashboard and console polishing</li>
                  <li>Window and mirror cleaning</li>
                  3. Engine Bay Cleaning
                  <br></br>
                  Improve performance and enhance your car's resale value with
                  our thorough engine bay cleaning service.
                  <li>Degreasing and steam cleaning</li>
                  <li>Protective coatings to prevent rust and corrosion</li>
                  4. Full-Service Car Detailing <br></br>
                  Get the best of both worlds with our comprehensive detailing
                  package.
                  <li>Complete exterior and interior detailing</li>
                  <li>Paint correction and protection</li>
                  <li>Leather and fabric care</li>
                  <li>Wheel and tire polishing</li>
                  5. Specialty Services <br></br>
                  We also offer tailored solutions for unique car care needs:
                  <li>Paint protection film (PPF) installation</li>
                  <li>Convertible roof cleaning</li>
                  <li>Alloy wheel refurbishment</li>
                  <li>Water spot removal</li>
                </p>
                <div className="grid-3">
                  <div className="box">
                    <h1 className="indigo">13+</h1>
                    <h3>Years of experience</h3>
                  </div>
                  <div className="box">
                    <h1 className="indigo">1125+</h1>
                    <h3>Satisfied Customers</h3>
                  </div>
                  {/* <div className="box">
                  <h1 className="indigo">12+</h1>
                  <h3>Industry awards</h3>
                </div> */}
                </div>
              </div>
              <div className="right w-40 ml">
                <img
                  src="/images/faa42acb1914a5216e9d62657d3f6a9a-large.jpg"
                  alt="Img"
                  className="round"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>

            <div className="content flex">
              <div className="left w-40 py">
                <img
                  src="/images/7f9ca5427953384d3f2313aa080be846-large.jpg"
                  alt="Img"
                  className="round"
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="right w-60 ml">
                <TitleSm title="Eco-Friendly Products:" />
                <br />
                <p className="misson-p">
                  <p>
                    We use safe, environmentally friendly cleaning agents that
                    are tough on dirt but gentle on your car. Experienced
                    Professionals: Our certified detailers are passionate about
                    cars and perfection. State-of-the-Art Equipment: From steam
                    cleaners to advanced polishing tools, we invest in the best
                    technology to serve you better. Affordable Packages: Enjoy
                    top-notch service without breaking the bank.
                  </p>
                  <p>
                    Prime-Time Slot: Our show airs during prime-time hours,
                    ensuring maximum viewership.
                  </p>
                  <p>
                    Cross-Platform Engagement: Beyond TV, our audience engages
                    with us online, expanding your brand’s reach to digital
                    spaces.
                  </p>
                </p>
              </div>
            </div>

            <div className="content flex">
              <div className="left w-40 py">
                <img
                  src="/images/5e079d48aa1d843d34ca62de92b26f80-large.jpg"
                  alt="Img"
                  className="round"
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="right w-60 ml">
                <TitleSm title="Why Choose Us" />
                <br />
                <p className="misson-p">
                  <p>
                  ✅ Expert Craftsmanship: Our skilled detailers use industry-leading products and techniques.
                  </p>
                  <p>
                  ✅ High-Quality Materials: We use only premium cleaning solutions and protective coatings.
                  </p>
                  <p>
                  ✅ Attention to Detail: Every vehicle receives a customized approach based on its needs.
                  </p>
                  <p>
                  ✅ Customer Satisfaction Guarantee: We ensure your car leaves our shop looking flawless.
                </p>
                </p>
              </div>
            </div>

            <div className="content flex">
              <div className="left w-40 py">
                <img
                  src="/images/b51ed37a4007bd81fc44e856ab476393-large.jpg"
                  alt="Img"
                  className="round"
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="right w-60 ml">
                <TitleSm title="Vehicles We Specialize In" />
                <br />
                <p className="misson-p">
                  <p>
                  We provide expert detailing services for all types of vehicles, including:
                  Luxury Cars | Sports Cars | SUVs | Sedans | Trucks | Exotic Cars | Classic Cars
                  </p>
                  {/* <p>
                    Through insightful interviews, honest reviews, and lively
                    discussions, we connect our audience to the trends and
                    events that shape their world. By integrating brands and
                    sponsors seamlessly into our show, we strive to build
                    lasting relationships that add value to our viewers and our
                    partners alike.
                  </p>
                  <p>
                    We are committed to delivering quality, family-friendly
                    programming that uplifts, educates, and fosters a sense of
                    community.
                  </p> */}
                </p>
              </div>
            </div>
          </div>
        </section>

        <Brand />
        <Testimonial />
        <Banner />
        <br />
        <br />
        <br />
        <br />
      </main>
    </>
  );
};

export default Agency;

import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      index: 1,
      profile: "image-emily",
      testimonial: `  We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.`,
      name: `Emily R.`,
      job: "Marketing Director",
    },
    {
      index: 2,
      profile: "image-thomas",
      testimonial: `Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.`,
      name: `  Thomas S.`,
      job: "Chief Operating Officer",
    },
    {
      index: 3,
      profile: "image-jennie",
      testimonial: `  Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!`,
      name: ` Jennie F.`,
      job: "  Business Owner",
    },
  ];

  return (
    <>
      <h1 className="testimonial-header">client testimonials</h1>

      <section className="testimonials">
        {testimonials.map((item) => {
          return (
            <div className="testimonial" key={item.index}>
              <img
                className="profile"
                src={`../images/${item.profile}.jpg`}
                alt=""
              />
              <p className="testi">{item.testimonial}</p>
              <h2 className="name">{item.name}</h2>
              <h2 className="job">{item.job}</h2>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Testimonials;

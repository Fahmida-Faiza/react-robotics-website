import React from "react";


const App = () => {
  return (
    <>
      
        <section>
          {" "}
          <img
            src="/wp.jpg"
            alt="Logo"
            class="d-inline-block align-text-top body-img"
          />
          <div class="centered">
            <h1>We bring robots to life.</h1>
            <p>
              Hansino Robotics is an AI and robotics company dedicated to
              creating socially intelligent machines that enrich the quality of
              our lives.
            </p>
          </div>
        </section>
        <div className="container mc body-2">
          <div class="centered1">
            <h1>Why human-like robots?</h1>
            <p>
              Robots will soon be everywhere. How can we nurture them to be our
              friends and useful collaborators? Robots with good aesthetic
              design, rich personalities, and social cognitive intelligence can
              potentially connect deeply and meaningfully with humans. cognitive
              intelligence can potentially connect deeply and meaningfully with
              humans.lorem Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Quas veritatis laborum sequi nesciunt nisi, debitis quam
              maxime eligendi nostrum neque assumenda iure illo commodi! Aut
              eveniet veritatis quaerat quia Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Ratione, exercitationem iure.
              Recusandae eius, eaque aut libero, illum sequi vel sunt, dolores
              facilis voluptates perspiciatis dicta eos magni aliquam culpa
              amet!
            </p>

            <button type="button" class="btn btn-primary btn-lg">
              Our Blogs
            </button>
          </div>
        </div>
        {/*  ////////////////////////////////// */}
        <div className="third">
          <div class="container px-4 text-center">
            <div class="row gx-5">
              <div class="col">
                <div class="p-3">
                  <h1>AI Developing Developing Meaningful</h1>
                  <p>
                    Hanson AI Developing Meaningful AI Interactions Hanson AI
                    develops cognitive architecture and AI-based tools that
                    enable our robots to simulate human personalities, have
                    meaningful interactions with people and evolve from those
                    interactions. Our team of renowned AI scientists conducts
                    advanced research to build the most compelling robotics and
                    AI platform for research, media, and service applications.
                  </p>
                </div>
              </div>
              <div class="col">
                <div class="p-3">
                  <img
                    src="/sophiaback.png"
                    alt="Logo"
                    class="d-inline-block align-text-top img2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* our team  */}
        <h1 className="centered1">Our Team </h1>
        <br></br><br></br>
        <div class="container text-center">
          <div class="row align-items-center">
            <div class="col">
              <div class="card">
                <img src="/wb.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="/wb.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="/wb.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default App;

import React from "react";
import Header from "./Header";

export default function Card() {
  return (
    <>
      <div className="container px-4 py-2" id="hanging-icons">
        <h2 className="pb-2 border-bottom">Projects</h2>

        <div class="row align-items-center">
          <div class="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://miro.medium.com/max/1400/1*Fp43zS64ZPoWi4IAz1n3MA.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://miro.medium.com/max/1400/1*Fp43zS64ZPoWi4IAz1n3MA.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://miro.medium.com/max/1400/1*Fp43zS64ZPoWi4IAz1n3MA.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Header/>
    </>
  );
}

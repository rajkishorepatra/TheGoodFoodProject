import React, { Component } from "react";
import ReactCardCarousel from "react-card-carousel";
import "../../css/home/review.css";

class MyCarousel extends Component {
  static get CONTAINER_STYLE() {
    return {
      position: "relative",
      height: "60vh",
      width: "100%",
      display: "flex",
      flex: 1,
    };
  }

  static get CARD_STYLE() {
    return {
      height: "auto",
      width: "45vw",
      padding: "10px",
      textAlign: "center",
      background: "#a9bd19",
      color: "#FFF",
      fontFamily: "sans-serif",
      fontSize: "1.8vw",
      borderRadius: "10px",
      boxSizing: "border-box"
    };
  }

  render() {
    return (
      <>
        <h1 className="text-3xl lg:text-4xl font-bold my-8 uppercase text-[#fff] reviewText">
          <span className="text-[#e55137]">T</span>estimonials
        </h1>
        <div style={MyCarousel.CONTAINER_STYLE}>
          <ReactCardCarousel
            spread={"wide"}
            autoplay={true}
            autoplay_speed={8000}
          >
            <div style={MyCarousel.CARD_STYLE}>
              <div className="testimonial">
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" alt="img" />
                <p className="reviewFont">In promotion and advertising, a testimonial or show consists of a person's written or spoken statement extolling the virtue of a product.
                  <br /><h1>- Raj Kishore</h1>
                </p>
              </div>
            </div>
            <div style={MyCarousel.CARD_STYLE}>
              <div className="testimonial">
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" alt="img" />
                <p className="reviewFont">In promotion and advertising, a testimonial or show consists of a person's written or spoken statement extolling the virtue of a product.
                  <br />
                  - Raj Kishore</p>
              </div>
            </div>
            <div style={MyCarousel.CARD_STYLE}>
              <div className="testimonial">
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" alt="img" />
                <p className="reviewFont">In promotion and advertising, a testimonial or show consists of a person's written or spoken statement extolling the virtue of a product.
                  <br />- Raj Kishore </p>
              </div>
            </div>
            <div style={MyCarousel.CARD_STYLE}>
              <div className="testimonial">
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" alt="img" />
                <p className="reviewFont">In promotion and advertising, a testimonial or show consists of a person's written or spoken statement extolling the virtue of a product.
                  <br />- Raj Kishore </p>
              </div>
            </div>
            <div style={MyCarousel.CARD_STYLE}>
              <div className="testimonial">
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" alt="img" />
                <p className="reviewFont">In promotion and advertising, a testimonial or show consists of a person's written or spoken statement extolling the virtue of a product.
                  <br />- Raj Kishore </p>
              </div>
            </div>
          </ReactCardCarousel>
        </div>
      </>
    );
  }
}

export default MyCarousel

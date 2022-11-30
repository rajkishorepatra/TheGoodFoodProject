import React from "react";
import { Parallax } from "react-parallax";
import table from "../../img/table.jpg";
import "../../css/home/bookTable.css";

function BookTable() {
  return (
    <>
      <Parallax
        className="tableImage"
        bgImage={table}
        strength={600}
        bgImageStyle={{ minHeight: "100vh" }}
      >
        <div className="overlay">
          <div className="content1">
            <h1 className="text-3xl lg:text-4xl font-bold my-8 uppercase">
              <span className="text-[#e55137]">B</span>ook Your Table
            </h1>
            <div className="input-fields">
              <input
                type={"email"}
                className="form-control border-2 border-white hover:border-[#e55137]"
                required
                placeholder="Your EmailId..."
              />
              <input
                type={"number"}
                className="form-control border-2 border-white hover:border-[#e55137]"
                required
                placeholder="No. of guests"
              />
              <input
                type={"date"}
                className="form-control border-2 border-white hover:border-[#e55137]"
                required
              />
              <input
                type={"time"}
                className="form-control border-2 border-white hover:border-[#e55137]"
                required
              />
            </div>
            <button className="glow-on-hover">Find Table {">"}</button>
          </div>
        </div>
      </Parallax>
    </>
  );
}

export default BookTable;

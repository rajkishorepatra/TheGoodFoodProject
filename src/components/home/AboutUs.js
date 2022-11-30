import React from "react";

function AboutUs() {
  return (
    <div className="md:flex max-w-[1600px] m-auto text-white text-center md:text-left">
      <div className="md:w-1/2">
        <div className="px-8 lg:px-16 h-full flex items-center">
          <div className=" ">
            <h1 className="text-3xl lg:text-4xl font-bold py-2 uppercase">
              <span className="text-[#e55137]">A</span>bout us
            </h1>
            <div className="my-12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              itaque reprehenderit culpa unde saepe iusto nihil vitae similique
              ipsa reiciendis facere fugiat neque, amet, nobis obcaecati
              asperiores quo dolor quasi. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Voluptatem, aliquam. Nesciunt ut
              incidunt placeat expedita officia earum doloribus molestiae? Ab
              dignissimos dolor dolore maxime beatae est itaque cum perspiciatis
              ad. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Alias enim dolores magnam, reiciendis inventore ratione distinctio
              labore voluptatibus accusantium iste expedita sequi, earum
              eligendi, suscipit libero quae ab velit excepturi!
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block md:w-1/2 relative object-cover">
        <img
          src="https://images.unsplash.com/photo-1547496502-affa22d38842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=677&q=80"
          alt="about-tgf"
          className=" w-full h-full"
        />
      </div>
    </div>
  );
}

export default AboutUs;

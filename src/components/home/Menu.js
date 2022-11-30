import React from "react";

const Menu = () => {
  const imgSrc = [
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/photo-1587678711204-ca6d3d2f1f3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGhlYWx0aHklMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1597958792579-bd3517df6399?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
    "https://plus.unsplash.com/premium_photo-1663858367108-9150fe5ce9bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  ];

  return (
    <div className="text-white ">
      <h1 className="text-3xl lg:text-4xl font-bold my-8 uppercase">
        <span className="text-[#e55137]">M</span>enu
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-6">
        {imgSrc.map((itemSrc) => (
          <div key={itemSrc}>
            <img
              src={itemSrc}
              alt="about-tgf"
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
      <button className="my-8 md:my-12 border-2 px-4 py-2 hover:border-[#e55137] hover:text-[#e55137]">
        SEE MORE
      </button>
    </div>
  );
};

export default Menu;

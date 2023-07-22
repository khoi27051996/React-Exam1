import React from "react";

const Banner = () => {
  return (
    <div className="container" style={{backgroundColor: "#ced4da"}}>
      <div
        style={{ height: "400px", width:"500px"  }}
        className="d-flex justify-content-center align-items-center text-center mx-auto"
      >
        <div className="content">
        <h1 className="font-weight-bold font-italic">Xin Chào Mọi Người!!!</h1>
        <p style={{lineHeight:"2", letterSpacing:"2px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ipsam asperiores quod saepe ducimus distinctio quisquam nemo, natus corrupti error?</p>
        <button className="px-3 py-2 btn btn-danger">Nhấn Vô Cho Vui</button>
        </div>
    
      </div>
    </div>
  );
};

export default Banner;

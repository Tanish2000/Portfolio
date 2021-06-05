import { React, useEffect } from "react";

function Counters() {
  useEffect(() => {
    setTimeout(function () {
      document.getElementById("odometer0").innerHTML = 3700;
      document.getElementById("odometer1").innerHTML = 3;
    }, 1000);
  }, []);

  return (
    <div className="row container">
      <div className="col-12 col-md-6 text-justify text-center">
        <div className="odometer mt-4" style={{ fontSize: "25px" }} id="odometer0">
          1000
        </div>
        <h6 className="text-white">Lines of Code</h6>
      </div>
      <div className="col-12 col-md-6 text-justify text-center">
        <div className="odometer mt-4" style={{ fontSize: "25px" }} id="odometer1">
          1
        </div>
        <h6 className="text-white">Projects Completed</h6>
      </div>
    </div>
  );
}

export default Counters;

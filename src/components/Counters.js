import { React, useEffect } from "react";
import Col from "react-bootstrap/Col";

function Counters() {
  useEffect(() => {
    setTimeout(function () {
      document.getElementById("odometer0").innerHTML = 6700;
      document.getElementById("odometer1").innerHTML = 10080;
      document.getElementById("odometer2").innerHTML = 6;
    }, 500);
  }, []);

  return (
    <>
      <Col className="col-4 text-justify text-center">
        <div className="odometer" style={{ fontSize: "35px" }} id="odometer0">
          0000
        </div>
        <h4 className="text-white fw-bold m-2">Lines of Code</h4>
      </Col>
      <Col className="col-4 text-justify text-center">
        <div className="odometer" style={{ fontSize: "35px" }} id="odometer1">
          0000
        </div>
        <h4 className="text-white fw-bold m-2">Cups of Tea drunk</h4>
      </Col>
      <Col className="col-4 text-justify text-center">
        <div className="odometer" style={{ fontSize: "35px" }} id="odometer2">
          0000
        </div>
        <h4 className="text-white fw-bold m-2">Projects Completed</h4>
      </Col>
    </>
  );
}

export default Counters;

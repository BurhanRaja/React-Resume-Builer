import React from "react";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Template from "./ResumeTemplate";

const TestTemplate = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <>
      <div ref={componentRef}>
        <Template />
      </div>
      <button onClick={handlePrint}>Print this out!</button>
    </>
  );
};

export default TestTemplate;

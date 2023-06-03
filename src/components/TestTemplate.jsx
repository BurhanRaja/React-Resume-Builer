import {
  Document,
  Text,
  Page,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import React from "react";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Template } from "./ResumeTemplate";

const styles = StyleSheet.create({
  page: {
    textAlign: "center",
    marginTop: 30,
  },
  text: {
    color: "#228b22",
    fontSize: "40px",
    fontWeight: "bolder",
  },
});

const TestTemplate = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <>
      <Template ref={componentRef} />
      <button onClick={handlePrint}>Print this out!</button>
    </>
  );
};

export default TestTemplate;

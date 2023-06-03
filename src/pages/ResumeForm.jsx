import React from "react";
import Card from "../components/resumeform/Card";
import Input from "../components/resumeform/Input";

const ResumeForm = () => {
  return (
    <div className="w-[70%] mx-auto">
      <h1 className="mb-5 text-4xl">Create Resume</h1>
      <Card title="Name of the Resume">
          <Input label="Name" />
      </Card>
      <Card title="Hello World">
        <div className="flex justify-evenly mt-3">
          <Input label="Hello" />
          <Input label="Hello" />
        </div>
      </Card>
      <Card title="Hello World">
        <div className="flex justify-evenly mt-3">
          <Input label="Hello" />
          <Input label="Hello" />
        </div>
      </Card>
      <Card title="Hello World">
        <div className="flex justify-evenly mt-3">
          <Input label="Hello" />
          <Input label="Hello" />
        </div>
      </Card>
      <Card title="Hello World">
        <div className="flex justify-evenly mt-3">
          <Input label="Hello" />
          <Input label="Hello" />
        </div>
      </Card>
    </div>
  );
};

export default ResumeForm;

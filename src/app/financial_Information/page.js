import Financial_Information from "@/components/financial_information/Financial_Information";
import NaveBar from "@/components/naveBar/NaveBar";
import React from "react";

const page = () => {
  return (
    <div>
      <NaveBar />
      <Financial_Information/>
    </div>
  );
};

export default page;

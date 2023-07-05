import React, { useState } from "react";
import Image_modal from "../../../Farmer/Modals/Image_modal";

const Form_4 = () => {
  const [openModel, setOpenModel] = useState(false);
  return (
    <>
      <h2 className="m-2 text-hover__color font-semibold text-lg">
        Brief Profile of the FPO
      </h2>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Incorporation Details
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <button
            onClick={() => {
              setOpenModel(true);
              setHeading("Aadhar Card Image");
            }}
            className="bg-bg__color text-center block text-white px-4 py-1 rounded"
          >
            View
          </button>
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Brief Profile of the promoting organization
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
        <button
            onClick={() => {
              setOpenModel(true);
              setHeading("Aadhar Card Image");
            }}
            className="bg-bg__color text-center block text-white px-4 py-1 rounded"
          >
            View
          </button>
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Networth statement of the promoter
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
        <button
            onClick={() => {
              setOpenModel(true);
              setHeading("Aadhar Card Image");
            }}
            className="bg-bg__color text-center block text-white px-4 py-1 rounded"
          >
            View
          </button>
        </div>
      </div>
      <h2 className="m-2 text-hover__color font-semibold text-lg">
        Applicable License
      </h2>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Input License
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
        <button
            onClick={() => {
              setOpenModel(true);
              setHeading("Aadhar Card Image");
            }}
            className="bg-bg__color text-center block text-white px-4 py-1 rounded"
          >
            View
          </button>
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Fertilizer License
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
        <button
            onClick={() => {
              setOpenModel(true);
              setHeading("Aadhar Card Image");
            }}
            className="bg-bg__color text-center block text-white px-4 py-1 rounded"
          >
            View
          </button>
        </div>
      </div>
      {openModel && (
        <Image_modal title={"KYC Documents"} closemodel={setOpenModel} />
      )}
    </>
  );
};

export default Form_4;

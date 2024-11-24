import React, { useRef } from "react";

import html2pdf from "html2pdf.js";

import { useLocation } from "react-router-dom";
const MainTemplate = () => {
  const pdfRef = useRef();
  const location = useLocation();
  console.log(location);

  const generatePDF = () => {
    // Use the ref to get the target element
    const element = pdfRef.current;

    const options = {
      margin: 5, // Margins in mm
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 }, // Improves resolution
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    // Generate PDF
    html2pdf().set(options).from(element).save();
  };

 

  return (
    <>
      <div className="bg-gray-100 p-6 min-h-screen">
        <div
          className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8"
          ref={pdfRef}
        >
          {/* Header */}
          <header className="text-center mb-6">
            <h1 className="text-3xl font-bold">{location.state.name}</h1>

            <p className="text-gray-500">
              {location.state.email} | {location.state.phoneno}
            </p>
            <p className="text-gray-500">
              {location.state.linkedin} | {location.state.github}
            </p>
          </header>

          {/* Education Section */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold border-b pb-2">Education</h2>
            <div className="mt-2">
              <h3 className="font-bold">{location.state.highschoolName}</h3>
              <p className="text-gray-500">{location.state.hYOC}</p>
            </div>
            <div className="mt-2">
              <h3 className="font-bold">
                {location.state.intermediateschoolName}
              </h3>
              <p className="text-gray-500">{location.state.iyoc}</p>
            </div>
            <div className="mt-2">
              <h3 className="font-bold">{location.state.collegeName}</h3>
              <p className="text-gray-500">{location.state.collegeYOC}</p>
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold border-b pb-2">Skills</h2>
            <div className="mt-2">
              {location.state?.skills?.map((skills, index) => (
                <li key={index} className="text-gray-700 list-disc list-inside">
                  {skills}
                </li>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold border-b pb-2">Projects</h2>
            <div className="mt-2">
              {location.state?.Projects?.map((project, index) => (
                <div key={index} className="mt-4">
                  <h3 className="font-bold">{project.title}</h3>
                  <p className="text-gray-700">{project.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications Section */}

          <section className="mb-6">
            <h2 className="text-xl font-semibold border-b pb-2">
              Certifications
            </h2>
            <div className="mt-2">
              <ul className="list-disc list-inside">
                {location.state?.awards?.map((awards, index) => (
                  <li key={index} className="text-gray-700">
                    {awards}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
        <div className="flex justify-centre">
          <button
            className=" mt-5 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-150 mx-auto"
            onClick={generatePDF}
          >
            Download as PDF
          </button>
        </div>
      </div>
    </>
  );
};

export default MainTemplate;

import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import template111 from "../images/template111.jpg";
import template22 from "../images/template22.png";

const ChooseTemplate = () => {
  const nav = useNavigate();
  const location = useLocation();
  const {
    name,
    email,
    phoneno,
    linkedin,
    github,
    address,
    highschoolName,
    hYOC,
    hgrades,
    hcity,
    intermediateschoolName,
    iyoc,
    ipercent,
    icity,
    collegeName,
    collegeYOC,
    collegeCGPA,
    collegecity,
    awards,
    skills,
    Projects,
  } = location.state || {};

  const selectTemplate1 = () => {
    nav("/template1", {
      state: {
        name,
        email,
        phoneno,
        linkedin,
        github,
        address,
        highschoolName,
        hYOC,
        hgrades,
        hcity,
        intermediateschoolName,
        iyoc,
        ipercent,
        icity,
        collegeName,
        collegeYOC,
        collegeCGPA,
        collegecity,
        awards,
        skills,
        Projects,
      },
    });
  };

  const selectTemplate2 = () => {
    nav("/maintemplate", {
      state: {
        name,
        email,
        phoneno,
        linkedin,
        github,
        address,
        highschoolName,
        hYOC,
        hgrades,
        hcity,
        intermediateschoolName,
        iyoc,
        ipercent,
        icity,
        collegeName,
        collegeYOC,
        collegeCGPA,
        collegecity,
        awards,
        skills,
        Projects,
      },
    });
  };

  return (
    <div className="flex flex-wrap justify-center gap-10 py-10">
      {/*........... Template 1................. */}
      <div className="flex flex-col items-center gap-8">
        <img
          src={template111}
          alt="Template 1 Preview"
          className="w-64 h-96 object-cover rounded shadow-md"
        />
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-150 mx-auto"
          onClick={selectTemplate1}
        >
          Template 1
        </button>
      </div>

      {/*............... Template 2 ..............*/}
      <div className="flex flex-col items-center gap-8">
        <img
          src={template22} 
          alt="Template 2 Preview"
          className="w-60 h-full object-cover rounded shadow-md"
        />
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-150 mx-auto"
          onClick={selectTemplate2}
        >
          Template 2
        </button>
      </div>
    </div>
  );
};

export default ChooseTemplate;


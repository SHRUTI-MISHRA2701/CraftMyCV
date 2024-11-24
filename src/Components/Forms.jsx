import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Forms = () => {
  const nav = useNavigate();
  const [skills, setSkills] = useState([""]);
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [linkedin, setLinkedIn] = useState("");
  const [github, setGithub] = useState("");
  const [address, setAddress] = useState("");
  const [highschoolName, sethighSchoolName] = useState("");
  const [hYOC, sethYOC] = useState("");
  const [hgrades, sethgrades] = useState("");
  const [hcity, sethcity] = useState("");
  const [intermediateschoolName, setintermediateSchoolName] = useState("");
  const [iyoc, setiyoc] = useState("");
  const [ipercent, setipercent] = useState("");
  const [icity, seticity] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [collegeYOC, setcollegeYOC] = useState("");
  const [collegeCGPA, setCollegeCGPA] = useState("");
  const [collegecity, setCollegecity] = useState("");
  const [Projects, setProjects] = useState([{ title: "", description: "" }]);
  const [awards, setAwards] = useState([""]);

  const handleskillchange = (index, e) => {
    const newSkills = [...skills];
    newSkills[index] = e.target.value;
    setSkills(newSkills);
  };
  const addSkill = () => {
    setSkills([...skills, ""]);
  };

  const removeSkill = (index) => {
    const newSkills = skills.filter((_, i) => i !== index);
    setSkills(newSkills);
  };

  const handleProjectChange = (index, field, value) => {
    const newProjects = [...Projects];
    newProjects[index][field] = value;
    setProjects(newProjects);
  };

  const addProject = () => {
    setProjects([...Projects, { title: "", description: "" }]);
  };

  const removeProject = (index) => {
    const newProjects = Projects.filter((_, i) => i !== index);
    setProjects(newProjects);
  };

  const handleAwardChange = (index, value) => {
    const newAwards = [...awards]; 
    newAwards[index] = value;      
    setAwards(newAwards);          
  };
  

  const addAwards = () => {
    setAwards([...awards, ""]); 
  };

  const removeAwards = (index) => {
    const newAwards = awards.filter((_, i) => i !== index); 
    setAwards(newAwards); 
  };
  const submit = () => {
    // if(name&&email&&phoneno&& linkedin && github && address && highschoolName && hYOC && hgrades && hcity && intermediateschoolName && iyoc && ipercent && icity && collegeName && collegeYOC && collegeCGPA && collegecity && awards && skills && Projects )
      nav('/maintemplate', { state: { name , email, phoneno , linkedin, github , address , highschoolName, hYOC , hgrades ,hcity , intermediateschoolName , iyoc , ipercent , icity , collegeName , collegeYOC ,collegeCGPA, collegecity, awards , skills , Projects } });
    
    // else
    //   alert('Please fill all the required fields');  
  };
    

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <form className="flex flex-col">
          <input
            placeholder="Full Name"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Email"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Phone No"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
            value={phoneno}
            onChange={(e) => setPhoneno(e.target.value)}
          />
          <input
            placeholder="LinkedIn URL"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="Text"
            value={linkedin}
            onChange={(e) => setLinkedIn(e.target.value)}
          />
          <input
            placeholder="Github URL"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
          />
          <input
            placeholder="Address"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          {/* .....................................high school starts............................... */}
          <input
            placeholder="High School Name"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
            value={highschoolName}
            onChange={(e) => sethighSchoolName(e.target.value)}
          />

          <input
            placeholder="High School YOC"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
            value={hYOC}
            onChange={(e) => sethYOC(e.target.value)}
          />

          <input
            placeholder="High School Grades"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
            value={hgrades}
            onChange={(e) => sethgrades(e.target.value)}
          />
          <input
            placeholder="High School City"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
            value={hcity}
            onChange={(e) => sethcity(e.target.value)}
          />
          {/* .....................................high school ends............................... */}

          {/* .....................................intermediate starts............................... */}

          <input
            placeholder="Intermediate School Name"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
            value={intermediateschoolName}
            onChange={(e) => setintermediateSchoolName(e.target.value)}
          />

          <input
            placeholder="Intermediate School YOC"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
            value={iyoc}
            onChange={(e) => setiyoc(e.target.value)}
          />

          <input
            placeholder="Intermediate School Grades"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
            value={ipercent}
            onChange={(e) => setipercent(e.target.value)}
          />
          <input
            placeholder="Intermediate School City"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
            value={icity}
            onChange={(e) => seticity(e.target.value)}
          />

          {/* .....................................intermediate ends............................... */}

          {/* .....................................College starts............................... */}

          <input
            placeholder="College Name"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
            value={collegeName}
            onChange={(e) => setCollegeName(e.target.value)}
          />

          <input
            placeholder="College YOC"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
            value={collegeYOC}
            onChange={(e) => setcollegeYOC(e.target.value)}
          />

          <input
            placeholder="College CGPA"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
            value={collegeCGPA}
            onChange={(e) => setCollegeCGPA(e.target.value)}
          />
          <input
            placeholder="College City"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
            value={collegecity}
            onChange={(e) => setCollegecity(e.target.value)}
          />

          {/* .....................................College ends............................... */}

          {skills.map((skill, index) => (
            <div key={index} className="flex items-center gap-2 mb-4">
              <input
                placeholder={`Skill ${index + 1}`}
                className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 flex-grow focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="text"
                value={skill}
                onChange={(e) => handleskillchange(index, e)}
              />
              <button
                type="button"
                className="text-red-500 hover:text-red-700 transition ease-in-out duration-150"
                onClick={() => removeSkill(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md mt-2 hover:bg-blue-600 transition ease-in-out duration-150"
            onClick={addSkill}
          >
            Add Skill
          </button>
          {/* {................................skills ends...............................................} */}
          {/* {................................project....................................................} */}

          {Projects.map((project, index) => (
            <div key={index} className="flex items-center gap-2 mb-4">
              <input
                placeholder={`Project title ${index + 1}`}
                className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 flex-grow focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="text"
                value={project.title}
                onChange={(e) =>
                  handleProjectChange(index, "title", e.target.value)
                } // Pass correct field and value
              />
              <textarea
                placeholder={`Project Description ${index + 1}`}
                className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 flex-grow focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                value={project.description}
                onChange={(e) =>
                  handleProjectChange(index, "description", e.target.value)
                }
              />
              <button
                type="button"
                className="text-red-500 hover:text-red-700 transition ease-in-out duration-150"
                onClick={() => removeProject(index)}
              >
                Remove Project
              </button>
            </div>
          ))}
          <button
            type="button"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-blue-600 transition ease-in-out duration-150"
            onClick={addProject}
          >
            Add Project
          </button>

          {/* ...........................Awards & Achievement............................................... */}
          {awards.map((award, index) => (
            <div key={index} className="flex items-center gap-2 mb-4">
              <input
                placeholder={`Award ${index + 1}`}
                className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 flex-grow focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="text"
                value={award}
                onChange={(e) => handleAwardChange(index, e.target.value)}
              />
              <button
                type="button"
                className="text-red-500 hover:text-red-700 transition ease-in-out duration-150"
                onClick={() => removeAwards(index)}
              >
                Remove Award
              </button>
            </div>
          ))}
          <button
            type="button"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-blue-600 transition ease-in-out duration-150"
            onClick={addAwards}
          >
            Add Awards & Achievement
          </button>

          <button
          type="button"
          onClick={submit}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-blue-600 transition ease-in-out duration-150">
            Submit

          </button>
        </form>
      </div>
    </div>
  );
};

export default Forms;

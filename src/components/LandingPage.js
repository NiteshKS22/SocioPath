import React, { useState } from 'react';
import NavBar from './Nav';
import './stylesL.css';

const LandingPage = () => {
  const [profileDetails, setProfileDetails] = useState({
    name: '',
    bio: ''
  });
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [feedPosts, setFeedPosts] = useState([]);
  const [queries, setQueries] = useState([]);
  const [techUpdates, setTechUpdates] = useState([]);
  const [userSuggestions, setUserSuggestions] = useState([]);

  const handleProfileDetailsChange = (e) => {
    const { name, value } = e.target;
    setProfileDetails((prevProfileDetails) => ({
      ...prevProfileDetails,
      [name]: value
    }));
  };

  const handleAddSkill = (skill) => {
    setSkills((prevSkills) => [...prevSkills, skill]);
  };

  const handleAddProject = (project) => {
    setProjects((prevProjects) => [...prevProjects, project]);
  };

  const handleAddFeedPost = (post) => {
    setFeedPosts((prevFeedPosts) => [...prevFeedPosts, post]);
  };

  const handleAddQuery = (query) => {
    setQueries((prevQueries) => [...prevQueries, query]);
  };

  const handleAddTechUpdate = (update) => {
    setTechUpdates((prevTechUpdates) => [...prevTechUpdates, update]);
  };

  const handleAddUserSuggestion = (suggestion) => {
    setUserSuggestions((prevUserSuggestions) => [...prevUserSuggestions, suggestion]);
  };

  return (
    <div className="bg-gray-100">
      <NavBar />

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <div className="user-profile skills">
              <h2>User Profile</h2>
              <input
                type="text"
                name="name"
                value={profileDetails.name}
                onChange={handleProfileDetailsChange}
                placeholder="Name"
                className="border border-gray-300 rounded-md px-3 py-2 mb-2 w-full"
              />
              <textarea
                name="bio"
                value={profileDetails.bio}
                onChange={handleProfileDetailsChange}
                placeholder="Bio"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              ></textarea>
            </div>
            <div className="user-profile projects">
              <h2>Projects</h2>
              <div className="flex mb-2">
                <input
                  type="text"
                  value=""
                  onChange={(e) => handleAddProject(e.target.value)}
                  placeholder="Add project"
                  className="border border-gray-300 rounded-l-md px-3 py-2 w-full focus:outline-none"
                />
                <button
                  onClick={() => handleAddProject()}
                  className="bg-primary text-white rounded-r-md px-4 py-2 ml-2"
                >
                  Add
                </button>
              </div>
              <ul>
                {projects.map((project, index) => (
                  <li key={index}>{project}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-span-1">
            <div className="post feed">
              <h2>Feed</h2>
              <input
                type="text"
                value=""
                onChange={(e) => handleAddFeedPost(e.target.value)}
                placeholder="Add post"
                className="border border-gray-300 rounded-md px-3 py-2 mb-2 w-full"
              />
              <ul>
                {feedPosts.map((post, index) => (
                  <li key={index}>{post}</li>
                ))}
              </ul>
            </div>
            <div className="post queries">
              <h2>Queries</h2>
              <input
                type="text"
                value=""
                onChange={(e) => handleAddQuery(e.target.value)}
                placeholder="Add query"
                className="border border-gray-300 rounded-md px-3 py-2 mb-2 w-full"
              />
              <ul>
                {queries.map((query, index) => (
                  <li key={index}>{query}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-span-1">
            <div className="techup">
              <h2>TechUp</h2>
              <input
                type="text"
                value=""
                onChange={(e) => handleAddTechUpdate(e.target.value)}
                placeholder="Add tech update"
                className="border border-gray-300 rounded-md px-3 py-2 mb-2 w-full"
              />
              <ul>
                {techUpdates.map((update, index) => (
                  <li key={index}>{update}</li>
                ))}
              </ul>
            </div>
            <div className="match">
              <h2>Match</h2>
              <input
                type="text"
                value=""
                onChange={(e) => handleAddUserSuggestion(e.target.value)}
                placeholder="Add user suggestion"
                className="border border-gray-300 rounded-md px-3 py-2 mb-2 w-full"
              />
              <ul>
                {userSuggestions.map((suggestion, index) => (
                  <li key={index}>{suggestion}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

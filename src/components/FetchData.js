import React from "react";
import jobLists from "./data.json";

export const FetchData = () => {
  return jobLists.map((jobList) => {
    const {
      id,
      company,
      logo,
      tools,
      languages,
      role,
      level,
      position,
      postedAt,
      contract,
      location,
    } = jobList;
    return (
      <div
        key={id}
        className="bg-white shadow-md p-10 mb-6 last-of-type:mb-0 rounded-md border-l-[5px] border-cyan-700 flex justify-between"
      >
        <div className="flex gap-6">
          <div className="img--wrapper">
            <img src={logo} alt={company} />
          </div>
          <div className="job-desc">
            <span className="company--title">{company}</span>
            {jobList.new ? <span className="btn-sm"> New </span> : null}
            {jobList.featured ? (
              <span className="btn-sm featured-btn ml-2"> Featured </span>
            ) : null}
            <h1> {position}</h1>
            <div className="job-details flex gap-9">
              <span className="postedat">{postedAt}</span>
              <span className="contract">{contract}</span>
              <span className="location">{location}</span>
            </div>
          </div>
        </div>

        {/* <span> {id} </span> */}

        <div className="wrap flex items-center gap-4">
          <div className="role">
            <button className="btn ">{role}</button>
          </div>

          <div className="level">
            <button className="btn">{level}</button>
          </div>

          {tools.length > 0 ? (
            <div className="tools">
              {tools.map((tool, index) => {
                return (
                  <button className="btn" key={index}>
                    {" "}
                    {tool}{" "}
                  </button>
                );
              })}
            </div>
          ) : null}

          <div className="languages">
            {languages.map((language, index) => {
              return (
                <button className="btn" key={index}>
                  {" "}
                  {language}{" "}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  });
};

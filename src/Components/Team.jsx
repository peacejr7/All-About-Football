import React from "react";
import { Link } from "react-router-dom";

export default function Team({team}) {
  return (
    <>
      <Link to={`/${team.name}`}>
        <article className="bg-white hover:bg-gray-200 bg-gray-800 hover:bg-gray-300 transition-all duration-200 rounded-lg shadow overflow-hidden">
          <img src={team.Logo} alt="" className="md:h-[300px] w-full sm:h-full  object-cover" />
          <div className="p-4">
            <h2 className="font-bold text-lg text-[#000080] text-white mb-2">
              {team.name}
            </h2>
            <ul className="flex flex-col items-start justify-start gap-2 text-[#000080]">
              <li>League: {team.League}</li>
              <li>Stadium: {team.Stadium}</li>
            </ul>
          </div>
        </article>
      </Link>
    </>
  );
}
import React from "react";

export default function SearchBar() {
  return (
    <>
      <div className="searchBar flex justify-between mb-7">
        {/* left container , logo */}
        <div className="leftContainer cursor-pointer text-xl sm:text-2xl text-white self-center">
          OverView
        </div>
        {/* right container , search , plus button  */}
        <div className="rightContainer flex justify-around w-[20%] sm:w-[16%] md:w-[12%] lg:w-[9%] xl:w-[7%] ">
          {/* right side , search button  */}
          <div className="rightLeft self-center">
            <i className="ri-search-line cursor-pointer text-white"></i>
          </div>
          {/* right side , plus button  */}
          <div className="rightRight px-2 py-0 sm:px-4 sm:py-1 bg-green-400 rounded-lg">
            {/* <div className="rightRight px-3 py-1 bg-green-400 rounded-lg"> */}
            <i className="ri-add-line cursor-pointer text-white text-xl"></i>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";

function LandingPage(props:any) {
  console.log(`Advice is ${props.advice}`)
  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen bg-[#202632] h-screen">
        <div className="flex flex-col bg-[#313a49] rounded-3xl shadow-lg h-[310px] w-[600px] px-9 py-7">
          <section>
            <div className="flex flex-col items-center">
              <h1 className="text-md font-sans font-semibold text-[#53ffab] pb-2">
                ADVICE #202
              </h1>
              <h1 className="text-xl font-semibold font-serif max-h-[150px] overflow-x-auto z-0">
                Lorem ipsum dolor sit amet ium reiciendis illum sit perspiciatis
                aliquid ducimus culpa modi. Sed cupiditate voluptates culpa
                deleniti doloribus reiciendis accusamus vel dolore. Culpa, ea
                lore
              </h1>
            </div>
          </section>
          <section>
            <div className="fixed z-20 w-[32%] bg-white h-[1px] translate-y-20"></div>
          </section>
        </div>
        <button className="rounded-full bg-[#53ffab] px-4 py-4 z-20 hover:shadow-2xl hover:shadow-[#26ff96]">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
              fill="#202733"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

export default LandingPage;


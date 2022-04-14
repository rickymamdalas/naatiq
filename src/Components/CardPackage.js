import React from "react";

export default function CardPackage({ tittle, price, list1, list2, list3, list4, list5, list6, list7, list8, list9, list10, list11, list12, list13 }) {
  return (
    <div className="divide-y divide-blue-400 bg-blue-50 rounded-xl py-4 px-4 cursor-pointer w-[300px] md:w-full">
      <div className="text-center text-blue-900 py-8">
        <p className="font-medium py-2"> {tittle}</p>
        <h3 className="text-3xl font-bold"> Rp. {price}</h3>
      </div>
      <div className=" text-slate-800 py-4 ">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
          <h3 className="text-base font-medium py-2"> {list1}</h3>
        </div>
      </div>
    </div>
  );
}

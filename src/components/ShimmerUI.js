import React from "react";
const ShimmerUI = () => {
	return (
		<div className="flex flex-wrap gap-5 w-screen justify-center  h-full">
			{Array(6)
				.fill(0)
				.map((item, index) => (
					<div
						key={index}
						className=" w-full h-2/6 gap-3 rounded-xl animate-pulse  md:h-3/4  flex flex-wrap mx-5 my-5  border-4 border-blue-200 p-3 md:w-5/12 lg:w-1/4">
						<div className="w-1/3 h-full md:w-full md:h-2/3 animate-pulse bg-blue-100 rounded-lg"></div>
						<div className="w-7/12 h-full flex flex-col gap-1 mt-2 md:w-full md:h-1/3">
							<div className="animate-pulse bg-blue-100 w-full h-1/6"></div>
							<div className="animate-pulse bg-blue-100 w-full h-1/6"></div>
							<div className="animate-pulse bg-blue-100 w-full h-1/6"></div>
							<div className="animate-pulse bg-blue-100 w-full h-1/6"></div>
						</div>
					</div>
				))}
		</div>
	);
};

export default ShimmerUI;

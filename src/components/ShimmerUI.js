import React from "react";
const ShimmerUI = (props) => {
	const { uiType } = props;
	return (
		<div className="flex flex-wrap gap-5 w-screen justify-center  h-full">
			{uiType === "ResturantCardList" &&
				Array(6)
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
			{uiType === "ResturantMenuList" &&
				Array(6)
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
			{uiType === "RestaurantMenuList" && (
				<div className="-z-50 h-full w-full">
					<div className="w-11/12 h-1/6 flex justify-between gap-4 mx-auto my-5 border-4 border-blue-200 rounded-xl animate-pulse p-2">
					
					<div className="hidden md:block w-2/12 rounded-xl h-full bg-blue-200"></div>
						<div className=" h-full flex flex-col gap-2 w-8/12 mx-auto justify-center">
							<p className="h-[15px] w-10/12  bg-blue-200"> </p>
							<p className="h-[10px] w-10/12  bg-blue-100"> </p>
							<p className="h-[10px] w-10/12  bg-blue-100"> </p>
						</div>
						<div className="w-2/12 rounded-xl h-full bg-blue-200"></div>
					</div>
					<div className=" w-11/12 h-5/6 overflow-y-scroll scrollbar-hide flex flex-col justify-between gap-4 mx-auto my-5  rounded-xl animate-pulse p-2">
						<div className=" h-1/6 flex flex-col gap-2 w-full bg-blue-200 p-2 rounded-xl justify-center">
							<div className=" h-full flex flex-col gap-2 w-full bg-blue-300  rounded-xl justify-center"></div>
						</div>
						<div className=" h-1/6 flex flex-col gap-2 w-full bg-blue-200 p-2 rounded-xl justify-center">
							<div className=" h-full flex flex-col gap-2 w-full bg-blue-300  rounded-xl justify-center"></div>
						</div>
						<div className=" h-1/6 flex flex-col gap-2 w-full bg-blue-200 p-2 rounded-xl justify-center">
							<div className=" h-full flex flex-col gap-2 w-full bg-blue-300  rounded-xl justify-center"></div>
						</div>
						<div className=" h-1/6 flex flex-col gap-2 w-full bg-blue-200 p-2 rounded-xl justify-center">
							<div className=" h-full flex flex-col gap-2 w-full bg-blue-300  rounded-xl justify-center"></div>
						</div>
						<div className=" h-1/6 flex flex-col gap-2 w-full bg-blue-200 p-2 rounded-xl justify-center">
							<div className=" h-full flex flex-col gap-2 w-full bg-blue-300  rounded-xl justify-center"></div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ShimmerUI;

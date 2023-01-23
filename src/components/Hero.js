import React from "react";
import { Link } from "react-router-dom";
//import images
import WomanImg from "../img/woman_hero.png";

const Hero = () => {
	return (
		<section className="bg-sky-100 h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24">
			<div className="container mx-auto flex justify-around h-full">
				{/* text */}
				<div className="flex flex-col justify-center">
					{/*pretitle  */}
					<div className="font-semibold flex items-center uppercase">
						<div className="w-10 h-[2px] bg-sky-400 mr-3"></div>
						<div>New Trend</div>
					</div>
					<h1 className="text-[70px] leading-[1.1] font-light mb-4">
						AUTUMN SALE STYLISH <br />
						<span className="font-semibold">
							WOMENS
						</span>
					</h1>
					<Link to={"/"} className=" self-center uppercase font-semibold border-b-2 border-primary">Discover More</Link>
				</div>

				{/* image */}
				<div className="hidden lg:block">
					<img src={WomanImg} alt="" />
				</div>
			</div>
		</section>
	);
};

export default Hero;

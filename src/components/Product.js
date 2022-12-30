import React, { useContext } from "react";

const Product = ({ product }) => {
	console.log(product);
	//destructure product
	const { id, image, category, title, price } = product;

	return (
		<div>
			<div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
				<div>{/* image */}</div>
			</div>
			<div>2</div>
		</div>
	);
};

export default Product;

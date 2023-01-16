import React from "react";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";

const CartItem = ({ item }) => {
	//desestructure item
	const { id, title, image, price, amount } = item;
	return (
		<div className="flex">
			<div className="w-full min-h-[150px] flex items-center gap-x-4">
				{/* image */}
				<Link to={`/product/${id}`}>
					<img
						className="max-w-[80px]"
						src={image}
						alt="img"
					/>
				</Link>
				<div className="w-full flex flex-col">
					{/* Title & remove Icon */}
					<div className="flex justify-between mb-2">
						{/* title */}
						<Link
							to={`/product/${id}`}
							className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
						>
							{title}
						</Link>
						{/* remove iccon */}
						<div className="text-xl cursor-pointer">
							<IoMdClose className="text-gray-500 hover:text-red-500 transition " />
						</div>
					</div>
					<div className="bg-blue-200 flex gap-x-2 h-[36px]text-sm">
						{/* quantity */}
						<div className="">
							{/* minus icon */}
							<div className="">
								<IoMdRemove />
							</div>
							{/* amount */}
							<div>{amount}</div>
							{/* plus icon */}
							<div>
								<IoMdAdd />
							</div>
						</div>

						{/* item price*/}
						<div></div>

						{/* final price*/}
						<div></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartItem;

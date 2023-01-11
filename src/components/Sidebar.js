import React, { useContext } from "react";
//import Link
import { Link } from "react-router-dom";
//import icons
import { IoMdFastforward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
//import components
import CartItem from "../components/CartItem";
//import sidebarcontext
import { SidebarContext } from "../contexts/SidebarContext";

const Sidebar = () => {
	const { isOpen, handleClose } = useContext(SidebarContext);
	return <div>Sidebar</div>;
};

export default Sidebar;

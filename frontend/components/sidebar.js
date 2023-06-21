import React from "react";
import { useRouter } from "next/router";

function Sidebar() {
  const router = useRouter();

  const handleRoute = (route) => {
    router.push(route);
  };

  const currentPath = router.pathname;

  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <span className="nav-link" href="javascript:void(0)" onClick={() => handleRoute('/')}>
            <img
              src="assets/img/home.svg"
              alt="home"
              className="nav_icon_size aux_icon_side pe-3"
            />
          <span className={currentPath === '/' ? 'nav_active' : ''}>হোমপেজ</span>
          </span>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <img
              src="assets/img/basket3.svg"
              alt="home"
              className="nav_icon_size aux_icon_side pe-3"
            />
            <span className="{{ 'cart' === request()->path() ? 'nav_active' : '' }}">কার্ট</span>
          </a>
        </li>
        <hr style={{ borderTop: "2px dashed #0a7151" }} />
        <li className="nav-item">
          <a className="nav-link" href="#">
            <img
              src="assets/img/category_icons/onion.png"
              alt="...."
              className="nav_icon_size aux_icon_side pe-3"
            />
            <span>খাদ্য তৈরি উপকরণ ও শুকনো বাজার</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <img
              src="assets/img/category_icons/spice.png"
              alt="...."
              className="nav_icon_size aux_icon_side pe-3"
            />
            <span>মসলা, স্পাইস ও তেল</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <img
              src="assets/img/category_icons/grain-sack.png"
              alt="...."
              className="nav_icon_size aux_icon_side pe-3"
            />
            <span>চাল, ডাল ও দুগ্ধজাত প্রোডাক্ট</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <img
              src="assets/img/category_icons/juice.png"
              alt="...."
              className="nav_icon_size aux_icon_side pe-3"
            />
            <span>বেভারেজ ও জুস</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <img
              src="assets/img/category_icons/coffee.png"
              alt="...."
              className="nav_icon_size aux_icon_side pe-3"
            />
            <span>বিস্কুট এবং চকলেট</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <img
              src="assets/img/category_icons/ingreditents.png"
              alt="...."
              className="nav_icon_size aux_icon_side pe-3"
            />
            <span>নিত্যপ্রয়োজনীয়</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;

import { withRouter } from 'next/router';

function Navbar({ router }) {
  const navigateToHome = () => {
    router.push('/');
  };

  const gorceryShop = ()=> {
    router.push('/grocery');
  }

  const pointer = {
    cursor: 'pointer',
  };

  return (
    <>
    <header id="header" className="header fixed-top d-flex align-items-center">

    <div className="d-flex align-items-center justify-content-between">
        <img src="assets/img/list.svg" alt="মেন্যু" className="toggle-sidebar-btn nav_icon_name"/>
        <span className="logo d-flex align-items-center nav_icon_name">
            <img src="assets/img/logo.png" alt="Lotif and sons"/>
            <span className="d-none d-lg-block">লতিফ এন্ড সন্স</span>
        </span>
    </div>

    <div className="search-bar col-lg-8">
        <form className="search-form d-flex align-items-center category_hoolder" method="get" action="#">
            <input type="text" id="get_search" name="get_search" placeholder="এখানে সার্চ করুন" title="এখানে সার্চ করুন"/>
            <button type="submit" title="Search">
                <img src="assets/img/search.svg" alt="মেন্যু" className="nav_icon_size aux_icon_name"/>
            </button>
        </form>
    </div>


    <nav className="header-nav ms-auto">
        <ul className="d-flex align-items-center">

            <li className="nav-item search_mini">
                <a className="nav-link nav-icon search-bar-toggle " href="#">
                    <img src="assets/img/search.svg" alt="মেন্যু" className="nav_icon_size aux_icon_name"/>
                </a>
            </li>

            <li className="nav-item dropdown pe-3">

                <span className="nav-link nav-profile d-flex align-items-center pe-0" onClick={navigateToHome} style={pointer}>
                    <img src="assets/img/camera2.svg" alt="লিস্ট" className="nav_icon_size aux_icon_name"/>
                    <div className="mini_screen">
                        <span className="d-none d-md-block ps-2 pe-2 nave_link_font">লিস্ট আপলোড করুন</span>
                    </div>
                </span>

            </li>

            <li className="nav-item dropdown pe-3">

                <span className="nav-link nav-profile d-flex align-items-center pe-0" onClick={gorceryShop} style={pointer}>
                    <img src="assets/img/login.svg" alt="লগইন" className="nav_icon_size aux_icon_name"/>
                    <div className="mini_screen">
                        <span className="d-none d-md-block ps-2 nave_link_font">লগইন করুন</span>
                    </div>
                </span>

            </li>

        </ul>
    </nav>
    </header>
    </>
  );
}

export default withRouter(Navbar);
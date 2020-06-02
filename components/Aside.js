import Link from 'next/link';

const Aside = () => (
	<React.Fragment>
		<aside className="main-sidebar col-12 col-md-3 col-lg-2 px-0">
          <div className="main-navbar">
            <nav className="navbar align-items-stretch navbar-light bg-white flex-md-nowrap border-bottom p-0">
              <a className="navbar-brand w-100 mr-0" href="#" style={{lineHeight: "25px"}}>
                <div className="d-table m-auto">
                  <span className="d-none d-md-inline ml-1">ABI Dashboard</span>
                </div>
              </a>
              <a className="toggle-sidebar d-sm-inline d-md-none d-lg-none">
                <i className="material-icons">&#xE5C4;</i>
              </a>
            </nav>
          </div>
          <form action="#" className="main-sidebar__search w-100 border-right d-sm-flex d-md-none d-lg-none">
            <div className="input-group input-group-seamless ml-3">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <i className="fas fa-search"></i>
                </div>
              </div>
              <input className="navbar-search form-control" type="text" placeholder="Search for something..." aria-label="Search" /> </div>
          </form>
          <div className="nav-wrapper">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link " href="index.html">
                  <i className="material-icons">edit</i>
                  <span>Blog Dashboard</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/admin/posts">
                  <i className="material-icons">vertical_split</i>
                  <span>Blog Posts</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/admin/createPost">
                  <i className="material-icons">note_add</i>
                  <span>Add New Post</span>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link " href="/admin/testimonies">
                  <i className="material-icons">vertical_split</i>
                  <span>Testimonies</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/admin/createTestimony">
                  <i className="material-icons">note_add</i>
                  <span>Add New Testimony</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/admin/contacts">
                  <i className="material-icons">vertical_split</i>
                  <span>Contacts</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/admin/subscriptions">
                  <i className="material-icons">vertical_split</i>
                  <span>Subscriptions</span>
                </a>
              </li>
              
            </ul>
          </div>
        </aside>

	    
	    	
		 <style jsx global>{`

	    `}</style>

    </React.Fragment>
		
);

export default Aside;

// <li className="nav-item dropdown dmenu">
// 			                    <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
// 						          PAGES
// 						        </a>
// 			                    <div className="dropdown-menu">
// 			                    	<a className="dropdown-item" href="page-gallery.html">GALLERY</a>
// 			                    	<a className="dropdown-item" href="page-testimonials.html">TESTIMONIALS</a>
// 	          						<a className="dropdown-item" href="page-faq.html">FAQ</a>
// 	          						<a className="dropdown-item" href="page-404.html">404 PAGE</a>
// 	          						<a className="dropdown-item" href="page-events.html">EVENTS</a>
// 	          						<a className="dropdown-item" href="page-events-single.html">SINGLE EVENTS</a>
// 	          						<a className="dropdown-item" href="page-news.html">NEWS</a>
// 	          						<a className="dropdown-item" href="page-news-single.html">SINGLE NEWS</a>
// 							    </div>
// 			                </li>
import { useGlobalContext} from "./context";
import {Link} from 'react-router-dom'

const Sidebar = () => {

  const { isSidebarOpen, closeSidebar} = useGlobalContext();




  return (
    <div
      className={`${isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"}`} >
      <aside className="sidebar" onMouseLeave={closeSidebar}>
         
        <div className="sidebar-links">
          <button>
          <Link to='/' className="hoveri" onClick={closeSidebar}>Home</Link>
          </button>
          <button>
          <Link to='/types' className="hoveri" onClick={closeSidebar}>Massagearten</Link>
          </button>
          <button>
          <Link to='/health' className="hoveri" onClick={closeSidebar}>Health & Fitness</Link>
          </button>
          <button>
          <Link to='/about' className="hoveri" onClick={closeSidebar}>Über uns</Link>
          </button>
          <button>
          <Link to='/contact' className="hoveri" onClick={closeSidebar}>Kontakt</Link>
          </button>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;

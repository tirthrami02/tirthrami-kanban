import React, { useState } from 'react';
import './Navbar.css';

function Navbar(props) {

  const [isNestedDropdownOpen, setNestedDropdownOpen] = useState(false);
  const [isNestedDropdownOpen1, setNestedDropdownOpen1] = useState(false);
  const isMainDropdownOpen = true;

  const toggleNestedDropdown = () => {
    setNestedDropdownOpen(!isNestedDropdownOpen);
    setNestedDropdownOpen1(false);
  };

  const toggleNestedDropdown1 = () => {
    setNestedDropdownOpen1(!isNestedDropdownOpen1);
    setNestedDropdownOpen(false);
  };

  const status = () => {
    props.setGroup(0);
    console.log(props.group);
  }
  const user = () => {
    props.setGroup(1);
    console.log(props.group);
  }
  const priority = () => {
    props.setGroup(2);
    console.log(props.group);
  }
  const priorityorder = () => {
    props.setOrder(0);
    console.log(props.order);
  }
  const titleorder = () => {
    props.setOrder(1);
    console.log(props.order);
  }

  return (
    <nav>
      <ul>
        <li>

          <button className="dropdown-btn">
            <div className='a'>
              <span className="material-symbols-outlined">tune</span>
              <span className="text">Display</span>
            </div>
            {isMainDropdownOpen ? <span className="material-symbols-outlined">
              expand_more
            </span>
              : <span className="material-symbols-outlined">
                expand_more
              </span>
            }
          </button>

          {isMainDropdownOpen &&
            (
              <ul className="dropdown-content" style={{ backgroundColor: "rgb(239, 239, 239)" }}>
                <li>
                  <div style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}>
                    <div className="a">Grouping</div>
                    <button className="nested-dropdown-btn" onClick={toggleNestedDropdown}>

                      <div className='hehe'>
                        {(props.group === 0 ? "Status" : (props.group === 1 ? "User" : "Priority"))}

                        {isNestedDropdownOpen ? <span className="material-symbols-outlined">expand_less </span> : <span className="material-symbols-outlined">expand_more</span>}
                      </div>

                    </button>
                  </div>
                  {isNestedDropdownOpen && (
                    <ul className="nested-dropdown-content">
                      <li><button onClick={status}>Status</button></li>
                      <li><button onClick={user}>User</button></li>
                      <li><button onClick={priority}>Priority</button></li>
                    </ul>
                  )}
                </li>
                <li>
                  <div style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}>
                    <div className='a'>Ordering</div>
                    <button className="nested-dropdown-btn" onClick={toggleNestedDropdown1}>
                      <div className="hehe">
                        {(props.order === 0 ? "Priority" : "Title")}
                        {isNestedDropdownOpen1 ? <span className="material-symbols-outlined">
                          expand_less
                        </span> : <span className="material-symbols-outlined">

                          expand_more
                        </span>
                        }
                      </div>
                    </button>
                  </div>
                  {isNestedDropdownOpen1 && (
                    <ul className="nested-dropdown-content">
                      <li><button onClick={priorityorder}>Priority</button></li>
                      <li><button onClick={titleorder}>Title</button></li>
                    </ul>
                  )}
                </li>
              </ul>
            )
          }
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
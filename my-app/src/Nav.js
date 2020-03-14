import React from "react";

const Nav = () => {
  return (
    <div className="navWrapper">
      <header
        style={{
          backgroundColor: "#2eb82e",
          height: "100%",
          textAlign: "left",
          fontSize: "1.8em"
        }}
        className="headerText"
      >
        <h1>
          <strong>Jowita the new page</strong>
        </h1>
          <p>New features</p>
      </header>
    </div>
     <div className="right menu">
     {/* <Menu.Item>
       <Input icon="search" placeholder="Search cats..." />
     </Menu.Item> */}
     <Menu.Item
          style={{ color: "#FF7F11", fontSize: "1em" }}
          fixed="right"
          size="small"
        >
          <Dropdown width={2} text="Menu">
            <Dropdown.Menu
              style={{
                fontSize: "0.6em",
                textAlign: "centre"
              }}
            >
          
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
     <div className="ui item">
          {" "}
          {/* <Link to={`/menu`}> Menu </Link>{" "} */}
        </div>
    
   </div>

  
};

export default Nav;

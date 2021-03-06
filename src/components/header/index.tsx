import React from "react";
import "./main.css";
import Social from "./networks";
import { useNav } from '../../customHooks/useNav';


const Header = (props) => {
  if (props.data) {
    var name: String = props.data.name;
    var occupation: String = props.data.occupation;
    var description: String = props.data.description;
    var city: String = props.data.address.city;
    var social = props.data.social;
  }

  const headerRef= useNav("Header");

  return (

      <div ref={headerRef}  id="header">
        <header className="container-fluid vh-100 d-flex">
          <div className="row justify-content-center">
            <div className="col-md-8 col-sm-12">
            <h1 className="name responsive-headline text-center">{name}.</h1>
            <p className="h4 bio text-left">
              I'm a {city} based <span>{occupation}</span> {description}
            </p>
            <hr />
            <Social data={social} />
            </div>
          </div>
        </header>
      </div>

  );
};
export default Header;

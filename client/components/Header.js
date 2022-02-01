import React from "react";

const Header = () => {
    return (
        <Header>
            <div className="wrap header--flex">
                <h1 className="header--logo"><a href="">Courses</a></h1>
                <nav>
                    <ul className="header--signedIn">
                        <li>Welcome,</li>
                        <li><a href="/signout">Sign Out</a></li>
                    </ul>
                </nav>
            </div>
        </Header>
    )
}
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ABOUT, BLOG, HOME, PROJECT } from "../utils/constants/routes";


const Header = (props) => {
  const [theme, setTheme] = useState("light");
  const router = useRouter();

  useEffect(() => {
    let currentTheme = localStorage.getItem("theme");
    if (currentTheme === null) {
      const currentDate = new Date();
      if (currentDate.getHours() > 17) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    } else {
      setTheme(currentTheme);
    }
  }, [theme]);

  const toggleTheme = () => {
    props.toggleTheme();
    setTheme(localStorage.getItem("theme"));
  };

  return (
    <div id="header" className="header-component">
      <div className="header-list">
        <div className="header-left-side">
          <div
            className={`header-item ${
              router.pathname === HOME ? "active" : ""
              }`}
            onClick={() => router.push(HOME)}
          >
            isagul
          </div>
        </div>
        <div className="header-right-side">
          <div
            className={`header-item ${
              router.pathname === ABOUT ? "active" : ""
              }`}
            onClick={() => router.push(ABOUT)}
          >
            about
          </div>
          <div
            className={`header-item ${
              router.pathname === BLOG ? "active" : ""
              }`}
            onClick={() => router.push(BLOG)}
          >
            blog
          </div>
          <div
            className={`header-item ${
              router.pathname === PROJECT ? "active" : ""
              }`}
            onClick={() => router.push(PROJECT)}
          >
            projects
          </div>
        </div>
        <div className="theme-icon" onClick={toggleTheme}>
          {theme === "light" ? (
            <img
              src="/static/sun.svg"
              width="40"
              height="40"
              alt="Sun free icon"
              title="Sun"
            />
          ) : (
              <img
                src="/static/night.svg"
                width="40"
                height="40"
                alt="Moon free icon"
                title="Moon"
              />
            )}
        </div>
      </div>
      <style jsx>
        {`
          .header-component {
            text-align: center;
            width: 100%;
            padding: 40px 20px;
            align-self: center;
            position:sticky;
            top: 0;
            z-index: 1;
          }
          @media only screen and (max-width: 425px) {
            .header-component {
              width: 100%;
              padding: 40px 20px;
            }
          }
          .header-component .header-list {
            display: flex;
            justify-content: space-around;
            align-items: center;
          }
          .header-component .header-list .header-left-side {
            font-weight: bold;
          }
          .header-component .header-list .header-item {
            margin-left: 1rem;
            display: inline-block;
            position: relative;
          }
          .header-component .header-list .header-item:first-child {
            margin-left: 0;
          }
          .header-component .header-list .header-item::after {
            content: "";
            display: block;
            margin: auto;
            height: 3px;
            width: 0;
            background: transparent;
            transition: width 0.5s ease;
          }
          .header-component .header-list .header-item:hover {
            cursor: pointer;
          }
          .header-component .header-list .header-item:hover::after {
            width: 100%;
            background: #cf5050;
          }
          .header-component .header-list .active::after {
            width: 100%;
            background: #cf5050;
          }
          .header-component .header-list a {
            margin-left: 1rem;
          }
          .header-component .header-list .theme-icon {
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

export default Header;

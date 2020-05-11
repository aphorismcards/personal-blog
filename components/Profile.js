const Profile = () => {
  return (
    <div>
      <div className="profile">
        <img src="static/profile_image.jpg" alt="isa_gul_profile_image" />
        <div className="profile-info">
          <p>İsa Gül</p>
          <p>Front-End Developer</p>
          <p>"I'm gonna start a revolution from my bed"</p>
        </div>
      </div>
      <div className="icons">
        <a
          href="https://github.com/isagul"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github-square"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/isa-gul/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://medium.com/@isagul"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-medium"></i>
        </a>
        <a
          href="https://twitter.com/isamigul"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter-square"></i>
        </a>
        <a
          href="https://www.npmjs.com/settings/isagul/profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-npm"></i>
        </a>
      </div>
      <style jsx>{`
          .profile {
            display: flex;
            flex-direction: row;
            margin-bottom: 1rem;
            justify-content: center;
          }
          .profile img {
            border-radius: 50%;
            height: 120px;
            width: 120px;
            margin-right: 10px;
          }
          .profile .profile-info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            border-left-color: #cf5050;
            border-left-width: 1px;
            border-left-style: solid;
            padding-left: 10px;
          }
          @media only screen and (max-width: 425px) {
            .profile .profile-info {
              border-left: none;
              border-bottom: 1px solid;
              border-bottom-color: rgba(207, 80, 80, 0.5);
              margin-bottom: 1rem;
            }
          }
          .profile .profile-info p {
            letter-spacing: 2px;
            line-height: 15px;
            font-family: "Roboto", sans-serif;
          }
          .profile .profile-info p:last-child {
            float: right;
            font-size: 10px;
            font-family: "Raleway", sans-serif;
          }
          @media screen and (max-width: 420px) {
            .profile {
              margin-left: 0;
              flex-direction: column;
            }
            .profile img {
              margin-right: 0;
              height: 80px;
              width: 80px;
            }
            .profile .profile-info {
              padding-left: 0;
            }
          }
          .icons {
            display: flex;
            flex-direction: row;
            justify-content: center;
          }
          .icons a {
            background: rgba(38, 38, 38, 0.7);
            padding: 10px;
            border-radius: 5px;
            margin-right: 10px;
          }
          .icons a:last-child {
            margin-right: 0;
          }
          .icons i {
            color: white;
            border-radius: 5px;
            font-size: 40px;
            transition: all 0.1s ease-out;
          }
          .icons i:hover {
            cursor: pointer;
          }
        `}</style>
    </div>
  );
};

export default Profile;

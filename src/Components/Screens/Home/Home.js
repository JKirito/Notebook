import React from "react";
import "./Home.css";
import { ReactComponent as NotesLogo } from "../Home/notes.svg";
import { ReactComponent as UserGroupLogo } from "../Home/usergroup.svg";
import { ReactComponent as UserLogo } from "../Home/user.svg";
import { ReactComponent as BellLogo } from "../Home/bell.svg";
import { ReactComponent as SettingsLogo } from "../Home/settings.svg";
import { ReactComponent as LogoutLogo } from "../Home/logout.svg";

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="itemcontainer">
          <NotesLogo className="item" />
          <p>Notes</p>
        </div>

        <div className="itemcontainer">
          <UserGroupLogo className="item" />
          <p>Class</p>
        </div>
      </div>
      <div className="settingcontainer">
        <UserLogo />
        <BellLogo />
        <LogoutLogo />
        <SettingsLogo />
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import { auth } from "../../firebase";
// Styles
import styles from "./Header.css";
// Components

const Header = ({ history }) => {
  const handleSignOut = async () => {
    try {
      await auth.signOut();
      history.push("user-auth");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <>
      <header className="bl-header">
        <h1 className="bl-title">My Diary App</h1>
        <button className="bl-btn" onClick={handleSignOut}>
          Log out
        </button>
      </header>
    </>
  );
};

export default Header;

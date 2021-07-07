import { useLayoutEffect } from 'react';
import { useHistory } from 'react-router';
//import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import useContextGetter from '../../hooks/useContextGetter';
//import Write from "../../pages/write/Write";


import "./homepage.css";

export default function Homepage() {
  /* const location = useLocation();
  console.log(location); */
  const history = useHistory();
  const context = useContextGetter();

  useLayoutEffect(() => {
    if (!context.state.isUserLoggedIn) {
      history.push('/login');
    }
  }, [context.state, history]);
  
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}
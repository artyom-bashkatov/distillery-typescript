import React from "react";
import { useHistory } from "react-router-dom";

export const AboutPage: React.FC = () => {
  const history = useHistory();
  return <>
    <h1>Страница информации</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nemo quisquam excepturi sunt nisi optio tempora perspiciatis sit! Labore odit veniam sequi alias, voluptatum ipsam a voluptates magni! Asperiores, vero.</p>
    <button className="btn" onClick={() => history.push('/')}>Обратно к списку дел</button>
  </>
}

export default AboutPage;
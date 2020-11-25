import React from "react";
function Home() {
  return (
    <div className="container mt-5 rounded bg-light">
        <div className="row">
        <div className="col">
            <h1 className="pt-3 pl-3">About Ryan</h1>
            <hr />
            <div className="newClass">
            <img id="profile-photo" src="ryanface.jpeg" alt="Pic of Ryan" />
            <div id= "textBox" className="mt-3 px-3">
            <p>Hello and thank you for visiting my website. Currently I am studying full stack development at the University of Minnesota.</p>
        
            <p>Feel free to check out the other pages of this site, where you will find projects I have created during my time at the U of M.</p>

            <p>You'll notice if you click on the icons in the footer it will lead you to my online profiles. Feel free to reach out!</p>
            </div>
            </div>
        </div>
        </div>
    </div>
  );
}

export default Home;
import React from "react";

function Projects() {
  return (
    <div className="container mt-5 rounded bg-light">
        <div className="row">
        <div className="col">
            <h1 className="pt-3 pl-3" >Portfolio - take a look at some recent projects I made, including group projects I collaborated on!</h1>
            <hr />
            <div className="row row-cols-1 row-cols-md-2">
              <div className="col mb-4">
                <div className="card">
                    <img src="creditcroc.png" className="card-img-top" alt="Credit Croc" />
                    <div className="card-body">
                      <h5 className="card-title">Credit Croc</h5>
                      <a href="https://github.com/coryjquirk/croconaw-squad" target="_blank" rel="noreferrer">Credit Croc</a>
                    </div>
                </div>
                </div>
                <div className="col mb-4">
                <div className="card">
                    <img src="workdayscreenshot.png" className="card-img-top" alt="screenshot of work-day-scheduler project" />
                    <div className="card-body">
                    <h5 className="card-title">Day Planner</h5>
                    <a href="https://keepthelidontight.github.io/dailyPlanner/" target="_blank" rel="noreferrer">Workday Planner</a>
                    </div>
                </div>
                </div>
                <div className="col mb-4">
                <div className="card">
                    <img src="weatherboard.png" className="card-img-top" alt="screenshot of a weather app" />
                    <div className="card-body">
                    <h5 className="card-title">Weather Dashboard</h5>
                    <a href="https://keepthelidontight.github.io/weatherDashboard/" target="_blank" rel="noreferrer">Weather Dashboard</a>
                    </div>
                </div>
                </div>
                <div className="col mb-4">
                <div className="card">
                    <img src="artists.png" className="card-img-top" alt="Whales Tracker project screenshot" />
                    <div className="card-body">
                    <h5 className="card-title">Artist's In The News</h5>
                    <a href="https://tsinmoua.github.io/Artists-in-the-News/" target="_blank" rel="noreferrer">Artist's In the News</a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default Projects;
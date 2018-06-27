import React, { Component } from 'react';

//components
import SubHeader from '../headerComponent/subHeader';
import HeaderLinks from '../headerComponent/links';


class ProjectsPage extends Component {
  render() {
    return (
      <div className="componentBody container-fluid">

        <div className="componentHeader">
          <div>
            <h1>Jordan Fred</h1>
            <HeaderLinks />
          </div>
          <SubHeader />
        </div>

        <div className="projectsDisplay componentMain">

            {/*PORFOLIO SITE*/}
            <div className="projectDiv">

              <h4>Portfolio Site</h4>
              <div className="linksNPic">
                <a href="https://github.com/JCFred/reactPortfolio" className="iconSmall githubWhite"></a>
                <div className="projectImage portfolioImg"></div>
                <div className="iconSmall noHover"></div>
              </div>
              <div className="techUsed">

                <div className="tech">
                  <div className="techIcon reactJs"></div>
                  <p>ReactJS</p>
                </div>

                <div className="tech">
                  <div className="techIcon sass"></div>
                  <p>SASS</p>
                </div>

                <div className="tech">
                  <div className="techIcon gulp"></div>
                  <p>Gulp</p>
                </div>

                <div className="tech">
                  <div className="techIcon aws"></div>
                  <p>AWS</p>
                </div>

              </div>
              <p>
                This very website you are looking at right now. Single page application with custom parallax of Denver Skyline.
              </p>
            </div>

            {/*MSKOR*/}
            <div className="projectDiv">
              <h4>Mskor.com</h4>
              <div className="linksNPic">
                <div className="iconSmall noHover"></div>
                <div className="projectImage mskorImg"></div>
                <a href="https://www.mskor.com/" className="iconSmall webLinkWhite"></a>
              </div>
              <div className="techUsed">

                <div className="tech">
                  <div className="techIcon wordpress"></div>
                  <p>Wordpress</p>
                </div>

                <div className="tech">
                  <div className="techIcon css"></div>
                  <p>CSS3</p>
                </div>

                <div className="tech">
                  <div className="techIcon aws"></div>
                  <p>AWS</p>
                </div>

              </div>
              <p>
                Contracted site, built and managed for Magnusson-Skor an entrepreneur publishing company.
              </p>
            </div>



            {/*PIXEL AID*/}
            <div className="projectDiv">
              <h4>PixelAid</h4>

              <div className="linksNPic">
                <a href="https://github.com/Pixelaid-Team/Pixelaid" className="iconSmall githubWhite"></a>
                <div className="projectImage pixelAidImg"></div>
                <a href="http://pixelaid.herokuapp.com/" className="iconSmall webLinkWhite"></a>
              </div>

              <div className="techUsed">

                <div className="tech">
                  <div className="techIcon bootstrap"></div>
                  <p>Bootstrap</p>
                </div>

                <div className="tech">
                  <div className="techIcon postgresSql"></div>
                  <p>PostgreSQL</p>
                </div>

                <div className="tech">
                  <div className="techIcon nodeJs"></div>
                  <p>Node.JS</p>
                </div>

                <div className="tech">
                  <div className="techIcon js"></div>
                  <p>JavaScript</p>
                </div>

              </div>
              <p>
                Web Application that gamifies workplace recognition. Developed as part of a team of five.
              </p>
            </div>

          {/*PAGE SLAYER*/}
            <div className="projectDiv">
              <h4>Page Slayer</h4>

              <div className="linksNPic">
                <a href="https://github.com/JCFred/Capstone_02" className="iconSmall githubWhite"></a>
                <div className="projectImage pageSlayerImg"></div>
                <a href="https://thepageslayer.firebaseapp.com/" className="iconSmall webLinkWhite"></a>
              </div>

              <div className="techUsed">

              <div className="tech">
                <div className="techIcon cSharp"></div>
                <p>C#</p>
              </div>

              <div className="tech">
                <div className="techIcon unity"></div>
                <p>Unity</p>
              </div>

              </div>
              <p>
                Learned new technologies and developed game in three weeks. Collaborated with freelance artist for animations.
              </p>
            </div>

            {/*PIXEL SHARE*/}
            <div className="projectDiv">
              <h4>Pixel Share</h4>

              <div className="linksNPic">
                <a href="https://github.com/JCFred/pixelQuilt" className="iconSmall githubWhite"></a>
                <div className="projectImage pixelShareImg"></div>
                <a href="http://pixelshare.herokuapp.com/" className="iconSmall webLinkWhite"></a>
              </div>

              <div className="techUsed">

              <div className="tech">
                <div className="techIcon postgresSql"></div>
                <p>PostgreSQL</p>
              </div>

              <div className="tech">
                <div className="techIcon nodeJs"></div>
                <p>Node.JS</p>
              </div>

              <div className="tech">
                <div className="techIcon js"></div>
                <p>JavaScript</p>
              </div>

              <div className="tech">
                <div className="techIcon express"></div>
                <p>Express</p>
              </div>

              </div>
              <p>
                Solo developed full stack pixel art sharing database with regular community contributions. Please feel free to add to the growing picture!
              </p>
            </div>

          {/*GALACTIC MISMATCH*/}
            <div className="projectDiv">
              <h4>Galactic Mismatch</h4>

              <div className="linksNPic">
                <a href="https://github.com/JCFred/match3_q1Project" className="iconSmall githubWhite"></a>
                <div className="projectImage galacticMismatchImg"></div>
                <a href="https://galacticmismatch.firebaseapp.com/" className="iconSmall webLinkWhite"></a>
              </div>

              <div className="techUsed">

              <div className="tech">
                <div className="techIcon jQuery"></div>
                <p>jQuery</p>
              </div>

              <div className="tech">
                <div className="techIcon html"></div>
                <p>HTML5</p>
              </div>

              <div className="tech">
                <div className="techIcon css"></div>
                <p>CSS3</p>
              </div>

              </div>
              <p>
                Front end game run entirely through JavaScript and Jquery dom manipulation.
              </p>
            </div>

        {/*
          UNNAMED
          <div className="projectDiv">
            <h4>Project Title</h4>
            <div className="projectImage "></div>
            <div className="techUsed">


              <div className="techIcon js"></div>
              <div className="techIcon angularJs"></div>
              <div className="techIcon heroku"></div>

            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in ipsum erat. Aenean sit amet convallis enim.
            </p>
          </div>
          */}


        </div>


      </div>
    );
  }
}


export default ProjectsPage;

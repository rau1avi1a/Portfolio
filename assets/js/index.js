const aboutSection = $('#about')
const aboutButton = $('#js-aboutButton')

const profileSection = $('#profile-desc');
const profileImg = $('#profile-image')
const homeSection = $('#home-section')
const homeButton = $('#js-homeButton');

const projectSection = $('#projects');
const projectButton = $('#js-projectButton')


function showAbout() {
    homeSection.fadeIn(900)
    profileSection.hide();
    aboutSection.fadeIn(900);
    projectSection.hide();
    profileImg.fadeIn(900);
}

function showHome() {
    homeSection.fadeIn(900)
    profileSection.fadeIn(900);   
    aboutSection.hide();
    projectSection.hide();
    profileImg.fadeIn(900);
}

function showProjects() {
    homeSection.hide();
    profileSection.hide();   
    aboutSection.hide();
    projectSection.fadeIn(900);
    profileImg.hide();
}

aboutButton.click(showAbout);
homeButton.click(showHome);
projectButton.click(showProjects);
import './Navigator.css';
import $ from 'jquery';

const Navigator = () => {
  return (
    <div className="Navigator invisible xl:visible" id="Navigator">
      <a href="#About">
        <nav id="About-button">About</nav>
      </a>
      <a href="#Projects">
        <nav id="Project-button">Projects</nav>
      </a>
      <a href="#Education">
        <nav id="Education-button">Education</nav>
      </a>
      <a href="#Skills">
        <nav id="Skills-button">Skills</nav>
      </a>
      <a href="#Experience">
        <nav id="Experience-button">Experience</nav>
      </a>
      <a href="#Contact">
        <nav id="Contact-button">Contact</nav>
      </a>
    </div>
  );
};

export default Navigator;

window.addEventListener('DOMContentLoaded', () => {
  let options = {
    root: null,
    rootMargin: '0px',
    threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
  };

  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (
        entry.intersectionRatio >= 0.6 &&
        entry.target.id != 'Experience' &&
        window.innerWidth > 500
      ) {
        let id = entry.target.id + '-button';
        let Navigator = document.getElementById('Navigator');
        let allButtons = Navigator.getElementsByTagName('nav');
        for (var i = 0; i < allButtons.length; i++) {
          allButtons[i].classList.remove('Active-button');
        }
        let element = document.getElementById(id);
        element.classList.add('Active-button');

        if (entry.target.id === 'Skills') {
          $(function () {
            $('#Skills p').each(function (i) {
              $(this)
                .delay(i++ * 200)
                .fadeTo(300, 1);
            });
          });
        }
      }

      if (entry.intersectionRatio >= 0.4 && entry.target.id === 'Experience') {
        let id = entry.target.id + '-button';
        let Navigator = document.getElementById('Navigator');
        let allButtons = Navigator.getElementsByTagName('nav');
        for (var i = 0; i < allButtons.length; i++) {
          allButtons[i].classList.remove('Active-button');
        }
        let element = document.getElementById(id);
        element.classList.add('Active-button');
      }
    }
  }, options);
  document.querySelectorAll('div.section').forEach((elem) => io.observe(elem));
});

import './Navigator.css'



const Navigator = ()=>{
    return(
        <div className='Navigator' id='Navigator' >
        <a href='#About'><nav id='About-button'>About</nav></a>
        <a href='#Projects'><nav id='Project-button'>Projects</nav></a>
        <a href='#Education'><nav id='Education-button'>Education</nav></a>
        <a href="#Skills"><nav id='Skills-button'>Skills</nav></a>
        <a href='#Experience'><nav id='Experience-button'>Experience</nav></a>
        <a href='#Contact'><nav id='Contact-button'>Contact</nav></a>
      </div>
    )
}
// window.addEventListener('DOMContentLoaded', () => {
//   const observer = new IntersectionObserver(entries=>{
//     console.log(entries);
//     entries.forEach(entry=>{
//       console.log(entry.intersectionRatio);
//       const id = entry.target.getAttribute('id');
//     })
//   })
//   // document.querySelectorAll('Navigator').forEach((a) => {
//   //   observer.observe(a);
//   // });
//   observer.observe(document.getElementById("About-button"));
// });


// })



export default Navigator;


window.addEventListener('DOMContentLoaded', () => {
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: [0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1]
  };

  const io = new IntersectionObserver(entries=>{
    for(const entry of entries){
      console.log(`${entry.target.id} is in view ${entry.isIntersecting}  with a ratio of : ${entry.intersectionRatio}` )
      if(entry.intersectionRatio>0.8 && window.innerWidth > 500){
        let id=entry.target.id+'-button';
        console.log('current screen is ', entry.target.id)
        let Navigator= document.getElementById('Navigator');
        let allButtons = Navigator.getElementsByTagName('nav');
        console.log(allButtons.length);
        for(var i=0; i<allButtons.length; i++ ){
          allButtons[i].classList.remove('Active-button');
        }
        let element = document.getElementById(id);
        element.classList.add('Active-button');
      }
      if(entry.intersectionRatio>0.5 && window.innerWidth < 500){
        let id=entry.target.id+'-button';
        console.log('current screen is ', entry.target.id)
        let Navigator= document.getElementById('Navigator');
        let allButtons = Navigator.getElementsByTagName('nav');
        console.log(allButtons.length);
        for(var i=0; i<allButtons.length; i++ ){
          allButtons[i].classList.remove('Active-button');
        }
        let element = document.getElementById(id);
        element.classList.add('Active-button');
      }
    }
  }, options)

  document.querySelectorAll('div.section').forEach(elem=>io.observe(elem));

});
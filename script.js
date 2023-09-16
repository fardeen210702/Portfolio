
const menuIcon = document.querySelector('.heading i');
const links = document.querySelector('.links');
// const darkMode = document.querySelector('.darkmode');



menuIcon.addEventListener('click',runDisplay)

function runDisplay(){
    if(links.style.display==="none"){
      
        links.style.display="block"; 

        menuIcon.classList.remove('fa-bars')
        menuIcon.classList.add('fa-xmark')
    }
    else{
      

        menuIcon.classList.remove ('fa-xmark')
        links.style.display="none"; 
        menuIcon.classList.add('fa-bars')

    }
}

// darkMode.addEventListener('click',darkModeActivate)
// function darkModeActivate(){
//     document.body.classList.toggle('darktheme')
   
// }
// home button---------------------------------->
const popUPContainer = document.querySelector('.popup_container')
const projectBtn = document.querySelector('.projects')

projectBtn.addEventListener('click',popUpHomeBtn)

function popUpHomeBtn(){
popUPContainer.classList.add('popUp');


popUPContainer.innerHTML=`    <div class="pop_mini_container">
<div class="top">
    <h1>PROJECTS</h1>
    <i class="fa-solid fa-xmark" id="xbar"></i>

    <div class="main_content">
        <div class="first_data">
            <div class="video">
                <video controls src="./video/v1.mp4" autoplay muted loop></video>
                <a href="https://fardeen210702.github.io/Movietube/" target="_blank">
                    CLick Me To Explore This Website
                </a>

            </div>
            <div class="videoInfo">
                <div class="paragraph">
                    <p>Introducing MovieTube, my first project, where I've created this site using HTML,
                        CSS, and JS to bring a unique movie experience.


                        With MovieTube, it's all about the trailers!
                        And I created this website by fetching TMDB API.

                        📱 And it is FullyResponsive to have a better experience</p>
                </div>


            </div>

        </div>
        <div class="secondData">
            <div class="videoInfo">
                <div class="paragraph">
                    <p>Hey guys this is My first clone website(LinkedIn) that I've made and it was a
                        great expierence... and learnt new things while doing this project .
                        still much better could have been done to improve this clone .
                        For now it is not responsive but in future I'll make sure to buy some time and
                        make it responsive..(NOTe:- Not Responsive...)
                    </p>
                </div>
            </div>
            <div class="video">
                <video controls src="./video/v2.mp4" autoplay muted loop></video>
                <a href="https://fardeen210702.github.io/LinkedInCLone/" target="_blank">
                    CLick Me To Explore This Website
                </a>

            </div>



        </div>

    </div>
</div>
</div>


</div>`


const xbar = document.getElementById('xbar');
xbar.addEventListener('click',()=>{
popUPContainer.classList.remove('popUp')

})

}
const resume = document.querySelector('.resume1')
resume.addEventListener('click',()=>{
    alert(' Resume yet to be Added')
})
const resume2 = document.querySelector('.resume2')
resume2.addEventListener('click',()=>{
    alert(' Resume yet to be Added')
})
const popUPContainer1 = document.querySelector('.popup_container1')
const projectBtn1 = document.querySelector('.projects1')
const leftCotainer = document.querySelector('.left_container')

projectBtn1.addEventListener('click',popUpHomeBtn1)

function popUpHomeBtn1(){
    popUPContainer1.classList.add('popUp1');

// leftCotainer.style.display="none";
    popUPContainer1.innerHTML=`    <div class="pop_mini_container1">
<div class="top1">

    <h1>PROJECTS</h1>
    <i class="fa-solid fa-xmark" id="xbar1"></i>

    <div class="main_content1">
        <div class="first_data1">
            <div class="video1">
                <video controls src="./video/v1.mp4" autoplay muted loop></video>
                <a href="https://fardeen210702.github.io/Movietube/" target="_blank">
                    CLick Me To Explore This Website
                </a>

            </div>
            <div class="videoInfo1">
                <div class="paragraph1">
                    <p>Introducing MovieTube, my first project, where I've created this site using HTML,
                        CSS, and JS to bring a unique movie experience.


                        With MovieTube, it's all about the trailers!
                        And I created this website by fetching TMDB API.

                        📱 And it is FullyResponsive to have a better experience</p>
                </div>


            </div>

        </div>
        <div class="secondData1">
            <div class="videoInfo1">
                <div class="paragraph1">
                    <p>Hey guys this is My first clone website(LinkedIn) that I've made and it was a
                        great expierence... and learnt new things while doing this project .
                        still much better could have been done to improve this clone .
                        For now it is not responsive but in future I'll make sure to buy some time and
                        make it responsive.. (NOTE:- Not esponsive...)
                    </p>
                </div>
            </div>
            <div class="video1">
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

const xbar1 = document.getElementById('xbar1');
xbar1.addEventListener('click',()=>{
popUPContainer1.classList.remove('popUp1')
// leftCotainer.style.display="block"

})

}
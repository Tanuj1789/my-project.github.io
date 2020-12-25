<template>
<div class="bigdiv">
    <div class='skills'>
        <div class="subskills">
            <div class="mytitle">Competitive Programming</div>
            <div class="myskills">
                <img src="@/assets/logo.png">
                <img src="@/assets/logo.png">
            </div>
        </div>
        <div class="subskills">
            <div class="mytitle"> Internship</div>
            <div class="myskills">
                <img src="@/assets/logo.png">
                <img src="@/assets/logo.png">
                <img src="@/assets/logo.png">
                <img src="@/assets/logo.png">
                <img src="@/assets/logo.png">
                <img src="@/assets/logo.png">
                <img src="@/assets/logo.png">
                <img src="@/assets/logo.png"><img src="@/assets/logo.png">
                <img src="@/assets/logo.png">
            </div>
        </div>
        <div class="subskills">
            <div class="mytitle">Tech-Evnets</div>
            <div class="myskills">
                <img src="@/assets/logo.png">
                <img src="@/assets/logo.png">
            </div>
        </div>
        <div class="subskills">
            <div class="mytitle">Academics</div>
            <div class="myskills">
                <img src="@/assets/logo.png">
                <img src="@/assets/logo.png">
            </div>
        </div>
    </div>
</div>
</template>
<style scoped>
.bigdiv {
    background-image:url("D:\\Programming\\vue-webpack\\src\\assets\\achievements.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%;
    display:flex;
    flex-wrap: wrap;
     opacity: .7 ;
    filter: grayscale(0%);
}
.skills{
    /* position:relative; */
    color:white;
    display: flex;
    flex-direction: column;
    align-content: space-around;
    width:100%;
    height:100%;

    flex-wrap: wrap;
    /* background: inherit; */

}
.subskills{
    display:flex;
    height: 25%;
    width:100%;
    flex-direction: column;

    flex-wrap: wrap;
}
.myskills{
    position: relative;
    /* margin-top:30px; */
    display: flex;
    height: 75%;
    width:100%;
    flex-wrap: wrap;

}
.myskills img{
    height: 100%;
    padding-left: 2%;
    padding-right:2%;
    width: 6%;
    filter:grayscale(0%)
}
.mytitle{
    display:flex;

    font-family: Comic Sans MS ;
    font-weight: 900;
    width:100%;
    font-size: 25px;

}
.myskills img{
    animation: myanimation;
    animation-duration:2s;
    animation-iteration-count: infinite;

}
@keyframes myanimation {
    0%{transform:rotateZ(5deg)}
    50%{transform:rotateZ(0deg)}
    100%{transform:rotateZ(5deg)}
}
.myskills img:hover{
    box-shadow: 0px 0px 40px black;
    animation:none;
    transform: scale(1.2);


}


</style>
<template>
    <div id="home" >
        <div>
            <img src="@/assets\sparks.png" style="height: 450px;widht=500px; border-radius:50%;margin:50px" class='profile'>
		</div>
		<div class='content'>
			<h1 style="    background: #232526;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #414345, #232526);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #414345, #232526); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+" >Hi. I'm <strong>Tanuj Upadhyay</strong>.</h1>
					<li style="    background: #232526;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #414345, #232526);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #414345, #232526); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+"><router-link to="/skills">Know about what i do? </router-link></li>

		</div>
    </div>
</template>
<style>
#home{
    /* margin-top: 80px; */
    display: flex;
    text-align: center;
    justify-content: center;
    height: 600px;
    background-image: linear-gradient(rgba(215,255,255,0.5), rgba(255,255,255,0.5)), url("D:\\Programming\\vue-webpack\\src\\assets\\theme1.jpg");
    /* background-image: url("D:\\Programming\\vue-webpack\\src\\assets\\theme1.jpg"); */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;

}
.profile:hover{
    transform: scale(1.05) rotate(-3deg);
    transition-duration:.5s;
    border:solid 4px #42b983;;

}
.content{
    margin-top:200px;
    border-radius: 10%;
    height: 30%;
    width:50%;
    z-index: 1;
    color:white;
    font-weight:bold;
    font-size: 30px;

}
.content:hover{

    font-size: 40px;
    transition-duration: .5s;
}

h1{
    font-size: 50px;
    margin: 0 0 0.4em 0;


}
</style>

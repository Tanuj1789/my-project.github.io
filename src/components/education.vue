<template>
    <div class="bigdiv">
        <div class='skills'>
            <video src="@/assets/background.mp4" controls autoplay muted loop id="myviedo" poster="@/assets/education.jpg" class="myvideo"> >

            <!-- <p>Your browser does not support HTML5 video.</p> -->
            </video>
            <div class="viewport-header">
            <img src="@/assets/logo.png" style="width:5%;height:50%;width:50%;margin-left:2%;margin-top:.4%">
             </div>
            <div class="viewport-header">
            <img src="@/assets/logo.png" style="width:5%;height:50%;width:50%;margin-left:2%;margin-top:.4%">
             </div>
            <div class="viewport-header">
            <img src="@/assets/logo.png" style="width:5%;height:50%;width:50%;margin-left:2%;margin-top:.4%">
             </div>
            <div class="viewport-header">
            <img src="@/assets/logo.png" style="width:5%;height:50%;width:50%;margin-left:2%;margin-top:.4%">
             </div>

        </div>
    </div>
</template>
<style >
.bigdiv{
    overflow-y: hidden;
    overflow-x: hidden;
}
.skills{
    display: flex;
    flex-grow: 1;


}
.viewport-header {
  /* position:fixed; */
  height: 45vmax;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background: inherit;
  color:blue;
  flex-grow: 1;
  animation: myanimation;
}
.viewport-header:hover{
    transform: scale(1.2);
    box-shadow:0px 0px 200px black;
    transition-duration: .5s;

}
 .myvideo{
    object-fit: cover;
    min-width: 100%;
    min-height: 100%;
    position:fixed;
    top: 60px;
    left: 0;
    background:transparent;
}

</style>

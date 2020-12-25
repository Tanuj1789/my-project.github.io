<template>
  <div id="app">

    <div class="header">
      <ul>
    <li><router-link to="/">Home </router-link></li>
    <li><router-link to="/skills">Skills </router-link></li>
    <li><router-link to="/education">Education </router-link></li>
    <li><router-link to="/experience">Experience </router-link></li>
    <li><router-link to="/achievements">Achievements </router-link></li>
    <li><router-link to="/contact">Contact </router-link></li>
    </ul>

    </div>
    <router-view> </router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>
<style>
.header{
  margin-bottom: 30px;
  background: black;
  padding:10px;
  align-self:center;
  /* margin-top:20px; */
  position: absolute;
  /* top:0; */
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  background: #000000;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #434343, #000000);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #434343, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+,
   Safari 7+ */
  height:750px;
  width:100%;
  /* background-size:cover; */
  /* background-position: center; */
}
body{
  margin:10px;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
 img {
    filter: grayscale(100%);
    background: transparent;

}
img:hover{
  /* transform: scale(1.2); */
  filter: grayscale(0%);


}
</style>

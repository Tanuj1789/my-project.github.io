<template>
    <div>
		<header>
		<h2>Have me make stuff for you!</h2>
		</header>

			<form method="post" action="#">
				<div class="row">
                    <div style="display:flex;flex-direction:row;justify-content:space-evenly;width:55%;flex-wrap:wrap">
						<div class="inputbox">
							<input type="text" name="name" id="name" placeholder="Name" />
						</div>
						<div >
							<input type="text" name="email" id="email" placeholder="Email" />
					</div>
                    </div>
						<div style="display:flex;flex-wrap:wrap;width:65%">
							<input type="text"  name="subject" id="subject" placeholder="Subject" />
						</div>
						<div style="display:flex;flex-direction:row;justify-content:space-evenly;width:60%;flex-wrap:wrap">
							<textarea name="message" id="message" placeholder="Message" rows='4'></textarea>
						</div>
						<div class="">
							<ul class="actions">
								<li><input type="submit" style="background:#2ecc71;height:50px;" value="Send Message" /></li>
								<li><input type="reset" value="Clear Form" class="alt" /></li>
							</ul>
                        </div>
				</div>
			</form>

			<div>

				<h3>Find me on ...</h3>
				<ul class="social">
					<li><a href="#" class="icon brands fa-linkedin-in"><span class="label">LinkedIn</span></a></li>
					<li><a href="#" class="icon brands fa-github"><span class="label">Github</span></a></li>
				</ul>
				<hr/>
			</div>
	</div>
</template>
<style scoped>
h2{
    color:white;
    font-size: 40px;
    font-style: italic;
     font-family: Arial, Helvetica, sans-serif;
     font-weight: 700;
}
h3{
    color:white;
    font-size: 20px;
    font-style:bold;
     font-family: Arial, Helvetica, sans-serif;
     font-weight: 400;
}
.row{
    display: flex;
    flex-direction: column;
    justify-content:space-around;
    align-items: center;

    height: 450px;
    flex-grow: 1;
    border:solid 3px white;
    flex-wrap:wrap;
}
input{
    height: 100%;
    width: 100%;
    border-radius:5%;
    border: solid 3px black;
    color:white;
    font-weight: 400;
    font-size:25px;
    background: #232526;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #414345, #232526);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #414345, #232526); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
textarea {
    height: 100%;
    width: 100%;
    border-radius:5%;
    border: solid 3px black;
    color:white;
    font-weight: 400;
    font-size:25px;
    background: #232526;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #414345, #232526);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #414345, #232526); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
input:active{

    height:43px;
    width: 343px;
}
input:hover{
    box-shadow: 2px 2px 20px black;
}
::placeholder{
    color: whitesmoke;
    opacity: .8;
    font-weight: 10;
    font-family:'Times New Roman', Times, serif;
    letter-spacing: .3mm;
    font-size:20px;
    padding: 8px;
}
</style>
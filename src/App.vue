<template>
  <div id="app">
    <div data-vide-bg="video/patient">
		<div class="center-container">
			<h1 class="header-w3ls">Doctor Appointment Form</h1>			
			<div class="content-top">
				<div class="content-w3ls">
					<form action="#" method="post">
					<div class="form-w3ls">
						
							<div class="content-wthree1">
								<div class="grid-agileits1">
									<div class="form-control"> 
										<label class="header">Name <span>*</span></label>
										<input type="text" id="name" name="name" placeholder="Name" title="Please enter your Full Name" required="">
									</div>
									<div class="form-control">	
										<label class="header">Email <span>*</span></label>
										<input type="email" id="email" name="email" placeholder="Mail@example.com" title="Please enter a Valid Email Address" required="">
									</div>
									<div class="form-control">	
										<label class="header">Phone Number <span>*</span></label>
										<input type="text" id="name" name="phone number" placeholder="Phone Number" title="Please enter your Phone Number" required="">
									</div>
								</div>
							</div>
					</div>
					<div class="form-w3ls-1">
						
						<div class="form-control"> 
							<label class="header">Address <span>*</span></label>
							<input type="text" id="name" name="name" placeholder="Address" title="Please enter your Address" required="">
							<input type="text" id="name" name="name" placeholder="Line" title="Please enter your Line" required="">
							<input type="text" id="name" name="name" placeholder="City" title="Please enter your City" required="">
							<input type="text" id="name" name="name" placeholder="Zip code" title="Please enter your Zip code" required="">
						</div>
						<div class="wthreesubmitaits">
							<input type="submit" name="submit" value="Submit">
						</div>
					</div>
					</form>
					<div class="clear"></div>
				</div>
				<div class="content-w3ls">
					<div class="form-w3ls">
							<div class="content-wthree2">
								<div class="grid-w3layouts1">
									<div class="w3-agile1">
										<label class="rating">Best time to call you <span>*</span></label>
										<ul>
											<li>
												<input type="radio" id="a-option" name="selector1">
												<label for="a-option">Morning </label>
												<div class="check"></div>
											</li>
											<li>
												<input type="radio" id="b-option" name="selector1">
												<label for="b-option">Afternoon</label>
												<div class="check"><div class="inside"></div></div>
											</li>
											<li>
												<input type="radio" id="c-option" name="selector1">
												<label for="c-option">Evening </label>
												<div class="check"><div class="inside"></div></div>
											</li>
										</ul>
									</div>	
								</div>
								
								<div class="clear"></div>
							</div>
					</div>
					<div class="form-w3ls-1">
						<div class="grid-w3layouts1">
							<div class="w3-agile1">
								<label class="rating">I would like to (choose one)<span>*</span></label>
									<ul>
										<li>
											<input type="radio" id="d-option" name="selector2">
											<label for="d-option">A new patient appointment</label>
											<div class="check"></div>
										</li>
										<li>
											<input type="radio" id="e-option" name="selector2">
											<label for="e-option">A routine checkup</label>
											<div class="check"><div class="inside"></div></div>
										</li>
										<li>
											<input type="radio" id="f-option" name="selector2">
											<label for="f-option">A comprehensive health exam </label>
											<div class="check"><div class="inside"></div></div>
										</li>
									</ul>
							</div>	
						</div>		
					</div>
					<div class="clear"></div>
				</div>
			</div>	
				
				<p class="copyright">© 2017 Doctor Appointment Form. All Rights Reserved | Design by <a href="https://w3layouts.com/" target="_blank">W3layouts</a></p>
		</div>
	</div>
  </div>
</template>
<style>
  @import './assets/css/style.css';
</style>
<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

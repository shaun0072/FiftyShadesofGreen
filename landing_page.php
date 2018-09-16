<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>Christmas Lights</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="shortcut icon" href="assets/img/FSsymbol.png" type="image/x-icon" />
		<link href="https://fonts.googleapis.com/css?family=Open+Sans:700,800i" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css?family=Cabin+Condensed:700" rel="stylesheet">
		<link rel="stylesheet" href="normalize.css" />
		<link rel="stylesheet" href="landing_styles.css" />
	</head>
	<body>
	
		<div class="div1">
			<div class="FSsymbol">
				<div class="FScontainer">
					<a href="index.html"><img src="assets/svg/FSsymbol.svg" /></a>
				</div>
			</div>
			
			<div class="holiday_lights">
				<div class="HLcontainer">
					<img src="assets/svg/HolidayLights.svg" />
				</div>			
			</div>
			
			<div class="phone">
				<div class="phoneContainer"><a href="tel:9186054763">918-605-4763</a></div>
			</div>
		</div>
		
		<div class="div2">
			<div class="inside_div2">
				<div class="snow"></div>
			</div>
		</div>
		
		<div class="div3">
			<div class="inside_div3">
					<ul class="info">
						<li>Create a feeling of home based around your personal style.</li>
						<li>Options include Gutters and/or roofline or custom package.</li>
						<li>Traditional - Modern - Country</li>
						<li>More than just lights! We can tailor a package with additional greenary, wreaths, yard statuaries etc. to create your ultimate idea of the perfect display.</li>
					</ul>
				<div class="pic">
					<div class="picContainer">
						<img src="assets/img/stringLights.jpg" />
					</div>
				</div>
			</div>
		</div>
		
		<div class="divider">
			<div class="snow"></div>
		</div>

		<div class="div4">
		<?php 
				$lightingType = "";
				if (isset($_POST["submitButton"]) && !empty($_POST["submitButton"]))
				{
					if(!isset($_POST['property_type']))
					{
						$_POST['property_type'] = "";
					}
					
					if(!isset($_POST['lighting_type']))
					{	
						$lightingType = "";
					}
					else 
					{
						foreach ($_POST['lighting_type'] as $value) 
						{
							$lightingType .= $value . "/";
						} 
					}
					
					
					
					$to = "shaun@tmf.website";
					$subject = "QUOTE REQUEST - CHRISTMAS LIGHTS";
					$txt = "Name: ". $_POST['name'] . "\n Email: " . $_POST['email'] . "\n Phone: " . $_POST['phone'] . "\n Address: " . $_POST['address'] . "\n Property Type: " . $_POST['property_type'] ."\n Lighting Type: " . $lightingType . "\n Comment: " . $_POST['comment'] ;
					$headers = "Reply-To: " . $_POST['email'];
					
					if(mail($to,$subject,$txt,$headers)) {
						echo  "<h1 class='response'>Thank you for your interest! We will contact you soon</h1>";
					} else {
						echo  "<h1 class='response'>There was a problem sending your email. Please try again later</h1>";
					}		
				}
				else 
				{
					echo
					'<h3>Contact Form</h3>
					<form method="POST" class="myForm">
						<div class="box1">
							<div class="inputWrapper"><label for="name">Name: </label><span><input type="text" id="name" name="name"></span></div>
							<div class="inputWrapper"><label for="email">Email: </label><span><input type="email" id="email" name="email"></span></div>
							<div class="inputWrapper"><label for="phone">Phone: </label><span><input type="tel" id="phone" name="phone"></span></div>
							<div class="inputWrapper"><label for="address">Address: </label><span><input type="text" id="address" name="address"></span></div>			
						</div>
						
						<div class="box2">
							<div class="inputWrapper">
								<label class="breakAfter">Property Type: </label>
								<input type="radio" id="property_type1" name="property_type" value="Commerical"/><label for="property_type1">Commerical</label>
								<input type="radio" id="property_type2" name="property_type" value="Residential"/><label for="property_type2">Residential</label><br />
							</div>
							
							<div class="inputWrapper">
								<label class="breakAfter">Lighting Type: </label>
								<input type="checkbox" id="lighting_type1" name="lighting_type[]" value="Front-Face"><label for="lighting_type1">Front Face</label>
								<input type="checkbox" id="lighting_type2" name="lighting_type[]" value="Roofline"><label for="lighting_type2">Roofline</label>
								<input type="checkbox" id="lighting_type3" name="lighting_type[]" value="Custom"><label for="lighting_type3">Custom</label><br />
								
								<div class="inputWrapper">
									<label for="comments">Comments: </label><br />
									<textarea id="comments" name="comment"></textarea>
								</div>
							</div>
						</div>
						<input type="submit" name="submitButton" value="Click Here to Submit!"/>
					</form>';
				}

				?>		
			
		</div>
		
		<div class="div5">
			<div class="snow"></div>
		</div>
		
	</body>
</html>

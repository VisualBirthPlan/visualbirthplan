<!doctype html>
<html>
<head>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
  <meta charset="utf-8">
  <title>Visual Birth Plan.org</title>
</head>

<body>
<style>
  div.yes {
	background: linear-gradient(to bottom, #0c4708 0%, #269205 50%, #0c4708 100%) repeat scroll 0 0 rgba(0, 0, 0, 0);
	border-radius: 4px;
	box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.75);
	color: white;
	display: block;
	height: 150px;
	position: relative;
	text-align: center;
	width: 100px;
	margin: 0 10px 10px 10px;
	padding: 5px;
	float: left;
  }


  /*
div.no.prioritize {
        background: linear-gradient(to bottom, black 0%, #266092 50%, #001647 100%) repeat scroll 0 0 rgba(0, 0, 0, 0);
}
*/

  div.yes img.prioritize-small {
	position: absolute;
	top: 0;
	right: 0;
  }

  div.yes img.prioritize-large {
	position: absolute;
	top: -8px;
	right: -8px;
  }

  div.yes:hover,
  div.yes.selected a {
	background: none repeat scroll 0 0 #001647;
	box-shadow: 0 0 6px 3px rgba(38, 96, 146, 1);
	filter: none;
  }

  div.yes a:link, div.yes a:visited, div.yes a:hover  {
	color: #fff;
	text-transform: uppercase;
  }

  div.no {
	background: linear-gradient(to bottom, #470207 0%, #ff4144 50%, #470207 100%) repeat scroll 0 0 rgba(0, 0, 0, 0);
	border-radius: 4px;
	box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.75);
	color: white;
	display: block;
	height: 150px;
	position: relative;
	text-align: center;
	width: 100px;
	margin: 0 10px 10px 10px;
	padding: 5px;
	float: left;
  }

  div.no img.prioritize-small {
	position: absolute;
	top: 0;
	right: 0;
  }

  div.no img.prioritize-large {
	position: absolute;
	top: -8px;
	right: -8px;
  }

  div.no:hover,
  div.no.selected a {
	background: none repeat scroll 0 0 #001647;
	box-shadow: 0 0 6px 3px rgba(38, 96, 146, 1);
	filter: none;
  }

  div.no a:link, div.no a:visited, div.no a:hover  {
	color: #fff;
	text-transform: uppercase;
  }

  .box {
    float: left;
    margin: 5px;
    position: relative;
    height: 150px;
    width: 150px;
  }
  .background {
    left: 0;
    position: absolute;
    top: 0;
    z-index: 1;
  }

  .symbol {
    margin: 0;
    color: #eee;
    font-size: 24px;
    font-weight: bolder;
    text-transform: uppercase;
    position: absolute;
    text-align: center;
    top: 0px;
    width: 100%;
    z-index: 3;
  }
  .description {
    color: #eee;
    font-size: 16px;
    margin: 0 10px;
    position: relative;
    top: 50px;
    width: 100%;
    z-index: 3;
  }
</style>
<h1>Visual Birth Plan.org</h1>
<p>Ideal Birthplan for</p>
<p>
  <input class="username" name="name" value="Type Your Name Here">
</p>

<h2>Dear Healthcare Providers:</h2>

<p>This is our ideal birth plan.  We understand that not all labors go according to plan, and that we may need to change from this plan based on medical neccessity as things progress.  This is our wishlist for an ideal experience for us.  If you can help us achieve as much of these as possible, we appreciate it.  </p>

<div class="boxes">


<?php

$data = array(
  'vd' => 'Vag',
  'wb' => 'Water Birth',
  'pt' => 'Pitocin Desired',
  'pm' => 'Pain Medicine',
  'fw' => 'Food/Water preferred to IV',
);

foreach ($data as $key => $value) {
  $yes = rand(0,1);
  if ($yes) {
    $bg_img = 'green.png';
    $status = 'yep';
  } else {
    $bg_img= 'red.png';
    $status = 'nope';
  }
  print "<div class='box $status'>
            <img class='background' src='img/$bg_img' alt='$status'>
                <div class='symbol'>
                    <p class='key'>$key</p></div>
                <div class='description'>
                    <p class='desc'>$value</p></div>
            </div>";
}



?>

<script>
  window.onload = function() {
    $('.box').click(function (event) {
      if ($(this).hasClass('yep')) {
        $(this).removeClass('yep');
        $(this).addClass('nope');
        $(this).find('img').attr('src','/img/red.png');
        console.log('yep to nope');
        // alert('yep to nope');
        event.preventDefault();
      } else {

        $(this).removeClass('nope');
        $(this).addClass('yep');
        $(this).find('img').attr('src','/img/green.png');
        // alert('nope to yep');
      console.log('nope to yep');
      event.preventDefault();
      }
    });
  };
</script>
</div>

<br clear="all">
<input type="button" value="Print" onclick="window.print();">

<?php exit; ?>



<ul>
  <li><div class="yes">Vaginal Delivery Preferred</div></li>
  <li><div class="yes">Water Birth Preferred</div></li>
  <li><div class="no">Pitocin Desired</div></li>
  <li><div class="yes"> Pain Medication</div></li>
  <li><div class="yes">Food &amp; Water preferred to IV</div></li>
  <li><div class="no">Intermittent Monitoring</div></li>
  <li><div class="yes">Alternative Pushing Positions</div></li>
  <li><div class="yes">Free Movement</div></li>
  <li><div class="yes">Lights Dim</div></li>
  <li><div class="yes">Quiet During Delivery</div></li>
  <li><div class="yes">Delayed Cord Clamping</div></li>
  <li><div class="yes">Partner to Cut Cord</div></li>
  <li><div class="yes">Immediate Skin to Skin</div></li>
  <li><div class="yes">Breastfeeding ASAP</div></li>
  <li><div class="yes">Delay Exams for Bonding</div></li>
  <li><div class="yes">Save Placenta</div></li>
  <li><div class="yes">Immediate Bathing</div></li>
  <li><div class="yes">Wiping off Vernix</div></li>
  <li><div class="yes">Exam In Room</div></li>
  <li><div class="yes">Bath in Room</div></li>
  <li><div class="yes">Pacifiers</div></li>
  <li><div class="yes">Eye Ointment</div></li>
  <li><div class="yes">Hepatitus B shot</div></li>
  <li><div class="yes">Vitamin K</div></li>
  <li><div class="yes">Circumcision</div></li>
  <li><div class="yes">PKU Test</div></li>
  <li><div class="yes">Immedate Vaccinations</div></li>
</ul>
</body>
</html>

<!doctype html>
<html>

<head>
	<meta charset="utf-8">
	<title>Speed Up Static Sites with jQuery</title>
  
  <link rel="stylesheet" href="css/styles.css">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href='http://fonts.googleapis.com/css?family=PT+Sans|Montserrat:400,700' rel='stylesheet' type='text/css'>
  <!--[if lt IE 9]>
  	<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
</head>

<body>
	<div class="inner">
	<header>
			<h1>AJAX a Static Site</h1>
			<a href="../demo1/" class="demo-link">Demo 1</a>
			<a href="" class="demo-link current">Demo 2</a>
			<nav>
				<ul>
					<li><a href="#page1" class="active" id="page1-link">Page 1</a></li>
					<li><a href="#page2" id="page2-link">Page 2</a></li>
					<li><a href="#page3" id="page3-link">Page 3</a></li>
					<li><a href="#page4" id="page4-link">Page 4</a></li>
				</ul>
			</nav>
	</header>
	
	<div id="main-content">
		<?php include('pages/page1.html'); ?>
	</div>
	
	
	</div>

<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script type="text/javascript" src="custom.js"></script>
</body>
</html>
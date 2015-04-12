<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>Real Fevr</title>

    <!-- RealFevr Base CSS -->
    <link href="css/unifier.css" rel="stylesheet">
    <link href="fonts/museo/stylesheet.css" rel="stylesheet">
    <link href="fonts/museo-sans/stylesheet.css" rel="stylesheet">


</head>
<body class="museo museo-sans">

<div class="global-wrapper">
    <!-- Header structure -->
    <?php include('includes/header.htm'); ?>


    <!-- Sidebar Menu-->
     <?php include('includes/left-nav.htm'); ?>

    <!-- Main Content -->
    <section class="main-container" id="main-container">
        <?php include('pages/home.html'); ?>
    </section>

    <?php include('includes/footer.htm'); ?>

    <!-- Side Menu -->
    <div class="context-side-menu">

    </div>
</div>

<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<!-- LESS -->
<script src="//cdnjs.cloudflare.com/ajax/libs/less.js/2.3.1/less.min.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="js/bootstrap.min.js"></script>
<!-- RealFevr Custom JS -->
<script src="js/rf_custom.js"></script>
<script src="ajax.js"></script>
</body>
</html>
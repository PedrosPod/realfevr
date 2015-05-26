<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>Real Fevr</title>

    <!-- RealFevr Base CSS -->
    <link href="css/unifier.css" rel="stylesheet">
    <link href="css/google-fonts.css" rel="stylesheet">

</head>
<body class="museo museo-sans">

<div class="global-wrapper">
    <!-- Header structure -->
    <?php include('includes/header.htm'); ?>


    <!-- Sidebar Menu-->
     <?php include('includes/left-nav.htm'); ?>

    <!-- Main Content -->
    <section class="main-container" id="main-content">
        <?php include('views/page1.htm'); ?>
    </section>

    <?php include('includes/footer.htm'); ?>

    <!-- Side Menu -->

</div>

<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<!-- LESS -->
<script src="//cdnjs.cloudflare.com/ajax/libs/less.js/2.3.1/less.min.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="js/bootstrap.min.js"></script>
<!-- RealFevr Custom JS -->
<script src="js/rf_custom.js"></script>
</body>
</html>
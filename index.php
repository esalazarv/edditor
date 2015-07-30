<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title></title>

    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="css/edditor.css">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script src="js/edditor.js"></script>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <script>
    $(document).ready(function(){  
        // haciendo uso de la parametrización por defecto  
        $("#edditor").edditor({enableAdvancedOptions:true});
 		$("#edditor2").edditor();
        // asignando un color de fondo diferente
        // $("form :input:visible").highlight({background: 'red'});
 
	});
    </script>
  </head>
  <body>
  	<div class="page-header">
  		<div class="container">
  			<h4>Edditor</h4>
  		</div>
  	</div>
  	<div class="container">
	  	<div class="col-sm-8">
	  		<textarea name="edditor" id="edditor"></textarea>
	  	</div>
	  	<div class="col-sm-12">
	  		<h4>Edditor 2</h4>
	  	</div>
	  	<div class="col-sm-8">
	  		<textarea name="edditor" id="edditor2"></textarea>
	  	</div>
  	</div>
  </body>
</html>
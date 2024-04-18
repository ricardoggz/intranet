<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="description" content="">
        <meta name="author" content="">
        

         <title>intranet HIMFG</title>
         <link rel="icon" type="image/ico" href="../img/logo.gif" /> 
        <!--         Bootstrap core CSS -->
        <script src="intranet.js"></script>
        <script src="../funciones/jquery-3.3.1.min.js"></script>
        <script src="../funciones/datatables.min.js"></script>
        <script src="../funciones/jquery-easing/jquery.easing.min.js"></script>
        <script src="../funciones/bootstrap-4.2.1-dist/js/bootstrap.bundle.min.js"></script>
        <script src="../funciones/chosen_v1.8.7/chosen.jquery.min.js"></script>    
        <script type="text/javascript" src="../js/flowplayer/flowplayer-3.2.13.min.js"></script>
        <script src="../funciones/fancybox-master/dist/jquery.fancybox.min.js"></script> 


        <link type="text/css"  href="../css/agency.css" rel="stylesheet">  
        <link rel="stylesheet" type="text/css" href="../funciones/chosen_v1.8.7/chosen.min.css"/>
        <!--         Plugin JavaScript -->
        <link href="../funciones/bootstrap-4.2.1-dist/css/bootstrap.min.css" rel="stylesheet"> 
        <link href="../funciones/bootstrap-4.2.1-dist/css/jquery.dataTables.min.css" rel="stylesheet">
        <link href="../funciones/fancybox-master/dist/jquery.fancybox.min.css" rel="stylesheet">

        <!--         Custom fonts for this template -->
        <link href="../funciones/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
        <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
        <link href='https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
        <link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css'>
    </head>

    <style>


        .link { color: #6c757d; } /* CSS link color (red) */
        .link:hover { color: #585858; text-decoration:none;  } /* CSS link hover (green) */


        #lista3 {
            counter-reset: li; 
            list-style: none; 
            *list-style: decimal; 
            font: 15px 'trebuchet MS', 'lucida sans';
            padding: 0;
            margin-bottom: 4em;
            text-shadow: 0 1px 0 rgba(255,255,255,.5);
        }

        #lista3 ol {
            margin: 0 0 0 2em; 
        }

        #lista3 li{
            position: relative;
            display: block;
            padding: .4em .4em .4em .8em;
            *padding: .4em;
            margin: .5em 0 .5em 2.5em;
            /*    background: #ddd;*/
            color: #444;
            text-decoration: none;
            transition: all .3s ease-out;   
        }

        #lista3 li:hover{

            /*    background: #eee;*/
        }   

        #lista3 li:before{
            content: counter(li);
            counter-increment: li;
            position: absolute; 
            left: -2.5em;
            top: 50%;
            margin-top: -1em;

            background: #53A5FF;


            height: 2em;
            width: 2em;
            line-height: 2em;
            text-align: center;
            font-weight: bold;
        }

        #lista3 li:after{
            position: absolute; 
            content: '';
            border: .5em solid transparent;
            left: -1em;
            top: 50%;
            margin-top: -.5em;
            transition: all .3s ease-out;               
        }

        #lista3 li:hover:after{
            left: -.5em;
            border-left-color: #53A5FF;             
        }
    </style>


    <style>
        tr.group,
        tr.group:hover {
            background-color: #ddd !important;
        }
    </style>


    <style>
        body {
            position: relative;
        }
    </style>

    <style>
        .regresar {
            font-size: 100%;
            font-weight: 400;
            padding: 0.75em 0;
            letter-spacing: 1px;
            color: white;
            font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
            text-decoration:none; 
        }

        .regresar:hover { color: #53A5FF; text-decoration:none; }
    </style>

    <body id="page-top">
    <?php
        
        
        $varRegresa ="";
        
        if ($_GET['title'] == 'normateca' or $_GET['title'] == 'guias' or $_GET['title'] == 'otros' ) {
            $varRegresa = "documentos";
        } else {
            $varRegresa = "noticias";
        }
        ?>
        
        
        <!-- Navigation -->
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div class="container">
                <a href="http://172.16.55.12:8081/">Regresar</a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
            </div>
        </nav>
        <!-- Header -->

        <div id="contenido"> </div>  
        <!-- Documentos -->

    


        <?php
        if ($_GET['title'] == 'normateca') {
            ?>
            <script type="text/javascript">
                $('#contenido').html('<br><center><img src="/intranet19/img/loading.gif" /></center>');
                $('#contenido').load('normateca.php?');
            </script>
            <?php
        } elseif ($_GET['title'] == 'guias') {
            ?>
            <script type="text/javascript">
               
                $('#contenido').html('<br><center><img src="/intranet19/img/loading.gif" /></center>');
                $('#contenido').load('guias.php?');

            </script>
            <?php
        } elseif ($_GET['title'] == 'otros') {
            ?>
            <script type="text/javascript">
               
                $('#contenido').html('<br><center><img src="/intranet19/img/loading.gif" /></center>');
                $('#contenido').load('otrosdoc.php?');
            </script>   
            <?php
        } elseif ($_GET['title'] == 'rendicion') {
            ?>
            <script type="text/javascript">
             
                $('#contenido').html('<br><center><img src="/intranet19/img/loading.gif" /></center>');
                $('#contenido').load('rendiciondec.php?');

            </script>
            <?php
        } elseif ($_GET['title'] == 'hospseg') {
            ?>
            <script type="text/javascript">
               
                $('#contenido').html('<br><center><img src="/intranet19/img/loading.gif" /></center>');
                $('#contenido').load('hospital_seg.php?');

            </script>
            <?php
        } elseif ($_GET['title'] == 'sipot') {
            ?>
            <script type="text/javascript">
               
                $('#contenido').html('<br><center><img src="/intranet19/img/loading.gif" /></center>');
                $('#contenido').load('sipot.php?');

            </script>
            <?php
        } elseif ($_GET['title'] == 'contyana') {
            ?>
            <script type="text/javascript">
               
                $('#contenido').html('<br><center><img src="/intranet19/img/loading.gif" /></center>');
                $('#contenido').load('controlyanalisis.php?');

            </script>
            <?php
        } elseif ($_GET['title'] == 'infografia') {
            ?>
            <script type="text/javascript">
               
                $('#contenido').html('<br><center><img src="/intranet19/img/loading.gif" /></center>');
                $('#contenido').load('infografia.php?');

            </script>
            <?php
        }elseif ($_GET['title'] == 'blindaje') {
            ?>
            <script type="text/javascript">
               
                $('#contenido').html('<br><center><img src="/intranet19/img/loading.gif" /></center>');
                $('#contenido').load('blindaje.php?');

            </script>
        <?php
        }elseif ($_GET['title'] == 'cconducta') {
            ?>
            <script type="text/javascript">
               
                $('#contenido').html('<br><center><img src="/intranet19/img/loading.gif" /></center>');
                $('#contenido').load('cconducta.php?');

            </script>
        <?php
        }elseif ($_GET['title'] == 'reglab') {  
            ?>
            <script type="text/javascript">
               
                $('#contenido').html('<br><center><img src="/intranet19/img/loading.gif" /></center>');
                $('#contenido').load('regresolab.php?');

            </script>
        <?php
        } else {
            ?>
            <script type="text/javascript">
                
                $('#contenido').html('<br><center><img src="/intranet19/img/loading.gif" /></center>');
                $('#contenido').load('hospital_seg.php?');

            </script>
            <?php
        }
        ?>  
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
       

        <script src="../js/agency.js"></script>



        <script type="text/javascript">

  
        </script>
    </body>

</html>





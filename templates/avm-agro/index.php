<?php defined( '_JEXEC' ) or die;
    include_once JPATH_THEMES.'/'.$this->template.'/logic.php';
?>

<!doctype html>

<html lang="<?php echo $this->language; ?>">

<head>
    <link rel="stylesheet" type="text/css" href="/templates/avm-agro/css/bootstrap.css">
    <jdoc:include type="head" />
    <script type="text/javascript" src="/templates/avm-agro/js/script.js"></script>
    <link href='https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic&subset=latin,cyrillic-ext,latin-ext,cyrillic' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=PT+Sans:400,400italic,700italic,700&subset=latin,cyrillic-ext,latin-ext,cyrillic' rel='stylesheet' type='text/css'>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
    <?php if (preg_match('/kontakt/', $_SERVER['REQUEST_URI']) || preg_match('/kontakt/', $_SERVER['REQUEST_URI'])) : ?>
        <script type="text/javascript" src="http://maps.google.com/maps/api/js?language=ru"></script>
        <script type="text/javascript" src="/templates/avm-agro/js/map.js"></script>
    <?php endif; ?>
</head>
  
<body class="<?php echo (($menu->getActive() == $menu->getDefault()) ? ('front') : ('site')).' '.$active->alias.' '.$pageclass; ?>" <?php echo ((preg_match('/kontakt/', $_SERVER['REQUEST_URI']) || preg_match('/kontakt/', $_SERVER['REQUEST_URI'])) ? 'onload="initialize()"' : "") ?>>

    <header>
        <div class="container">
            <div class="row wrap">
                <div class="phones col-md-4">
                    <jdoc:include type="modules" name="headerPhones" />
                </div>

                <div class="col-md-5 logo">
                    <a href="/">
                        <jdoc:include type="modules" name="logo" />
                    </a>
                </div>

                <div class="col-md-3">
                    <jdoc:include type="modules" name="langs" />
                </div>

                <div class="row menu">
                    <div class="col-md-12">
                        <jdoc:include type="modules" name="menu" />
                    </div>
                </div>
            </div>
        </div>
    </header>

    <div class="under-header-line"></div>

    <div class="slider-wrap">
        <div class="slider">
            <jdoc:include type="modules" name="slider" />
        </div>
    </div>

    <?php if (JFactory::getURI()->toString() != JURI::base() && JFactory::getURI()->toString() != JURI::base() . 'index.php') : ?>

    <?php endif; ?>
	
    <div class="component-wrapper">
	
		<?php if ($this->countModules('left_menu')) : ?>
			<div class="left-menu">
				<jdoc:include type="modules" name="left_menu" style="xhtml" />
			</div>
			<div class="wrapper">
		<?php endif; ?>
		
		
			<jdoc:include type="modules" name="breadcrumbs" />
			<div class="clear"></div>

			<?php if (!preg_match('/product/', $_SERVER['REQUEST_URI']) && preg_match('/goods/', $_SERVER['REQUEST_URI']) && preg_match('/goods\/[a-z-]+/', $_SERVER['REQUEST_URI']) && !preg_match('/goods\/[a-z-]+\/[a-z0-9-]+/', $_SERVER['REQUEST_URI'])) : ?>
				<div class="left-prod-menu">
					<jdoc:include type="modules" name="left-prod-menu" style="xhtml" />
				</div>
			<?php endif; ?>

			<jdoc:include type="component" />
		
		<?php if ($this->countModules('left_menu')) : ?>
			</div>
		<?php endif; ?>
			
		<div class="clear"></div>
    </div>

    <?php if (preg_match('/kontakt/', $_SERVER['REQUEST_URI']) || preg_match('/kontakt/', $_SERVER['REQUEST_URI'])) : ?>
        <div id="map" class="map">
            <jdoc:include type="modules" name="map" />
        </div>
    <?php endif; ?>

    <!-- Footer -->
    <div class="pre-footer"></div>

    <footer>
        <div class="footer-wrap">
            &copy; ТОВ "АВМ-Агро", <?=date('Y', time())?>
        </div>
    </footer>

</body>

</html>

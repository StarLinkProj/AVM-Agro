<?php
/**
 * @package     Joomla.Site
 * @subpackage  mod_articles_news
 *
 * @copyright   Copyright (C) 2005 - 2015 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;
?>
<div class="newsflash<?php echo $moduleclass_sfx; ?>">
	<div class="jcarousel" data-jcarousel="true" data-jcarouselautoscroll="true">
		<ul class="jcarousel-skin-name">
			<?php foreach ($list as $item) : ?>
				<li>
					<div class="single-news">
						<?php require JModuleHelper::getLayoutPath('mod_articles_news', '_item'); ?>
					</div>
				</li>
			<?php endforeach; ?>
		</ul>
	</div>
</div>

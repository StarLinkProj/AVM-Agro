<?php
/**
 * @package     Joomla.Site
 * @subpackage  mod_articles_news
 *
 * @copyright   Copyright (C) 2005 - 2015 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;

$item_heading = $params->get('item_heading', 'h4');
$images = json_decode($item->images);
?>

<a href="<?php echo $item->link; ?>">
	<img src="<?php echo htmlspecialchars($images->image_intro); ?>" alt="<?php echo htmlspecialchars($images->image_intro_alt); ?>" class="news-intro-img"/>
</a>

<?php if (!$params->get('intro_only')) : ?>
	<?php echo $item->afterDisplayTitle; ?>
<?php endif; ?>

<?php echo $item->beforeDisplayContent; ?>

<div class='news-into-block'>

	<?php if ($params->get('item_title')) : ?>
		<<?php echo $item_heading; ?> class="newsflash-title<?php echo $params->get('moduleclass_sfx'); ?>">
			<a href="<?php echo $item->link; ?>">
				<?php echo $item->title; ?>
			</a>
		</<?php echo $item_heading; ?>>

	<?php endif; ?>

	<?php echo $item->introtext; ?>

	<?php if (isset($item->link) && $item->readmore != 0 && $params->get('readmore')) : ?>
		<?php echo '<a class="readmore" href="' . $item->link . '">' . $item->linkText . '</a>'; ?>
	<?php endif; ?>
	<div class="news-created">
		<?php
		$rusMonth = array("Янв.", "Февр.", "Март", "Апр.", "Май", "Июн.", "Июл.", "Авг.", "Сент.", "Окт.", "Нояб.", "Дек.");
		$ukrMonth = array("Січ.", "Лют.", "Бер.", "Квіт.", "Трав.", "Черв.", "Лип.", "Серп.", "Вер.", "Жовт.ь", "Лист.", "Груд.");

		$timestamp = strtotime($item->created);
		$requestUrl = $_SERVER['REQUEST_URI'];

		if (preg_match('/\/ru\//', $requestUrl)) {
			$month = $rusMonth[date("m", $timestamp) - 1];
		} else if (preg_match('/\//', $requestUrl) || preg_match('/\/ua\//', $requestUrl)) {
			$month = $ukrMonth[date("m", $timestamp) - 1];
		}

		echo date("d", $timestamp) . " " . $month . ", " . date("H", $timestamp) . ":" . date("i", $timestamp);
		?>
	</div>
	<div class="clear"></div>
</div>
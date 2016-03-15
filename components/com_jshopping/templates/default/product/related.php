<?php 
/**
* @version      4.9.1 13.08.2013
* @author       MAXXmarketing GmbH
* @package      Jshopping
* @copyright    Copyright (C) 2010 webdesigner-profi.de. All rights reserved.
* @license      GNU/GPL
*/
defined('_JEXEC') or die('Restricted access');

$in_row = $this->config->product_count_related_in_row;
?>
<?php if (count($this->related_prod)){?>    
    <div class="related_header">
        <?php print _JSHOP_RELATED_PRODUCTS?>
    </div>
    <div class="jshop_list_product">
        <div class = "jshop list_related">
            <?php foreach($this->related_prod as $k=>$product) : ?>        
                <?php if ($k % $in_row == 0) : ?>
                    <div class = "row-fluid">
                <?php endif; ?>
            
                <div class="sblock<?php echo $in_row?>">
                    <div class="jshop_related block_product">
                        <?php print $product->_tmp_var_start?>
                            <div class="product productitem_<?php print $product->product_id?>">

                                <?php
                                    preg_match('/product\/view\/\d{1,5}\/\d{1,5}/', $product->product_link, $urlNeedPart);
                                    if (!empty($urlNeedPart)) {
                                        $needUrl = preg_replace('/product\/view\/\d{1,5}\/\d{1,5}/', $urlNeedPart[0], $_SERVER['REQUEST_URI']);
                                    } else {
                                        $needUrl = $product->product_link;
                                    }

                                ?>

                                <div class = "image">
                                    <?php if ($product->image){?>
                                        <div class="image_block">
                                            <?php print $product->_tmp_var_image_block;?>
                                            <a href="<?php print $needUrl?>">
                                                <img class="jshop_img" src="<?php print $product->image?>" alt="<?php print htmlspecialchars($product->name);?>" title="<?php print htmlspecialchars($product->name);?>"  />
                                            </a>
                                        </div>
                                    <?php }?>

                                </div>

                                <div class="good-desc-block">
                                    <div class="name">

                                        <a href="<?php print $needUrl?>">
                                            <span class="attr-name"><?php print _JSHOP_ATTR_NAME_BOLD?>:</span>
                                            <?php print $product->name?>
                                        </a>
                                    </div>
                                </div>

                                <div class="clear"></div>
                            </div>
                        <?php print $product->_tmp_var_end?>
                    </div>
                </div>

                <?php if ($k % $in_row == $in_row - 1) : ?>
                    <div class = "clearfix"></div>
                    </div>
                <?php endif; ?>
                
            <?php endforeach; ?>
            
            <?php if ($k % $in_row != $in_row - 1) : ?>
                <div class = "clearfix"></div>
                </div>
            <?php endif; ?>
        </div>
    </div> 
<?php }?>
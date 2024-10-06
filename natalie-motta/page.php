<?php
get_header();
?>


<?php
if (have_posts()) : while (have_posts()) : the_post();
// initializer la variable category
$category = null;
?>

<h2> <?php the_title(); ?> </h2>

<div class="page-custom"><?php the_content(); ?></div>

<?php
endwhile; 
endif;

?>



<?php
get_footer();
?>
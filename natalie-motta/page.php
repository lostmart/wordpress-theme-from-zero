<?php
get_header();
?>


<?php
if (have_posts()) : while (have_posts()) : the_post();
// initializer la variable category
$category = null;
?>

<h1> <?php echo get_the_title(); ?> </h1>

<?php
endwhile; 
endif;

?>



<?php
get_footer();
?>
<footer class="site-footer">
     <div class="line">              
        <?php
            wp_nav_menu( array(
                'theme_location' => 'footer-menu',
                'container' => false,
                'menu_class' => 'primary-menu',
                'fallback_cb' => '__return_false'
            ) );
            ?>
      

	</footer><!-- #colophon -->
    <?php  get_template_part('/templates/lightbox', 'content')  ?>
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
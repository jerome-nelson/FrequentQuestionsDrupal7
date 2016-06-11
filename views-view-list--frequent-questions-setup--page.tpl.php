<?php
/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * - $title : The title of this group of rows.  May be empty.
 * - $options['type'] will either be ul or ol.
 * @ingroup views_templates
 */
?>
<?php print $wrapper_prefix; ?>
    <article class="faq-answers">

        <?php if (!empty($title)) : ?>
            <h5><?php print $title; ?></h5>
        <?php endif; ?>

        <?php print $list_type_prefix; ?>
        <?php foreach ($rows as $id => $row): ?>

            <!-- Repeatable Sections -->
            <div class="subtitle <?php print $classes_array[$id]; ?>"><span class="close-icon icon-circle-right">&nbsp;</span><?php print $row->title; ?></div>
                <div class="answer-section">
                    <?php print $row; ?>
                </div>
            <hr>
            <!-- End of Repeatable Sections -->
        <?php endforeach; ?>
        <?php print $list_type_suffix; ?>
    </article>
<?php print $wrapper_suffix; ?>
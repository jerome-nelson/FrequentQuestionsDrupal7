/**
 * Created by Jerome on 23/05/2016.
 */
(function($){
    Drupal.behaviors.frequent_questions = function() {
        $( ".faq-answers" ).accordion({
            header: ".subtitle",
            icons: '',
            collapsible: false,
            heightStyle: 'content',
            activate: function(event,ui) {
                $(ui.oldHeader).find('.open-icon').replaceWith('<span class="close-icon icon-circle-right">&nbsp;</span>');
                $(ui.newHeader).find('.close-icon').replaceWith('<span class="open-icon icon-circle-down">&nbsp;</span>');
            }
        });
    };
})(jQuery);
$(document).ready( function() {
		
		function collapseBlogPost() {
			$('#expand-blog1').slideUp();
			$('.read-less').hide();
	}
});

$('#read-more').click(expandBlogPost); 

function expandBlogPost() {
	$('#expand-blog1').slideDown();
	$('.read-less').show();
}

$('read-less').click(collapseBlogPost);



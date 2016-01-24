$(document).ready( function(collapseBlogPost) {

	function collapseBlogPost() {
		$('.expand-firstpost').slideUp();
		$('.read-more').show();
		$('.read-less').hide();
	}

	$('.read-more').click(expandBlogPost);

	function expandBlogPost() {
		$('.expand-firstpost').slideDown();
		$('.read-less').show();
		$('.read-more').hide();
	}

	$('.read-less').click(collapseBlogPost);

	$
	function collapseLearnMore() {
		$('.learn-more').
	}

});

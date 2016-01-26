$(document).ready( function(collapseBlogPost, collapseLearnMore) {

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

	function collapseLearnMore() {
		$('.learn-more-blurb').slideUp();
	}

	$('.learn-more-button').click(showLearnMore);
	function showLearnMore() {
		$('.learn-more-blurb').slideToggle();

	}


});

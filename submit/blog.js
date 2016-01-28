$(document).ready( function(collapseBlogPost, collapseLearnMore) {
// ND: Take a look at this the documentation for how document.ready works: https://learn.jquery.com/using-jquery-core/document-ready/
// This is the biggest issue here. The purpose is to make sure that the DOM fully loads before any
// JS code runs. You don't put functions inside the parameters for this.
// I think once you get this handled, your functions should be close to working.
// You are definitely on the right track
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

$(document).ready( function(collapseBlogPost) {
		
	function collapseBlogPost() {
		$('.expand-blog').slideUp();
		$('.read-more').show();
		$('.read-less').hide();
	}

	$('.read-more').click(expandBlogPost); 

		function expandBlogPost() {
			$('.expand-blog').slideDown();
			$('.read-less').show();
			$('.read-more').hide();
		}

	$('.read-less').click(collapseBlogPost);

});

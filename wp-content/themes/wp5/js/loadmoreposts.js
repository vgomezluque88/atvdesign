jQuery(function ($) { // use jQuery code inside this to avoid "$ is not defined" error
	var cnt = 0;
	var offset = 0;
	var loading = false;
	$('.loadmore_posts').click(function () {
		if (loading) {
			return false;
		}
		console.log($(this));
		var button = $(this);
		post_type = button.attr('data-post-type');
		post_count = button.attr('data-post-count');
		post_taxonomy = button.attr('data-post-taxonomy');
		post_tax = button.attr('data-post-tax');
		text = $(this).text();
		offset = post_count;

		data = {
			'action': 'loadmore',
			'query': loadmore_posts_params.posts, // that's how we get params from wp_localize_script() function
			'page': loadmore_posts_params.current_page,
			'valor': cnt,
			'offset': offset,
			'post_type': post_type,
			'post_count': post_count,
			//'post_taxonomy': post_taxonomy,
			//'post_tax': post_tax,
		};

		cnt = cnt + offset;
		$.ajax({ // you can also use $.post here
			url: loadmore_posts_params.ajaxurl, // AJAX handler
			data: data,
			type: 'POST',
			beforeSend: function (xhr) { // change the button text, you can also add a preloader image
				loading = true;
				//button.append('<span class="loader-plus-posts"><span class="loader-inner"></span></span>');
				button.append('<div class="pulse-container"><div class="pulse-bubble pulse-bubble-1"></div><div class="pulse-bubble pulse-bubble-2"></div><div class="pulse-bubble pulse-bubble-3"></div></div>');
				$('.loader-plus').css('display', 'none');
			},
			success: function (data) {


				if (data) {
					//button.prev().after(data); // insert new posts

					if ($('.blog-grid.cont__posts')[0]) {
						$('.blog-grid.cont__posts').append(data);
					} else if ($('.archive-grid.cont__posts')[0]) {
						$('.archive-grid.cont__posts').append(data);
					}

					loadmore_posts_params.current_page++;

					$('.pulse-container').remove();

					if (loadmore_posts_params.current_page < loadmore_posts_params.max_page) {
						$('.loader-plus').css('display', 'block');
					} else {
						button.remove();
					}

					// you can also fire the "post-load" event here if you use a plugin that requires it
					// $( document.body ).trigger( 'post-load' );
					loading = false;

				} else {
					button.remove(); // if no data, remove the button as well
				}
			}
		});
	});
});
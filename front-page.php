<?php
	get_header();
?>

	<div class="py-5 mb-5 page-banner-cont text-center">
		<h1 class="display-5 px-3 mb-3 fw-bold page-banner-header text-left">MOVIE SEARCH</h1>
		<div class="search-form">
			<form action="/sltest-results/" method="GET">
				<label class="sf-text">
					<input class="form-control" type="text" name="movie" placeholder="search movie" required />
				</label>
				<input type="submit" name="submit" value="Submit" class=" sf-btn btn btn-dark">
			</form>
		</div>
	</div>

	

<?php
	get_footer();
?>


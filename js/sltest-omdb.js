document.addEventListener('DOMContentLoaded', function() {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const movie = urlParams.get('movie');
	let output, subText, results, resultsLength, movieTitle, movieYear, moviePoster = '';

	if(movie){
		let request = new XMLHttpRequest();
		request.open("GET", "https://www.omdbapi.com/?type=movie&s="+ movie +"&apikey=ea848c");
		request.send();
		request.onload = () => {
			if(request.status === 200){
				results = (JSON.parse(request.response));
				resultsSearch = results.Search;

				if(resultsSearch){
					resultsLength = Object.keys(results.Search).length;
				}else{
					resultsLength = 0;
				}
				
				output = '';

				if(resultsLength){
					subText = resultsLength + ' Results for: ' + movie;
				}else{
					subText = '0 Results for: ' + movie;
				}
				

				for (let i = 0; i < resultsLength; i++) {

					movieTitle = resultsSearch[i].Title;
					movieYear = resultsSearch[i].Year;
					moviePoster = resultsSearch[i].Poster;

					output += `
						<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 movie px-2 py-2 text-center">
							<div class="movie-cont px-2 py-2">
								<div class="movie-img mb-3">
									<img src="` + moviePoster + `" class="movie-poster">
								</div>
								<div class="movie-details align-items-start">
									<h3>` + movieTitle + `</h3>
									<p class="` + colorCheck(movieTitle) + `">` + movieYear + `</p>
								</div>
							</div>
						</div>
					`;
				}

				

			}else{
				console.log('error ${request.status} $request.statusText');
			}

			document.getElementById("rpsub").innerHTML = subText;
			document.getElementById("movies").innerHTML = output;
		}

	}else{}
	
	function colorCheck(title){
		let bgClass;

		if(title.toLowerCase().includes('red') === true){
			bgClass = 'bgred';
		}else if(title.toLowerCase().includes('green') === true){
			bgClass = 'bggreen';
		}else if(title.toLowerCase().includes('blue') === true){
			bgClass = 'bgblue';
		}else if(title.toLowerCase().includes('yellow') === true){
			bgClass = 'bgyellow';
		}else{}

		return bgClass;
	}
});

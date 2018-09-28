$.ajax({
	url: "https://newsapi.org/v2/top-headlines?sources=medical-news-today&apiKey=b75bca6a2c4d4194b5a56e43034cc73e",
	success: function(data){

		for(let i = 1; i <= 9; i++){
			document.querySelector(".main").innerHTML+=`
			<div class="news">
				<h1 class="author">${data.articles[i].author}</h1>
			<div>
			<div class="img" style="background-image: url(${data.articles[i].urlToImage})"></div>
				<p class="title">${data.articles[i].title}</p>
				<a href="${data.articles[i].url}" target="_blank"><button class="btn btn-outline-dark btn-sm">Read More</button></a>
			</div>
			</div>
			`
		} 
		// b75bca6a2c4d4194b5a56e43034cc73e
		
	},

	error: function(error){
		console.log(error);
	}

})

$.ajax({
	url: "https://newsapi.org/v2/everything?sources=medical-news-today&apiKey=b75bca6a2c4d4194b5a56e43034cc73e",
	success: function(data){
		for(let i = 1; i <= 9; i++){			
			document.querySelector(".main").innerHTML+=`
			<div class="news">
				<h1 class="author">${data.articles[i].author}</h1>
			<div>
			<div class="img" style="background-image: url(${data.articles[i].urlToImage})"></div>
				<p class="title">${data.articles[i].title}</p>
				<a href="${data.articles[i].url}" target="_blank"><button class="btn btn-outline-dark btn-sm">Read More</button></a>
			</div>
			</div>
			`
		}
		
	},

	error: function(error){
		console.log(error);
	}

})


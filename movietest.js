const settings = {
    async: true,
    crossDomain: true,
    url: 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjkyZDQ5NmJjOWZiMDEwZTJmNzMxYWFiM2Q1ZWI2YSIsInN1YiI6IjY0NzQ4M2UwOWFlNjEzMDE0NjY4YzYyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fuGwzuaLbis4xO9qfSlck1-zbny6sBhTPo9sb7llb-o'
    }
    };
  
    $.ajax(settings).done(function (response) {
    console.log(response);
    });
  
    fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1")
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            let results = data['results']
            $('#cardbox').empty()
            results.forEach((a)=>{
                //영화 제목 지정
                let title = a['original_title']
                //영화 개요 지정
                let over = a['overview']
                //영화 포스터 지정
                let path = a['poster_path']
                //영화 평점 지정
                let vote = a['vote_average']
                //영화 ID 지정
                let id = a['id']
                
                let temp_html= `<div class="col" >
                                    <div class="card h-100"
                                        
                                        onclick="alert('영화아이디:${id}')"style="cursor:pointer">
                                        
                                        <img src="https://image.tmdb.org/t/p/w500${path}"
                                            class="card-img-top">
                                        <div class="card-body">
                                            
                                            <h5 class="card-title">${title}</h5>
                                            
                                            <p class="card-text">${over}</p>
                                            
                                            <q class="card-text">${vote}</q>                                                                                      
                                        </div>
                                    </div>  
                                </div>`
            $('#cardbox').append(temp_html)
            
            })
        }) 

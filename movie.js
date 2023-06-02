// TMDB에서 API 영화 정보 받아오기
const optoins = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjkyZDQ5NmJjOWZiMDEwZTJmNzMxYWFiM2Q1ZWI2YSIsInN1YiI6IjY0NzQ4M2UwOWFlNjEzMDE0NjY4YzYyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fuGwzuaLbis4xO9qfSlck1-zbny6sBhTPo9sb7llb-o",
    },
  };
  
  function listing() {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=1292d496bc9fb010e2f731aab3d5eb6alanguage=ko",
      optoins)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let results = data["results"];
        const mvbox = document.getElementById("cardbox");
        results.forEach((mv) => {
          //영화 제목 지정
          let title = mv["original_title"];
          //영화 개요 지정
          let over = mv["overview"];
          //영화 포스터 지정
          let path = mv["poster_path"];
          //영화 평점 지정
          let vote = mv["vote_average"];
          //영화 ID 지정
          let id = mv["id"];
          //영화 ID 지정 및 영화클릭시 ID alert 출력
          let temp_html = `<div class="col" >
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
                                  </div>`;
          mvbox.insertAdjacentHTML("beforeend", temp_html);
        });
      });
  }
  
  listing();
  
  function schMovie(){
      const post = document.getElementById('searchinput').value;
      const mvbox = document.getElementById('cardbox');
      mvbox.textContent = '';
      
  
  fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=1292d496bc9fb010e2f731aab3d5eb6a&language=ko",
      optoins)
      .then((response) => response.json())
      .then((data) => {
      
      let results = data['results'];
        
      // 66~78번 내용은 아래 80~91과 같은부분이지만 다른방법을 튜터분이 
      // 아래부분을 더 효율적이라고 말씀해주셔서 주석처리했으며
      // 과제 제출 후 공부와 연습 그리고 서칭해보겠음
      // const filteredResults = results.map((aa) => ({
      //   //영화 제목 지정
      //   title: aa['original_title'],
      //   //영화 개요 지정
      //   over: aa['overview'],
      //   //영화 포스터 지정
      //   path: aa['poster_path'],
      //   //영화 평점 지정
      //   vote: aa['vote_average'],
      //   //영화 ID 지정
      //   id: aa['id'],
      // })).filter((movie) => includes(post.toLowerCase()));
  
      const filteredResults = results.filter((movie) => movie.original_title.includes(post)).map((aa) => ({
        //영화 제목 지정
        title: aa['original_title'],
        //영화 개요 지정
        over: aa['overview'],
        //영화 포스터 지정
        path: aa['poster_path'],
        //영화 평점 지정
        vote: aa['vote_average'],
        //영화 ID 지정
        id: aa['id'],
      }))
  
      console.log("filteredResults:",filteredResults)
  
      // 검색창에 글자 미입력시 alert으로 '검색결과 없음' 을 표현하려했으나 
      // 알림창이 안뜸, 과제 제출 후 연구해보겠음
      if (filteredResults.lenght == 0) {
          // alert(`검색결과 없음`)
          window.location.reload();
      };
      
      filteredResults.forEach((movie) => {
          let temp_html = `<div class="col" >
                                      <div class="card h-100"
                                          onclick="alert('영화아이디:${movie.id}')"style="cursor:pointer">
                                          <img src="https://image.tmdb.org/t/p/w500${movie.path}"
                                              class="card-img-top">
                                          <div class="card-body">
                                              <h5 class="card-title">${movie.title}</h5>
                                              <p class="card-text">${movie.over}</p>
                                              <q class="card-text">${movie.vote}</q>                                                                                      
                                          </div>
                                      </div>  
                                  </div>`;
          mvbox.insertAdjacentHTML("beforeend", temp_html);
          
  
          });
      });
  }
  
  // 93번 ~ 94번 영화카드 ID값 지정 및 카드 클릭 시 영화 아이디 aleat 알림창 구현
  const searchbt = document.getElementById("searchbtn");
  searchbt.addEventListener("click", schMovie);
  
  const box = document.getElementById('searchinput');
  console.log("box:", box)
  // box.addEventListener('keypress', (event) => {
  //   if (event.key === 'Enter','NumpadEnter') {
  //     event.preventDefault();
  //     schMovie();
  //   }
  // });
  
      
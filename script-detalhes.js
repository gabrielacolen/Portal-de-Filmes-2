const params = new URLSearchParams(location.search);
let id = params.get('id');
dadosFilmes = JSON.parse(localStorage.getItem('db_filmes'));
let idxFilme = dadosFilmes.results.findIndex ((elem) => elem.id == id)

if(idxFilme>-1){

    let filme = dadosFilmes.results[idxFilme];

    document.getElementById('divDetalheFilme').innerHTMLHTML =`
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
        
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${filme.title}</h5>
            <p class="card-text">${filme.overview}</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>` 
}

else{
    alert("Filme não encontrado");
}



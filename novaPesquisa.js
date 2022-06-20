//const API_KEY = 'cd6f8a8b32484c38820d37b780795584';
const API_KEY2 = '50aa8b1fec87fd0c96e50e75997931ff';

function exibeFilme() {
  let divTelaVideo = document.getElementById('box-video');
  let texto1 = '';
  let dados = JSON.parse(this.responseText);
  for (i = 0; i < dados.results.length; i++) {
    var teste = dados.results[i].overview;
    var foto = dados.results[i].poster_path;
    var titulo = dados.results[i].title;

    texto1 =
      texto1 +
      `
    <div class="cartao" id="box-video">
    <img src="https://image.tmdb.org/t/p/w500/${foto}" class="cartao-img" alt="Filme">
    <div class="card-body">
      <h5 class="card-title">${titulo}</h5>
      <p class="card-text">${teste}</p>
    </div>
  </div>
  `;
  }

  divTelaVideo.innerHTML = texto1;
}

function executaPesquisa() {
  let query = document.getElementById('textoPesquisa').value;

  let xhr = new XMLHttpRequest();
  xhr.onload = exibeNoticias;
  xhr.open(
    'GET',
    `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}&language=pt-BR`
  );
  xhr.send();
}


function executaPesquisaFilme() {
  let query = document.getElementById('textoPesquisa').value;

  let xhr = new XMLHttpRequest();
  xhr.onload = exibeFilme;
  xhr.open(
    'GET',
    `https://api.themoviedb.org/3/search/movie?api_key=50aa8b1fec87fd0c96e50e75997931ff&language=pt-BR&page=1&include_adult=false&query=${query}`
  );
  xhr.send();
}





document
  .getElementById('Expesquisa')
  .addEventListener('click', executaPesquisa);
document
  .getElementById('Expesquisa')
  .addEventListener('click', executaPesquisaFilme);
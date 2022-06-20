const dadosFilmes = {
    results:[
        {
            "id": 338953,
        
            "original_title": "Fantastic Beasts: The Secrets of Dumbledore",
            "overview": "Professor Albus Dumbledore knows the powerful, dark wizard Gellert Grindelwald is moving to seize control of the wizarding world. Unable to stop him alone, he entrusts magizoologist Newt Scamander to lead an intrepid team of wizards and witches. They soon encounter an array of old and new beasts as they clash with Grindelwald's growing legion of followers.",
            "poster_path": "/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg",
            "release_date": "2022-04-06",
            "title": "Fantastic Beasts: The Secrets of Dumbledore",

            
        },{
            "id": 752623,
        
            "original_title": "The Lost City",
            "overview": "A reclusive romance novelist was sure nothing could be worse than getting stuck on a book tour with her cover model until a kidnapping attempt sweeps them both into a cutthroat jungle adventure, proving life can be so much stranger, and more romantic, than any of her paperback fictions.",
            "poster_path": "/neMZH82Stu91d3iqvLdNQfqPPyl.jpg",
            "release_date": "2022-03-24",
            "title": "The Lost City"
            
        },{
            "id": 675353,
            
            "original_title": "Sonic the Hedgehog 2",
            "overview": "After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.",

            "poster_path": "/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg",
            "release_date": "2022-03-30",
            "title": "Sonic the Hedgehog 2"
        }
    ]

}

const mostraFilmes = (data) => {
    let dadosHTML='';

    let dadosFilmes = JSON.parse(data.target.response)
    localStorage.setItem('db_filmes', data.target.response)

    for(i=0; i<dadosFilmes.results.length; i++){
        let filme = dadosFilmes.results[i];
        dadosHTML +=`
        <div class="card col-sm-6 col-md-4 col-lg-2" id="card_filmes">
                <img src="https://image.tmdb.org/t/p/w500${filme.poster_path}" class="card-img-top" alt="Filme">
                <div class="card-body">
                  <h5 class="card-title">${filme.title}</h5>
                  <p class="card-text">${filme.overview}</p>
                  <a href="detalhes.html?id=${filme.id}" class="btn btn-primary">Veja mais</a>
                </div>
              </div>`
    }
    document.getElementById('divListaFilmes').innerHTML = dadosHTML
}

const mostraErro = (data) => {
    alert ('ERROR');
}

const init = () => {
    let xhr = new XMLHttpRequest();
    let url = "https://api.themoviedb.org/3/movie/upcoming?api_key=50aa8b1fec87fd0c96e50e75997931ff&language=pt-BR&page=1";
    xhr.onload = mostraFilmes;
    xhr.onerror = mostraErro;

    xhr.open('GET', url, true);
    xhr.send();

    
}

document.body.onload = init;



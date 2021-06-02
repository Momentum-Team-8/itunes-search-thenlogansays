

const url = 'https://proxy-itunes-api.glitch.me/search?'
const form = document.getElementById('input-field')
const searchInput = document.getElementById('search-input').value
searchResults = document.getElementById('output')

document.addEventListener('submit', event => {
    event.preventDefault()
    createNewSearch()
});

function createNewSearch() {
    //making request to the url for the search
    fetch(url + 'term=' + `${searchInput}` + '&media=music' + '&entity=song' + '&limit=10')
    //returns the request in json format
    .then(response =>  response.json())
    //looping through data
    .then((data) => {
        console.log(data)
        console.log(url + 'term=' + `${searchInput}` + '&media=music' + '&limit=10')
        for (let item of data.results) {
            console.log(item)
            renderResults(item)
        }
    })
};

function renderResults(musicObj) {
    let eachResult = document.createElement('li')
    searchResults.appendChild(eachResult)

    let artist = document.createElement('div')
    artist.setAttribute('id', 'artist-name')
    eachResult.appendChild(artist)
    artist.innerHTML = `${musicObj.artistName}`
}

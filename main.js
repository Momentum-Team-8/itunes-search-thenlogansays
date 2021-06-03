

const url = 'https://itunes.apple.com/search?'
const form = document.getElementById('input-field')
const searchInput = document.getElementById('search-input')
searchResults = document.getElementById('output')

document.addEventListener('submit', event => {
    event.preventDefault()
    createNewSearch(searchInput)
});

function createNewSearch() {
    const search = searchInput.value
    //making request to the url for the search
    fetch(url + 'term=' + `${search}` + '&entity=song' + '&limit=10')
    //returns the request in json format
    .then(response =>  response.json())
    //looping through data
    .then((data) => {
        //console.log(data)
        //console.log(url + 'term=' + `${searchInput}` + '&media=music' + '&limit=10')
        
        for (let item of data.results) {
            console.log(item)
            renderResults(item)
        }
    })
};

function renderResults(data) {
    //creates <li> for each result and appends to searchResults
    let eachResult = document.createElement('li')
    eachResult.id = data.trackId
    searchResults.appendChild(eachResult)

    //creates div to display track name 
    let trackName = document.createElement('div')
    trackName.setAttribute('id', 'track-name')
    eachResult.appendChild(trackName)
    trackName.innerHTML = `${data.trackName}`

    let trackArt = document.createElement('img')
    trackArt.setAttribute('id', 'track-image')
    eachResult.appendChild(trackArt)
    trackArt.src = `${data.artworkUrl60}`

    // creates div to display artists name
    let artist = document.createElement('div')
    artist.setAttribute('id', 'artist-name')
    eachResult.appendChild(artist)
    artist.innerHTML = `${data.artistName}`
    
    
}

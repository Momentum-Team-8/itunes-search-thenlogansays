

const url = 'https://itunes.apple.com/search?'
const title = document.getElementById('title')
const form = document.getElementById('input-field')
const output = document.getElementById('output-field')
const container = document.querySelector('.container')
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

    //creates img element to display track artwork
    let trackArt = document.createElement('img')
    trackArt.id ='track-image'
    eachResult.appendChild(trackArt)
    trackArt.src = `${data.artworkUrl60}`

    //creates div to display track name 
    let trackName = document.createElement('div')
    trackName.id = 'track-name'
    eachResult.appendChild(trackName)
    trackName.innerHTML = `${data.trackName}`

    // creates div to display artists name
    let artist = document.createElement('div')
    artist.id = 'artist-name'
    eachResult.appendChild(artist)
    artist.innerHTML = `${data.artistName}`

    // creates button to preview audio
    // let previewButton = document.createElement('button')
    // previewButton.id = 'preview'
    // eachResult.appendChild(previewButton)
    // previewButton.innerText = "Listen"
    

    trackName.addEventListener('click', oneTimeEvent) 
        function oneTimeEvent() {
            let audio = document.createElement('audio')
            audio.id = 'audio-preview'
            audio.controls = 'controls'
            audio.src = `${data.previewUrl}`
            eachResult.appendChild(audio)
            trackName.removeEventListener('click', oneTimeEvent)
    
    }
}
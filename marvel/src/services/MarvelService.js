

class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=0c4b2e4abb7e77a2d90bb9b7a5dde52c';

    getResource = async (url) => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status ${res.status}`);
        }

        return await res.json();

    }

    getAllCharacters = async() => {
        const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
        return res.data.results.map(this._transformCharacter)
    }
    getCharacter = async (id) => {
        const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
        return this._transformCharacter(res.data.results[0]);
    }
    _transformCharacter = (char) => {
        return {
            name: char.name,
            description: char.description ? `${char.description.slice(0,210)}...` : "No description for this hero",
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homePage: char.urls[0].url,
            wiki: char.urls[1].url
        }
    }

}

export default MarvelService;


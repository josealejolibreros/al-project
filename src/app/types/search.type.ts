export class ResponseDescriptor {
 
    

    public page: number;
    public pages: number;
    public total_pages: number;
    public total_results: number;
    public results: MovieDescriptor[] = [];
    public actors_results: ActorDescriptor[] = [];
    

    public static import(rawData: any) {

        let response: ResponseDescriptor = new ResponseDescriptor();

        response.page = rawData.hasOwnProperty('page') ? rawData.page : 0;
        response.pages = rawData.hasOwnProperty('pages') ? rawData.pages : 0;
        response.total_pages = rawData.hasOwnProperty('total_pages') ? rawData.total_pages : 0;
        response.total_results = rawData.hasOwnProperty('total_results') ? rawData.total_results : 0;

        let movie: MovieDescriptor;
        if (rawData.hasOwnProperty("results")) {
            for (var i = 0; i < rawData.results.length; i++) {
                let row: any = rawData.results[i];
                movie = MovieDescriptor.import(row);
                response.results.push(movie);
            }
        }
        return response;
    }


    public static importActors(rawData: any) {

        let response: ResponseDescriptor = new ResponseDescriptor();

        response.page = rawData.hasOwnProperty('page') ? rawData.page : 0;
        response.pages = rawData.hasOwnProperty('pages') ? rawData.pages : 0;
        response.total_pages = rawData.hasOwnProperty('total_pages') ? rawData.total_pages : 0;
        response.total_results = rawData.hasOwnProperty('total_results') ? rawData.total_results : 0;

        let actor: ActorDescriptor;
        if (rawData.hasOwnProperty("results")) {
            for (var i = 0; i < rawData.results.length; i++) {
                let row: any = rawData.results[i];
                actor = ActorDescriptor.import(row);
                response.actors_results.push(actor);
            }
        }
        return response;
    }





}

export class MovieDescriptor {

    public id: number;
    public genre_ids: number[];
    public title: string;
    public overview: string;
    public release_date: string;
    public popularity: number;
    public vote_average: number;
    public vote_count: number;

    public static import(rawData: any) {
        let movie: MovieDescriptor = new MovieDescriptor();

        movie.id = rawData.hasOwnProperty('id') ? rawData.id : 0;
        movie.genre_ids = rawData.hasOwnProperty('genre_ids') ? rawData.genre_ids: [];
        movie.title = rawData.hasOwnProperty('title') ? rawData.title: '';
        movie.overview = rawData.hasOwnProperty('overview') ? rawData.overview : '';
        movie.release_date = rawData.hasOwnProperty('release_date') ? rawData.release_date : '---';
        movie.popularity = rawData.hasOwnProperty('popularity') ? rawData.popularity : 0;
        movie.vote_average = rawData.hasOwnProperty('vote_average') ? rawData.vote_average : 0;
        movie.vote_count = rawData.hasOwnProperty('vote_count') ? rawData.vote_count : 0;

        return movie;
    }
}

export class ActorDescriptor {

    public id: number;
    public name: string;
    public profile_path: string;
    public popularity: string;
    public birthday : string;
    public biography : string;
    public place_of_birth : string;
    public adult : boolean;
    public homepage : string;
    

    public static import(rawData: any) {
        let actor: ActorDescriptor = new ActorDescriptor();

        actor.id = rawData.hasOwnProperty('id') ? rawData.id : 0;
        actor.name = rawData.hasOwnProperty('name') ? rawData.name: [];
        actor.profile_path = rawData.hasOwnProperty('profile_path') ? rawData.profile_path: '';
        actor.popularity = rawData.hasOwnProperty('popularity') ? rawData.popularity : '';
        actor.birthday = rawData.hasOwnProperty('birthday') ? rawData.birthday : '';
        actor.biography = rawData.hasOwnProperty('biography') ? rawData.biography : '';
        actor.place_of_birth = rawData.hasOwnProperty('place_of_birth') ? rawData.place_of_birth : '';
        actor.adult = rawData.hasOwnProperty('adult') ? rawData.adult : '';
        actor.homepage = rawData.hasOwnProperty('homepage') ? rawData.homepage : '';
        

        return actor;
    }
}


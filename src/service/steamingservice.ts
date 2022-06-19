import { Constants } from "../utils/constants"
import { checkImage, fetchJson, fetchRequest } from "./requestUtil"

enum enumStreamingTypes {
    "movies" = "movie",
    "series" = "series",
}

export interface IMovie {
    title: string,
    description: string,
    programType: enumStreamingTypes.movies
    images: {
        "Poster Art": {
            url: string,
            width: number,
            number: number
        }
    },
    releaseYear: number
}

export interface ISeries {
    title: string,
    description: string,
    programType: enumStreamingTypes.series
    images: {
        "Poster Art": {
            url: string,
            width: number,
            number: number
        }
    },
    releaseYear: number
}

export interface IPopularTitle {
    name: string,
    title: string,
    backgroundImage: string,
    navigateTo: string
}

export const GetPopulartTitles = async (): Promise<IPopularTitle[]> => {
    let data = await fetchJson(Constants.FETCH_ALL_DATA).then((data) => data);
    const movieData = data.entries.filter((x: any) => x.programType === Constants.MOVIE);
    const seriesData = data.entries.filter((x: any) => x.programType === Constants.SERIES);
    const getMovieImage = await checkImage(movieData[Math.floor(Math.random() * movieData.length)].images["Poster Art"].url).then((response) => response);
    const getSeriesImage = await checkImage(seriesData[Math.floor(Math.random() * seriesData.length)].images["Poster Art"].url).then((response) => response);

    let popularTitles = [{
        name: Constants.MOVIE,
        title: Constants.TITLE_MOVIE,
        backgroundImage: getMovieImage,
        navigateTo: "/movies"
    },
    {
        name: Constants.SERIES,
        title: Constants.TTITLE_SERIES,
        backgroundImage: getSeriesImage,
        navigateTo: "/series"
    }] as IPopularTitle[];

    return popularTitles;
}

export const GetMovies = async (): Promise<IMovie[]> => {
    const movies = await fetchJson(Constants.FETCH_ALL_DATA).then((data) => {
        return data.entries.filter((x: IMovie) => x.programType === enumStreamingTypes.movies)

    });
    return movies;
}

export const GetSeries = async (): Promise<ISeries[]> => {
    const series = await fetchJson(Constants.FETCH_ALL_DATA).then((data) => {
        return data.entries.filter((x: ISeries) => x.programType === enumStreamingTypes.series)
    });
    return series;
}

export const GetFunFactOfTheYear = async (year:number) : Promise<string> =>{
    const funfact = await fetchRequest(Constants.FUN_FACT_URL+year+"/year?json").then((response) =>{
        console.log(JSON.parse(response).text);
        return JSON.parse(response).text;
    });
    return funfact;
}
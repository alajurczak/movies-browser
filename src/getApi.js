export const getApi = async () => {
    const response = await fetch("https://api.themoviedb.org/3/movie/550?api_key=aea916461e048c73c93fe43e96a7f98d");

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return await response.jscon();
}
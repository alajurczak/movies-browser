export const getApi = async (page) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=aea916461e048c73c93fe43e96a7f98d&language=en-US&page=${page}`);

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return await response.json();
}
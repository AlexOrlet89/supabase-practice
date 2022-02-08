const SUPABASE_URL = 'https://sjdlsxmnlasfuesvmebz.supabase.co';
const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqZGxzeG1ubGFzZnVlc3ZtZWJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQzNDE0ODAsImV4cCI6MTk1OTkxNzQ4MH0.SGC6ShwKbSPLUcnWYRO3o7KQbJaV16eTy-AmGphLBh4';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}

export async function getMovies() {
  // return the list of all movies
    const resp = await client.from('movies').select('*');
    console.log(resp);
    return checkError(resp);
}
  
export async function getMoviesWithDirector() {
    const resp = await client.from('movies').select('*');
    console.log(resp);
    return checkError(resp);
  // return the list of all the movies with their director
}

export async function getDirectorNames() {
    const resp = await client.from('directors').select('name');
    console.log(resp);
    return checkError(resp);
  // return the list of the director's names
}

export async function getMovieById(id) {
    const resp = await client.from('movies').select('title');

    console.log(resp.id);
    return checkError(resp);
  // return the movie with the given id
}

export async function getMovieByTitle(title) {
  // return the movie with the given title
}

export async function getOldestMovie() {
  // return the oldest movie (assume the database is not sorted)
}

export async function getMoviesAfter(year) {
  // return movies made after the year passed in
}

export async function getHighestGrossingMovie() {
  // return movie with the highest box office total
}

export async function http<T>(request: string): Promise<T> {
  const response = await fetch(request);
  const body = await response.json();
  return body;
}

interface IPost {
  title?: string,
  body?: string
}

const post = await http<IPost>('someURL');


interface User {
  id: string
  name: string
}

async function fetchData(id: string): Promise<User[]> {
  const result = await fetch(`https://example.com/users/${id}`)
  const json = await result.json()

  // json is an array of users
  return json
}
export { fetchData };

// Type alias
type FetchData = (id: string) => Promise<User[]>

const fetchDataUser: FetchData = async id => {
  const result = await fetch(`https://example.com/users/${id}`)
  const json = await result.json()
  return json
}
export { fetchDataUser }


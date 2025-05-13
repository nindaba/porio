import {
  ApolloClient,
  ApolloProvider,
  gql,
  InMemoryCache,
  useQuery,
} from '@apollo/client'
import logo from './logo.svg'

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`

function DisplayLocations() {
  const { loading, error, data } = useQuery<{
    locations: {
      id: string
      name: string
      description: string
      photo: string
    }[]
  }>(GET_LOCATIONS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>

  if (!data || !data.locations) return <p>No data found</p>

  return (
    <div className="text-white-900 d-flex flex flex-wrap items-stretch justify-center bg-gray-900">
      {data.locations.map(({ id, name, description, photo }) => (
        <div
          key={id}
          className="m-4 max-w-sm rounded-lg bg-gray-800 px-8 py-4 text-white"
        >
          <h3 className="max-w-sm overflow-hidden text-ellipsis whitespace-nowrap py-4 text-2xl">
            {name}
          </h3>
          <img
            alt="location-reference"
            src={`${photo}`}
            style={{
              display: 'block',
              margin: '0 auto',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              width: '400px',
              height: '250px',
            }}
          />
          <div className="pb-4 pt-12 text-xl">About this location:</div>
          <p>{description}</p>
          <br />
        </div>
      ))}
    </div>
  )
}

function App() {
  const client = new ApolloClient({
    uri: 'https://flyby-router-demo.herokuapp.com/',
    // uri: 'http://localhost:8080/graphql',
    cache: new InMemoryCache(),
  })

  return (
    <ApolloProvider client={client}>
      <DisplayLocations />
    </ApolloProvider>
  )
}

export default App

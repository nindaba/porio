import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import Navbar from './components/Navbar'
import ExperiencePage from './pages/ExperiencePage'

function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:8080/graphql',
    cache: new InMemoryCache(),
  })

  return (
    <ApolloProvider client={client}>
      <Navbar />
      <div className="lg:6 tablet-auto mx-auto max-w-3xl px-6 pb-32 pt-8">
        <ExperiencePage />
      </div>
    </ApolloProvider>
  )
}

export default App

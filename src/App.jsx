import './App.css'
import { gql, useQuery } from "@apollo/client"

const DOGS = gql`
  query MyQuery {
    dogs {
      id
      name
      description
      thumbnail {
        url
      }
    }
  }
`

function App() {
  const {data, loading, error} = useQuery(DOGS)

  if(loading) return "ロード中・・・"
  if(error) return `エラー${error}`

  return (
    <>
      <h1>GraphQLとReact</h1>

      <div className="contents">
        {data.dogs.map((dog) => (
          <div key={dog.id}>
            <div className="contents_card">
              <img src={dog.thumbnail.url}></img>
              <p>{dog.name}</p>
              <p>{dog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default App

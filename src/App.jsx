import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const EXCHANGE_RATES = gql`{
  popular_artists {
    artists {
      id
      name
    }
  }
}`;

function App() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div className="App">
      <ul>
        {data.popular_artists.artists.map((item) => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
}

export default App;

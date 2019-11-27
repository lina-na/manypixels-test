import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { POPULAR_ARTISTS } from '../../../queries';
import List from './List';

const mock = [
  { id: 'pablo-picasso', name: 'Pablo Picasso', __typename: 'Artist' },
  { id: 'banksy', name: 'Banksy', __typename: 'Artist' },
  { id: 'andy-warhol', name: 'Andy Warhol', __typename: 'Artist' },
  { id: 'jean-michel-basquiat', name: 'Jean-Michel Basquiat', __typename: 'Artist' },
  { id: 'keith-haring', name: 'Keith Haring', __typename: 'Artist' },
  { id: 'takashi-murakami', name: 'Takashi Murakami', __typename: 'Artist' },
  { id: 'roy-lichtenstein', name: 'Roy Lichtenstein', __typename: 'Artist' },
  { id: 'francis-bacon', name: 'Francis Bacon', __typename: 'Artist' },
  { id: 'kaws', name: 'KAWS', __typename: 'Artist' },
  { id: 'damien-hirst', name: 'Damien Hirst', __typename: 'Artist' },
  { id: 'ai-weiwei', name: 'Ai Weiwei', __typename: 'Artist' },
  { id: 'jeff-koons', name: 'Jeff Koons', __typename: 'Artist' },
  { id: 'helmut-newton', name: 'Helmut Newton', __typename: 'Artist' },
  { id: 'frank-stella', name: 'Frank Stella', __typename: 'Artist' },
  { id: 'hiroshi-sugimoto', name: 'Hiroshi Sugimoto', __typename: 'Artist' },
  { id: 'marcel-duchamp', name: 'Marcel Duchamp', __typename: 'Artist' },
  { id: 'georges-braque', name: 'Georges Braque', __typename: 'Artist' },
  { id: 'shepard-fairey', name: 'Shepard Fairey', __typename: 'Artist' },
  { id: 'john-baldessari', name: 'John Baldessari', __typename: 'Artist' },
  { id: 'george-condo', name: 'George Condo', __typename: 'Artist' },
];

const Main = () => {
  // const { loading, error, data } = useQuery(POPULAR_ARTISTS);
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;
  // console.log(data.popular_artists.artists);
  return (
    <div className="list-wrapper">
      <List artists={mock} />
    </div>
  );
};

export default Main;

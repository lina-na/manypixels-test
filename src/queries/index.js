import { gql } from 'apollo-boost';

export const POPULAR_ARTISTS = gql`{
  popular_artists {
    artists {
      _id
      name
      bio
    }
  }
}`;

export const ARTIST_INFO = gql`
query getArtistProfile($id: String!) {
  artist(id: $id) {
  name
    birthday
    nationality
    blurb
    artworks {
      _id
      title
      imageUrl
    }
  }
}`;

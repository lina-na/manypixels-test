import { gql } from 'apollo-boost';

export const POPULAR_ARTISTS = gql`{
  popular_artists {
    artists {
      id
      name
    }
  }
}`;

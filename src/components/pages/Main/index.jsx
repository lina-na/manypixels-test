import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Loader from 'react-loader-spinner';
import { AppLoader } from '../../../assets/styled-components';
import { POPULAR_ARTISTS } from '../../../queries';
import List from './List';

const Main = () => {
  const { loading, error, data } = useQuery(POPULAR_ARTISTS);
  if (loading) {
    return (
      <AppLoader>
        <Loader
          type="ThreeDots"
          color="grey"
          height={100}
          width={100}
          timeout={3000}
        />
      </AppLoader>
    );
  }
  if (error) return <p>Error :(</p>;
  const { popular_artists: { artists } } = data;
  return (
    <div className="list-wrapper">
      <List artists={artists} />
    </div>
  );
};

export default Main;

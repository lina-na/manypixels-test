import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Link, useParams } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';
import { ARTIST_INFO } from '../../../queries';
import { AppLoader, AppLinkBack } from '../../../assets/styled-components';

const AppProfile = styled.div`margin-top: 25px;`;

const ProfileArtworks = styled.div`
  h2 {
    text-align: center;
    margin: 1rem 0;
  }
`;

const ArtworkList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ArtWork = styled.li`
  padding: 10px;
  margin: 10px;
  text-align: center;
  border: 1px solid lightgray;
`;

const ArtWorkTitle = styled.div`
  margin-top: 5px;
  max-width: 230px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Profile = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(ARTIST_INFO, { variables: { id } });
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
  const {
    artist: {
      name, nationality, birthday, artworks, blurb,
    },
  } = data;
  return (
    <AppProfile>
      <AppLinkBack>
        <Link to="/artists">&larr; Back to all artists</Link>
      </AppLinkBack>
      <div>
        <div className="row">
          <div className="col-2">Name:</div>
          <div className="col">{name}</div>
        </div>
        <div className="row">
          <div className="col-2">Nationality:</div>
          <div className="col">{nationality}</div>
        </div>
        <div className="row">
          <div className="col-2">Birthday:</div>
          <div className="col">{birthday || 'unknown'}</div>
        </div>
        <div className="row">
          <div className="col-2">Reference:</div>
          <div className="col">{blurb}</div>
        </div>
      </div>
      <hr />
      <ProfileArtworks>
        <h2>Artworks</h2>
        <ArtworkList>
          {artworks.map((item) => (
            <ArtWork key={item._id}>
              <img src={item.imageUrl} alt="artwork" />
              <ArtWorkTitle>{item.title}</ArtWorkTitle>
            </ArtWork>
          ))}
        </ArtworkList>
      </ProfileArtworks>
    </AppProfile>
  );
};

export default Profile;

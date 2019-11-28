import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ArtistList = styled.ul`padding-top: 30px;`;

const Artist = styled.li`
  border: 1px solid rgba(0, 0, 0, .125);
  border-radius: .5rem;
  margin-bottom: 15px;
  background-color: #fff;
  box-shadow: 0 1px 15px rgba(0, 0, 0, .04), 0 1px 6px rgba(0, 0, 0, .04);
  cursor: pointer;
  transition: transform .3s linear;
  
  a {
    display: flex;
    padding: 1.75rem;
  }
      
  &:nth-child(even) {
    background-color: #efefef;
  }
  
  &:hover {
    transform: scale(1.05);
  }
`;

const ArtistBio = styled.span`
  font-family: cursive;
  margin-left: 20px;
  font-size: 14px;
  color: gray;
`;

const List = ({ artists }) => (
  <ArtistList>
    {artists.map((item) => (
      <Artist key={item._id}>
        <Link to={`artists/${item._id}`}>
          <span>{item.name}</span>
          <ArtistBio>{`(${item.bio})`}</ArtistBio>
        </Link>
      </Artist>
    ))}
  </ArtistList>
);

List.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.object),
};

List.defaultProps = {
  artists: [],
};

export default List;

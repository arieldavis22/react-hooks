import React, { useEffect, useState, useContext, useReducer, useMemo } from 'react';

import { Header } from '../src/Header';
import { Menu } from '../src/Menu';
import SpeakerData from './SpeakerData';
import SpeakerDetail from './SpeakerDetail';
import { ConfigContext } from './App';
import speakersReducer from './speakersReducer'
import useSpeakerDataManager from './useSpeakerDataManager'

const Speakers = ({}) => {
  const [speakingSaturday, setSpeakingSaturday] = useState(true);
  const [speakingSunday, setSpeakingSunday] = useState(true);
  const context = useContext(ConfigContext)

  const { isLoading, speakerList, dispatch } = useSpeakerDataManager



  const handleChangeSaturday = () => {
    setSpeakingSaturday(!speakingSaturday);
  };

  const newSpeakerList = useMemo(() => speakerList
  .filter(
    ({ sat, sun}) => (speakingSaturday && sat) || (speakingSunday && sun)
  )
  .sort(function(a, b) {
    if (a.firstName < b.firstName) {
      return -1;
    }
    if (a.firstName > b.firstName) {
      return 1;
    }
    return 0
  }), [speakingSaturday, speakingSunday, speakerList])

  const speakerListFiltered = isLoading
    ? []
    : newSpeakerList;

  const handleChangeSunday = () => {
    setSpeakingSunday(!speakingSunday);
  };

  const heartFavoriteHandler = (e, favoriteValue) => {
    e.preventDefault();
    const sessionId = parseInt(e.target.attributes['data-sessionid'].value);

    dispatch({
      type: favoriteValue ? "favorite" : "unfavorite",
      id: sessionId
    })
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <Header />
      <Menu />
      <div className="container">
        <div className="btn-toolbar  margintopbottom5 checkbox-bigger">
          {context.showSpeakerSpeakingDays === false ? null : (
          <div className="hide">
          <div className="form-check-inline">
            <label className="form-check-label">
              <input
                type="checkbox"
                className="form-check-input"
                onChange={handleChangeSaturday}
                checked={speakingSaturday}
              />
              Saturday Speakers
            </label>
          </div>
          <div className="form-check-inline">
            <label className="form-check-label">
              <input
                type="checkbox"
                className="form-check-input"
                onChange={handleChangeSunday}
                checked={speakingSunday}
              />
              Sunday Speakers
            </label>
          </div>
        </div>
          )}
        </div>
        <div className="row">
          <div className="card-deck">
            {speakerListFiltered.map(
              ({ id, firstName, lastName, bio, favorite }) => {
                return (
                  <SpeakerDetail
                    key={id}
                    id={id}
                    favorite={favorite}
                    onHeartFavoriteHandler={heartFavoriteHandler}
                    firstName={firstName}
                    lastName={lastName}
                    bio={bio}
                  />
                );
              },
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionLocations.module.css';

import HnlImg from './images/honolulu.jpg';
import MauiImg from './images/maui.jpg';
import BigislandImge from './images/bigisland.jpg';

class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, searchQuery) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </NamedLink>
  );
};

const SectionLocations = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionLocations.title" />
      </div>
      <div className={css.locations}>
        {locationLink(
          'Oahu',
          HnlImg,
          '?address=Honolulu%2C%20Hawaii&bounds=21.49379345%2C-157.70542951%2C21.21182742%2C-157.94928351&mapSearch=true'
        )}
        {locationLink(
          'Maui',
          MauiImg, 
          '?address=Maui%2C%20Hawaii&bounds=20.894206%2C-156.436857%2C20.879942%2C-156.679292'
        )}
        {locationLink(
          'Big Island',
          BigislandImge,
          '?address=Big%20Island%2C%20Hawaii&bounds=19.96545349%2C-155.29332609%2C19.05186791%2C-156.07401848&mapSearch=true'
        )}
      </div>
    </div>
  );
};

SectionLocations.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLocations.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLocations;

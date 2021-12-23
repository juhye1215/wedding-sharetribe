import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { injectIntl, intlShape } from '../../util/reactIntl';
import { isScrollingDisabled } from '../../ducks/UI.duck';
import config from '../../config';
import {
  Page,
  SectionHero,
  SectionHowItWorks,
  SectionLocations,
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
} from '../../components';
import { TopbarContainer } from '../../containers';

import facebookImage from '../../assets/saunatimeFacebook-1200x630.jpg';
import twitterImage from '../../assets/saunatimeTwitter-600x314.jpg';
import css from './LandingPage.module.css';

import {Card,Row, Col } from 'react-bootstrap';
import hotel from './hotel.png';
import card1 from './hold.jpg';
import card2 from './couple.jpg';

export const LandingPageComponent = props => {
  const { history, intl, location, scrollingDisabled } = props;

  // Schema for search engines (helps them to understand what this page is about)
  // http://schema.org
  // We are using JSON-LD format
  const siteTitle = config.siteTitle;
  const schemaTitle = intl.formatMessage({ id: 'LandingPage.schemaTitle' }, { siteTitle });
  const schemaDescription = intl.formatMessage({ id: 'LandingPage.schemaDescription' });
  const schemaImage = `${config.canonicalRootURL}${facebookImage}`;

  return (
    <Page
      className={css.root}
      scrollingDisabled={scrollingDisabled}
      contentType="website"
      description={schemaDescription}
      title={schemaTitle}
      facebookImages={[{ url: facebookImage, width: 1200, height: 630 }]}
      twitterImages={[
        { url: `${config.canonicalRootURL}${twitterImage}`, width: 600, height: 314 },
      ]}
      schema={{
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        description: schemaDescription,
        name: schemaTitle,
        image: [schemaImage],
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>
        <LayoutWrapperMain>
          <div className={css.heroContainer}>
            <SectionHero className={css.hero} history={history} location={location}/>
            </div>
          <ul className={css.sections}>
          <li className={css.section}>

        <div class="container">
           <div class="row my-5">
             <h1>Featured Wedding Venues</h1>
             <h3 className={css.subtitle}>Browse the featured venues recently booked</h3>
              <div class="col-lg-3 col-md-6 col-12">
                <Card className={css.cardEffect}>
                 <Card.Img variant="top" src={card1} />
                  <Card.Body>
                    <Card.Title>53 by the sea</Card.Title>
                      <Card.Text>1280 Ala Moana Blvd, Honolulu</Card.Text>
                  </Card.Body>
                </Card>
             </div>
          <div class="col-lg-3 col-md-6 col-12">
             <Card className={css.cardEffect}>
                 <Card.Img variant="top" src={card2} />
                  <Card.Body>
                    <Card.Title>Magnolia Hawaii</Card.Title>
                      <Card.Text>1280 Ala Moana Blvd, Honolulu</Card.Text>
                  </Card.Body>
                </Card>
         </div>
         <div class="col-lg-3 col-md-6 col-12">
            <Card className={css.cardEffect}>
                 <Card.Img variant="top" src={card1}/>
                  <Card.Body>
                    <Card.Title>Chapel</Card.Title>
                      <Card.Text>1280 Ala Moana Blvd, Honolulu</Card.Text>
                  </Card.Body>
                </Card>
             </div>
          <div class="col-lg-3 col-md-6 col-12">
             <Card  className={css.cardEffect}>
                 <Card.Img variant="top" src={card2}/>
                  <Card.Body>
                    <Card.Title>Chapel</Card.Title>
                      <Card.Text>1280 Ala Moana Blvd, Honolulu</Card.Text>
                  </Card.Body>
                </Card>
           </div>  
           </div>
        </div>          
      </li>

 <SimpleSlider/>


     <li className={css.section}>
        <div className={css.sectionContentFirstChild}>    
         <Row>
           <Col xs={12} md={6} >
           <img src={require("./chapel.png").default} className={css.imageWrapper}/>
           <p className={css.title}>Chapel</p>
           <p className={css.subtitle}>Enjoy our beautiful venues</p>
             </Col>
           <Col xs={12} md={6} >
           <img src={require("./oceanfront.png").default} className={css.imageWrapper}/>
           <p className={css.title}>Ocean Front</p>
           <p className={css.subtitle}>Enjoy our beautiful venues</p>
           </Col>
         </Row>
         <Row >
         <Col xs={12} md={6} >
           <img src={hotel} className={css.imageWrapper}/>
           <p className={css.title}>Hotel</p>
           <p className={css.subtitle}>Enjoy our beautiful venues</p>
          </Col>
           <Col xs={12} md={6}>
           <img src={require("./outdoor.png").default} className={css.imageWrapper}/>
           <p className={css.title}>Outdoor</p>
           <p className={css.subtitle}>Enjoy our beautiful venues</p>
           </Col>
           </Row>
           <Row>
           <Col xs={12} md={6} >
           <img src={require("./chapel.png").default} className={css.imageWrapper}/>
           <p className={css.title}>Chapel</p>
           <p className={css.subtitle}>Enjoy our beautiful venues</p>
             </Col>
           <Col xs={12} md={6} >
           <img src={require("./oceanfront.png").default} className={css.imageWrapper}/>
           <p className={css.title}>Ocean Front</p>
           <p className={css.subtitle}>Enjoy our beautiful venues</p>
           </Col>
         </Row>
        </div>
      </li>
      

      <li className={css.section}>
        <div className={css.sectionContent}>
          <SectionLocations />
        </div>
      </li>
      <li className={css.section}>
        <div className={css.sectionContent}>
          <SectionHowItWorks />
        </div>
      </li>
    </ul>
        </LayoutWrapperMain>
        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </Page>
  );

//컴포넌트 만듬
function SimpleSlider(){
    return(
      <h1>TEST Sliders</h1>
    )
  }

};


const { bool, object } = PropTypes;

LandingPageComponent.propTypes = {
  scrollingDisabled: bool.isRequired,

  // from withRouter
  history: object.isRequired,
  location: object.isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  return {
    scrollingDisabled: isScrollingDisabled(state),
  };
};

// Note: it is important that the withRouter HOC is **outside** the
// connect HOC, otherwise React Router won't rerender any Route
// components since connect implements a shouldComponentUpdate
// lifecycle hook.
//
// See: https://github.com/ReactTraining/react-router/issues/4671
const LandingPage = compose(
  withRouter,
  connect(mapStateToProps),
  injectIntl
)(LandingPageComponent);


export default LandingPage;




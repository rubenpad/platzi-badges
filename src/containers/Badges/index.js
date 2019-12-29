import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container } from './styles';
import PageLoading from '../../components/PageLoading';
import BadgesList from '../../components/BadgesList';
import PageError from '../../components/PageError';
import { getBadges } from '../../redux/actions';

const Badges = (props) => {
  const {
    badgesReducer: { loading, error },
    getBadges,
  } = props;

  useEffect(() => {
    getBadges();
  }, [getBadges]);

  if (error) return <PageError error={error} />;

  if (loading) return <PageLoading />;

  return (
    <Container>
      <BadgesList />
    </Container>
  );
};

Badges.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.string,
  getBadges: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    badgesReducer: state.badgesReducer,
  };
};

export default connect(mapStateToProps, { getBadges })(Badges);

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'material-ui/Tabs';
import StrokeIcon from '../components/icons/StrokeIcon';
import FigureIcon from '../components/icons/FigureIcon';
import { isVisibleStroke, isVisibleFigure } from '../actions/index';

const style = {
  borderTopLeftRadius: '3px',
  borderTopRightRadius: '3px',
  height: '4.5rem',
};
const tabsToggle = ({ VisibleStroke, VisibleFigure }) => (
  <Tabs className="tabs" tabItemContainerStyle={style}>
    <Tab
      icon={<StrokeIcon />}
      label="Linear ARC"
      onActive={VisibleStroke}
    />
    <Tab
      icon={<FigureIcon />}
      label="Figural ARC"
      onActive={VisibleFigure}
    />
  </Tabs>
);

const mapDispatchToProps = dispatch => ({
  VisibleStroke: () => {
    dispatch(isVisibleStroke());
  },
  VisibleFigure: () => {
    dispatch(isVisibleFigure());
  },
});

const TabsToggle = connect(
  null,
  mapDispatchToProps,
)(tabsToggle);

tabsToggle.propTypes = {
  VisibleStroke: PropTypes.func.isRequired,
  VisibleFigure: PropTypes.func.isRequired,
};

export default TabsToggle;

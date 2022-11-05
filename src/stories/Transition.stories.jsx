import React from 'react';
import './style.css';

import  Transition  from '../components/Transition/Transition';

export default {
    title: 'Components-TP1/Transition',
    component: Transition
};


// Trois scénarios possibles pour le compte à rebours
const Template = (args) => <Transition {...args} />;
export const fastTransition = Template.bind({});
fastTransition.args = {
  speed: 500,
  label: 'Show'  
};

export const normalTransition = Template.bind({});
normalTransition.args = {
  speed: 1500,
  label: 'Show'
};

export const slowTransition = Template.bind({});
slowTransition.args = {
  speed: 3000,
  label: 'Show'
};


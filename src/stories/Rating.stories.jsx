import React from 'react';
import './style.css';

import  Rating  from '../components/Rating/Rating';

export default {
    title: 'Components-TP1/Rating',
    component: Rating
};

// Trois scénarios possibles pour les types de rating
const Template = (args) => <Rating {...args} />;
export const firstRating = Template.bind({});
firstRating.args = {
    precision: 0.5
};

export const secondRating = Template.bind({});
secondRating.args = {
    precision: 1
};

export const thirdRating = Template.bind({});
thirdRating.args = {
    precision: 2
};


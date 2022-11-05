import React from 'react';
import './style.css';

import  Progress  from '../components/Progress/Progress';

export default {
    title: 'Components-TP1/Progress',
    component: Progress
};


// Trois scénarios possibles pour la durée du compte à rebours
const Template = (args) => <Progress {...args} />;
export const tenSeconds = Template.bind({});
tenSeconds.args = {
    sec : 10
};

export const fiveSeconds = Template.bind({});
fiveSeconds.args = {
    sec : 5
};

export const oneSecond = Template.bind({});
oneSecond.args = {
    sec : 1
};
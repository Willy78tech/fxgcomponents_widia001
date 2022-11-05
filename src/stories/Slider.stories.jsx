import React from 'react';
import './style.css';

import  Slider  from '../components/Slider/Slider';

export default {
    title: 'Components-TP1/Slider',
    component: Slider
};

// Trois scénarios possibles pour les types de slider
const Template = (args) => <Slider {...args} />;
export const TenStep = Template.bind({});
TenStep.args = {
    step: 10,
    defaultValue: 30
};

export const FifteenStep = Template.bind({});
FifteenStep.args = {
    step: 15,
    defaultValue: 30
};

export const TwentyStep = Template.bind({});
TwentyStep.args = {
    step: 20,
    defaultValue: 30
};

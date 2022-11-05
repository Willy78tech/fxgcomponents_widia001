import React from 'react';
import './style.css';

import  Checkbox  from '../components/Checkbox/Checkbox';

export default {
    title: 'Components-TP1/Checkbox',
    component: Checkbox
};

// Trois scénarios possibles pour le composant Checkbox
const Template = (args) => <Checkbox {...args} />;
export const Checked = Template.bind({});
Checked.args = {
    checked: true,
    color: 'primary',
    size: 'small'
};

export const Unchecked = Template.bind({});
Unchecked.args = {
    checked: false,
    color: 'secondary',
    size: 'medium'
};

export const Disabled = Template.bind({});
Disabled.args = {
    checked: true,
    color: 'success',
    size: 'large',
    disabled: true
};



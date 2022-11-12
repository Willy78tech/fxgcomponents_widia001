import React from 'react';
import './style.css';

import  Button  from '../components/Button/Button';

export default {
    title: 'Components-TP1/Button',
    component: Button
};

// Trois scénarios possibles pour les types de bouton
const Template = (args) => <Button {...args} />;
export const Small = Template.bind({});
Small.args = {
    text: 'Plutot Réact ou Vue ?',
    color: 'secondary',
    variant: 'contained',
    width: '200px',
    height: '5px'
    
};

export const Medium = Template.bind({});
Medium.args = {
    text: 'Here we go',
    color: 'success',
    variant: 'outlined',
    width: '400px',
    height: '10px'
    
};

export const Large = Template.bind({});
Large.args = {
    text: 'Frontend ou backend ?',
    color: 'error',
    variant: 'contained',
    width: '600px',
    height: '15px'
};

export const Patate = Template.bind({});
Patate.args = {
    text: 'Patate',
    color: 'error',
    variant: 'contained',
    width: '600px',
    height: '15px'
};

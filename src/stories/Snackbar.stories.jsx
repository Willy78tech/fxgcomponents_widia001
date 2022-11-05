import React from 'react';
import './style.css';

import  Snackbar  from '../components/Snackbar/Snackbar';

export default {
    title: 'Components-TP1/Snackbar',
    component: Snackbar
};


// Trois scénarios possibles pour les types de snackbar
const Template = (args) => <Snackbar {...args} />;
export const errorMsg = Template.bind({});
errorMsg.args = {
    severity : 'error',
    text : 'Open error message',
    message : 'This is an error message',
    color : 'error',
};

export const infoMsg = Template.bind({});
infoMsg.args = {
    severity : 'info',
    text : 'Open info message',
    message : 'This is an info message',
    color : 'info',
};

export const successMsg = Template.bind({});
successMsg.args = {
    severity: "success",
    text : 'Open success message',
    message : 'This is a success message',
    color : 'success',
};

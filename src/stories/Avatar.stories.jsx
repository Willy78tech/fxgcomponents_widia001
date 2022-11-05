import React from 'react';
import './style.css';

import  Avatar  from '../components/Avatar/Avatar';

export default {
    title: 'Components-TP1/Avatar',
    component: Avatar
};


// Trois scénarios possibles pour les types d'affichage d'avatars'
const Template = (args) => <Avatar {...args} />;
export const sSize = Template.bind({});
sSize.args = {
    spacing : 10,
    width : 50,
    height: 50
};

export const mSize = Template.bind({});
mSize.args = {
    spacing : 20,
    width : 100,
    height: 100
};

export const lSize = Template.bind({});
lSize.args = {
    spacing : 30,
    width : 150,
    height : 150
};


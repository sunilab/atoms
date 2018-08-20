import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Textbox, Button, Label } from '../../src';

storiesOf('Textbox', module)
    .add('with Text', () => (
        <Textbox password={true} />
    ));

storiesOf('Button', module)
    .add('with Text', () => (
        <Button text='Nice Button' clickHandler={action('Nice button clicked')} />
    ));

storiesOf('Label', module)
    .add('with Text', () => (
        <Label text='New Label' />
    ));
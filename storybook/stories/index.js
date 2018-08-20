import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Textbox } from '../../src';

storiesOf('Textbox', module)
    .add('with Text', () => (
        <Textbox password={true} />
    ));
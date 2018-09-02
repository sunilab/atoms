import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { Textbox, Button, Label, Grid, GridRow, GridColumn } from '../../src';

storiesOf('Textbox', module)
    .add('with Text', () => (
        <Textbox password={true} changeHandler={action('Textbox change')} />
    ));

storiesOf('Button', module)
    .add('with Text', () => (
        <Button text='Nice Button' clickHandler={action('Nice button clicked')} />
    ));

storiesOf('Label', module)
    .add('with Text', () => (
        <Label text='New Label' />
    ));

storiesOf('Layout', module)
    .add('Grid', 
        withInfo(`Native CSS Grid Layout component.`)(() => (
        <Grid>
            <GridRow>
                <GridColumn size={3}>Col 1</GridColumn>
                <GridColumn size={6}>Col 2</GridColumn>
                <GridColumn size={1}>Col 3</GridColumn>
            </GridRow>
        </Grid>
    )));
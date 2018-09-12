import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { Textbox, Button, Label, Grid, GridRow, GridColumn } from '../../src';
import {ThemesProvider} from 'storybook-addon-styled-component-theme';

const colors = {
    dark: {
        baseLow: 'rgba(255, 255, 255, 0.2)',
        baseMediumLow: 'rgba(255, 255, 255, 0.4)', // disabled UI but also borders
        baseMedium: 'rgba(255, 255, 255, 0.6)', // secondary text
        baseMediumHigh: 'rgba(255, 255, 255, 0.8)',
        baseHigh: 'rgba(255, 255, 255, 1)', // primary text
        altHigh: 'rgba(0, 0, 0, 1)', // white 100%
        listLow: 'rgba(255, 255, 255, 0.1)',
        listMedium: 'rgba(255, 255, 255, 0.2)',
        listAccentLow: 'rgba(0, 120, 215, 0.6)', // list selected BG
        listAccentMedium: 'rgba(0, 120, 215, 0.8)',
        listAccentHigh: 'rgba(0, 120, 215, 0.9)', // input box selected border, checkbox, radio button, toggle BG
        chromeLow: 'rgba(23, 23, 23, 1)',
        chromeMediumLow: 'rgba(43, 43, 43, 1)', // pane backgrounds
        chromeMedium: 'rgba(31, 31, 31, 1)',
        chromeHigh: 'rgba(118, 118, 118, 1)',
        chromeBlackLow: 'rgba(0, 0, 0, 0.2)',
        chromeBlackMediumLow: 'rgba(0, 0, 0, 0.4)',
        chromeBlackMedium: 'rgba(0, 0, 0, 0.8)',
        chromeBlackHigh: 'rgba(0, 0, 0, 1)',
        chromeWhite: 'rgba(255, 255, 255, 1)'
    },
    light: {
        baseLow: 'rgba(0, 0, 0, 0.2)',
        baseMediumLow: 'rgba(0, 0, 0, 0.4)', // disabled UI but also borders
        baseMedium: 'rgba(0, 0, 0, 0.6)', // secondary text
        baseMediumHigh: 'rgba(0, 0, 0, 0.8)',
        baseHigh: 'rgba(0, 0, 0, 1)', // primary text
        altHigh: 'rgba(255, 255, 255, 1)', // black 100%
        listLow: 'rgba(0, 0, 0, 0.1)',
        listMedium: 'rgba(0, 0, 0, 0.2)',
        listAccentLow: 'rgba(0, 120, 215, 0.6)', // list selected BG
        listAccentMedium: 'rgba(0, 120, 215, 0.8)',
        listAccentHigh: 'rgba(0, 120, 215, 0.9)', // input box selected border, checkbox, radio button, toggle BG
        chromeLow: 'rgba(242, 242, 242, 1)',
        chromeMediumLow: 'rgba(242, 242, 242, 1)', // pane backgrounds
        chromeMedium: 'rgba(230, 230, 230, 1)',
        chromeHigh: 'rgba(204, 204, 204, 1)',
        chromeBlackLow: 'rgba(0, 0, 0, 0.2)',
        chromeBlackMediumLow: 'rgba(0, 0, 0, 0.4)',
        chromeBlackMedium: 'rgba(0, 0, 0, 0.8)',
        chromeBlackHigh: 'rgba(0, 0, 0, 1)',
        chromeWhite:  'rgba(255, 255, 255, 1)'
    }
};

const defaultTheme = {
    name: "FLUENT-LIGHT",
    colors: colors.light,
    fonts: {
		caption: {
			family: 'poppins',
			size: '0.8rem',
			weight: 400,
			lineHeight: '0.93rem'
		},
		body: {
			family: 'poppins',
			size: '1rem',
			weight: 400,
			lineHeight: '1.33rem'
		},
		base: {
			family: 'poppins',
			size: '1rem',
			weight: 600,
			lineHeight: '1.33rem'
		},
		subtitle: {
			family: 'poppins',
			size: '1.33rem',
			weight: 400,
			lineHeight: '1.6rem'
		},
		title: {
			family: 'poppins',
			size: '1.6rem',
			weight: 300,
			lineHeight: '1.87rem'
		},
		subHeader: {
			family: 'poppins',
			size: '2.27rem',
			weight: 200,
			lineHeight: '2.67rem'
		},
		header: {
			family: 'poppins',
			size: '3.07rem',
			weight: 200,
			lineHeight: '3.73rem'
		}
	}
};

const darkTheme = {
    name: "FLUENT-DARK",
    colors: colors.dark,
    fonts: {
		caption: {
			family: 'poppins',
			size: '0.8rem',
			weight: 400,
			lineHeight: '0.93rem'
		},
		body: {
			family: 'poppins',
			size: '1rem',
			weight: 400,
			lineHeight: '1.33rem'
		},
		base: {
			family: 'poppins',
			size: '1rem',
			weight: 600,
			lineHeight: '1.33rem'
		},
		subtitle: {
			family: 'poppins',
			size: '1.33rem',
			weight: 400,
			lineHeight: '1.6rem'
		},
		title: {
			family: 'poppins',
			size: '1.6rem',
			weight: 300,
			lineHeight: '1.87rem'
		},
		subHeader: {
			family: 'poppins',
			size: '2.27rem',
			weight: 200,
			lineHeight: '2.67rem'
		},
		header: {
			family: 'poppins',
			size: '3.07rem',
			weight: 200,
			lineHeight: '3.73rem'
		}
	}
};

function getAllThemes () {
    return [defaultTheme, darkTheme];
};

storiesOf('Input', module)
    .add('Textbox',
        withInfo(`Textbox or Password component`)(() => (
        <ThemesProvider themes={getAllThemes()}>
            <Textbox password={false} changeHandler={action('Textbox change')} />
        </ThemesProvider>
    )));

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
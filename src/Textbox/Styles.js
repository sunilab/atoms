import { FluentTheme, MaterialTheme } from '../Themes';

export default {
    ios: `
        background-color: rgba(255, 0, 0, 0.5);
    `,
    fluent: `
        background-color: ${FluentTheme.light.colors.altHigh};
        border: solid 2px ${FluentTheme.light.colors.baseMediumLow};
        box-sizing: border-box;
        color: ${FluentTheme.light.colors.baseMedium};
        font-family: ${FluentTheme.light.fonts.body.family};
        font-size: ${FluentTheme.light.fonts.body.size};
        font-weight: ${FluentTheme.light.fonts.body.weight};
        line-height: ${FluentTheme.light.fonts.body.lineHeight};
        outline: none;
        padding: 0px 12px 0px 12px;
        // Extend the textbox as much as it can, users can enclose it in a parent to restrict the width
        width: 100%;
        &:focus {
            background-color: ${FluentTheme.light.colors.chromeWhite};
            border: solid 2px ${FluentTheme.light.colors.listAccentHigh};
            color: ${FluentTheme.light.colors.chromeBlackHigh};
        }
    `,
    material: `
        background-color: rgba(255, 255, 255, 1);
        border: none;
        border-bottom: solid 1px rgba(0, 0, 0, 0.12);
        color: rgba(0, 0, 0, 0.87);
        font-family: ${MaterialTheme.light.fonts.body.family};
        font-size: ${MaterialTheme.light.fonts.body.size};
        font-weight: ${MaterialTheme.light.fonts.body.weight};
        line-height: ${MaterialTheme.light.fonts.body.lineHeight};
        outline: none;
        padding: 0px 12px 0px 12px;
        outline: none;
        // Extend the textbox as much as it can, users can enclose it in a parent to restrict the width
        width: 100%;
        &:focus {
            border-bottom: solid 2px #009688;
        }
        &:disabled {
            border-bottom: dotted 1px #9598FA;
            color: rgba(0, 0, 0, 0.38);
        }
    `,
    safari: `
        background-color: rgba(255, 128, 0, 0.5);
    `
};
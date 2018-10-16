### Textbox
A Textbox is used for entering information. Typically used in forms.

```js
var AutoTextbox = require('./index').default;
var BaseTextbox = require('./index').Base;
var FluentTextbox = require('./index').Fluent;
var MaterialTextbox = require('./index').Material;
var AppleTextbox = require('./index').Apple;
var styled = require('styled-components').default;
var ThemeProvider = require('styled-components').ThemeProvider;
var Label = require('../Label/index').default;

initialState = { inputText: 'Default Text' };

function handleTextboxChange (value) {
    setState({
        inputText: value
    });
}

var CustomTextbox = styled(BaseTextbox)`
    background-color: ${props => props.theme.yellow};
`;
var theme = {
    yellow: 'rgba(255, 255, 0, 0.5)'
};

<div name='exampleContainer'>
    <div>
        <span>Auto themed Textbox</span>
        <AutoTextbox/>
    </div>
    <div>
        <span>Base Textbox (no theme)</span>
        <BaseTextbox/>
    </div>
    <div>
        <span>Fluent themed Textbox</span>
        <FluentTextbox/>
    </div>
    <div>
        <span>Material themed Textbox</span>
        <MaterialTextbox/>
    </div>
    <div>
        <span>iOS themed Textbox</span>
        <AppleTextbox/>
    </div>
    <div>
        <span>Custom themed Textbox</span>
        <ThemeProvider theme={theme}>
            <CustomTextbox/>
        </ThemeProvider>
    </div>
    <div>
        <span>Auto themed Textbox with change handler</span>
        <AutoTextbox changeHandler={handleTextboxChange}/>
        <Label text={state.inputText}/>
    </div>
    <div>
        <span>Disabled Textbox</span>
        <AutoTextbox disabled={true}/>
    </div>
</div>
```
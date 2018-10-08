### Auto themed Textbox example

```js
var Textbox = require('./index').default;
var Label = require('../Label/index').default;

initialState = { inputText: null };

function handleTextboxChange (value) {
    setState({
        inputText: value
    });
}
<div>
    <Textbox changeHandler={handleTextboxChange}/>
    <br/>
    <Label text={state.inputText}/>
</div>
```

### Base Textbox example

```js
var Textbox = require('./index').Base;
<Textbox/>
```

### Fluent Textbox example

```js
var Textbox = require('./index').Fluent;
<Textbox/>
```

### Material Textbox example

```js
var Textbox = require('./index').Material;
<Textbox/>
```

#### Disabled
```js
var Textbox = require('./index').Material;
<Textbox disabled={true}/>
```


### iOS Textbox example

```js
var Textbox = require('./index').Apple;
<Textbox/>
```

### Custom Textbox example

```js
var styled = require('styled-components').default;
var ThemeProvider = require('styled-components').ThemeProvider;
var Textbox = require('./index').Base;
var CustomTextbox = styled(Textbox)`
    background-color: ${props => props.theme.yellow};
`;
var theme = {
    yellow: 'rgba(255, 255, 0, 0.5)'
};
<ThemeProvider theme={theme}>
    <CustomTextbox/>
</ThemeProvider>
```
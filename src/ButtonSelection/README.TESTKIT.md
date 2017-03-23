# ButtonSelection Testkits

> Controlled ButtonSelection

## ButtonSelection TestKit API

| method | arguments | returned value | description |
|--------|-----------|----------------|-------------|
| getButtonTextContent | - | string | returns the button text |
| isButtonDisabled | - | bool | fulfilled if button disabled |
| isPrefixIconExists | - | bool | fulfilled if button prefix icon appeared |
| isSuffixIconExists | - | bool | fulfilled if button suffix icon appeared |
| exists | - | bool | fulfilled if element in the DOM |
| click | - | - | clicks on the button |
| element (Only in E2E testkit) | - | element | returns the driver element |



exists: () => !!element,
    getButtonsNames,
    getButtonsClasses,
    getSelectedButton: () => getButtonsNames()[getButtonsClasses().indexOf('selected')],
    selectByValue:
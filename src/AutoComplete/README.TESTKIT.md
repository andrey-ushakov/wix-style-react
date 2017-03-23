# AutoComplete Testkits

> Autocomplete

## AutoComplete TestKit API

| method | arguments | returned value | description |
|--------|-----------|----------------|-------------|
| getInput | - | element | returns autocomplete input element |
| getDropdown | - | element | returns autocomplete dropdown element |
| getDropdownItem | index | element | returns autocomplete specific item in dropdown |
| getDropdownItemsCount | - | number | returns the number of suggested items in autocomplete |
| click | - | - | clicks on the button |
| exists (Only in Unit Test) | - | bool | fulfilled if element in the DOM |
| element (Only in E2E) | - | element | returns the driver element |

## Usage Example

> Unit testing example

```javascript
  import React from 'react';
  import {autoCompleteTestkitFactory} from 'wix-style-react/dist/testkit/protractor';
  import {autoCompleteTestkitFactory as enzymeAutoCompleteTestkitFactory} from 'wix-style-react/dist/testkit/protractor';

  /***************
   enzyme example
  ***************/

  const dataHook = 'myDataHook';
  const wrapper = mount(<div/><AutoComplete dataHook={dataHook}/></div>);
  const testkit = enzymeAutoCompleteTestkitFactory({wrapper, dataHook});

  //Do tests
  expect(testkit.driver.exists()).toBeTruthy();

  /**********************
   ReactTestUtils example
  **********************/

  const div = document.createElement('div');
  const dataHook = 'myDataHook';
  const wrapper = div.appendChild(
    ReactTestUtils.renderIntoDocument(<div/><AutoComplete dataHook={dataHook}/></div>, {dataHook})
  );
  const testkit = autoCompleteTestkitFactory({wrapper, dataHook});

  //Do tests
  expect(testkit.driver.exists()).toBeTruthy();
```
> E2E example

```javascript
  //Element should be rendered with a data-hook into the DOM
  <AutoComplete dataHook='myDataHook'/>

  /*******************
   protractor example
  *******************/

  import {autoCompleteTestkitFactory, waitForVisibilityOf} from 'wix-style-react/dist/testkit/protractor';

  //Create an element testkit via the data-hook attribute
  const testkit = autoCompleteTestkitFactory({dataHook: 'myDataHook'});

  browser.get(appUrl); //Your application url

  waitForVisibilityOf(testkit.element(), 'Cannot find AutoComplete')
     .then(() => {
        //Do tests
        testkit.click();
        testkit.getDropdownItem(0).click();

        expect(testkit.getInput().getAttribute('value')).toBe('First option');
     });

```

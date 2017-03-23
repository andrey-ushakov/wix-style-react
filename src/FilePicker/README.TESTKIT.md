# FilePicker Testkits

> FilePicker

## FilePicker TestKit API

| method | arguments | returned value | description |
|--------|-----------|----------------|-------------|
| getInput | - | element | returns FilePicker input element |
| getSubLabel | - | string | returns FilePicker subLabel text |
| getMainLabel | - | string | returns FilePicker mainLabel text |
| click | - | - | clicks on the button |
| exists (Only in Unit Test) | - | bool | fulfilled if element in the DOM |
| element (Only in E2E) | - | element | returns the driver element |

## Usage Example

> Unit testing example

```javascript
  import React from 'react';
  import {filePickerTestkitFactory} from 'wix-style-react/dist/testkit/protractor';
  import {filePickerTestkitFactory as enzymeFilePickerTestkitFactory} from 'wix-style-react/dist/testkit/protractor';

  /***************
   enzyme example
  ***************/

  const dataHook = 'myDataHook';
  const wrapper = mount(<div/><FilePicker dataHook={dataHook}/></div>);
  const testkit = enzymeFilePickerTestkitFactory({wrapper, dataHook});

  //Do tests
  expect(testkit.driver.exists()).toBeTruthy();

  /**********************
   ReactTestUtils example
  **********************/

  const div = document.createElement('div');
  const dataHook = 'myDataHook';
  const wrapper = div.appendChild(
    ReactTestUtils.renderIntoDocument(<div/><FilePicker dataHook={dataHook}/></div>, {dataHook})
  );
  const testkit = filePickerTestkitFactory({wrapper, dataHook});

  //Do tests
  expect(testkit.driver.exists()).toBeTruthy();
```
> E2E example

```javascript
  //Element should be rendered with a data-hook into the DOM
  <FilePicker dataHook='myDataHook'/>

  /*******************
   protractor example
  *******************/

  import {filePickerTestkitFactory, waitForVisibilityOf} from 'wix-style-react/dist/testkit/protractor';

  //Create an element testkit via the data-hook attribute
  const testkit = filePickerTestkitFactory({dataHook: 'myDataHook'});

  browser.get(appUrl); //Your application url

  waitForVisibilityOf(testkit.element(), 'Cannot find FilePicker')
     .then(() => {
        //Do tests
        const imagePath = 'wix-style-react/test/assets/surf-musa.png';
        const absolutePath = path.resolve(__dirname, imagePath);

        expect(testkit.getSubLabel()).toBe('No file chosen (Max size 5 MB)');

        driver.getInput().sendKeys(absolutePath);
        expect(testkit.getSubLabel()).toBe('surf-musa.png');
     });

```

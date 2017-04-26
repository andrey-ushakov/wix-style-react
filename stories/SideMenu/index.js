import React from 'react';
import {storiesOf} from '@kadira/storybook';
import Markdown from '../utils/Components/Markdown';
import CodeExample from '../utils/Components/CodeExample';
import Readme from '../../src/SideMenu/README.md';

import ExampleStandard from './ExampleStandard';
import ExampleStandardRaw from '!raw!./ExampleStandard';

import ExampleSubMenu from './ExampleSubMenu';
import ExampleSubMenuRaw from '!raw!./ExampleSubMenu';

import ExampleSideMenuDrill from './ExampleSideMenuDrill';
import ExampleSideMenuDrillRaw from '!raw!./ExampleSideMenuDrill';

storiesOf('Core', module)
  .add('SideMenu', () => (
    <div>
      <Markdown source={Readme}/>

      <h1>Usage examples</h1>

      <CodeExample title="Standard" code={ExampleStandardRaw}>
        <ExampleStandard/>
      </CodeExample>

      <CodeExample title="Sub Menu" code={ExampleSubMenuRaw}>
        <ExampleSubMenu/>
      </CodeExample>
    </div>
  ));


storiesOf('6. Navigation', module)
  .add('6.4 SideMenu Drill', () => (
    <div>
      <h1>Usage examples</h1>

      <CodeExample title="SideMenu Example" code={ExampleSideMenuDrillRaw}>
        <ExampleSideMenuDrill/>
      </CodeExample>
    </div>
  ));

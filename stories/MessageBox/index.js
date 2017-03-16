import React from 'react';
import {storiesOf} from '@kadira/storybook';
import ExampleTabbedView from './TabbedView';
import Markdown from '../utils/Components/Markdown';
import CodeExample from '../utils/Components/CodeExample';
import Readme from '../../src/MessageBox/README.md';
import ReadmeTestKit from '../../src/MessageBox/README.TESTKIT.md';

import ExampleStandard from './ExampleStandard';
import ExampleStandardRaw from '!raw!./ExampleStandard';

storiesOf('Core', module)
  .add('MessageBox', () => (
    <ExampleTabbedView tabs={['API Documantation', 'TestKits Documentation']}>
      <div>
        <Markdown source={Readme}/>
        <h1>Usage examples</h1>
        <CodeExample title="Standard" code={ExampleStandardRaw}>
          <ExampleStandard/>
        </CodeExample>
      </div>
      <Markdown source={ReadmeTestKit}/>
    </ExampleTabbedView>
  ));

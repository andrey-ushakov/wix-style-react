import React from 'react';
import {storiesOf} from '@kadira/storybook';
import Markdown from '../utils/Components/Markdown';
import CodeExample from '../utils/Components/CodeExample';
import Readme from '../../src/Toast/README.md';

import ExampleTopbar from './ExampleTopbar';
import ExampleTopbarRaw from '!raw!./ExampleTopbar';

storiesOf('Core', module)
  .add('Toast', () => (
    <div>
      <Markdown source={Readme}/>

      <h1>Usage examples</h1>

      <CodeExample title="Topbar" code={ExampleTopbarRaw}>
        <ExampleTopbar/>
      </CodeExample>

    </div>
  ));

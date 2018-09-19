import React from 'react';

import CodeExample from 'wix-storybook-utils/CodeExample';
import Markdown from 'wix-storybook-utils/Markdown';

import Heading from 'wix-style-react/Heading';
import Badge from 'wix-style-react/Badge';

import SingleAreaListReadme from './SingleAreaListReadme.md';
import SingleAreaList from './SingleAreaList';
import SingleAreaListRaw from '!raw-loader!./SingleAreaList';
import SingleAreaListScssRaw from '!raw-loader!./SingleAreaList.scss';

const SingleAreaListRawCombined = `
${SingleAreaListRaw}

//IntroductionExample.scss
${SingleAreaListScssRaw}
`;

export default () => (
  <div>
    <Heading>
      SingleAreaList <Badge skin="danger">Under development</Badge>
    </Heading>
    <Markdown source={SingleAreaListReadme}/>
    <CodeExample title="SortableList" code={SingleAreaListRawCombined}>
      <SingleAreaList/>
    </CodeExample>
    <CodeExample title="SortableList with handle" code={SingleAreaListRawCombined}>
      <SingleAreaList withHandle/>
    </CodeExample>
  </div>
);

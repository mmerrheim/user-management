import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import IconButton from './IconButton';
import '../../App.scss';

storiesOf('IconButton', module)
   .add('+', () => <IconButton onClick={action('clicked')} icon="icon-cross"/>);
    

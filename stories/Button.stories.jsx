import React from 'react';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
};

const Template = () => <Button label="Testing" />;

export const Primary = Template.bind({});
Primary.parameters = {
  backgrounds: { default: 'facebook' }
};

import React from 'react'

export const Decorator = (Story, context) => {
  console.log(context.globals);
  return <Story />
}

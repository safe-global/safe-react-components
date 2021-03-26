import React from 'react';
import styled from 'styled-components';

import { Button } from './index';

export default {
  title: 'Inputs/Button',
  component: Button,
  parameters: {
    componentSubtitle: 'Button component with several variants',
  },
};

const Wrapper = styled.div`
  > * {
    margin-right: 5px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  button {
    margin: 10px;
  }
`;

export const SimpleButton = (): React.ReactElement => (
  <ButtonContainer>
    <Button size="md">Text</Button>
    <Button size="md" color="secondary">
      Text
    </Button>
    <Button size="md" color="error">
      Text
    </Button>
    <br />
    <Button size="md" variant="outlined">
      Text
    </Button>
    <Button size="md" color="secondary" variant="outlined">
      Text
    </Button>
    <Button size="md" color="error" variant="outlined">
      Text
    </Button>
    <br />
    <Button size="md" variant="bordered">
      Text
    </Button>
    <Button size="md" color="secondary" variant="bordered">
      Text
    </Button>
    <Button size="md" color="error" variant="bordered">
      Text
    </Button>
  </ButtonContainer>
);

export const DisabledButton = (): React.ReactElement => (
  <>
    <Button size="md" disabled className="ads">
      Text
    </Button>
    <Button size="md" color="secondary" disabled>
      Text
    </Button>
    <Button size="md" color="error" disabled>
      Text
    </Button>
    <br />
    <Button size="md" variant="outlined" disabled>
      Text
    </Button>
    <Button size="md" color="secondary" variant="outlined" disabled>
      Text
    </Button>
    <Button size="md" color="error" variant="outlined" disabled>
      Text
    </Button>
    <br />
    <Button size="md" variant="bordered" disabled>
      Text
    </Button>
    <Button size="md" color="secondary" variant="bordered" disabled>
      Text
    </Button>
    <Button size="md" color="error" variant="bordered" disabled>
      Text
    </Button>
  </>
);

export const Sizes = (): React.ReactElement => (
  <Wrapper>
    <Button size="md">Text</Button>
    <Button size="lg">Text</Button>
  </Wrapper>
);

export const withIcon = (): React.ReactElement => (
  <>
    <Button size="lg" iconType="addressBook">
      Text
    </Button>
    <Button size="lg" iconType="addressBook" color="secondary">
      Text
    </Button>
    <Button size="lg" iconType="addressBook" color="error">
      Text
    </Button>
    <br />
    <Button size="lg" iconType="addressBook" variant="outlined">
      Text
    </Button>
    <Button
      size="lg"
      iconType="addressBook"
      color="secondary"
      variant="outlined">
      Text
    </Button>
    <Button size="lg" iconType="addressBook" color="error" variant="outlined">
      Text
    </Button>
    <br />
    <Button size="lg" iconType="addressBook" variant="bordered">
      Text
    </Button>
    <Button
      size="lg"
      iconType="addressBook"
      color="secondary"
      variant="bordered">
      Text
    </Button>
    <Button size="lg" iconType="addressBook" color="error" variant="bordered">
      Text
    </Button>
  </>
);

export const withIconSize = (): React.ReactElement => (
  <>
    <Button
      variant="bordered"
      size="md"
      iconType="addressBook"
      color="secondary">
      Text
    </Button>
    <Button
      variant="bordered"
      iconType="addressBook"
      iconSize="sm"
      size="lg"
      color="secondary">
      Text
    </Button>
  </>
);

export const withCustomComponent = (): React.ReactElement => {
  /* eslint-disable react/display-name */
  const Link = React.forwardRef<
    HTMLAnchorElement,
    { children: React.ReactNode }
  >((props, ref) => {
    return (
      <a {...props} ref={ref}>
        {props.children}
      </a>
    );
  });

  return (
    <Button
      variant="bordered"
      iconType="addressBook"
      iconSize="sm"
      size="lg"
      color="secondary"
      component={Link}
      to="some_url">
      Button as Link
    </Button>
  );
};

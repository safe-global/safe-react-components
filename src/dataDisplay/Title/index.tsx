import React from 'react';
import styled from 'styled-components';

import { ThemeTitleSize } from '../../theme';

type Props = {
  children: string | React.ReactNode;
  size: ThemeTitleSize;
  withoutMargin?: boolean;
  strong?: boolean;
};

const StyledH1 = styled.h1<{ withoutMargin?: boolean; strong?: boolean }>`
  font-family: 'Averta';
  font-size: ${({ theme }) => theme.title.size.xl.fontSize};
  line-height: ${({ theme }) => theme.title.size.xl.lineHeight};
  font-weight: ${({ strong }) => (strong ? 'bold' : 'normal')};
  margin: ${({ withoutMargin }) => (withoutMargin ? 0 : '30px')} 0;
`;

const StyledH2 = styled.h2<{ withoutMargin?: boolean; strong?: boolean }>`
  font-family: 'Averta';
  font-size: ${({ theme }) => theme.title.size.lg.fontSize};
  line-height: ${({ theme }) => theme.title.size.lg.lineHeight};
  font-weight: ${({ strong }) => (strong ? 'bold' : 'normal')};
  margin: ${({ withoutMargin }) => (withoutMargin ? 0 : '28px')} 0;
`;

const StyledH3 = styled.h3<{ withoutMargin?: boolean; strong?: boolean }>`
  font-family: 'Averta';
  font-size: ${({ theme }) => theme.title.size.md.fontSize};
  line-height: ${({ theme }) => theme.title.size.md.lineHeight};
  font-weight: ${({ strong }) => (strong ? 'bold' : 'normal')};
  margin: ${({ withoutMargin }) => (withoutMargin ? 0 : '26px')} 0;
`;

const StyledH4 = styled.h4<{ withoutMargin?: boolean; strong?: boolean }>`
  font-family: 'Averta';
  font-size: ${({ theme }) => theme.title.size.sm.fontSize};
  line-height: ${({ theme }) => theme.title.size.sm.lineHeight};
  font-weight: ${({ strong }) => (strong ? 'bold' : 'normal')};
  margin: ${({ withoutMargin }) => (withoutMargin ? 0 : '22px')} 0;
`;

const StyledH5 = styled.h5<{ withoutMargin?: boolean; strong?: boolean }>`
  font-family: 'Averta';
  font-size: ${({ theme }) => theme.title.size.xs.fontSize};
  line-height: ${({ theme }) => theme.title.size.xs.lineHeight};
  font-weight: ${({ strong }) => (strong ? 'bold' : 'normal')};
  margin: ${({ withoutMargin }) => (withoutMargin ? 0 : '18px')} 0;
`;

const Title = ({
  children,
  size,
  withoutMargin,
  ...rest
}: Props): React.ReactElement => {
  switch (size) {
    case 'xl': {
      return (
        <StyledH1 withoutMargin={withoutMargin} {...rest}>
          {children}
        </StyledH1>
      );
    }
    case 'lg': {
      return (
        <StyledH2 withoutMargin={withoutMargin} {...rest}>
          {children}
        </StyledH2>
      );
    }
    case 'md': {
      return (
        <StyledH3 withoutMargin={withoutMargin} {...rest}>
          {children}
        </StyledH3>
      );
    }
    case 'sm': {
      return (
        <StyledH4 withoutMargin={withoutMargin} {...rest}>
          {children}
        </StyledH4>
      );
    }
    case 'xs': {
      return (
        <StyledH5 withoutMargin={withoutMargin} {...rest}>
          {children}
        </StyledH5>
      );
    }
  }
};

export default Title;

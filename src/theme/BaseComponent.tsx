import React from 'react';
import styled from 'styled-components';
import { StyleSheet } from '@src/theme/StyleSheet';
import { parseStyleSheet } from '@displaykit/responsive_styles';

interface StyleBaseComponent {
  styleSheet?: StyleSheet;
}

const StyledBaseComponent = styled.div<StyleBaseComponent>`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  flex-shrink: 0;
  ${({ styleSheet }) => parseStyleSheet(styleSheet)}
`;

export const BaseComponent = (props) => {
  return <StyledBaseComponent {...props} />;
};
BaseComponent.defaultProps = {
  styleSheet: {},
};

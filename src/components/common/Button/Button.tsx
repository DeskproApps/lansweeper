import { FC } from "react";
import styled from "styled-components";
import {
  Button as ButtonUI,
  AnchorButton as AnchorButtonUI,
} from "@deskpro/deskpro-ui";
import type {
  ThemeColors,
  ButtonProps,
  AnchorButtonProps,
} from "@deskpro/deskpro-ui";
import { DeskproAppTheme } from "@deskpro/app-sdk";

export const Button: FC<ButtonProps> = styled(ButtonUI)`
  min-width: 72px;
  justify-content: center;
`;

export const AnchorButton: FC<AnchorButtonProps> = styled(AnchorButtonUI)`
  min-width: 72px;
  justify-content: center;
`;

export const ButtonAsLink = styled.button<{ color?: keyof ThemeColors } & DeskproAppTheme>`
  display: inline;
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  color: ${({ theme, color = "cyan100" }) => theme.colors[color]};

  :hover,
  :hover :visited {
    color: ${(props) => props.theme.colors.cyan80};
    cursor: pointer;
  }

  :active,
  :active :visited {
    color: ${(props) => props.theme.colors.cyan80};
  }
`;

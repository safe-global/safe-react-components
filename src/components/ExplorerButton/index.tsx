import React, { ReactElement } from 'react';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';
import Tooltip from '@mui/material/Tooltip';

import LinkIcon from './LinkIcon';

export type ExplorerButtonProps = {
  title: string;
  href: string;
};

const ExplorerButton = ({
  title,
  href,
}: ExplorerButtonProps): ReactElement | null => {
  if (!href) return null;

  return (
    <Tooltip title={title} placement="top">
      <IconButton
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        size="small">
        <SvgIcon
          component={LinkIcon}
          inheritViewBox
          color="border"
          fontSize="small"
        />
      </IconButton>
    </Tooltip>
  );
};

export default ExplorerButton;

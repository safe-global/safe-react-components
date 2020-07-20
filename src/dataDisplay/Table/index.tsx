import React from 'react';
import TableMui from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
//import { borders } from '@material-ui/system';

import styled from 'styled-components';

import { FixedIcon } from '../..';

// const TextTHead = styled(Text)`
//   text-transform: uppercase;
// `;

 const StyledTableRow = styled(TableRow)`
/*  border-bottom: 2px solid ${({ theme }) =>
   theme.colors.separator} !important; 
  border-top: 2px solid ${({ theme }) => theme.colors.separator} !important; */
  && {
    border-top: 1px solid ${({ theme }) => theme.colors.separator};
    border-bottom: 1px solid ${({ theme }) => theme.colors.separator};
    &.Mui-selected { 
      background-color: red;
   /* border-top: 2px solid ${({ theme }) => theme.colors.separator};
    border-bottom: 2px solid ${({ theme }) => theme.colors.separator}; */
    & > .MuiCollapse-container.MuiCollapse-entered {
      margin: 0 -16px;
      border-top: 1px solid ${({ theme }) => theme.colors.separator};
      border-bottom: 1px solid ${({ theme }) => theme.colors.separator};
    }
  }
  }
`;

const StyledTableRowCollapsed = styled(TableRow)`
 /*&& {
  & .MuiTableCell-root.MuiTableCell-body {
    border-top: 2px solid ${({ theme }) => theme.colors.separator};
      border-bottom: 2px solid ${({ theme }) => theme.colors.separator};
  } 
 } */

`;

export enum TableAlignment {
  left = 'left',
  right = 'right',
  center = 'center'
}

export enum TableSortDirection {
  asc = 'asc',
  desc = 'desc'
}

export type TableHeader = {
  id: string;
  alignment?: TableAlignment;
  label: string;
};

type RowCells = {
  id?: string;
  alignment?: TableAlignment;
  content: React.ReactNode;
};

export type TableRow = {
  id: string;
  collapsibleContent?: React.ReactNode;
  cells: RowCells[];
};

type Props = {
  rows: TableRow[];
  headers?: TableHeader[];
  isCollapsible?: boolean;
  className?: string;
  selectedRowIds?: Set<string>;
  sortedByHeaderId?: string;
  sortDirection?: TableSortDirection;
  onHeaderClick?: (id: string) => void;
  onRowClick?: (id: string) => void;
};

const getHeaders = (
  headers: TableHeader[],
  isCollapsible: boolean
): TableHeader[] => {
  if (!isCollapsible) {
    return headers;
  }

  return [
    ...headers,
    {
      id: 'chevron',
      label: ''
    }
  ];
};

const getRowCells = (
  cells: RowCells[],
  isSelected: boolean,
  isCollapsible: boolean
) => {
  if (!isCollapsible) {
    return cells;
  }

  return [
    ...cells,
    {
      alignment: TableAlignment.center,
      content: isSelected ? (
        <FixedIcon type="chevronUp" />
      ) : (
        <FixedIcon type="chevronDown" />
      )
    }
  ];
};

export const Table = ({
  rows,
  headers,
  isCollapsible = false,
  className,
  selectedRowIds = new Set(),
  sortedByHeaderId,
  sortDirection,
  onRowClick = () => {},
  onHeaderClick = () => {}
}: Props) => (
  <TableContainer component={Paper} elevation={3}>
    <TableMui className={className}>
      {/* HEADER CELLS */}
      {headers && (
        <TableHead>
          <StyledTableRow>
            {getHeaders(headers || [], isCollapsible).map((header) => (
              <TableCell
                key={header.id}
                align={header.alignment || TableAlignment.left}>
                <TableSortLabel
                  active={sortedByHeaderId === header.id}
                  direction={sortDirection}
                  onClick={() => onHeaderClick(header.id)}>
                  {header.label}
                </TableSortLabel>
              </TableCell>
            ))}
          </StyledTableRow>
        </TableHead>
      )}

      {/* TABLE BODY */}
      <TableBody>
        {rows.map((row) => {
          const rowCells = getRowCells(
            row.cells,
            selectedRowIds.has(row.id),
            isCollapsible
          );
          
          return (
            <>
              <StyledTableRow
                hover
                key={row.id}
                selected={selectedRowIds.has(row.id)}
                onClick={() => onRowClick(row.id)}>
                {rowCells.map((c, index) => {
                  return (
                    <TableCell
                      key={c.id || index}
                      align={c.alignment || TableAlignment.left}>
                      {c.content}
                    </TableCell>
                  );
                })}
              </StyledTableRow>

              {/* Collapsible content */}
              {isCollapsible && (
                <StyledTableRowCollapsed>
                  <TableCell colSpan={rowCells.length} style={{ paddingBottom: 0, paddingTop: 0}}>
                    <Collapse 
                      in={selectedRowIds.has(row.id)}
                      timeout="auto"
                      unmountOnExit>
                      <Box margin={1}>{row.collapsibleContent}</Box>
                    </Collapse>
                  </TableCell>
                </StyledTableRowCollapsed>
              )}
            </>
          );
        })}
      </TableBody>
    </TableMui>
  </TableContainer>
);
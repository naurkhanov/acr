import React from 'react';
import styled from 'styled-components';

const SpanIconExport = styled.span`
  color: #5d54a4;
  font-size: 20px;
  text-align: center;
`;

function SpanExportIcon(props) {
  return (
    <SpanIconExport className="material-icons">chevron_right</SpanIconExport>
  );
}

export default SpanExportIcon;

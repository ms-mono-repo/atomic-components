import React from 'react';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap_white.css';

interface Props {
  title: React.ReactNode | string;
  overlay: React.ReactNode | string;
  isTooltipShow: boolean;
  placement?:
    | 'left'
    | 'right'
    | 'top'
    | 'bottom'
    | 'topLeft'
    | 'topRight'
    | 'bottomLeft'
    | 'bottomRight'
    | 'rightTop'
    | 'rightBottom'
    | 'leftTop'
    | 'leftBottom';
}

const ConsoleTooltip: React.FC<Props> = ({
  title,
  overlay,
  isTooltipShow,
  placement = 'bottom'
}: Props) => {
  return (
    <>
      <Tooltip
        overlayClassName={'ConsoleTooltipCustom'}
        placement={placement}
        overlay={overlay}
        transitionName={'rc-tooltip-zoom'}
      >
        <span className="console-tooltip">{title}</span>
      </Tooltip>
    </>
  );
};

export default ConsoleTooltip;

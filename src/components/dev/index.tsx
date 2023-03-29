import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import FeatherConst from '~components/atom/Feather/featherConst';

import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';

const Logo = dynamic(() => import('./Logo'), { ssr: false });
const FeatherIconDev = dynamic(() => import('./icons/FeatherIcon'), { ssr: false });
const SvgIcon = dynamic(() => import('./icons/SvgIcon'), { ssr: false });
const PngIcon = dynamic(() => import('./icons/PngIcon'), { ssr: false });
const Buttons = dynamic(() => import('./Buttons'), { ssr: false });
const Badges = dynamic(() => import('./Badges'), { ssr: false });
const Inputs = dynamic(() => import('./Inputs'), { ssr: false });
const Checkboxs = dynamic(() => import('./Checkboxs'), { ssr: false });
const Dropdowns = dynamic(() => import('./Dropdowns'), { ssr: false });
const Radios = dynamic(() => import('./Radios'), { ssr: false });
const Toggles = dynamic(() => import('./Toggles'), { ssr: false });
const Tables = dynamic(() => import('./Tables'), { ssr: false });
const Tabs = dynamic(() => import('./Tabs'), { ssr: false });
const Toast = dynamic(() => import('./Toast'), { ssr: false });
const Paginations = dynamic(() => import('./Paginations'), { ssr: false });
const DatePickers = dynamic(() => import('./DatePickers'), { ssr: false });
const Uploads = dynamic(() => import('./Uploads'), { ssr: false });
const Modal = dynamic(() => import('./Modal'), { ssr: false });
const Cookie = dynamic(() => import('./Cookie'), { ssr: false });
const ConsoleTooltip = dynamic(() => import('./ConsoleTooltip'), { ssr: false });
const Editor = dynamic(() => import('./Editor'), { ssr: false });
const LoadingContent = dynamic(() => import('./LoadingContent'), { ssr: false });

const PAGE_CONST = {
  FeatherIcon: 'Feather',
  SvgIcon: 'Svg',
  PngIcon: 'Png',
  Buttons: 'Buttons',
  Badges: 'Badges',
  Inputs: 'Inputs',
  Checkboxs: 'Checkboxs',
  Dropdowns: 'Dropdowns',
  Radios: 'Radios',
  Toggles: 'Toggles',
  Tables: 'Tables',
  Tabs: 'Tabs',
  Paginations: 'Paginations',
  DatePickers: 'DatePickers',
  Uploads: 'Uploads',
  Toast: 'Toast',
  Modal: 'Modal',
  Cookie: 'Cookie',
  ConsoleTooltip: 'ConsoleTooltip',
  Editor: 'Editor',
  LoadingContent: 'LoadingContent'
} as const;

type DevPageType = (typeof PAGE_CONST)[keyof typeof PAGE_CONST];

const menus = Object.values(PAGE_CONST);

const Dev: React.FC = () => {
  const [targetPage, setTargetPage] = useState<DevPageType>(PAGE_CONST.FeatherIcon);

  return (
    <div className="dev-layout">
      <aside className="dev-layout__sidebar">
        <ProSidebar>
          <Menu>
            {menus.map((menu, index) => (
              <MenuItem
                key={menu}
                className={targetPage === menu && 'active'}
                onClick={() => {
                  setTargetPage(menu);
                }}
              >
                {menu}
              </MenuItem>
            ))}
          </Menu>
        </ProSidebar>
      </aside>
      <div className="dev-layout__content">
        {targetPage === PAGE_CONST.FeatherIcon && <FeatherIconDev />}
        {targetPage === PAGE_CONST.PngIcon && <PngIcon />}
        {targetPage === PAGE_CONST.SvgIcon && <SvgIcon />}
        {targetPage === PAGE_CONST.Buttons && <Buttons />}
        {targetPage === PAGE_CONST.Badges && <Badges />}
        {targetPage === PAGE_CONST.Inputs && <Inputs />}
        {targetPage === PAGE_CONST.Checkboxs && <Checkboxs />}
        {targetPage === PAGE_CONST.Dropdowns && <Dropdowns />}
        {targetPage === PAGE_CONST.Radios && <Radios />}
        {targetPage === PAGE_CONST.Toggles && <Toggles />}
        {targetPage === PAGE_CONST.Tables && <Tables />}
        {targetPage === PAGE_CONST.Tabs && <Tabs />}
        {targetPage === PAGE_CONST.Toast && <Toast />}
        {targetPage === PAGE_CONST.Paginations && <Paginations />}
        {targetPage === PAGE_CONST.DatePickers && <DatePickers />}
        {targetPage === PAGE_CONST.Uploads && <Uploads />}
        {targetPage === PAGE_CONST.Modal && <Modal />}
        {targetPage === PAGE_CONST.Cookie && <Cookie />}
        {targetPage === PAGE_CONST.Editor && <Editor />}
        {targetPage === PAGE_CONST.LoadingContent && <LoadingContent />}
      </div>
    </div>
  );
};

export default Dev;

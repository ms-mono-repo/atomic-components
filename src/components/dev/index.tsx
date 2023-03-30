import React, { useState } from 'react';
import {  Menu, MenuItem, Sidebar } from 'react-pro-sidebar';


   import  Logo from './Logo'
  import  FeatherIcon from './icons/FeatherIcon'
  import  SvgIcon from './icons/SvgIcon'
  import  PngIcon from'./icons/PngIcon'
   import  Buttons from'./Buttons'
   import  Badges from'./Badges'
   import  Inputs from'./Inputs'
   import  Checkboxs from'./Checkboxs'
   import  Dropdowns from'./Dropdowns'
   import  Radios from'./Radios'
   import  Toggles from'./Toggles'
   import  Tables from'./Tables'
   import  Tabs from'./Tabs'
   import  Toast from'./Toast'
   import  Paginations from'./Paginations'
   import  DatePickers from './DatePickers'
   import  Uploads from './Uploads'
   import  Modal from './Modal'
   import  Cookie from './Cookie'
   import  ConsoleTooltip from './ConsoleTooltip'
   import  LoadingContent from './LoadingContent'

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
        <Sidebar>
          <Menu>
            {menus.map((menu, index) => (
              <MenuItem
                key={menu}
                className={targetPage === menu ? 'active' : ''}
                onClick={() => {
                  setTargetPage(menu);
                }}
              >
                {menu}
              </MenuItem>
            ))}
          </Menu>
        </Sidebar>
      </aside>
      <div className="dev-layout__content">
        {targetPage === PAGE_CONST.FeatherIcon && <FeatherIcon />}
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
        {targetPage === PAGE_CONST.LoadingContent && <LoadingContent />}
      </div>
    </div>
  );
};

export default Dev;

import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Home',
    url: '/dashboard',
    icon: 'cil-home',
  },
  {
    divider: true,
  },
  {
    name: 'Leads',
    url: 'leads/index',
    icon: 'cil-user-plus'
  },
  {
    name: 'Prospects',
    url: 'prospects/index',
    icon: 'cil-user-plus'
  },
  {
    name: 'Opportunities',
    url: '/opportunity',
    icon: 'cil-money',
  },
  {
    name: 'DMS',
    url: '/dms',
    icon: 'cil-file',
    children: [
      {
        name: 'Inventory',
        url: '/dms/inventory',
      },
      {
        name: 'Bookings',
        url: '/dms/bookings',
      },
      {
        name: 'Approvals',
        url: '/dms/approvals',
      },
      {
        name: 'Calendar',
        url: '/dms/calendar',
      },
    ]
  },
  {
    name: 'Activities',
    url: '/activities',
    icon: 'cil-calendar',
  },
  {
    divider: true,
  },
  {
    name: 'Quote',
    url: 'quote/index',
    icon: 'cil-dollar',
  },
  {
    name: 'SOCI',
    url: '/soci/index',
    icon: 'cil-storage'
  },
  {
    name: 'Sales Target',
    url: '/salestarget',
    icon: 'cil-scrubber'
  },
  {
    name: 'Reports',
    url: '/reports',
    icon: 'cil-chart-line'
  },
  {
    divider: true,
  },
  {
    name: 'Customers',
    url: '/customers',
    icon: 'cil-briefcase',
  },
  {
    name: 'Contact',
    url: '/contact/index',
    icon: 'cil-address-book',
  },
  
  {
    divider: true,
  },
  {
    name: 'System Admin',
    url: '/systemadmin',
    icon: 'cil-settings',
  },
  {
    name: 'User Access Setup',
    url: '/useraccess',
    icon: 'cil-user-plus',
  },
  {
    name: 'User',
    url: '/user',
    icon: 'cil-voice-over-record',
    children: [
      {
        name: 'Add User',
        url: '/user',
      },
      {
        name: 'User LOA',
        url: '/user/userloa',
      },
      {
        name: 'Unit Setup',
        url: '/user/unitsetup',
      },
    ]
  },/*
  {
    name: 'UNIT SETUP',
    url: '/unitsetup',
    icon: 'cil-screen-smartphone',
  },
  {
    name: 'SETTING',
    url: '/setting',
    icon: 'cil-cog',
  },
*/
  {
    divider: true,
  },
  {
    name: 'Profile',
    url: '/profile',
    icon: 'cil-user'
  },
  {
    name: 'Logout',
    url: '/logout',
    icon: 'cil-account-logout'
  },

];

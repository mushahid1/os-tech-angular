import { ROUTE } from './routes';

// eslint-disable-next-line
export const menu = [
  {
    label: 'Company Management',
    icon: 'company.svg',
    active: 'company-active.svg',
    navigate: ROUTE.COMPANY_MAMAGEMENT,
  },
  {
    label: 'Product Rights',
    icon: 'product.svg',
    active: 'product-active.svg',
    navigate: ROUTE.PRODUCT_RIGHTS,
  },{
    label: 'Applications',
    icon: 'app.svg',
    active: 'app-active.svg',
    navigate: ROUTE.APPLICATIONS,
  },{
    label: 'Internal Users',
    icon: 'internal.svg',
    active: 'internal-active.svg',
    navigate: ROUTE.INTERNAL_USERS,
  },{
    label: 'Default Roles',
    icon: 'default.svg',
    active: 'default-active.svg',
    navigate: ROUTE.DEFAULT_ROLES,
  },{
    label: 'External Users',
    icon: 'external.svg',
    active: 'external-active.svg',
    navigate: ROUTE.EXTERNAL_USER,
  }
];

export const navbarData = [
  {
    routeLink: 'home',
    icon: 'fal fa-home',
    label: 'Dashboard'
  },
  {
    routeLink: 'jaffna',
    icon: 'fal fa-box-open',
    label: 'Jaffna'
  },
  {
    routeLink: 'mulathiu',
    icon: 'fal fa-chart-bar',
    label: 'mulathiu'
  },
  {
    routeLink: 'kilinichchi',
    icon: 'fal fa-tags',
    label: 'kilinichchi'
  },
  {
    routeLink: 'vavniya',
    icon: 'fal fa-file',
    label: 'vavniya'
  },
  {
    routeLink: 'mannar',
    icon: 'fal fa-camera',
    label: 'mannar'
  },
  {
    routeLink: 'employee_details',
    icon: 'fal fa-cog',
    label: 'Employee Details'
  },
  {
    routeLink: 'create_new_project',
    icon: 'fal fa-cog',
    label: 'New Project'
  },
  {
    routeLink: 'create_new_indicator',
    icon: 'fal fa-cog',
    label: 'New Indicator'
  },
  {
    routeLink: 'error_404',
    icon: 'fal fa-cog',
    label: '404'
  },
  {
    routeLink: '',
    icon: 'fal fa-cog',
    label: 'Menu with Children',
    submenuLevel1: [
      {
        routeLink: '',
        icon: 'fal fa-cog', // icon if needed
        label: 'Sub menu level 1',
      },
      {
        routeLink: '',
        icon: 'fal fa-cog', // icon if needed
        label: 'Sub menu level 1',
        submenuLevel2: [
          {
            routeLink: '',
            icon: 'fal fa-cog', // icon if needed
            label: 'Sub menu level 2',
          }
        ]
      }
    ]
  },

];

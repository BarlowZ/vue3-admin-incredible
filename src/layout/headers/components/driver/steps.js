export const steps = (i18n) => [
  {
    element: '#guide',
      popover: {
        title: i18n('driver.guideBtn'),
        description: i18n('driver.guideDesc'),
        position: 'left'
      }
  },
  {
    element: '#hamburger',
      popover: {
        title: i18n('driver.hamburgerBtn'),
        description: i18n('driver.hamburgerDesc'),
        position: 'bottom'
      }
  },
  {
    element: '#screenFull',
      popover: {
        title: i18n('driver.fullScreen'),
        description: i18n('driver.fullScreenDesc'),
        position: 'left'
      }
  }
]

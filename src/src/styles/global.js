export default {
  color: {
    black: '#323031',
    yellow: '#ffc857',
    red: '#db3a34',
    blue: '#084c61',
    lightblue: '#177e89',
    gray: '#bfbfbf',
    orange: '#ff7d00',
    green: '#11d180',
  },
  easingFn: {
    standard: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
    accelerate: 'cubic-bezier(0.4, 0.0, 1, 1)',
    decelerate: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
  },
  ellipsis: `
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;
  `,
  dropShadow: {
    normal: '0px 3px 8px rgba(0, 0, 0, 0.15)',
    repressed: '0px 8px 12px rgba(0, 0, 0, 0.15)',
  },
  device: {
    mobile: '@media only screen and (max-width: 1199px)',
    tablet: '@media only screen and (min-width: 768px) and (max-width: 1199px)',
    desktop: '@media only screen and (min-width: 1200px)',
  },
  br: `br {
    content: "";
    display: block;
    margin: 0.75em 0;
  }`,
};

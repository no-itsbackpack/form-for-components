module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'FormForComponents',
      externals: {
        'form-for': 'FormFor',
        react: 'React'
      }
    }
  }
};

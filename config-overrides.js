const rewireStyledComponents = require('react-app-rewire-styled-components');
const path = require('path');

module.exports = {
  webpack: (config, env) => {
    // Styled components
    config = rewireStyledComponents(config, env);

    // Dedup styled components
    config.resolve.alias['styled-components'] = path.resolve('./node_modules/styled-components');

    return config;
  }
};

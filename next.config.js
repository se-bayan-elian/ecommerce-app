const path = require('path');

module.exports = {
  webpack: (config, { isServer }) => {
    // Add an alias for the src directory
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    
    return config;
  },
  experimental: {
    serverActions: true,
  },
};

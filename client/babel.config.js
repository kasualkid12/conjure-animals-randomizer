module.exports = (api) => {
  // This caches the Babel config
  api.cache.using(() => process.env.NODE_ENV);
  return {
    targets: {
      esmodules: false,
    },
    presets: [
      '@babel/preset-env',
      // Enable development transform of React with new automatic runtime
      [
        '@babel/preset-react',
        { development: !api.env('production'), runtime: 'automatic' },
      ],
    ],
    // Applies the react-refresh Babel plugin on non-production modes only
    plugins: ['react-refresh/babel'],
  };
};

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@src': './src',
          '@components': './src/components',
          '@helpers': './src/helpers',
          '@redux': './src/redux',
          '@screens': './src/screens',
          '@hooks': './src/hooks',
          '@navigators': './src/navigators',
          '@assets': './src/assets',
        },
      },
    ],
  ],
};

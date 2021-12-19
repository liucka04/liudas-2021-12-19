const path = require('path');

const environment = process.env.ENVIRONMENT || 'development';
const envPath = path.join(__dirname, `.env.${environment}`);

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['inline-dotenv', {path: envPath, systemVar: 'overwrite'}],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '~': './src',
        },
      },
    ],
  ],
};

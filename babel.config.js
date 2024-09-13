module.exports = {
  presets: ['module:metro-react-native-babel-preset'],

  plugins: [
    //if you already have other plugin just paste this lines below
    [
        'module-resolver',
        {
          root: ['.'],
          extensions: ['.ios.js', '.android.js','.jsx', '.js', '.ts', '.tsx', '.native.js','.json'],
          alias: {
            'components': './src/components/',
            'navigation': './src/navigation/',
            'animations':'./src/assets/animations',
            'store': './src/store/',
            'reducers': './src/store/reducers/',
            'assets': './src/assets/',
            'img': './src/assets/img/',
            'api': './src/api/',
            '@hooks': './src/hooks/index',
          },
        },
    ]
  ],
};



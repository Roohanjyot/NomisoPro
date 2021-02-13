module.exports = {
    entry: __dirname + '/client/src/index.jsx',
    mode: 'development',
    externals: {
        react: 'React',
    },
    module: {
      rules: [
        {
          test: [/\.jsx$/],
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env', {'plugins': ['@babel/plugin-proposal-class-properties']}]
            }
          }
        },
        {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
              'style-loader',
              'css-loader'
            ]
          }
      ]
    },
    output: {
      filename: 'bundle.js',
      path: __dirname + '/client/dist'
    }
};
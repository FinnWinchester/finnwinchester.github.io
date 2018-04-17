import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {
    version
} from './package.json';
import HtmlReplaceWebpackPlugin from 'html-replace-webpack-plugin';
import HtmlStringReplace from 'html-string-replace-webpack-plugin';

const STYLES_DIR = path.resolve(__dirname, './src/styles');
const _build_number = +new Date();
const stringReplaceLoaderQueries = [{
    search: '@@VERSION@@',
    match: /@@VERSION@@/ig,
    replace: version,
    replacement: version,
}, {
    search: '@@BUILD_NUMBER@@',
    match: /@@BUILD_NUMBER@@/ig,
    replace: _build_number,
    replacement: _build_number,
}];

module.exports = (env = {}) => {
    let _html_webpack_plugin = {
        template: 'src/assets/index.html',
        filename: 'index.html',
        inject: false
    };

    let _plugins = [
        new ExtractTextPlugin('app.css'),
        new HtmlWebpackPlugin(_html_webpack_plugin),
        new HtmlStringReplace({
            enable: true,
            patterns: stringReplaceLoaderQueries
        })
    ];

    env.production && _plugins.push(new UglifyJSPlugin({
        sourceMap: true
    }));

    return {
        entry: {
            app: './src/initialize.js',
            styles: STYLES_DIR + '/Main.less'
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, '/')
        },
        resolve: {
            extensions: [
                '.js', '.jsx'
            ],
            modules: [
                path.resolve('./src'),
                path.resolve('./node_modules')
            ]
        },
        module: {
            rules: [{
                test: /\.css$/,
                use: ['css-loader', 'style-loader']
            }, {
                test: /\.less$/,
                include: STYLES_DIR,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            minimize: env.production,
                            sourceMap: true
                        }
                    }, {
                        loader: 'less-loader'
                    }]
                })
            }, {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [{
                        loader: 'babel-loader'
                    }, {
                        loader: 'string-replace-loader',
                        query: {
                            multiple: stringReplaceLoaderQueries
                        }
                    }
                ]
            }]
        },
        plugins: _plugins
    };
}
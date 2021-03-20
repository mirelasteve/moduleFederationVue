const { merge }  = require('webpack-merge');

const ModuleFederationplugin = require('webpack/lib/container/ModuleFederationPlugin');

const packegeJson = require('../package.json')
const commonConfig = require('./webpack.common');

const devConfig = {
    mode:'development',
    devServer:{
        port:8080,
        historyApiFallback:{
            index:'index.html'
        }
    },
    plugins:[
        new ModuleFederationplugin({
            name:'container',
            remotes:{
                marketing:'marketing@http://localhost:8081/remoteEntry.js'
            },
            shared: packegeJson.dependencies
        }),
        
    ]
}

module.exports = merge(commonConfig,devConfig)
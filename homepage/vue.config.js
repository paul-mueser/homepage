const {defineConfig} = require('@vue/cli-service')

const SitemapPlugin = require('sitemap-webpack-plugin').default

const paths = [
    '/',
    '/projects/',
    '/projects/statsbot/',
    '/projects/musicbot/',
]

module.exports = defineConfig({
    transpileDependencies: true
})

module.exports = {
    configureWebpack: {
        plugins: [
            new SitemapPlugin({
                base: 'https://paulmueser.de',
                paths,
                options: {
                    skipgzip: true
                }
            })
        ]
    },

    
}
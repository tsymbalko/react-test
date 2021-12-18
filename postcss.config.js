const stack = require('postcss-stack')

module.exports = {
    plugins: [
        require('autoprefixer'),
        require('postcss-nested'),
        stack({
            list: [
                { beneath: -1 },
                { navigation: 10 },
                { float: 20 },
                { 'back-top': 30 },
                { 'shop-button': 40 },
                { modal: 50 }
            ]
        })
    ]
}

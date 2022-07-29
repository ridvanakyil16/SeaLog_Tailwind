module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            transitionProperty: {
                'max-height': 'max-height',
                'spacing': 'margin, padding',
            }
        },
    },
    plugins: [],
}
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,tsx,jsx,mdx}',
        './src/app/**/*.{js,ts,tsx,jsx,mdx}'
    ],
    theme: {
        screens: {
            mb: "429px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
        },
        fontFamily: {
            awesome: "FontAwesome"
        },
        extend: {
            colors: {
                "color-primary": "#7A00C0",
                "color-second": "#50236A",
                "color-third": "#39005A",
                "dark-gray": "#5A5A5A",
                "gray-70": "#646E82",
                "red-error": "#ED3A3A"
            }
        }
    },
    plugins: [],
}
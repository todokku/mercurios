import colors from "vuetify/es5/util/colors";

export default {
    mode: "universal",
    /*
     ** Headers of the page
     */
    head: {
        // titleTemplate: "%s - " + process.env.npm_package_name,
        title: "Mercurios",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            {
                hid: "description",
                name: "description",
                content: process.env.npm_package_description || "",
            },
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: "#fff" },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: ["@nuxtjs/vuetify", "@nuxt/typescript-build"],
    /*
     ** Nuxt.js modules
     */
    modules: ["@nuxtjs/pwa"],
    /*
     ** vuetify module configuration
     ** https://github.com/nuxt-community/vuetify-module
     */
    vuetify: {
        customVariables: ["~/assets/variables.scss"],
        theme: {
            // dark: true,
            themes: {
                dark: {
                    primary: colors.blue.darken2,
                    secondary: colors.amber.darken3,
                    accent: colors.grey.darken3,
                    info: colors.teal.lighten1,
                    success: colors.green.accent3,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                },
            },
        },
    },
    server: {
        port: 3000, // default: 3000
        host: "0.0.0.0", // default: localhost
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {},
    },
};
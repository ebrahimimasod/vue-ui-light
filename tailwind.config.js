/**
 * Configurations placed here is just used by tailwind intellisense and is not included in any build setup.
 */

module.exports = {
    purge: {
        content: [`${__dirname}/**/*.{vue,js,ts,jsx,tsx}`],
        options: {
            keyframes: true,
            layers: ["utilities", "components"],
            blocklist: [/^container/],
        },
    },
};

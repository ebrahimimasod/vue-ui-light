const path = require("path");
const { defineConfig, createServer } = require("vite");
const vue = require("@vitejs/plugin-vue");

// Frequently used paths.
const paths = {
    root: path.resolve(process.cwd()),
    src: path.resolve(process.cwd(), "src"),
    dist: path.resolve(process.cwd(), "dist"),
    srcLib: path.resolve(process.cwd(), "src/lib"),
    srcApp: path.resolve(process.cwd(), "src/app"),
    srcPlay: path.resolve(process.cwd(), "src/play"),
};

const DocsPlugin = {
    name: "vue-docs",
    transform(code, id) {
        if (!/vue&type=docs/.test(id)) {
            return;
        }
        return 'export default Comp => {Comp.docs = ""}';
    },
};

const configs = defineConfig({
    root: paths.srcPlay,
    plugins: [
        vue({
            // exclude: [/vue&type=docs/],
        }),
        DocsPlugin,
    ],
    css: {
        postcss: {
            plugins: [
                require("postcss-import"),
                require("tailwindcss")({ config: path.resolve(paths.srcPlay, "tailwind.config.play.js") }),
                require("autoprefixer"),
            ],
        },
    },
    publicDir: "",
    resolve: {
        alias: {
            "@": paths.srcLib,
            // '~': paths.src,
        },
    },
});

(async () => {
    const server = await createServer({
        root: paths.srcDocs,
        server: {
            port: 3000,
        },
        ...configs,
    });
    await server.listen();
    server.printUrls();
})();

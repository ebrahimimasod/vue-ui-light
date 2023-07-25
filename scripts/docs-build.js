const path = require("path");
const { defineConfig, build } = require("vite");
const vue = require("@vitejs/plugin-vue");
const Markdown = require("vite-plugin-md").default;
const MarkdownItPrism = require("markdown-it-prism").default;
require("prismjs/components/prism-markup");
require("prismjs/components/prism-bash");

// Frequently used paths.
const paths = {
    root: path.resolve(process.cwd()),
    src: path.resolve(process.cwd(), "src"),
    dist: path.resolve(process.cwd(), "dist"),
    srcLib: path.resolve(process.cwd(), "src/lib"),
    srcDocs: path.resolve(process.cwd(), "src/docs"),
};

const configs = defineConfig({
    root: path.resolve(paths.srcDocs),
    plugins: [
        vue({
            include: [/\.vue$/, /\.md$/],
        }),
        Markdown({
            markdownItSetup(md) {
                const opt = {};
                md.use(MarkdownItPrism);
                md.use(require("markdown-it-anchor"), opt);
            },
        }),
    ],
    css: {
        postcss: {
            plugins: [
                require("postcss-import"),
                require("tailwindcss")({ config: path.resolve(paths.srcDocs, "tailwind.config.docs.js") }),
                require("autoprefixer"),
            ],
        },
    },
    publicDir: path.resolve(paths.srcDocs, "public"),
    resolve: {
        alias: {
            "@": paths.srcLib,
            "~": paths.srcDocs,
        },
    },
});

(async () => {
    await build({
        build: {
            entry: path.resolve(paths.srcDocs, "./index.html"),
            outDir: path.resolve(paths.root, "docdist"),
            emptyOutDir: true,
        },
        ...configs,
    });
})();

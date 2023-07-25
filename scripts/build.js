const path = require("path");
const fs = require("fs-extra");
const glob = require("glob");
const { defineConfig, build } = require("vite");
const vue = require("@vitejs/plugin-vue");

// Frequently used paths.
const paths = {
	root: path.resolve(process.cwd()),//D:\\libs\\vue-ui-light
	src: path.resolve(process.cwd(), "src"),//D:\\libs\\vue-ui-light\\src
	dist: path.resolve(process.cwd(), "dist"),//D:\\libs\\vue-ui-light\\dist
	srcLib: path.resolve(process.cwd(), "src/lib"),//D:\\libs\\vue-ui-light\\src\\lib
	srcApp: path.resolve(process.cwd(), "src/app"),//D:\\libs\\vue-ui-light\\src\\app
};



const DocsPlugin = {
	name: "vue-docs",
	transform(code, id) {
		if (!/vue&type=docs/.test(id)) {
			return;
		}
		return `export default Comp => {Comp.docs = '${id}'}`;
	},
};

/**
 * Run individual components using an object mapping the component name to its path.
 * @param {Object} components
 * @returns {Boolean}
 */
async function buildComponents(components) {
	for (const component in components) {
		const config = defineConfig({
			root: paths.srcApp,
			plugins: [vue()],

			build: {
				lib: {
					entry: path.resolve(paths.srcLib, `components/${component}/index.ts`),
					formats: ["es", "umd"],
					name: "vue-ui-lightUI",
					fileName: `${component}.js`,
				},
				// external: ['vue'] to rollupInputOptions
				rollupOptions: {
					external: ["vue"],
					output: {
						// file: `${component}.js`,
						assetFileNames: `${component}.css`,
						globals: {
							vue: "vue",
						},
					},
				},
				outDir: path.resolve(paths.dist, `components/${component}`),
				emptyOutDir: true,
			},
			publicDir: "",
			resolve: {
				alias: {
					"@": paths.srcLib,
				},
			},
		});
		await build(config);
	}
	return true;
}

/**
 *	Run a full library build from using the main entry point.
 * @returns {Boolean}
 */
async function buildLibrary() {
	const config = defineConfig({
		root: paths.srcLib,
		plugins: [
			vue({
				exclude: [/vue&type=docs/],
			}),
			DocsPlugin,
		],
		css: {
			postcss: {
				plugins: [
					require("postcss-import"),
					require("tailwindcss")({ config: path.resolve(paths.srcLib, "tailwind.config.lib.js") }),
					require("autoprefixer"),
				],
			},
			modules: {
				generateScopedName: "[hash:base64:5]",
			},
		},
		publicDir: "",
		build: {
			assetsDir: "assets",
			assetsInlineLimit: 0,
			lib: {
				entry: path.resolve(paths.srcLib, "index.ts"),
				formats: ["umd", "es"],
				name: "vue-ui-light",
				fileName: "vue-ui-light",
			},
			rollupOptions: {
				external: ["vue"],
				output: {
					globals: {
						vue: "vue",
					},
				},
			},
			outDir: paths.dist,
			emptyOutDir: false,
		},
		resolve: {
			alias: {
				"@": paths.srcLib,
			},
		},
	});
	await build(config);
	return true;
}

/**
 * A wrapper to run other build functions.
 * @returns {void}
 */
async function runBuilds() {
	const getComponents = () => {
		const componentsDirPath = path.resolve(paths.srcLib, "components");
		const componentsEntries = glob.sync(`${componentsDirPath}/**/*.vue`);

		const entries = {};
		componentsEntries.forEach((file) => {
			const arr = file.split("/");
			const fileName = arr[arr.length - 1];
			const fileNameWithoutExt = fileName.substr(0, fileName.indexOf("."));
			entries[fileNameWithoutExt] = file;
		});
		return entries;
	};

	// TODO: individual builds need to be enhance in matter of bundle size and css output
	// await buildComponents(getComponents());
	await buildLibrary();
	return;
}

/**
 * Copy static assets or files that should not bundle in build process.
 */
function runCopies() {
	/**
	 * An Array of files to be copied to dist.
	 */
	const copies = [
		{
			src: path.resolve(paths.srcLib, "tailwind.preset.js"),
			dest: path.resolve(paths.dist, "utils", "tailwind.preset.js"),
		},
		{
			src: path.resolve(paths.srcLib, "styles/icons"),
			dest: path.resolve(paths.dist, "icons"),
		},
	];

	for (const item of copies) {
		// Check if destination directory exists, and if its not then create the path.
		const destArr = item.dest.split('\\');
		destArr.pop();
		const destDir = destArr.join("/");
		const checkExists = fs.existsSync(destDir);

		if (!checkExists) {
			fs.mkdirSync(destDir, {
				recursive: true,
			});
		}

		// copy new file to the destination
		fs.copySync(item.src, item.dest);
	}
}

(async () => {
	await runBuilds();
	runCopies();
})();

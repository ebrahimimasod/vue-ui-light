const path = require("path");

function component(
    renderedUsage, // props, events, methods and slots documentation rendered
    doc, // the object returned by vue-docgen-api
    config, // the local config, useful to know the context
    fileName, // the name of the current file in the doc (to explain how to import it)
    requiresMd, // a list of all the documentation files
    // attached to the component documented. It includes documentation of subcomponents
    { isSubComponent, hasSubComponents }
) {
    // are we documenting
    const { displayName, description, docsBlocks } = doc;
    return `
# ${displayName}
${docsBlocks ? docsBlocks.join("n") : ""}

${description ? `> ${description}` : ""}

${renderedUsage.props}
${renderedUsage.methods}
${renderedUsage.events}
${renderedUsage.slots}
`;
}

module.exports = {
    componentsRoot: "src/lib/components",
    components: "**/[A-Z]**.@(js|vue)",
    outDir: "./src/docs/content/components",
    defaultExamples: false,
    getDestFile: (file, config) => {
        const finalFileName = file.substring(file.indexOf("/") + 1).replace(/\.vue$/, ".md");
        return path.join(config.outDir, finalFileName);
    },
    templates: {
        component,
    },
};

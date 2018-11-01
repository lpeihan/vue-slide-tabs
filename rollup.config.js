import babel from "rollup-plugin-babel";
import vue from "rollup-plugin-vue";
import pkg from "./package.json";

export default {
    input: "./src/tabs.vue",
    output: [
        {
            file: pkg.module,
            format: "es"
        },
        {
            file: pkg.main,
            format: "cjs"
        },
        // browser-friendly UMD build
        {
            name: "VueSlideTabs",
            file: pkg.unpkg,
            format: "umd"
        }
    ],
    plugins: [
        vue({
            css: true
        }),
        babel()
    ]
};

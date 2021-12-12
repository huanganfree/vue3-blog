module.exports = {
    ignorePatterns: ["*.html", "dist"],
    root: true,
    env: {
        node: true,
        es6: true
    },
    extends: [
        "plugin:vue/vue3-recommended", // 包含template tag标签缩进（之前配置了很长时间没反应，是这里没配置好）
        "plugin:vue/vue3-strongly-recommended",
        "eslint:recommended",
    ],
    parser: "vue-eslint-parser",
    parserOptions: {
        sourceType: "module",
    },
    rules: {
        "indent": ["warn", 2],
        "no-unused-vars": "warn",
        "vue/no-use-v-if-with-v-for": [
            "warn",
            {
                "allowUsingIterationVar": true
            }
        ],
        "no-debugger": "off"
    }
}
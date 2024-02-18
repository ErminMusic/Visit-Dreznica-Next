module.exports = {
    extends: [
        "next/core-web-vitals",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
    ],
    plugins: [],
    rules: {
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
        "react/jsx-props-no-spreading": "off",
    },
};

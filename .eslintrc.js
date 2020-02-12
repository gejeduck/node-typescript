module.exports = {
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "./tsconfig.json",
        "jsx": true,
        "useJSXTextNode": false
    },
    "env": {
        "browser": true
    },
    "plugins": [
        "react",
        "react-native",
        "@typescript-eslint",
    ],
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "airbnb",
    ],
    "rules": {
        "react-native/no-unused-styles": 2,
        "react-native/split-platform-components": 2,
        "react-native/no-inline-styles": 0,
        "react-native/no-raw-text": 2,
        "react/jsx-filename-extension": [1, {
            "extensions": [".js", ".jsx", ".tsx"]
        }],
        "react/forbid-prop-types": [1, {
            "forbid": [],
            checkContextTypes: true,
            checkChildContextTypes: true
        }],
        "semi": [2, "always"],
        "jsx-a11y/accessible-emoji": 0,
        // Indent with 4 spaces
        "indent": ["error", 4],

        // Indent JSX with 4 spaces
        "react/jsx-indent": ["error", 4],

        // Indent props with 4 spaces
        "react/jsx-indent-props": ["error", 4],

        // https://stackoverflow.com/questions/42981070/eslint-no-use-before-define
        "no-use-before-define": ["error", {
            "variables": false
        }],
        "@typescript-eslint/no-use-before-define": ["error", {
            "variables": false
        }],

        // I don't agree with this rule, explicit is always better IMHO
        "react/jsx-boolean-value": "off",

        // Overriden by Typescript
        // https://github.com/bradzacher/eslint-plugin-typescript/blob/master/docs/rules/no-unused-vars.md
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "error",

        // The airbnb default was causing too much headache
        // and funky syntax on one-liners
        "comma-dangle": ["error", "only-multiline"],

        // We want to be able to use any as a type
        "@typescript-eslint/no-explicit-any": 0,

        // Many debates about this on github
        // most ppl disagree with Airbnb https://github.com/airbnb/javascript/issues/1122
        "no-restricted-syntax": ["off", "ForInStatement", "ForOfStatement"],

        // Type Annotations should be at top of class
        "react/sort-comp": [1, {
            order: [
              'type-annotations',
              'static-methods',
              'lifecycle',
              'everything-else',
              'render',
            ],
        }],

        // Not shadow is too noisey with MapDispatchToProps
        // https://stackoverflow.com/a/48716192/965679
        'no-shadow': 'off',

        'react/jsx-curly-brace-presence': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/static-property-placement': 'off',
    },
    "env": {
        "amd": true,
        "browser": true,
        "node": true,
        "jest": true,
        "es6": true
    },
    "settings": {
        "react": {
            "createClass": "createReactClass", // Regex for Component Factory to use,
            // default to "createReactClass"
            "pragma": "React", // Pragma to use, default to "React"
            "version": "detect", // React version. "detect" automatically picks the version you have installed.
            // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
            "flowVersion": "0.53" // Flow version
        },
        "propWrapperFunctions": [
            // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
            "forbidExtraProps",
            {
                "property": "freeze",
                "object": "Object"
            },
            {
                "property": "myFavoriteWrapper"
            }
        ],
        "import/resolver": {
            "node": {
                "extensions": [
                    ".js",
                    ".android.js",
                    ".ios.js",
                    ".ts",
                    ".tsx"
                ]
            }
        }
    }
};

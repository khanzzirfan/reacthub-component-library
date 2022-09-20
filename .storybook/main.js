const glob = require("glob");
const path = require("path");
const appDirectory = path.resolve(__dirname, "../src");
const getStories = () =>
  glob.sync(`${appDirectory}/**/stories/**/*.stories.@(js|jsx|ts|tsx|mdx)`, {
    ignore: `${appDirectory}/**/stories/**/*.native.stories.@(js|jsx|ts|tsx|mdx)`,
  });

// stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: ["../public"],
  refs: {
    "@chakra-ui/react": {
      disable: true,
    },
  },
  // Add any Storybook addons you want here: https://storybook.js.org/addons/
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../"),
    });

    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [["react-app", { flow: false, typescript: true }]],
      },
    });
    config.resolve.extensions.push(".js", ".jsx", ".ts", ".tsx");

    return config;
  },
};

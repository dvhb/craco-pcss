module.exports = {
  overrideWebpackConfig: ({ webpackConfig, cracoConfig, context: { env } }) => {
    const oneOfRule = webpackConfig.module.rules.find(rule => rule.oneOf);
    if (!oneOfRule) {
      throw Error(`Can't find a 'oneOf' rule under module.rules in the ${env} webpack config!`);
    }

    const cssRule = oneOfRule.oneOf.find(rule => rule.test && rule.test.toString().includes('css'));
    cssRule.test = /\.p?css$/;
    return webpackConfig;
  },
};

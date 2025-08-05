import stylelintConfigRecommended from "stylelint-config-recommended";
import stylelintConfigStyledComponents from "stylelint-config-styled-components";

export default {
  extends: [stylelintConfigRecommended, stylelintConfigStyledComponents],
  customSyntax: "postcss-styled-syntax",
  rules: {
    "value-keyword-case": null,
    "declaration-empty-line-before": null,
    "no-empty-source": null,
  },
};

module.exports = (componentName) => ({
  content: `@import "../variables.scss";
@import "../typography.scss";

.${componentName}{
  
}
`,
  extension: `.scss`
});

const fs = require("fs-extra");
const concat = require("concat");

(async function build() {
  const files = [
    "./dist/banking-customer-detail-widget/runtime.js",
    "./dist/banking-customer-detail-widget/polyfills.js",
    "./dist/banking-customer-detail-widget/main.js",
  ];

  // await fs.ensureDir("elements");
  await fs.ensureDir("./dist/banking-customer-detail-widget/elements");
  await concat(files, "./dist/banking-customer-detail-widget/elements/index.js");

  await fs.copyFile(
    "./dist/banking-customer-detail-widget/styles.css",
    "./dist/banking-customer-detail-widget/elements/styles.css"
  );
})();
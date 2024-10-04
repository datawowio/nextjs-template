const fs = require("fs");
const path = require("path");

function mergeTranslations(dirPath) {
  const files = fs.readdirSync(dirPath);

  return files.reduce((result, file) => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      result[file] = mergeTranslations(filePath);
    } else if (file.endsWith(".json")) {
      const content = JSON.parse(fs.readFileSync(filePath, "utf8"));
      result = { ...result, ...content };
    }

    return result;
  }, {});
}

function createMergedTranslations(locale) {
  const localePath = path.join(__dirname, "../", "src", "locales", locale);
  const outputFile = path.join(
    __dirname,
    "../",
    "src",
    `locales/${locale}/${locale}.json`,
  );

  fs.writeFileSync(outputFile, JSON.stringify({}, null, 2));

  const mergedData = mergeTranslations(localePath);
  fs.writeFileSync(outputFile, JSON.stringify(mergedData, null, 2));

  console.log(`Merged translations for ${locale} written to ${outputFile}`);
}

const locales = ["en", "th"];
locales.forEach(createMergedTranslations);

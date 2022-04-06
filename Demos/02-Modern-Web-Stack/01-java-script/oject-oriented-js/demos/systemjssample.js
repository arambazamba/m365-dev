System.import("./systemjsutils.js").then(exports => {
  console.log("Imported:", exports);
  let logger = exports.Logger;
  logger.log("testing logger");
});

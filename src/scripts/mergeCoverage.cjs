const fs = require('fs');
const path = require('path');

function getCoverageFilePaths(dir) {
  const coverageFileRegex = /^(.*)-coverage-(.*).json$/;
  const coverageFiles = fs.readdirSync(dir).filter(file => coverageFileRegex.test(file));
  const coverageFilePaths = coverageFiles.map(file => path.join(dir, file));
  return coverageFilePaths;
}

function mergeCoverage(filePaths) {
  const baseCoverage = {
    numFailedTestSuites: 0,
    numFailedTests: 0,
    numPassedTestSuites: 0,
    numPassedTests: 0,
    numPendingTestSuites: 0,
    numPendingTests: 0,
    numRuntimeErrorTestSuites: 0,
    numTodoTests: 0,
    numTotalTestSuites: 0,
    numTotalTests: 0,
    openHandles: [],
    startTime: Infinity,
    success: true,
    testResults: [],
    coverageMap: {},
  }

  const mergedCoverage = filePaths.reduce((acc, filePath) => {
    const coverage = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    return {
      numFailedTestSuites: acc.numFailedTestSuites + (coverage.numFailedTestSuites ?? 0),
      numFailedTests: acc.numFailedTests + (coverage.numFailedTests ?? 0),
      numPassedTestSuites: acc.numPassedTestSuites + (coverage.numPassedTestSuites ?? 0),
      numPassedTests: acc.numPassedTests + (coverage.numPassedTests ?? 0),
      numPendingTestSuites: acc.numPendingTestSuites + (coverage.numPendingTestSuites ?? 0),
      numPendingTests: acc.numPendingTests + (coverage.numPendingTests ?? 0),
      numRuntimeErrorTestSuites: acc.numRuntimeErrorTestSuites + (coverage.numRuntimeErrorTestSuites ?? 0),
      numTodoTests: acc.numTodoTests + (coverage.numTodoTests ?? 0),
      numTotalTestSuites: acc.numTotalTestSuites + (coverage.numTotalTestSuites ?? 0),
      numTotalTests: acc.numTotalTests + (coverage.numTotalTests ?? 0),
      openHandles: acc.openHandles.concat(coverage.openHandles ?? []),
      startTime: Math.min(acc.startTime, coverage.startTime ?? Infinity),
      success: acc.success && coverage.success,
      testResults: acc.testResults.concat(coverage.testResults ?? []),
      coverageMap: { ...acc.coverageMap, ...coverage.coverageMap },
    }
  }, baseCoverage);
  return mergedCoverage;
}

function main() {
  const targetDir = process.env.TARGET_DIR || 'coverage';
  const outputFile = process.env.OUTPUT_NAME || 'merged_coverage.json';

  const coverageFilePaths = getCoverageFilePaths(targetDir);
  const mergedCoverage = mergeCoverage(coverageFilePaths);
  fs.writeFileSync(outputFile, JSON.stringify(mergedCoverage, null, 2));
  
  console.log(`Merged coverage saved to ${outputFile}`);
}

main();
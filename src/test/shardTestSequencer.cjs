const Sequencer = require('@jest/test-sequencer').default;

class ShardTestSequencer extends Sequencer {
   
  sort(tests) {
    if (process.env.CI_SHARD && process.env.CI_SHARD_TOTAL) {
      const current = parseInt(process.env.CI_SHARD, 10);
      const total = parseInt(process.env.CI_SHARD_TOTAL, 10);

      const copyTests = Array.from(tests);
      return copyTests
        .sort((testA, testB) => (testA.path > testB.path ? 1 : -1))
        .filter((test, index) => index % total === current - 1);
    }

    return tests;
  }
}

module.exports = ShardTestSequencer;

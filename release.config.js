module.exports = {
  release: {
    branch: 'master',
  },
  plugins: [
    '@semantic-release/npm',
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular',
        releaseRules: [{ type: 'enh', release: 'minor' }],
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'angular',
        presetConfig: {
          types: [
            // Default types
            { type: 'feat', section: 'Features' },
            { type: 'fix', section: 'Bug Fixes' },
            { type: 'chore', hidden: true },
            { type: 'docs', hidden: true },
            { type: 'style', hidden: true },
            { type: 'refactor', hidden: true },
            { type: 'perf', hidden: true },
            { type: 'test', hidden: true },
            // Custom types
            { type: 'enh', section: 'Enhancements' },
          ],
        },
      },
    ],
    [
      '@semantic-release/github',
      {
        assets: ['dist/**'],
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['package.json'],
        message: 'chore(release): v${nextRelease.version}',
      },
    ],
  ],
}

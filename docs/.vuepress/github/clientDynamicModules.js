require('dotenv').config()
const axios = require('axios')
const { graphql } = require('@octokit/graphql')

module.exports = async () => ({
  name: 'constants.js',
  content: `
      export const CONTRIBUTORS = ${JSON.stringify(await getContributors())};
    `,
})

/**
 * Get a list of vue select contributors.
 * @return {Promise<T>}
 */
async function getContributors() {
  const { data } = await axios.get(
    'https://api.github.com/repos/sagalbot/vue-select/contributors?per_page=100'
  )

  return data
}

import { createLibConfig } from "@nextcloud/vite-config"

export default createLibConfig(
	{
		index: `${import.meta.dirname}/src/index.js`,
	},
	{
		libraryFormats: ["cjs", "es"],
		thirdPartyLicense: false,
		config: {
			test: {
				environment: 'jsdom',
			}
		}
	}
)
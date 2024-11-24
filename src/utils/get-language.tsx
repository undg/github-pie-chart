import { Endpoints } from "@octokit/types"
type GithubLanguages =
	Endpoints["GET /repos/{owner}/{repo}/languages"]["response"]["data"]

export type Language = {
	lang: string
	value: number
	fill: string
}

/**
 * @param url "https://api.github.com/repos/{owner}/{repo}/languages"
 * @returns top five languages sorted by usage in repository
 */
export async function getLanguages(url: string): Promise<Language[]> {
	const response = await fetch(url)
	if (!response.ok) throw new Error("Network response not ok")
	const data = (await response.json()) as GithubLanguages

	return Object.keys(data)
		.sort(
			(a: keyof GithubLanguages, b: keyof GithubLanguages) => data[b] - data[a]
		)
		.slice(0, 5)
		.map((key, idx) => ({
			lang: key,
			value: data[key],
			fill: `var(--chart-${idx + 1})`,
		}))
}

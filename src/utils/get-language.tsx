import { Endpoints } from "@octokit/types"
type Languages =
	Endpoints["GET /repos/{owner}/{repo}/languages"]["response"]["data"]

/** 
 * @param url "https://api.github.com/repos/{owner}/{repo}/languages"
 * @returns five languages sorted by usage in repository
 */
export async function getLanguages(url: string) {
	const response = await fetch(url)
	if (!response.ok) throw new Error("Network response not ok")
	const data = await response.json() as Languages

	return Object.keys(data).sort(
		(a: keyof Languages, b: keyof Languages) => data[b] - data[a]
	).slice(0, 5)
}

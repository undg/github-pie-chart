import { useQuery } from "react-query"
import { Endpoints } from "@octokit/types"

type Repository =
	Endpoints["GET /search/repositories"]["response"]["data"]["items"][number]

export function usePopularRepos() {
	return useQuery({
		queryKey: 'typescriptRepos',
		queryFn: async () => {
			const response = await fetch(
				"https://api.github.com/search/repositories?q=language:typescript&sort=stars&order=desc&per_page=10"
			)

			if (!response.ok) throw new Error("Network response not ok")

			const data = await response.json()
			return data.items as Repository[]
		},
	})
}

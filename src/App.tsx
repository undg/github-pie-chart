import "./App.css"
import { Button } from "./components/ui/button"
import { Plus } from "lucide-react"

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "./components/ui/dialog"
import { Combobox, Item } from "./components/ui/combobox"
import { usePopularRepos } from "./hooks/use-popular-repos"

function App() {
	const { data, isLoading, error } = usePopularRepos()

	if (isLoading) return <div>Loading...</div>
	if (error) return <div>Error: Github API down!</div>

	const repos: Item[] = data?.map(d=>({
		value: d.id.toString(),
		label: d.name,
	})) ?? []


	return (
		<div className="m-8 bg-secondary rounded-3xl w-[1440px] h-[843px] flex flex-col items-start gap-8 p-8">
			<h1 className="text-9xlg">Github Repository Language</h1>
			<Dialog>
				<DialogTrigger asChild>
					<Button size="lg">
						Open Pie Chart <Plus />
					</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Github Repository Language Pie Chart</DialogTitle>
						<DialogDescription asChild>
							<>
								<h2 className="text-md mt-4 text-foreground">
									Select Github Repository
								</h2>

								<Combobox items={repos} />
							</>
						</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		</div>
	)
}

export default App

import "./App.css"
import { Button } from "./components/ui/button"
import { Plus } from "lucide-react"

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "./components/ui/dialog"
import { Combobox, Item } from "./components/ui/combobox"
import { usePopularRepos } from "./utils/use-popular-repos"
import { Pie, PieChart } from "recharts"

import { TrendingUp } from "lucide-react"

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./components/ui/card"
import {
	ChartConfig,
	ChartContainer,
	ChartLegend,
	ChartLegendContent,
	ChartTooltip,
	ChartTooltipContent,
} from "./components/ui/chart"
import { useAtomValue } from "jotai"
import { languagesAtom } from "./atoms"
const chartData = [
	{ browser: "chrome", visitors: 275, fill: "var(--chart-3)" },
	{ browser: "safari", visitors: 200, fill: "var(--color-safari)" },
	{ browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
	{ browser: "edge", visitors: 173, fill: "var(--color-edge)" },
	{ browser: "other", visitors: 90, fill: "var(--color-other)" },
]

function App() {
	const { data, isLoading, error } = usePopularRepos()
	const lang = useAtomValue(languagesAtom)

	if (error) return <div>Error: Github API down!</div>

	const repos: Item[] =
		data?.map((d, idx) => ({
			value: d.id.toString(),
			label: d.name,
			languagesUrl: d.languages_url,
			idx,
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
					</DialogHeader>
					<DialogDescription asChild>
						<>
							<h2 className="text-md mt-4 text-foreground">
								Select Github Repository
							</h2>

							{isLoading ? <div>Loading...</div> : <Combobox items={repos} />}

							<ChartContainer
								config={{}}
								className="mx-auto aspect-square size-full max-h-[250px]"
							>
								<PieChart>
									<ChartTooltip
										cursor={false}
										content={<ChartTooltipContent hideLabel />}
									/>
									<ChartLegend
										content={<ChartLegendContent />}
									/>
									<Pie data={lang} dataKey="value" nameKey="lang" />
								</PieChart>
							</ChartContainer>
						</>
					</DialogDescription>
					<DialogFooter>
						<Button variant="link">View details</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	)
}

export default App

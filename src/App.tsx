import "./App.css"
import { Button } from "./components/ui/button"
import { Plus } from 'lucide-react';

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "./components/ui/dialog"
import { Combobox } from "./components/ui/combobox";

const items = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
]

function App() {
	return (
		<div className="m-8 bg-secondary rounded-3xl w-[1440px] h-[843px] flex flex-col items-start gap-8 p-8">
			<h1 className="text-9xlg">Github Repository Language</h1>
			<Dialog>
				<DialogTrigger>
					<Button size="lg">
						Open Pie Chart <Plus />
					</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Github Repository Language Pie Chart</DialogTitle>
						<DialogDescription>
							<h2 className="text-md mt-4 text-foreground">Select Github Repository</h2>
							<Combobox items={items} />

						</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		</div>
	)
}

export default App

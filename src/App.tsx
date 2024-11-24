import "./App.css"
import { Button } from "./components/ui/button"
import { FiPlus } from "react-icons/fi"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "./components/ui/dialog"

function App() {
	return (
		<div className="m-8 bg-secondary rounded-3xl w-[1440px] h-[843px] flex flex-col items-start gap-8 p-8">
			<h1 className="text-9xlg">Github Repository Language</h1>
			<Dialog>
				<DialogTrigger>
					<Button size="lg">
						Open Pie Chart <FiPlus />
					</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Github Repository Language Pie Chart</DialogTitle>
						<DialogDescription>
							<h2 className="text-md mt-4 text-foreground">Select Github Repository</h2>

						</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		</div>
	)
}

export default App

import "./App.css"
import { Button } from "./components/ui/button"
import { FiPlus } from "react-icons/fi";

function App() {
	return (
		<div className="m-8 bg-secondary rounded-3xl w-[1440px] h-[843px] flex flex-col items-start gap-8 p-8">
			<h1 className="text-9xlg">Github Repository Language</h1>
			<Button size="lg" >Open Pie Chart <FiPlus /></Button>
		</div>
	)
}

export default App

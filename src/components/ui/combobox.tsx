"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "../../lib/utils"
import { Button } from "./button"
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "./command"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"
import { languagesAtom } from "../../atoms"
import { useSetAtom } from "jotai"
import { getLanguages } from "../../utils/languages"

export type Item = { value: string; label: string; languagesUrl: string, idx: number }

export function Combobox({ items }: { items: Item[] }) {
	const [open, setOpen] = React.useState(false)
	const [value, setValue] = React.useState("")
	const setLanguages = useSetAtom(languagesAtom)

	const handleRepoSelect = async (currentValue: string, idx: number) => {
		setValue(currentValue === value ? "" : currentValue)
		setOpen(false)

		const languagesUrl = items[idx].languagesUrl
		const languages = await getLanguages(languagesUrl);
		setLanguages(languages)
	}

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={open}
					className="w-[200px] justify-between"
				>
					{value
						? items.find((item) => item.value === value)?.label
						: "Repository Name"}
					<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[200px] p-0">
				<Command>
					<CommandInput placeholder="Search Repository..." />
					<CommandList>
						<CommandEmpty>No repository found.</CommandEmpty>
						<CommandGroup>
							{items.map((item) => (
								<CommandItem
									key={item.value}
									value={item.value}
									onSelect={(currentValue) => handleRepoSelect(currentValue, item.idx)} >
									<Check
										className={cn(
											"mr-2 h-4 w-4",
											value === item.value ? "opacity-100" : "opacity-0"
										)}
									/>
									{item.label}
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	)
}

import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px] border-2 rounded-l-none h-10">
        <SelectValue placeholder="Select pace" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Type</SelectLabel>
          <SelectItem value="apple">Self-paced</SelectItem>
          <SelectItem value="banana">Live</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

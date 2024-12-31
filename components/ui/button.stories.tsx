import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "./button";


const meta : Meta<typeof Button> = {
    title: "Components/ui/Button",
    component: Button,
    tags: ["autodocs"],
    parameters: {
        layout: "centered"
    },
}

export default meta;

type Story = StoryObj<typeof Button>

export const Default : Story = {
    args: {
        children: "Default Button",
        className: "bg-primary text-primary-foreground shadow hover:bg-primary/90"
    }
}
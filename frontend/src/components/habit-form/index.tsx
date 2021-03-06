import { Input, Button, Heading, useToast } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

import { WeekSelector } from "./week-selector";
import { Habit } from "../../generated/api";

export type Props = {
  habit: Habit;
  formTitle: string;
  submitText: string;
  onChange: Dispatch<SetStateAction<Habit>>;
  onSubmit(): void;
};

export function HabitForm({
  habit,
  formTitle,
  submitText,
  onChange,
  onSubmit,
}: Props) {
  const toast = useToast();

  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange((habit) => ({
      ...habit,
      title: e.target.value,
    }));
  }

  function handleWeekdayClick(weekday: number) {
    onChange((habit) => ({
      ...habit,
      isoWeekdays: habit.isoWeekdays.includes(weekday)
        ? habit.isoWeekdays.filter((selected) => selected !== weekday)
        : [...habit.isoWeekdays, weekday],
    }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!habit.title) {
      toast({ status: "error", description: "Habit title can't be empty." });
      return;
    }

    if (!habit.isoWeekdays.length) {
      toast({ status: "error", description: "Please select weekdays" });
      return;
    }

    onSubmit();
  }

  return (
    <>
      <Heading as="h1" size="md" marginBottom="16" textAlign="center">
        {formTitle}
      </Heading>
      <form onSubmit={handleSubmit}>
        <Input
          value={habit.title}
          marginBottom="3"
          placeholder="Type habit name"
          onChange={handleTitleChange}
        />
        <WeekSelector
          selectedWeekdays={habit.isoWeekdays}
          onWeekdaySelect={handleWeekdayClick}
        />
        <Button type="submit" isFullWidth colorScheme="purple" marginTop="8">
          {submitText}
        </Button>
      </form>
    </>
  );
}

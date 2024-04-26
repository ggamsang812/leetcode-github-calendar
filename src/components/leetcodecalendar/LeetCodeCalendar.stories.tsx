import { StoryFn, Meta } from "@storybook/react";
import LeetCodeCalendar from "./LeetCodeCalendar";

export default {
  title: "ReactComponentLibrary/LeetCode",
  component: LeetCodeCalendar,
} as Meta<typeof LeetCodeCalendar>;

const Template: StoryFn<typeof LeetCodeCalendar> = (args) => <LeetCodeCalendar {...args} />;

export const LeetCodeCalendarTest = Template.bind({});
LeetCodeCalendarTest.args = {
  userName: "ggamsang812",
};

export const LeetCodeCalendarTestTwo = Template.bind({});
LeetCodeCalendarTestTwo.args = {
  userName: "yunseong lee",
};
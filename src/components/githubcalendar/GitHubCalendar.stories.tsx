import { StoryFn, Meta } from "@storybook/react";
import GitHubCalendar from "./GitHubCalendar";

export default {
  title: "ReactComponentLibrary/GitHub",
  component: GitHubCalendar,
} as Meta<typeof GitHubCalendar>;

const Template: StoryFn<typeof GitHubCalendar> = (args) => <GitHubCalendar {...args} />;

export const GitHubCalendarTest = Template.bind({});
GitHubCalendarTest.args = {
  userName: "ggamsang812",
};

export const GitHubCalendarTestTwo = Template.bind({});
GitHubCalendarTestTwo.args = {
  userName: "yunseong lee",
};
// GitHubCalendar.tsx
// "use client"

import "./GitHubCalendar.css";
import { GitHubCalendarProps } from "./GitHubCalendar.types";
// import { fetchGitHubData } from "./fetchGitHubData";
// import parseContributions from "./parseContributions";


const GitHubCalendar: React.FC<GitHubCalendarProps> = (props) => {
  const fetchGitHubData = async (userName: string): Promise<string> => {
    const baseUrl = `https://github.com/users/${userName}/contributions`;
    
    try {
      const response = await fetch(baseUrl);
      if (!response.ok) {
        throw new Error(`Failed loading data from GitHub: ${response.status}`);
      }
      const html = await response.text();
      return html;
    } catch (error) {
      console.error("fetchGitHubData : "+error);
      throw error;
    }
  };

  const asdf = fetchGitHubData(props.userName)

  console.log(asdf)

  return (
    <div>
      <h2>Contributions for {props.userName}</h2>
    </div>
  );
};

export default GitHubCalendar;

// GitHubCalendar.tsx

import React, { useEffect, useState } from "react";
import "./GitHubCalendar.css";
import { GitHubCalendarProps } from "./GitHubCalendar.types";
import { fetchGitHubData } from "./fetchGitHubData";
import parseContributions from "./parseContributions";

interface Contribution {
  date: string;
  level: string;
}

const GitHubCalendar: React.FC<GitHubCalendarProps> = (props) => {
  const [contributions, setContributions] = useState<Contribution[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadContributions = async () => {
      try {
        const html = await fetchGitHubData(props.userName);
        const parsedData = parseContributions(html);
        setContributions(parsedData);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    loadContributions();
  }, [props.userName]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Contributions for {props.userName}</h2>
      <pre>{JSON.stringify(contributions, null, 2)}</pre>
    </div>
  );
};

export default GitHubCalendar;

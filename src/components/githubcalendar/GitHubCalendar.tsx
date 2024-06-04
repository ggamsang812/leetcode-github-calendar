import React, { useState, useEffect } from "react";
import "./GitHubCalendar.css";
import { GitHubCalendarProps } from "./GitHubCalendar.types";

const GitHubCalendar: React.FC<GitHubCalendarProps> = (props) => {
  const [contributions, setContributions] = useState<any[]>([]);

  useEffect(() => {
    const fetchContributionsForLastDays = async (
      username: string,
      days: number
    ) => {
      const today = new Date();
      const pastDate = new Date();
      today.setDate(today.getDate() - 180);
      pastDate.setDate(today.getDate() - 699);

      console.log("Fetching contributions from:", pastDate);

      let contributions: any[] = [];
      let page = 1;
      let hasMore = true;

      while (hasMore) {
        const response = await fetch(
          `https://api.github.com/users/${username}/events?page=${page}&per_page=100`
        );

        // Log rate limiting headers
        console.log(
          "Rate Limit Remaining:",
          response.headers.get("x-ratelimit-remaining")
        );
        console.log(
          "Rate Limit Reset:",
          new Date(
            parseInt(response.headers.get("x-ratelimit-reset") || "0") * 1000
          )
        );

        if (response.ok) {
          const events = await response.json();
          console.log(`Fetched page ${page}, number of events:`, events.length);

          if (events.length === 0) {
            hasMore = false;
            break;
          }

          contributions = contributions.concat(events);

          if (events.length < 100) {
            hasMore = false;
          } else {
            page++;
          }
        } else {
          hasMore = false;
          console.error("Failed to fetch data");
        }
      }

      // Filter out contributions older than the specified days
      const filteredContributions = contributions.filter(
        (event: any) =>
          (event.type === "PushEvent" ||
            event.type === "PullRequestEvent" ||
            event.type === "IssuesEvent" ||
            event.type === "CommitCommentEvent" ||
            event.type === "CreateEvent" ||
            event.type === "DeleteEvent" ||
            event.type === "ForkEvent" ||
            event.type === "GollumEvent" ||
            event.type === "IssueCommentEvent" ||
            event.type === "MemberEvent" ||
            event.type === "PublicEvent" ||
            event.type === "PullRequestReviewEvent" ||
            event.type === "PullRequestReviewCommentEvent" ||
            event.type === "ReleaseEvent" ||
            event.type === "SponsorshipEvent" ||
            event.type === "WatchEvent") &&
          new Date(event.created_at) >= pastDate
      );

      console.log(
        "Total number of contributions after filtering:",
        filteredContributions.length
      );

      // Log contributions for specific dates to verify correct filtering
      filteredContributions.forEach((contribution) => {
        console.log("Contribution Date:", new Date(contribution.created_at));
      });

      return filteredContributions;
    };

    const fetchData = async () => {
      try {
        const data = await fetchContributionsForLastDays(props.userName, 700); // Adjust days as needed
        setContributions(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [props.userName]);

  return (
    <div>
      <div>{props.userName}</div>
      {contributions.map((contribution: any, index: number) => (
        <div key={index}>
          <h3>Contribution Type: {contribution.type}</h3>
          <h3>
            Contribution At:{" "}
            {new Date(contribution.created_at).toLocaleString()}
          </h3>
          <h4>Payload:</h4>
          <ul>
            {contribution.type === "PushEvent" &&
              contribution.payload.commits &&
              contribution.payload.commits.length > 0 && (
                <li>
                  <strong>Message:</strong>{" "}
                  {contribution.payload.commits[0].message}
                </li>
              )}
            {contribution.type === "PullRequestEvent" &&
              contribution.payload.pull_request && (
                <li>
                  <strong>Title:</strong>{" "}
                  {contribution.payload.pull_request.title}
                </li>
              )}
            {/* Include other payload details for other event types as necessary */}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default GitHubCalendar;

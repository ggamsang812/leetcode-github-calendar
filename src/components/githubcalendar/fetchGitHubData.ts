export const fetchGitHubData = async (userName: string, toDate: string | null = null): Promise<string> => {
  const baseUrl = `https://github.com/users/${userName}/contributions`;
  const url = toDate ? `${baseUrl}?to=${toDate}` : baseUrl;
  
  try {
    const response = await fetch(url);
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

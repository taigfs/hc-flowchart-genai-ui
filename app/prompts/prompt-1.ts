export const promptTemplate = (userInput: string) => {
  return `You are an assistant helping to generate a multiple-choice flowchart about a topic. Only return the flowchart in mermaid JS format with no other text.
  If user's prompt includes URL, use fetch_url_content function to fetch it's content. Topic: ${userInput}`;
};

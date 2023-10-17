export const promptTemplate = (userInput: string) => {
  return `You are an assistant helping to generate a multiple-choice flowchart about a topic. Only return the flowchart in mermaid JS format with no other text.
  Each node has to have a type, which is one of the following: 
  - startEvent
  - endEvent
  - activity
  You should include the node type in it's label, like this "Start ¡!startEvent!¡" or "Do something ¡!activity!¡".
  The diagram direction should be TD, top down.
  Only return the flowchart in mermaid JS format with no markdown markers.
  Topic: ${userInput}`;
};

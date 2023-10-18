const sampleMermaidCode = `\`\`\`mermaid
  graph TD;
  Start(Start ¡!startEvent!¡)-->A(Enter username ¡!activity!¡);
  A-->B(Enter password ¡!activity!¡);
  B-->C(Click "Login" button ¡!activity!¡);
  C-->D{Login successful?};
  D-->|Yes|E(Show user's homepage ¡!activity!¡);
  D-->|No|F(Show error message ¡!activity!¡);
  F-->G(Ask user to try again ¡!activity!¡);
  G-->B;
  E-->End(End ¡!endEvent!¡);
  G-->End;
\`\`\``;

export default sampleMermaidCode;

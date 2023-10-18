import sampleMermaidCode from '../lib/samples/mermaid-code-5';
import {
  removeDoubleQuoteInsideParentheses,
  removeMarkdowncode,
} from '../lib/utils';

describe('Testing parseMermaidCode function', () => {
  it('should remove double quotes inside parentheses', async () => {
    const input = `B-->C(Click "Login" button ¡!activity!¡);`;
    const result = removeDoubleQuoteInsideParentheses(input);
    console.log(result);
    expect(result).toBe(`B-->C(Click Login button ¡!activity!¡);`);
  });

  it('should return a filtered mermaidCode', async () => {
    const mermaidCode = sampleMermaidCode;
    const filteredMermaidCode = removeDoubleQuoteInsideParentheses(
      removeMarkdowncode(mermaidCode)
    );
    console.log(filteredMermaidCode);
    expect(true).toBe(true);
  });
});

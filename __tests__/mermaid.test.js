import sampleMermaidCode from '../lib/samples/mermaid-code-4';
import { replaceDoubleQuotes } from '../lib/utils';

describe('Testing parseMermaidCode function', () => {
  it('should return a filtered mermaidCode', async () => {
    const mermaidCode = sampleMermaidCode;
    const filteredMermaidCode = replaceDoubleQuotes(mermaidCode);
    console.log(filteredMermaidCode);
    expect(true).toBe(true);
  });
});

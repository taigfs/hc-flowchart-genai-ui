import { parseMermaidCode } from '../lib/mermaid-utils';
import { sampleMermaidCode } from '../lib/samples/mermaid-code-3';

describe('Testing parseMermaidCode function', () => {
  // Mock mermaid e outras funções globais ou importações que não são o foco do teste.
  // jest.mock('mermaid', () => ({
  //   initialize: jest.fn(),
  //   render: jest.fn().mockResolvedValue({ svg: '<svg></svg>' }),
  // }));

  it('should return nodes and edges', async () => {
    const mermaidCode = sampleMermaidCode;
    const result = await parseMermaidCode(mermaidCode);

    expect(result.nodes).toBeDefined();
    expect(result.edges).toBeDefined();
  });
});

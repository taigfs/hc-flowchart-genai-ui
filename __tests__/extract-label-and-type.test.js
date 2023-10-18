import '@testing-library/jest-dom';
import { extractLabelAndType } from '../lib/utils';

describe('Testing extractLabelAndType function', () => {
  it('should extract label and type correctly', () => {
    const input = 'HelloLabel¡!default¡!';
    const result = extractLabelAndType(input);

    expect(result.label).toBe('HelloLabel');
    expect(result.type).toBe('default');
  });

  it("should default type to 'default' if not present", () => {
    const input = 'HelloLabel';
    const result = extractLabelAndType(input);

    expect(result.label).toBe('HelloLabel');
    expect(result.type).toBe('default');
  });

  it('should clear unknow chars at the end', () => {
    const input = 'Fim ¡!endEvent!��';
    const result = extractLabelAndType(input);

    expect(result.label).toBe('Fim');
    expect(result.type).toBe('endEvent');
  });
});

import { describe, it, expect } from 'vitest';
import { shake } from './magic8ball';
import { RESPONSES } from './responses';

describe('magic8ball', () => {
  it('returns error message for empty question', () => {
    expect(shake('')).toBe('Please ask a question!');
    expect(shake('   ')).toBe('Please ask a question!');
  });

  it('returns valid response for non-empty question', () => {
    const result = shake('Will this work?');
    expect(RESPONSES).toContain(result);
  });
});

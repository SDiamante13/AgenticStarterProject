import { RESPONSES } from './responses';

export const shake = (question: string): string => {
  if (!question.trim()) {
    return 'Please ask a question!';
  }
  return getRandomResponse();
};

const getRandomResponse = (): string => {
  const index = Math.floor(Math.random() * RESPONSES.length);
  return RESPONSES[index];
};

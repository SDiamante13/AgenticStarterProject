#!/usr/bin/env node

import { shake } from './magic8ball';

const main = (): void => {
  const args = process.argv.slice(2);
  const question = args.join(' ');

  if (!question) {
    console.log('🎱 Magic 8 Ball');
    console.log('\nUsage: magic8ball <your question>');
    console.log('Example: magic8ball Will it rain tomorrow?');
    process.exit(0);
  }

  console.log(`\n🎱 Question: ${question}`);
  console.log(`✨ Answer: ${shake(question)}\n`);
};

main();

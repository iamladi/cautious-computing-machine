#!/usr/bin/env bun
import { z } from 'zod';
import { readFile } from 'fs/promises';
import { join } from 'path';

const GitHubSourceSchema = z.object({
  source: z.literal('github'),
  repo: z.string().regex(/^[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+$/, 'Invalid GitHub repo format (expected: owner/repo)'),
});

const UrlSourceSchema = z.object({
  source: z.literal('url'),
  url: z.string().url(),
});

const RelativeSourceSchema = z.string().startsWith('./');

const SourceSchema = z.union([
  GitHubSourceSchema,
  UrlSourceSchema,
  RelativeSourceSchema,
]);

const PluginSchema = z.object({
  name: z.string().regex(/^[a-z0-9-]+$/, 'Plugin name must be kebab-case'),
  source: SourceSchema,
  description: z.string().optional(),
});

const MarketplaceSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  owner: z.object({
    name: z.string(),
    email: z.string().email().optional(),
    url: z.string().url().optional(),
  }),
  plugins: z.array(PluginSchema),
});

async function validateMarketplace() {
  const marketplacePath = join(process.cwd(), '.claude-plugin/marketplace.json');

  try {
    const content = await readFile(marketplacePath, 'utf-8');
    const json = JSON.parse(content);

    const result = MarketplaceSchema.safeParse(json);

    if (!result.success) {
      console.error('❌ Marketplace validation failed:');
      console.error(JSON.stringify(result.error.format(), null, 2));
      process.exit(1);
    }

    console.log('✅ Marketplace schema is valid');
    console.log(`   Found ${result.data.plugins.length} plugins`);

    result.data.plugins.forEach(plugin => {
      console.log(`   - ${plugin.name}`);
    });

  } catch (error) {
    if (error instanceof Error) {
      console.error('❌ Error reading marketplace.json:', error.message);
    }
    process.exit(1);
  }
}

validateMarketplace();

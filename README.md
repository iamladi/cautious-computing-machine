# cautious-computing-machine

Official marketplace for Claude Code plugins by Ladi. Essential tools and workflows to supercharge your development experience.

## Installation

Add this marketplace to your Claude Code:

```bash
/plugins marketplace add iamladi/cautious-computing-machine
```

Once added, you can browse and install plugins directly through Claude Code.

## Available Plugins

### 🚀 SDLC Plugin

Comprehensive SDLC plugin with specialized agents, commands, and integrations for enhanced software development workflow.

**Version:** 1.6.0

**Install:**
```bash
/plugin install sdlc
```

**Repository:** [cautious-computing-machine--sdlc-plugin](https://github.com/iamladi/cautious-computing-machine--sdlc-plugin)

**What's included:**

#### Specialized Agents
- `codebase-analyzer` - Deep implementation analysis with file:line references
- `codebase-locator` - Fast component discovery across your codebase
- `codebase-pattern-finder` - Pattern detection and architecture understanding
- `web-search-researcher` - Real-time research via web search

#### Slash Commands
- `/plan` - Generate comprehensive PRDs with phases and validation
- `/research` - AI-powered research with project context
- `/implement` - Execute implementation based on plans
- `/verify` - Validate implementation (build, tests, plugin schema, code review)
- `/submit` - Prepare work for review (auto-runs verify as quality gate)

#### Skills
- `codex` - OpenAI Codex integration for automated refactoring
- `gemini` - Google Gemini integration

#### Integrations
- **Context7** - Up-to-date library documentation
- **Perplexity** - Advanced web search

**Best for:**
- Planning features with comprehensive PRDs
- Understanding complex codebases
- AI-assisted refactoring and analysis
- Research-driven development
- End-to-end SDLC workflows

**Time saved:** ~2 hours per feature planning, ~1 hour on codebase analysis

[View full documentation →](https://github.com/iamladi/cautious-computing-machine--sdlc-plugin#readme)

---

### 🔧 Primitives

Essential building blocks for Claude Code workflows.

**Version:** 1.6.0

**Install:**
```bash
/plugin install primitives
```

**Repository:** [cautious-computing-machine--primitives-plugin](https://github.com/iamladi/cautious-computing-machine--primitives-plugin)

**What's included:**

#### Slash Commands
- `/commit` - Smart commit specialist with automatic batching and conventional commit standards
- `/debug` - Investigate issues through parallel analysis of logs, database, and git history
- `/install` - Verify tooling and install dependencies with health checks
- `/prime` - Quick codebase understanding and context loading
- `/start` - Start development environment from project docs
- `/tools` - List all available built-in development tools

#### Skills
- `ask-oracle` - GPT-5 Pro / GPT-5.1 reasoning for complex architectural problems
- `check-env-keys` - Validate environment variables without exposing secrets
- `de-slop` - Clean AI-generated artifacts before committing

**Best for:**
- Teams enforcing coding standards
- Streamlining git workflows
- Debugging during development
- Quick project onboarding
- Secure environment validation

**Time saved:** ~14 minutes per feature, ~40 minutes on project setup

[View full documentation →](https://github.com/iamladi/cautious-computing-machine--primitives-plugin#readme)

---

### 🔄 GitHub Plugin

GitHub CI/CD automation plugin for auto-detecting, analyzing, and fixing CI/CD failures on any branch.

**Version:** 1.4.0

**Install:**
```bash
/plugin install github
```

**Repository:** [cautious-computing-machine--github-plugin](https://github.com/iamladi/cautious-computing-machine--github-plugin)

**What's included:**

#### Specialized Agents
- `ci-log-analyzer` - Parse CI logs and identify error patterns
- `ci-error-fixer` - Apply fixes based on CI error types

#### Slash Commands
- `/fix-ci` - Auto-detect, analyze, and fix CI/CD failures on any branch
- `/create-issue-from-plan` - Convert implementation plans into GitHub Issues with checklists
- `/create-pr` - Create GitHub Pull Request with proper formatting and plan linking
- `/address-pr-comments` - Interactive or autonomous PR comment resolution with confidence scoring
- `/review-pr` - Comprehensive PR review with detailed analysis and actionable feedback

**Best for:**
- Automated CI/CD failure detection and resolution
- PR workflow automation
- Code review assistance
- GitHub integration workflows

**Time saved:** ~30 minutes per CI failure, ~20 minutes per PR workflow

[View full documentation →](https://github.com/iamladi/cautious-computing-machine--github-plugin#readme)

## Usage

After adding the marketplace, install any plugin:

```bash
/plugin install <plugin-name>
```

List installed plugins:
```bash
/plugin list
```

Remove a plugin:
```bash
/plugin remove <plugin-name>
```

## Contributing

Want to add your plugin to this marketplace? Open an issue or PR at the [marketplace repository](https://github.com/iamladi/cautious-computing-machine).

## License

MIT - See [LICENSE](LICENSE) for details
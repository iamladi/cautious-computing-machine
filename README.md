# cautious-computing-machine

Official marketplace for Claude Code plugins by Ladi. Essential tools and workflows to supercharge your development experience.

## Installation

Add this marketplace to your Claude Code:

```bash
/plugins marketplace add iamladi/cautious-computing-machine
```

Once added, you can browse and install plugins directly through Claude Code.

## Available Plugins

### 🔧 Primitives

Essential building blocks for Claude Code workflows.

**Install:**
```bash
/plugin install primitives
```

**Repository:** [cautious-computing-machine--primitives-plugin](https://github.com/iamladi/cautious-computing-machine--primitives-plugin)

**What's included:**

#### Slash Commands
- `/commit` - Smart commit specialist with automatic batching and conventional commit standards
- `/debug` - Investigate issues through parallel analysis of logs, database, and git history
- `/generate_branch` - Create semantic git branch names from issues
- `/install` - Verify tooling and install dependencies with health checks
- `/pr` - Automated GitHub pull request creation with proper formatting
- `/prime` - Quick codebase understanding and context loading
- `/start` - Start development environment from project docs
- `/tools` - List all available built-in development tools

#### Skills
- `check-env-keys` - Validate environment variables without exposing secrets

**Best for:**
- Teams enforcing coding standards
- Streamlining git workflows
- Debugging during development
- Quick project onboarding
- Secure environment validation

**Time saved:** ~14 minutes per feature, ~40 minutes on project setup

[View full documentation →](https://github.com/iamladi/cautious-computing-machine--primitives-plugin#readme)

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
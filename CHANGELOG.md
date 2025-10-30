# Changelog

## [1.0.1] - 2025-10-30

### Fixed
- Fixed marketplace.json schema validation errors by replacing `repository` fields with proper `source` objects following GitHub source format

### Added
- GitHub Actions workflow for automated marketplace schema validation
- Validation script using Zod for schema enforcement
- CI/CD pipeline to validate marketplace.json on PRs and pushes

## [1.0.0] - 2025-10-30

### Added
- Initial marketplace with sdlc and primitives plugins

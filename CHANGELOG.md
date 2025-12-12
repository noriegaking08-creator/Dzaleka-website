# Changelog

All notable changes to the Dzaleka CDSS Website project will be documented in this file.

## [Unreleased] - 2025-01-04

### Added
- Initial project setup with Flask backend and React frontend
- Contact form with thread-safe file operations
- Gallery with automatic slideshow
- About, Achievements, and Supporters sections
- Dark/light mode toggle functionality
- TypeScript support for frontend
- Framer Motion animations
- Bootstrap styling
- API endpoints for all content sections

### Changed
- Improved backend route safety with datetime stamps for contact submissions
- Enhanced error handling for file operations
- Added thread locking for concurrent contact form submissions
- Updated README with comprehensive documentation
- Added proper .gitignore files for backend, frontend, and root
- Updated dependencies to ensure compatibility
- Added proper LICENSE file (MIT)
- Enhanced styling with CSS custom properties and animations

### Fixed
- Fixed potential race condition in contact form submissions
- Added proper error handling for JSON file operations
- Fixed Werkzeug compatibility issue by updating Flask dependencies
- Added timestamp to contact submissions
- Improved type safety in frontend TypeScript components

## Future Improvements
- Database integration instead of JSON file storage for contact forms
- Email integration for contact form notifications
- Enhanced testing coverage
- Deployment configuration
- Performance optimization
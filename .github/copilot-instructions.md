# Copilot Instructions for AI Agents

## Project Overview
- This is an Angular standalone component project (Angular CLI v19+), using the latest Angular module-less patterns.
- Source code is in `src/app/`, with each feature in its own folder (e.g., `data-binding/`, `getapi/`, `reactive-form/`, etc.).
- Components are mostly standalone (see `standalone: true` in decorators) and import their own dependencies.
- Routing is handled via Angular's router, with route configs in `app.routes.ts` and `app.routes.server.ts`.
- HTTP requests use Angular's `HttpClient` (see `getapi.component.ts`).

## Key Workflows
- **Start Dev Server:** `ng serve` (see README)
- **Build:** `ng build`
- **Unit Tests:** `ng test` (Karma)
- **Generate Component:** `ng generate component <name>`

## Patterns & Conventions
- Use Angular's standalone component pattern: declare `standalone: true` and import dependencies in the `imports` array of the `@Component` decorator.
- Use dependency injection for services (e.g., inject `Router` or `HttpClient` via constructor).
- For forms, both template-driven (`tamplate-form/`) and reactive (`reactive-form/`) approaches are present. Follow the pattern in each directory.
- HTTP calls are made using `HttpClient` injected in the constructor. Responses are assigned to component properties for template binding.
- Use `Router` for navigation (see `goReactive()` in `tamplate-form.component.ts`).
- CSS and HTML for each component are colocated in their respective folders.

## Integration Points
- No global state management (e.g., NgRx) is present; state is local to components.
- No backend integration beyond sample HTTP calls to public APIs (see `getapi/`).
- No custom Angular modules; all features are implemented as standalone components.

## Examples
- To add a new feature, create a new folder in `src/app/`, generate a standalone component, and import required Angular modules in the `imports` array.
- For cross-component navigation, use Angular's `Router` service.

## References
- See `README.md` for build/test/dev commands.
- See `src/app/` for feature/component structure and patterns.

---
If you add new conventions or patterns, update this file to help future AI agents and developers.

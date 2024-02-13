# JbAutocompleteReprod

This is a reproduction repo to illustrate missing autocomplete function when using SCSS classes in Angular.

## Setup
Simple Angular multi project workspace with a library and an application.

- The library contains a `rect.scss` file which uses some SCSS functionality to build up a `my-company-rect` class.
- The build process builds this file under `dist/my-awesome-lib/main.css`.

## Steps to reproduce
1. npm ci
2. npm run build
3. Open `my-aweseome-lib.component.ts` and try to delete the `my-company-rect` class and retype it. There are no autocomplete suggestions.

## Things we tried - Ideas - possible solutions
1. We tried to unmark dist as not excluded. But this was not possible and as Jan pointed out it would probably introduce some other problems (imports would get suggested twice).
2. It would work if the IDE could understand the dynamic classes build with SCSS.
3. Current workaround is to build the CSS top level to another directory named `dev-helpers` which is not excluded.

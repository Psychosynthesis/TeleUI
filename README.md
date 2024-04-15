# This is dev branch of TeleUI

## Purpose of branches
 1. `dev` — main development branch. The build is being made in this branch and here are the priority versions of the components.
 2. `main` — branch to publich npm-package. All files in the `/build` folder of this branch must be copies from the same folder in the "dev" branch.
 3. `deplou` — branch used to publish main guide to Github Pages (work in progress)


## Operating procedure
After making changes to the `dev` branch, you need make `npm run build`, commit the changes,
then switch to the `main` branch and synchronize the build folder: \
`git checkout dev build/`


All builds made with [@vite](https://vitejs.dev/).

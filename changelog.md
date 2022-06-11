# Changelog
Is there a need to explain the point of this file?
This file only tracks the latest major version and following revisions/subversions
Note: *There is no changelog available for V4 and earlier. Please go [here](https://github.com/GalvinPython/JSALStats/blob/old-v3/changelog.md) for V3 changelogs*

## Version 4 Beta
## V4.0.1.1
- Commit: `11/06/22`
- Description: **Fixed time bug**
### Changes
- app.js
  - `Date()` is now `let` instead of `const`

## V4.0.1
- Commit: `10/06/22`
- Description: **Fixed major security bug**
### Changes
- .GITIGNORE
  - ignore archive folder
- app.js
  - Fixed security issue - tokens were committed to the repository
  - These keys are now invalidated, and are removed

# Version 4 Alpha
## V4.0.0.4
- Commit: `09/06/22`
- Description: **Cleaning up on app.js + Visual Work**
### Changes
- app.js
  - Updated `console.log()` functions to improve reading in logs *(minor/visual)*
  - Outputs timestamp of new data fetch to improve reading in logs *(minor/visual)*

## V4.0.0.3
- Commit: `08/06/22`  
- Description: **Updated Procfile**
### Changes
- Procfile
  - Why? Because why not

## V4.0.0.2
- Commit: `3/6/22`
- Description: **Updated URLs and metadata stuff**
### Changes
- The url `https://mixerno.space/api/youtube-channel-counter/user` has been changed to `${baseURL}`
- Moved NPM packages (`package-lock.json` and `package.json`) to `src/`

## V4.0.0.1
- Commit: `3/6/22`
- Description: **Preparations for V4 updates**
### Changes
- Moved some files around
- `src/` is where files will be committed to Heroku, so that pushes won't be forced due to clashes

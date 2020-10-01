# Releases

When creating a new release:

- Update version number in `package.json`, `src/cooltipz.scss`
- Delete `node_modules/`
- Run `npm run prerelease`
- `git commit -m "Updated version from v_old version number_ to v_new version number."`
- Push changes to GitHub and tag a new release
- Then when happy with new changes, run `npm publish` and check npm and yarn have updated successfully
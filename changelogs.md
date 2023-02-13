#### Version 1.0

- initial release

#### Version 1.1

- added some additional configuration to set a custom width
- added the option to scroll the destination text horizontally

#### Version 1.2

- now displays delays

#### Version 1.5

- delay bugfix and styling changes
- rail track is now displayed
- added additional display type

#### Version 1.5.1

- fix for [Issue #3](https://github.com/Klizzy/MMM-Vrr/issues/3) scrollAfter and displayType lcd

#### Version 1.6

- shown lines can now be filtered and code improvements. THX [@wapolinar](https://github.com/wapolinar) !
- added `contributing.md`

#### Version 1.6.1

- Bugfix for station configurations which get fewer results then specified in the config. THX [@byWulf](https://github.com/byWulf) !
- Set correct module version in `package.json`

#### Version 1.6.2

- Bugfix for typo in default variable name for `lcdWidth`. THX [@MarNwk](https://github.com/MarNwk) !
- Fixed the same typo where the config has been read
- `setAttribute()` will now be used to set the configured value, instead of direct interaction with the `style` property
- Set correct module version in `package.json`

#### Version 1.6.3

- Bugfix for LCD displayType option not updating - see [issue 14](https://github.com/Klizzy/MMM-Vrr/issues/14) for more details
- Refactoring code to make it more readable
- `setAttribute()` will now be used to set the configured value, instead of direct interaction with the properties
- Set correct module version in `package.json`

#### Version 1.6.4

- Added npm request dependency into module see [issue 14](https://github.com/Klizzy/MMM-Vrr/issues/14)
- Added keywords into package.json
- Added `package-lock.json`

#### Version 1.6.5

- Config parameters are now also applied on `displayType: lcd` view [issue 14](https://github.com/Klizzy/MMM-Vrr/issues/14)
- Updated readme
- Migrated changelog into `changelogs.md`

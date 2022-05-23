# Changelog
Is there a need to explain the point of this file?
This file only tracks the latest major version and following revisions/subversions
Note: *There is no changelog available for V3 and earlier*

# Verson 3.0.4.2.1
Updated: `23/05/2022`  
Description: `Fixed issue in changelog.md`
- An older version of this file didn't have a file correctly rendered

# Version 3.0.4.2
Released: `14/01/2022`
Description: `Fixed date problem`
- Date wasn't initialised before time was assigned, causing the bot to break

# Version 3.0.4
Released: `13/01/2022`
Description: `Fixed timezone issue`
- Time now runs on GMT instead of BST

# Version 3.0.3
Released: `10/01/2022`
- Addressed a severe issue (that no one's interested in)
  - Twitter API keys were uploaded under *temp_json.txt*
    - This file has been deleted
  - Changed keys so that they are new, and *hopefully* ignored
- Removed `Changelog` folder since there was no need for it

# Version 3.0.2
- Functions are called at end of code
- Fixed wrong view array for JSAGData() and JSACData() 

# Version 3.0.1
- Fixed Mixerno.space links

# Version 3.0.0
- Released: `06/01/2022`

<!-- NEW SECTION -->
## Changes
### API
- Still using [Mixerno](https://www.mixerno.space) for their API
  - However, the API is now located on a different link

### Channels being tracked
- *JackSucksAtClips/JSAC* wasn't being tracked due to inactivity, however it's back.
  - The channel is marked by a `💜`
- As the challenge is over, *Don't Subscribe/DS* is now no longer being tracked
- *JACKSEPICYOUTUBECHANNELFULLOFFUNTIMESANDFUNHIRICKXHASNOTHINGONMEIAMTHESUPERIORCHANNELIHAVEMORECHARACTERSTHANALLOFJACKSYOUTUBECHANNELSCOMBINEDHAHAHAHAIHAVEMORECHARACTERSTHANJACKSUCKSATLIFEJACKSUCKSATSTUFFJACKMASSEYWELSHJACKSUCKSATGEOGRAPHYJACKSUCKSATCLIPSSAMSMELLSOFAPRICOTSJACKSUCKSATPOPUPPIRATEETCETCIMAGINETHISONAPLAYBUTTONJESUSCHRISTBTWPLEASESUBSCRIBETHANKYOUVERYMUCHHIRICKXxXxXX* is also no longer being tracked due to inactivity

### Technical
- `app.js` + `config.json`
  - Instead of the API keys being embedded into `app.js`, the data from `config.json` is now loaded

## Additions
Right now, this update just covers some minor changes with the API stuff.  
Things will be different in the future however 

<!-- NEW SECTION -->
### Technical
- `config.json`
  - A file that holds keys

### Tweets
- The following channels have their own emoji to easily see each channel  

| Channel | Emoji
| --- | ---
| JSAL (JackSucksAtLife)| ❤️
| JSAS (JackSucksAtStuff) | 💛
| JMW (Jack Massey Welsh) | 💙
| JSAG (JackSucksAtGeography) | 💚
| JSAC (JackSucksAtClips) | 💜

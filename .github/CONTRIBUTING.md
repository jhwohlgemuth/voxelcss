<p align="left">
    <a href="https://github.com/jhwohlgemuth/voxelcss"><img width="300px" alt="voxelcss" src="https://raw.githubusercontent.com/jhwohlgemuth/voxelcss/master/media/voxelcss_with_letters.png"/></a>
</p>

Code of Conduct
---------------
> Please read and adhere to the [code of conduct](CODE_OF_CONDUCT.md)

Issues
------
> When creating an issue, please complete the template to *the best of your ability*

If you would like to make a feature request or enhancement suggestion, please check the [Trello](https://trello.com/b/Q3sVE18k/voxelcss) board first (feel free to make a comment on a card :smile:)

Pull Requests
-------------
> When submitting a pull request, please give your PR a descriptive name and complete the template to *the best of your ability*

> **Note:** Linux is the only actively supported platform for development (although it is probably possible to use Windows and/or Mac)

**Setup**

```bash
# clone repository
git clone git@github.com/jhwohlgemuth/voxelcss.git
cd voxelcss
# install project dependencies
npm install
# verify voxelcss installed correctly by running tests
npm test
# to use the "design" and "dev" tasks, install browser-sync and stmux, respectively
npm install  browser-sync stmux --global
```

**Workflow Tasks**
- `npm run dev` *run test and lint tasks in watch mode using [stmux](https://github.com/rse/stmux)*
- `npm test` *run tests*
- `npm run test:watch` *run tests (watch mode)*
- `npm run lint` *lint code*
- `npm run lint:watch` *lint code (watch mode)*
- `npm run design` *open browser to see "live" changes*

Code must:
- Be "lint free" -- `npm run lint` with no warnings/errors
- Pass all tests -- `npm test` with no failures
- Maintain current code coverage (within reason)
- Be reasonable in scope and implementation details
- Pass all automated checks:
  - Run unit and visual regression tests on [Travis CI](https://travis-ci.org/jhwohlgemuth/voxelcss) (linux)
  - Run unit tests on [Appveyor](https://ci.appveyor.com/project/jhwohlgemuth/voxelcss/branch/master) (windows)
  - Calculate code coverage with [coveralls.io](https://coveralls.io/github/jhwohlgemuth/voxelcss?branch=master)
  - Analyze code for quality on [bithound](https://www.bithound.io/github/jhwohlgemuth/voxelcss)
  - Analyze code for security concerns on [SNYK](https://snyk.io/test/github/jhwohlgemuth/voxelcss)
  - Analyze code licenses on [FOSSA](https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fjhwohlgemuth%2Fvoxelcss/refs/branch/master/bba75199c56426373dc183f51edcb2be4003f286)

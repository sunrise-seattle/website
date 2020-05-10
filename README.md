# Sunrise Seattle Hub Website

## Contributing

### Setup

1. Create an SSH key and add it to your Github profile (so you won't have to type in your password every time). There's a great guide [here](https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).
1. Make sure that `git` is installed. I recommend installing through a package manager like [Homebrew](https://brew.sh/) or [Scoop](https://scoop.sh/). For those not familiar with `git` CLI, Github also makes a free [desktop client](https://desktop.github.com/).
1. Clone the repository: `git clone git@github.com:sunrise-seattle/website.git`
1. Install `yarn` (using one of those package managers is again recommended).
1. Run `yarn install` to install dependencies.
1. Run `yarn start` to start the development server and start contributing!

### Git Workflow
1. Start development server (see 5-6 from Setup).
1. Check out a new branch (`git checkout -b <name-of-branch>`).
1. Make changes to the files.
1. Add files to a new git commit (`git add .`).
1. Commit the files to be pushed (`git commit -m "Message here."`).
1. Push files to a new branch (`git push origin <name-of-branch>`).
1. Go to Github website and start a new pull request (green button on repo page).

### Deploying

This repository is set up to automatically deploy site changes to production.

## Tools used

- [Gatsby](https://www.gatsbyjs.org/)
- [Github Actions](https://github.com/features/actions)
- [Github Pages](https://pages.github.com/)
- [React.js](https://reactjs.org/)

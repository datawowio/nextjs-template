# Data Wow - Next.js Template 🦄

![Build and Test](https://github.com/datawowio/nextjs-template/actions/workflows/build_and_test.yml/badge.svg)
![Deploy Storybook](https://github.com/datawowio/nextjs-template/actions/workflows/deploy_storybook.yml/badge.svg)

Welcome to the **Data Wow's Next.js Template** repository! This is an
open-source template that we use internally at our organization for creating new
Next.js projects. The template provides a fully-configured Next.js setup out of
the box, allowing developers to hit the ground running with a robust and
scalable foundation.

## Prerequisites 💻

To use this template, ensure you have the following installed:

- **[Node.js][1]** (v20.17.0)
- **[asdf][2]** as the version manager
- **[Yarn][3]** as the dependency manager
- **[Visual Studio Code][4]** with the following extensions:
  - [Prettier][5]
  - [EditorConfig][6]
  - [ESLint][7]

## Setup 🚧

You can create a new Next.js project using this template by running the
following command:

```bash
npx create-next-app APP_NAME --use-yarn --example https://github.com/datawowio/nextjs-template
```

## Available Commands 🤖

This template comes with a set of predefined commands that simplify common
development tasks. Each command is designed to help you efficiently manage and
build your Next.js application. Here’s what you can do with them:

| Command                | Description                                                     |
| ---------------------- | --------------------------------------------------------------- |
| `yarn build`           | Builds the application for production.                          |
| `yarn build-storybook` | Builds the Storybook for deployment.                            |
| `yarn dev`             | Runs the application in development mode.                       |
| `yarn format`          | Formats the code using Prettier according to the project rules. |
| `yarn lint`            | Runs ESLint to lint the codebase for errors and warnings.       |
| `yarn start`           | Starts the production build of the application.                 |
| `yarn storybook`       | Runs Storybook in development mode to showcase UI components.   |
| `yarn test`            | Runs the test suite with Jest.                                  |
| `yarn test:watch`      | Runs the test suite in watch mode for continuous testing.       |

## What We Provide 👩‍💻

This template comes with a comprehensive setup out of the box, including:

- **[MUI][8]**: A pre-configured Material UI setup with theming support.
- **[Storybook][9]**: A fully-integrated Storybook environment for building and testing UI components.
- **[Internationalization][10]**: Configured with `next-intl` for handling multiple languages.
- **[Jest Testing][11]**: A testing framework setup with Jest to ensure your application functions as expected.
- **Library Conventions**: Standard libraries pre-installed and configured for seamless development.
- **Basic Folder Structure**: A recommended folder structure that every React application should follow for scalability and maintainability.

## License ⚖️

This project is licensed under the terms of the MIT license. For more details,
please refer to the [LICENSE](./LICENSE) file in the repository.

## We Love Open Source ❤️

We believe in the power of open-source software. Contributions, feature
requests, and bug reports are always welcome! Feel free to submit a pull
request, open an issue, or get in touch if you have any suggestions or feedback.

[1]: https://nodejs.org/en
[2]: https://asdf-vm.com/
[3]: https://yarnpkg.com/
[4]: https://code.visualstudio.com/
[5]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[6]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[7]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[8]: https://v5.mui.com/
[9]: https://storybook.js.org/
[10]: https://next-intl-docs.vercel.app/
[11]: https://jestjs.io/

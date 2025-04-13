# Meepow Docs

Welcome to the Meepow Docs project! This website is built using [Docusaurus](https://docusaurus.io/), a modern and powerful static site generator. It serves as the official documentation and information hub for the Meepow platform.

## 🚀 Features

- **Interactive Documentation**: Easily navigate through guides and tutorials.
- **Modern Design**: Built with a responsive and user-friendly interface.
- **Fast and Reliable**: Powered by Docusaurus for optimal performance.

## 🛠️ Installation

To get started, install the project dependencies:

```bash
$ yarn
```

## 💻 Local Development

Run the following command to start a local development server:

```bash
$ yarn start
```

This will open the website in your browser. Any changes you make will be reflected live without restarting the server.

## 📦 Build

To generate a production-ready build of the website:

```bash
$ yarn build
```

The static files will be output to the `build` directory, ready to be hosted on any static hosting service.

## 🚢 Deployment

### Using SSH

If you prefer deploying with SSH, run:

```bash
$ USE_SSH=true yarn deploy
```

### Without SSH

For deployments without SSH, use:

```bash
$ GIT_USER=<Your GitHub username> yarn deploy
```

This will build the website and push it to the `gh-pages` branch of your repository, ideal for GitHub Pages hosting.

## 🤝 Contributing

We welcome contributions! Feel free to submit issues or pull requests to improve the website.

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

Thank you for being part of the Meepow community! 💙
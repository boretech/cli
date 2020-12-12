# bore-cli

A cli tool for bore tech frontend team.

![build status](https://img.shields.io/github/workflow/status/xiaofuyesnew/bore-cli/publish) ![version](https://img.shields.io/github/package-json/v/xiaofuyesnew/bore-cli)

### Install

```bash
npm install bore-cli -g
```

### Usage

#### create specified type of project template

```bash
bore create [project_name] -t [h5|mini]
```

Command `create` has an alias name `c`. So you can easily use command `bore c`.

If you want to use interactive settings, use the command `bore c` directly.

Bore-cli will prompt you to input or select relevant information.

#### create project template from custom git registry

```bash
bore create [project_name] -g <url>
```

`<url>` can be a repository string to download the repository from:

- **github** - `github:url:owner/name#branch or simply url:owner/name#branch`
- **gitlab** - `gitlab:url:owner/name#branch`
- **Bitbucket** - `bitbucket:url:owner/name#branch`


Also, it can be a http or https url:

use `direct:url`

More detail, see [download-git-repo](https://www.npmjs.com/package/download-git-repo).

### Notice

Bore-cli is an internal company version for internal company use only. Therefore, some of its functions will be authorized used with company assets. A public version that does not contain sensitive company information will be released later.
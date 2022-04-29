# @boretech/cli

[`English`](../README.md) | `简体中文`

般若技研前端使用的一个 CLI 工具。

![version](https://img.shields.io/npm/v/bore-cli) ![license](https://img.shields.io/github/license/xiaofuyesnew/bore-cli) ![node version](https://img.shields.io/node/v/bore-cli) ![build status](https://img.shields.io/github/workflow/status/xiaofuyesnew/bore-cli/publish)

## 安装

```bash
npm install bore-cli -g
```

## 使用

### 用特定模板创建项目

```bash
bore create [project_name] -t [h5|mini]
```

命令 `create` 可使用别名 `c`。 所以可以简单的使用这个命令 `bore c` 。

如果希望使用交互式操作，直接使用 `bore c` 。

`@boretech/cli` 会让你输入或选择必要的信息。

### 从自定义的仓库中创建项目

```bash
bore create [project_name] -g <url>
```

`<url>` 可以是仓库的 ssh 地址或者常规的 url 。

## 注意

`@boretech/cli` 是一个般若技研公司内部使用的版本。因此，一些功能需要公司的授权才能使用。公开版本的该工具将在进行公司信息脱敏后另行发布。
Bore-cli is an internal company version for internal company use only. Therefore, some of its functions will be authorized used with company assets. A public version that does not contain sensitive company information will be released later.

## 机枢 lowcode 平台

一个现代的、高可配置性的低代码平台。

[查看](https://github.com/jishu-lowcode)

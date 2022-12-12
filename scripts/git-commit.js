#!/usr/bin/env node

const fs = require("fs");

const chalk = require("chalk");

const gitParams = process.env.HUSKY_GIT_PARAMS || ".git/COMMIT_EDITMSG";
const prefixes = ["feat", "fix", "docs", "merge", "style", "refactor", "perf", "test", "build", "ci", "chore", "revert"];

const commitRE = new RegExp(`^(${prefixes.join("|")}): .{1,50}`);
const similarRE = /(^[a-zA-Z]+):/;
chalk.level = 1;
let message = fs.readFileSync(gitParams, "utf-8").trim();
const commitPrefixOption = {
    feat: "    新增功能",
    ui: "      更改界面样式",
    fix: "     修复了一些 bug",
    docs: "    更新了一下文档",
    merge: "   合并某个分支的代码(解决冲突)",
    style: "   不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等，没有改变代码逻辑)",
    refactor: "重构已有模块代码",
    perf: "    性能, 体验优化",
    test: "    新增测试用例或是更新现有测试",
    build: "   主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交",
    ci: "      主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交",
    chore: "   不属于以上类型的其他类，比如构建流程, 依赖管理",
    revert: "  回滚某个更早之前的提交",
};

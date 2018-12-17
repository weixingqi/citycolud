# 知识点记录

## 第一天

### git相关复习

#### 先回忆一下自己记得的知识点

* git add xxx  将文件提交到暂存区
* git commit -m'提交备注'  提交文件   注意-m和''之间没有空格
* git push    推送到远程仓库
* git checkout 分支名    切换分支
* git remote  对远程主机进行操作，具体记不太清楚了
* git rebase  记不清
* git fetch   记不清
* git status 查看状态
* git diff 查看修改内容
* git log 查看历史记录
* git log --pretty=oneline 查看简化后的历史记录信息
* git reset --hard HEAD^ 回到上一个版本每一个^表示一个版本，两个^就是回退两个版本 也可以用数字HEAD~1，HEAD~2

### git flow复习

#### 当前的了解，从master（发布版本）分支上切出develop（测试）分支，然后每个开发人员从develop分支上切出一个分支，完成一个功能后提交。

### commitzen学习

#### 在第一份实习中是有使用过的，但是当时只是使用，口头交流了一下commit的规则。
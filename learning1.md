# 知识点记录

## 第一天

### git相关复习

#### 先回忆一下自己记得的知识点

* git add xxx  将文件提交到暂存区
* git branch -d 分支名  删除分支
* git branch -D 分支名   删除一个未合并过的分支
* git commit -m'提交备注'  提交文件到当前分支   注意-m和''之间没有空格
* git push    推送到远程仓库
* git checkout 分支名    切换分支
* git remote  对远程主机进行操作，具体记不太清楚了
* git rebase  把本地未push的分叉提交历史整理成直线。查看历史提交的变化更容易
* git fetch   记不清
* git status 查看状态
* git diff 查看修改内容
* git log 查看历史记录
* git log --pretty=oneline 查看简化后的历史记录信息
* git log --graph 可以看到分支合并图
* git log --graph --pretty=oneline --abbrev-commit 参数是可以添加的
* git reset --hard HEAD^ 回到上一个版本每一个^表示一个版本，两个^就是回退两个版本 也可以用数字HEAD~1，HEAD~2。HEAD表示当前版本
* git checkout -- 文件名  撤销未add过的（工作区）修改
* git rm 文件名 删除版本库中的文件  删除后可以直接commit
* git stash  把当前工作区的修改隐藏。
* git stash list 查看隐藏的工作现场。
* git stash apply 恢复隐藏的工作但是没有删除stash的内容
* git stash drop 删除stash的内容
* git stash pop 是恢复的同时把stash的内容也删了
* git merge 分支名  把“分支名”合并到当前分支
* git merge --no-ff git默认是采用快速合并，没有合并记录。--no-ff可以设置为普通合并，有记录
* git remove -v 查看远程主机信息
* git tag v1.0  在当前分支创建一个标签，默认绑定在最新的commit上。
* git tag 查看所有标签
* git tag v0.9 commit-id  对指定的commit-id添加标签
* git show v1.0 查看标签信息
* git tag -a v1.0 -m'version 0.1 released' commit-id   创建带有说明的标签，用-a指定标签名，-m指定说明文字
* git tag -d v1.0  删除标签  
* git push origin :refs/tags/v0.9  从远程删除标签。如果标签推送到远程，本地和远程都要删除一遍
* 关于“把当前分支合并到XX分支”，理解了之后这句话听起来怪怪的。其实是先切换到XX分支（当然可以顺手再pull一下别人的代码），然后在XX分支上合并你的分支，比如把dev合并到master分支，其实是先git checkout master,再git merge dev.我觉得说成在master分支上把dev合并更容易理解一些。
* 从远程仓库克隆时，Git自动把本地的master分支和远程的master分支对应起来了，并且，远程仓库的默认名称是origin。

### git flow复习

#### 当前的了解，从master（发布版本）分支上切出develop（测试）分支，然后每个开发人员从develop分支上切出一个分支，完成一个功能后提交。

### commitzen学习

#### 在第一份实习中是有使用过的，但是当时只是使用，口头交流了一下commit的规则。
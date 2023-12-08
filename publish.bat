echo off & setlocal enabledelayedexpansion 
chcp 65001
set packageName=wilson-ui
call npm i
call npm run package


call set /p version=请输入版本号:
@REM 拷贝样式文件
call xcopy /S /D "%CD%/src/assets" "%CD%/%packageName%/lib"
if %1 !== test {
@REM 读取模板内容
set str=
for /f "delims=" %%a in (package_lock.json) do (
 set str=!str!%%a
)
@REM 进入静态包
call cd %CD%/%packageName%
@REM 设置版本号

@REM 替换版本号
set findVersionStr=1.0.0
call set str=%%str:%findVersionStr%=%version%%%

@REM 生成package文件
call echo %str% > package.json
@REM 发布到npm组件库
call npm  publish
}

# ������ ��� �������� ����������� ����� flex/flash ���������� ��� ������ gradle.

## ���� �����
### ���������� �������
- flex compile (Path to FlexSDK/maven dependency)
- as3 compile
- flex unit run (dependency)
- fla compile as static resource
- reliase compress 
- code quality (FlexPDM ?) before compile

### �������������� �������
- multy module project
- project dependency
- code coverage
- git submodule

## ��������� Gradle � ������ �����������.
�������� - �������� + Gradle_Home/bin � ����� Path. ��� ����� ���������.
������� ��������� � ���������� ������, ���� � ������.
	D:\Projects\GradleFlexTest>gradle tasks
	:tasks
	
	------------------------------------------------------------
	All tasks runnable from root project
	------------------------------------------------------------
	
	Build Setup tasks
	-----------------
	setupBuild - Initializes a new Gradle build. [incubating]
	
	Help tasks
	----------
	dependencies - Displays all dependencies declared in root project 'GradleFlexTest'.
	dependencyInsight - Displays the insight into a specific dependency in root project 'GradleFlexTest'.
	help - Displays a help message
	projects - Displays the sub-projects of root project 'GradleFlexTest'.
	properties - Displays the properties of root project 'GradleFlexTest'.
	tasks - Displays the tasks runnable from root project 'GradleFlexTest' (some of the displayed tasks may belong to subprojects).
	
	To see all tasks and more detail, run with --all.
	
	BUILD SUCCESSFUL

��� ���������� ���������, ��� ��� ��� ��������, ����� ��������� ��������� ����� user guide, �������� �� 9 �����. ����� ������ ����������,
����� �������� ������� �������� ������ �������. 
���, � ��������� ������ ���� user friendly gui ��� ����������� �������: 
	gradle --gui

*�������* 
- ��� ������������� ��������� ������ � ������������ ����� gradle ������� ���� ��������� ����� .gradle, ���� ���������� ���������
��������� ������. ����� �� �������, �� ����� ������������� �� �� ����� ������� ��� ���������� � ����.
- ��� ������� gui, � ����� ������� ��������� ���� �������������� ��������. �����, ����������� �� �������� � ������.
- ��� ������� ��������� ����� ������ ����� ��������� ���� ����� build.gradle � ����������� �� ���������. ������, � �������.


## �������
- (Gradle online)[http://www.gradle.org/]
- (User guide)[http://www.gradle.org/docs/current/userguide/userguide.html]
- (������ ���������� ���������� ��������)[http://wiki.gradle.org/display/GRADLE/Plugins]

*���� � gradle*
- (Gradle: Better Way To Build)[http://habrahabr.ru/post/107085/]
- (Gradle: Tasks Are Code)[http://habrahabr.ru/post/107558/]
- (������ Gradle?)[http://habrahabr.ru/post/106717/]
- (��� ��������� DBDeploy � Gradle)[http://habrahabr.ru/post/152765/]

- (Maven -> Gradle ������� �� �����, ����������)[http://anton-arhipov.livejournal.com/219397.html]

- (GradleFX)[http://gradlefx.org/]
- (GradleFX sources)[https://github.com/GradleFx/GradleFx]
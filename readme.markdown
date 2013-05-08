# Проект для изучения возможности билда flex/flash приложений при помощи gradle.

## План работ
### Творческий минимум
- flex compile (Path to FlexSDK/maven dependency)
- as3 compile
- flex unit run (dependency)
- fla compile as static resource
- reliase compress 
- code quality (FlexPDM ?) before compile

### Дополнительные хотелки
- multy module project
- project dependency
- code coverage
- git submodule

## Установка Gradle и первые впечатления.
Раззипуй - скопируй + Gradle_Home/bin в общий Path. Без затей абсолютно.
Хорошая подсказка в коммандной строке, даже с цветом.
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

Для начального понимания, как это все работает, можно прочитать начальные главы user guide, примерно до 9 главы. Этого вполне достаточно,
чтобы осознать базовые принципы работы системы. 
Хых, у командной строки есть user friendly gui для нелюбителей консоли: 
	gradle --gui

*Заметки* 
- При использовании командной строки в произвольной папке gradle создает свою временную папку .gradle, куда складывает временные
артефакты работы. Папка не большая, но после экспериментов ее бы лучше удалить или заигнорить в гите.
- При запуске gui, в папке запуска создается файл дополнительных настроек. Думаю, действовать по аналогии с первым.
- При попытке тестового билда пустой папки создается файл билда build.gradle с настройками по умолчанию. Мелочь, а приятно.


## Ресурсы
- (Gradle online)[http://www.gradle.org/]
- (User guide)[http://www.gradle.org/docs/current/userguide/userguide.html]
- (Список официально признанных плагинов)[http://wiki.gradle.org/display/GRADLE/Plugins]

*Хабр о gradle*
- (Gradle: Better Way To Build)[http://habrahabr.ru/post/107085/]
- (Gradle: Tasks Are Code)[http://habrahabr.ru/post/107558/]
- (Почему Gradle?)[http://habrahabr.ru/post/106717/]
- (Как запускать DBDeploy в Gradle)[http://habrahabr.ru/post/152765/]

- (Maven -> Gradle примеры из жизни, обсуждение)[http://anton-arhipov.livejournal.com/219397.html]

- (GradleFX)[http://gradlefx.org/]
- (GradleFX sources)[https://github.com/GradleFx/GradleFx]
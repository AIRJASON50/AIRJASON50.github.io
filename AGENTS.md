# Personal Homepage
## Scope
Project root: /home/l/ws/RL/AIRJASON50.github.io. This repository serves https://airjason50.github.io/ through GitHub Pages.
This is a buildless static website using HTML(超文本标记语言), CSS(层叠样式表), and JavaScript(脚本语言). No package installation or Python environment is required.
## Files
- index.html: bilingual academic homepage; contains the short biography, news, research, projects, experience, education, and honors.
- style.css: homepage presentation, responsive layouts, focus states, and print styles.
- home.js: homepage language switching and language-preserving CV(履历) links. English is the default; preference is stored locally when browser storage is available.
- serve.mjs: dependency-free local preview server, anchored to its own directory and bound to loopback only.
- cv.html: the original index.html preserved as the full bilingual CV, with added home navigation and print controls. Keep all original CV content when editing the homepage.
- toporetarget.jpg: preview image from the confirmed author's public project repository, https://raw.githubusercontent.com/Tsinghua-MARS-Lab/toporetarget-web/main/static/videos/posters/hero.jpg.
- portrait.jpg: original user-supplied portrait, added on 2026-10-24; used in the homepage introduction.
- super-tail.gif: unchanged Figure 1 from the Powered Super Tail paper; shows the worn system and its kinematic scheme. Exported from the user's authenticated IEEE page on 2026-10-24. Source: https://ieeexplore.ieee.org/mediastore/IEEE/content/media/9664973/9664984/9665086/xiang1-p6-xiang-large.gif.
- photo.jpg: pre-existing image; retained and not used on the new homepage.
- preview-modern.html and preview-twocol.html: pre-existing alternative CV layouts; retained unchanged.
## Editing
Keep English and Chinese content in sync. Use the en and zh classes; home.js changes the document language.
Keep the user-supplied portrait unchanged as a file. Its presentation uses the portrait class, a 3:4 aspect ratio, descriptive alternative text, and responsive widths.
TopoRetarget authorship was confirmed by the user. Title, author order, year, and summary were checked against https://arxiv.org/abs/2606.16272. The current project website is https://toporetarget2026.github.io/TopoRetarget/; the older Tsinghua MARS Lab mirror has stale venue and code information.
As of 2026-10-24, the official public method-code repository is https://github.com/wuji-technology/toporetarget, created and pushed on 2026-10-23. Keep the Code button linked there, rather than to the project website source repository or an unofficial reproduction.
CoRL 2026 Poster acceptance is recorded at https://openreview.net/forum?id=9w3PEC3XLg and https://api2.openreview.net/notes/search?term=TopoRetarget&limit=100. The accepted submission uses an earlier Interaction-centric title; retain the current project website's Interaction-Preserving title in the homepage.
The RSS 2026 Dexterous Manipulation workshop lists TopoRetarget among accepted papers at https://dex-manipulation.github.io/rss2026/ and https://openreview.net/forum?id=j7jMQUjRsD.
On 2026-10-24, the user confirmed exactly two RSS 2026 workshop acceptances: Dexterous Manipulation and Closing the Sim2Real Gap: Progress and Challenges. The latter's title and URL, https://sites.google.com/view/rss2026sim2realws/home, match the official conference workshop directory at https://roboticsconference.org/2026/program/workshops/. Do not infer an award or spotlight from acceptance or from a different paper's record.
Keep assets local and links relative to the HTML document for GitHub Pages portability. The homepage uses no remote fonts or runtime dependencies.
Powered Super Tail was published at IEEE M2VIP 2021, as verified on its IEEE document page and https://www.harlab.site/737.html. The original CV's IRC label was inaccurate; the homepage uses M2VIP. Preserve the original CV content unless the user requests CV edits.
The user requested a Powered Super Tail preview figure and provided authenticated publisher access on 2026-10-24. The homepage uses the original Figure 1 locally; keep its aspect ratio and link it to the paper. Do not substitute an image from a different paper or robot.
## Local Preview and Validation
Use node /home/l/ws/RL/AIRJASON50.github.io/serve.mjs to start the static HTTP(超文本传输协议) server at http://127.0.0.1:4173. An optional port is the first argument. The command works from any directory. No build step is needed. The site also works as local files.
Check desktop and mobile widths, both language buttons, section navigation, the CV link, the CV home link, and print styles. Ensure local images load and there is no horizontal overflow at 320px.
Verify the original resume element in cv.html against the original index.html at base commit 12fdd29 before claiming the CV content is preserved.
Validate JavaScript with node --check and inspect git diff --check. Do not add tests that merely mirror static markup.
## Publication
Work branch: codex/personal-homepage. Remote pushes require explicit user approval under the workspace rules. Local preview work does not authorize publication.

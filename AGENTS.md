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
- photo.jpg: pre-existing image; not used on the new homepage. The user will supply a new portrait.
- preview-modern.html and preview-twocol.html: pre-existing alternative CV layouts; retained unchanged.
## Editing
Keep English and Chinese content in sync. Use the en and zh classes; home.js changes the document language.
The portrait-placeholder element is intentionally empty. Replace it with an image only when the user supplies a portrait; retain useful alternative text and responsive sizing.
TopoRetarget authorship was confirmed by the user. Title, author order, year, and summary were checked against https://arxiv.org/abs/2606.16272 and the project website. The public project has no released method-code link; do not label its website repository as method code.
Keep assets local and links relative to the HTML document for GitHub Pages portability. The homepage uses no remote fonts or runtime dependencies.
## Local Preview and Validation
Use node /home/l/ws/RL/AIRJASON50.github.io/serve.mjs to start the static HTTP(超文本传输协议) server at http://127.0.0.1:4173. An optional port is the first argument. The command works from any directory. No build step is needed. The site also works as local files.
Check desktop and mobile widths, both language buttons, section navigation, the CV link, the CV home link, and print styles. Ensure local images load and there is no horizontal overflow at 320px.
Verify the original resume element in cv.html against the original index.html at base commit 12fdd29 before claiming the CV content is preserved.
Validate JavaScript with node --check and inspect git diff --check. Do not add tests that merely mirror static markup.
## Publication
Work branch: codex/personal-homepage. Remote pushes require explicit user approval under the workspace rules. Local preview work does not authorize publication.

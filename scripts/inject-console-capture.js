const fs = require('fs')
const path = require('path')

const buildDir = path.join(process.cwd(), 'out')
const scriptTag = '<script src="/dashboard-console-capture.js"></script>'

function injectScript(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8')
  if (content.includes(scriptTag)) return
  const updated = content.replace('</head>', `${scriptTag}</head>`)
  fs.writeFileSync(filePath, updated, 'utf-8')
}

function walk(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      walk(filePath)
    } else if (filePath.endsWith('.html')) {
      injectScript(filePath)
    }
  })
}

if (fs.existsSync(buildDir)) {
  walk(buildDir)
}
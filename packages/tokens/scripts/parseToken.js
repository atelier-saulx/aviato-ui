/* eslint-disable no-console */
import ora from 'ora'
import chalk from 'chalk'
import _ from 'lodash'
import fs from 'fs-extra'
import rimraf from 'rimraf'
import path from 'path'

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const green = chalk.green
const blue = chalk.blue
const yellow = chalk.yellow

const logSuccess = (message) => console.log(green(message))
const logProgress = (message) => console.log(blue(message))
const logWarning = (message) => console.log(yellow(message))

/***
 * Setup spinner
 **/
const spinner = ora('Parsing Theme').start()

async function start() {
  parseTokens()

  // Simulate progress
  await sleep(250)

  spinner.stop()

  logSuccess('\n Done parsing.')

  process.exit()
}

function parseTokens() {
  const inputDir = path.join('./json')

  if (!fs.existsSync(inputDir)) {
    fs.mkdirSync(inputDir, { recursive: true })
    fs.writeFileSync(path.join(inputDir, '.gitkeep'), '')
  }

  const jsonsInDir = fs
    .readdirSync(inputDir)
    .filter((fileName) => path.extname(fileName) === '.json')

  const mappedJsons = jsonsInDir.map((fileName) => {
    const fileData = fs.readFileSync(path.join('./tokens', fileName))
    const json = JSON.parse(fileData.toString())
    const parsedObject = formatJSON(json)

    return [fileName, parsedObject]
  })

  if (mappedJsons.length === 0) {
    return logWarning('\n\n Warning: No JSON to read.')
  }

  return mappedJsons.forEach((jsonTuple) => {
    return writeTypescriptFiles(jsonTuple)
  })
}

function recursiveFind(input, output) {
  return output
}

function formatJSON(input) {
  const parseColors = recursiveFind(input, {})

  return {
    colors: parseColors,
  }
}

function writeTypescriptFiles(jsonTuple) {
  const targetDir = path.join('./src', 'theme')

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true })
  }

  fs.emptyDirSync(targetDir)

  const [fileName, parsedObject] = jsonTuple
  const trimmedFileName = fileName.replace('.json', '')
  const outputJSON = JSON.stringify(parsedObject, null, 2)

  const typescriptTemplate = `export const theme = ${outputJSON}`.trim()

  const outputContent = typescriptTemplate
  const outputFilename = path.join(targetDir, `${trimmedFileName}.ts`)

  fs.writeFileSync(outputFilename, outputContent)
}

/***
 * Execute script.
 **/
;(async () => {
  start()
})()

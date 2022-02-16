import fs from 'fs-extra'
import chalk from 'chalk'
import path from 'path'

import compile from './compile'
import generateDts from './generate-dts'

import { createPackageConfig } from './create-package-config'

async function buildPackage() {
  const packagePath = path.join(__dirname, '../')
  const packageJsonPath = path.join(packagePath, '/package.json')

  const packageJson = await fs.readJSON(packageJsonPath)
  const packageName = packageJson.name

  console.info(`Building package ${chalk.cyan(packageName)}`)

  try {
    const startTime = Date.now()

    const targetFormats = ['es', 'cjs']

    for (const format of targetFormats) {
      const configOptions: any = {
        basePath: packagePath,
        format,
      }

      const config = await createPackageConfig(configOptions)

      console.info(`Building to ${chalk.cyan(format)} format...`)

      await compile(config)
    }

    await generateDts(packagePath)

    console.info(
      `Package ${chalk.cyan(packageName)} was built in ${chalk.green(
        `${((Date.now() - startTime) / 1000).toFixed(2)}s`
      )}`
    )
  } catch (error: any) {
    console.error(`Failed to compile package: ${chalk.cyan(packageName)}`)
    process.stdout.write(`${error.toString('minimal')}\n`)
    process.exit(1)
  }
}

;(async () => {
  buildPackage()
})()

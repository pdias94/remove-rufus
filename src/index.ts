import * as fs from 'fs'
import * as path from 'path'
import { defaultRoutes, developmentRoutes } from './files/pmt/routes'
import { IRouteTable } from './models/csv/routeTable';
import { IAction } from './models/csv/action';

const execute = async () => {
  const csvFilePath = path.resolve(__dirname, 'files/pmt/remove-rufus-pmt-routes.csv')

  const fileContent = fs.readFileSync(csvFilePath, {encoding: 'utf-8'})

  // process file and data
  const lines: IRouteTable[] = parse(fileContent)
  let processed: IAction = processData(lines)

  // remove files and routes
  console.log("[DEFAULT ROUTES]")
  for (const action of Object.keys(processed)) {
    for (let route of defaultRoutes) {
      if (route.action === action) {
        console.log(`[${action}] removing route...`)

        for (let file of processed[action]) {
          console.log(`[${action}] removing file ${file}...`)
        }

        delete processed[action]
      }
    }
  }

  console.log("[DEVELOPMENT ROUTES]")
  // remove files and routes
  for (const action of Object.keys(processed)) {
    for (let route of developmentRoutes) {
      if (route.action === action) {
        console.log(`[${action}] removing route...`)

        for (let file of processed[action]) {
          console.log(`[${action}] removing file ${file}...`)
        }
      }
    }
  }
}

const parse = (fileContent: string): IRouteTable[] => {
  let lines: IRouteTable[] = []
  let contents = fileContent.split('\n')

  for (let content of contents) {
    content = content.replace('\r', '')
    
    const [action, file] = content.split(',')

    lines.push({
      action: action,
      file: file
    })
  }

  return lines
}

const processData = (lines: IRouteTable[]): IAction => {
  let actions: IAction = {}

  // create keys
  for (let line of lines) {
    if (line.action !== 'action')
      actions[line.action] = []
  }

  // create values
  for (let line of lines) {
    if (line.action !== 'action')
      actions[line.action].push(line.file)
  }

  return actions
}

execute()
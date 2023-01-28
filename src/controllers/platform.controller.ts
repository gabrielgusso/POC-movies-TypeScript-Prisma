import { Response, Request } from "express"
import { Platform } from "../protocols/protocols.js"
import { listPlatforms, insertPlatiform } from "../repositories/platform.repository.js"

export async function platformGetController(req: Request, res: Response) {
  try {
    const result =  await listPlatforms()

    return res.status(200).send(result)
  } catch (error) {
    res.status(500).send(error)
  }
}

export async function platformPostController(req: Request, res: Response) {
  const platform = req.body as Platform

  try {
    const result = await insertPlatiform(platform)

    res.status(201).send(`Platform ${result.name} inserted`)
  } catch (error) {
    res.status(500).send(error)
  }
}

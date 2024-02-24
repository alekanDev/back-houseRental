import fs from 'node:fs'
import path from 'node:path'

export const multerController = (req, res) => {

  const { id, name, description, price } = req.body

  const pathUpdate = saveImage(req.file)
  // console.log(req.file)
  // console.log(path.join(__dirname))

  res.status(200).json({
    message: 'Subido',
    information: {
      id, name, description, price,
      imagePath: pathUpdate
    }
  })

  // console.log(path.join(__dirname+`../uploads/Grey.png`))
  res.json({ message: 'data' })
}

const saveImage = (file) => {
  const newPath = `src\\uploads\\${ file.originalname }` //path según el sistema operativo, en caso de ser linux debe de variar
  fs.renameSync(file.path, newPath)
  return newPath
}

export const multerControllerGet = (req, res) => {
  const { imgName } = req.params
  const imgRoute = path.join(__dirname, '../uploads/', `${imgName}`)

  fs.access(imgRoute, fs.constants.F_OK, (err) => {
    if(err){
      res.status(404).json({ message: 'image notFound'})
    } else {
      fs.readFile(imgRoute, (error, data) => {
        if(error){
          res.status(500).json({ message: 'image noRead'})
        } else {
          res.setHeader('Content-Type','image/jpeg')
          res.send(data)
        }
      })
    }
  })
}
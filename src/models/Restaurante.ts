class Restaurante {
  nota: string
  description: string
  image: string
  infos: string[]
  title: string
  id: number

  constructor(
    id: number,
    nota: string,
    description: string,
    image: string,
    infos: string[],
    title: string
  ) {
    this.id = id
    this.nota = nota
    this.description = description
    this.image = image
    this.infos = infos
    this.title = title
  }
}

export default Restaurante

import fs from 'fs'
/* ------------------------------- typescript ------------------------------- */

type ProductoType = {
    id?: number
    title: string
    price: number
    thumbnail: string
}
/* ------------------------------- typescript ------------------------------- */
interface ContenedorType {
    productos: ProductoType[]
    maxId: number
    archivo: string
    save(producto: ProductoType): Promise<number>
    getById(id: number): ProductoType
    getAll(): Promise<ProductoType[]>
    deleteById(id: number): void
    deleteAll(): Promise<void>
}

class Contenedor implements ContenedorType {
    productos: ProductoType[]
    maxId: number
    archivo: string

    constructor(nombreArchivo: string) {
        this.productos = []
        this.maxId = 0
        this.archivo = nombreArchivo
    }

    async save(producto: ProductoType): Promise<number> {
        await this.getAll()
        this.maxId++
        producto.id = this.maxId
        this.productos.push(producto)
        try {
            await fs.promises.writeFile(
                `./src/${this.archivo}`,
                JSON.stringify(this.productos),
            )
            return this.maxId
        } catch (error: any) {
            throw new Error(error)
        }
    }
    getById(id: number): ProductoType {
        throw new Error('Method not implemented.')
    }
    async getAll(): Promise<ProductoType[]> {
        try {
            const productos: ProductoType[] = JSON.parse(
                await fs.promises.readFile(`./src/${this.archivo}`, 'utf-8'),
            )
            this.productos = productos
            this.productos.map((producto: ProductoType) => {
                if (producto.id && this.maxId < producto.id)
                    this.maxId = producto.id
            })
            return this.productos
        } catch (error: any) {
            throw new Error(error)
        }
    }
    deleteById(id: number): void {
        throw new Error('Method not implemented.')
    }
    async deleteAll(): Promise<void> {
        this.productos = []
        try {
            await fs.promises.writeFile(
                `./src/${this.archivo}`,
                JSON.stringify([]),
            )
        } catch (error: any) {
            throw new Error(error)
        }
    }
}

const contenedor = new Contenedor('productos.txt')

const p1: ProductoType = {
    title: 'Title1',
    price: 1,
    thumbnail: 'http://cualquier.com',
}
const p2: ProductoType = {
    title: 'Title2',
    price: 2,
    thumbnail: 'http://cualquier.com',
}

async function run() {
    await contenedor.save(p1)
    console.log(await contenedor.save(p2))
}

run()

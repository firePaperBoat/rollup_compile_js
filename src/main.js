import { HighQualityAnimalProductsFactory, CheapAnimalProductsFactory} from './js_models/abstractFactory.ts'
import { AnimalFactory } from './js_models/factory.ts'

// module.exports = {
//     HighQualityAnimalProductsFactory,
//     CheapAnimalProductsFactory,
//     AnimalFactory
// }

let highQualityAnimalProductsFactory = new HighQualityAnimalProductsFactory()
highQualityAnimalProductsFactory.createFood().provide()
console.log(highQualityAnimalProductsFactory,highQualityAnimalProductsFactory.createFood().provide(), '-0-0--0-')


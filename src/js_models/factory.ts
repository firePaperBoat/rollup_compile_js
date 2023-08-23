/**
 * 工厂模式
 * 工厂内部代码过多
 * 新增类时，需要在工厂类中新增判断
 * */ 

// 抽象类
class Animal {
    speak () :void {
        throw new Error('this method must be implemented')
    }
}

// 具体类
class Dog extends Animal {
    speak() : string {
        return 'fool'
    }
}

class Cat extends Animal {
    speak(): String {
        return 'Meow'
    }
}

class AnimalFactory {
    createAnimal (animalType: string) {
        switch (animalType) {
            case 'dog': 
            return new Dog() ;
            case 'cat': 
            return new Cat() ;
            default: 
            throw new Error("Invalid animal type: ");
        }
    }
}

let animalFactory = new AnimalFactory()
const dog = animalFactory.createAnimal('dog')
const cat = animalFactory.createAnimal('cat')




export default {
    AnimalFactory
}


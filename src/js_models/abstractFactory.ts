/**
 * 抽象工厂模式
 * 
 * */ 

class AnimalFood {
    provide():string {
        throw new Error('This method must be implemented.');
    }
}

class AnimalToy {
    provide ():string {
        throw new Error ('This method must be implemented.')
    }
}

// 具体类
class HighQualityDogFood extends AnimalFood {
    provide():string {
        return 'Heigh quality dog food'
    }
}

class HighQualityDogToy extends AnimalToy {
    provide():string {
        return 'Heigh quality dog toy'
    }
}

class CheapCatFood extends AnimalFood {
    provide():string {
        return 'cheap cat food'
    }
}

class CheapCatToy extends AnimalToy {
    provide():string {
        return 'cheap cat toy'
    }
}

// 抽象工厂
class AnimalProductsAbstractFactory {
    createFood ():string|object {
        throw new Error ('This method must be implemented.')
    }
    createToy ():string|object {
        throw new Error ('This method must be implemented.')
    }
}
class HighQualityAnimalProductsFactory extends AnimalProductsAbstractFactory  {
    createFood ():string|object {
        return new HighQualityDogFood();
    }
    createToy ():string|object {
        return new HighQualityDogToy();
    }
}

class CheapAnimalProductsFactory extends AnimalProductsAbstractFactory {
    createFood():string|object {
      return new CheapCatFood();
    }
  
    createToy():string|object {
      return new CheapCatToy();
    }
  }


export {
    HighQualityAnimalProductsFactory,
    CheapAnimalProductsFactory
}

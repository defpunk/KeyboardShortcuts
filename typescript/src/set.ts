export default class ElementSet<T> {

    public elements: T[]

    constructor() {
          this.elements=[];
      }

    add(element: T):void{
      if(!this.elements.includes(element)){
        this.elements.push(element)
      }
      }

    addAllElements(elements: T[]){
      for(let e of elements) {
        this.add ( e);
      }
   }

   union(newSet: ElementSet<T>):ElementSet<T> {
      const result = new ElementSet<T>();
      result.addAllElements(this.elements) //all all from this
        result.addAllElements(newSet.elements) // add all from newSet
      return result;
     }

}



import ElementSet from "./set";

describe('Set', () => {

  let mySet: ElementSet<string>;

  beforeEach(() =>{
     mySet = new ElementSet<string>();
  }
)


  it('creates an empty set given no arguments',() => {
      expect(mySet.elements).toEqual([]);
    })

  it('can add a single item', () => {
    mySet.add('test')
    expect(mySet.elements).toEqual(['test']);
  }
  )

  it('can add a multiple items', ()=>{
    mySet.add('test')

    mySet.add('two')
    expect(mySet.elements).toEqual(['test', 'two']);
  })

    it( 'ignores duplicate items' , () => {
      mySet.add('test')
      mySet.add('test')
      expect(mySet.elements).toEqual(['test'])
    })

  it('union adds all entries', () => {
    const newSet = new ElementSet<string>();
    newSet.add('fish')

    mySet.add('chips') // add chips to the set

    expect(mySet.union(newSet).elements).toEqual(['chips', 'fish'])
  })

})

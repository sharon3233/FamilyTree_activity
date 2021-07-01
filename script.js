
class Parent {
  constructor(name, parents) {
    this.name = name;
    this.parents = parents;
  }

childOf(){
  return this.parents.join(" & ");
}
}
let parent0 = new Parent ('Sharon', ["Patricia", "Tony"]);
let parent2 = new Parent ('Blance', ["Loretha", "Mary"]);
let parent3 = new Parent ('Doretha', ["Rickey", "Kevin"]);

const familyTree = [parent0,parent2,parent3];

familyTree.forEach(parent =>{
  console.log("Hi" + parent.name + "your parents are"+ parent.childOf());

});

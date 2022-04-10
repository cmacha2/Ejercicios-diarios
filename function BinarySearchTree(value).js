function BinarySearchTree(value) {
    this.value = value;
    this.rigth = null;
    this.left = null;
  }
  
  BinarySearchTree.prototype.insert = function(valueInsert){
    if (this.value > valueInsert){
      if(!this.left){
        this.left = new BinarySearchTree(valueInsert);
      } else {
        this.left.insert(valueInsert);
      }
    } else {
      if(!this.rigth){
        this.rigth = new BinarySearchTree(valueInsert);
    } else {
      this.rigth.insert(valueInsert);
        }
      }
  }
  
  let arbol = new BinarySearchTree(20)
  arbol.insert(12)
  arbol.insert(11)
  arbol.insert(10)
  arbol.insert(22)
  arbol.insert(45)
  arbol.insert(36)
  
  
  console.log(arbol)
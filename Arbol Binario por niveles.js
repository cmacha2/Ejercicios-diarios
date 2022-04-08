
let treeByLevels = function(first){
    const levels = [];
    
    if(!first){
        return levels;
    }

    const file = [first];
    while(file.length){
        const filaLength = file.length;
        const piso =[];

        for(let i=0;i<filaLength;i++){
            const node = file.shift();
            piso.push(node.value);
            if(node.left){
                file.push(node.left);
            }
            if(node.right){
                file.push(node.right);
            }
            piso.push(node.value);
        }
        levels.push(piso);


    }
    return levels.join().split(',').map(e => +e)
}


class Node { 
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left  = left;
    this.right = right;
  }
}
const treeOne = 
      new Node(2,
      new Node(8,
      new Node(1),
      new Node(3)
      ),
    	new Node(9,
      new Node(4),
      new Node(5)
			)
  );
let fila = [treeOne]
fila














// Dijkstra's algorithm

class PriorityQueue{
    constructor(){
        this.collection=[];
    }
   enqueue(element){
    if(this.isEmpty()){
        this.collection.push(element);
    }else{
        let added = false;
        for(let i=0;i<this.collection.length;i++){
            if(element[1]<this.collection[i][1]){
                this.collection.splice(i,0,element);
                added=true;
                break;
            }
        }
        if(!added){
            this.collection.push(element);
        }
    }
   }

    dequeue(){
        return this.collection.shift();
    }
    isEmpty(){
        return (this.collection.length===0);
    }
}

function dijkstra(graph,source){
    const distance ={};
    const pq = new PriorityQueue();


    for(let vertex in graph ){
        distance[vertex]= vertex== source ? 0: Infinity;
    }
    pq.enqueue([source,0]);


    while (!pq.isEmpty()){
        const[currentVertex,currentDistance]=pq.dequeue();
        for(let neighbour in graph[currentVertex]){
            const distance= graph[currentVertex][neighbour];
            const newDist= currentDistance+distance;
            if(newDist<distance[neighbour]){
                distance[neighbour] = newDist;
                pq.enqueue([neighbour,newDist]);
            }
        }
    }
    return distance;

}


const graph ={0: {1: 4, 2: 1}, 
1: {3: 1}, 
2: {1: 2, 3: 5}, 
3: {},}
const source=0;
console.log(dijkstra(graph,source));






















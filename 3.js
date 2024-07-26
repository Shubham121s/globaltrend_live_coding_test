function dijkstra(graph,source){
    const distances={};
    const pq= new PriorityQueue();

    for(let vertex in graph){
        distances[vertex]= Infinity;
    }
    distances[source]=0;
    pq.enqueue(source,0);

    while (!pq.isEmpty()){
        const {element:currentVertex}= pq.dequeue();
        const currentDistance= distances[currentVertex];


        for(let neighbour in graph [currentVertex]){
            const distance =graph [currentVertex][neighbour];
            const alt =currentDistance + distance;


            if(alt<distances[neighbour]){
                distances[neighbour]=alt;
                pq.enqueue(neighbour,alt);
            }
        }
    }
    return distances;
}


class PriorityQueue{
    constructor(){
        this.queue=[];
    }



    enqueue(element,priority){
        const node ={element,priority};
        if(this.isEmpty()){
            this.queue.push(node);
        } else{
            let added = false ;
            for(let i=0; i<this.queue.length;i++){
                if(node.priority<this.queue[i].priority){
                    this.queue.splice(i,0,node);
                    added=true;
                    break;
                }
            }
            if(!added){
                this.queue.push(node);
            }
        }
    }

    dequeue(){
        return this.queue.shift();
    }
    isEmpty(){
        return this.queue.length===0;
    }
}

const graph= {0: {1: 4, 2: 1}, 
1: {3: 1}, 
2: {1: 2, 3: 5}, 
3: {} }
const source =0;
const result =dijkstra(graph,source);
console.log("shortest distance",result)

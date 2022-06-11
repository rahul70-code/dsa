import java.io.*;
import java.util.*;

class Graph {

    private int V;
    private LinkedList<Integer> adj[];

    Graph(int v) {
        V = v;
        adj = new LinkedList[v];
        for(let i=0;i<v;++i){
            add[i] = new LinkedList();
        }
    }


}
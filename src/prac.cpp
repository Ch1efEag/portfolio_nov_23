#include <bits/stdc++.h>
using namespace std;
int minTimeInWormholeNetwork(int n, int sx, int sy, int dx, int dy, Wormhole* wormhole)
{
    int nodes = 2*n +2;
    int ax[nodes], ay[nodes],cost[nodes];
    int vertex =2;
    ax[0] = sx; ay[0] = sy;
    ax[1]  = dx, ay[1] = dy;
    for(int i =0; i<n; i++){
        ax[vertex] = wormhole[i].startX;
        ay[vertex] = wormhole[i].startY;
        vertex++;
        ax[vertex] = wormhole[i].endX;
        ay[vertex] = wormhole[i].endY;
        cost[i] = wormhole[i].cost;
        vertex++;

    } 
    int adj[nodes][nodes];
    for(int i =0; i<nodes; i++){
        for(int j =0; j<nodes; j++){
            int help = abs(ax[i]-ax[j]) + abs(ay[i]-ay[j]);
            adj[i][j] =help;
        }
    }
    for(int i =0,j=2; i<n; i++,j+=2){
        adj[j][j+1] = cost[i];
        adj[j+1][j] = cost[i];
    }
    int distance[nodes],vis[nodes];
    for(int i =0; i<nodes; i++){
        distance[i] = INT_MAX;
        vis[i] = 0;
    }
    distance[0] = 0;
    priority_queue<pair<int,int>,vector<pair<int,int>>, greater<pair<int,int>>> pq;
    pq.push({0, 0});
    while(!pq.empty()){
        auto it = pq.top();
        pq.pop();
        int cur_cost = it.first;
        int cur_node = it.second;
        if(vis[cur_node]) continue;
        vis[cur_node] = 1;
        for(int i =0; i<nodes; i++){
            if(vis[i]==0){
                int now = cur_cost + adj[cur_node][i];
                if(distance[i]>now){
                    distance[i] = now;
                    pq.push({now,i});
                }
            }
        }
    }
    return distance[1];
}
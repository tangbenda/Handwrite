/*
 @author: tang
 @title: 最小生成树-Kruskal算法  leetCode.1135 最低成本连通所有城市
 @date: 2020/06/24
 */
const minimumCost = function(N, connections) {
  // 边集数组由小到大排序
  if (connections.length < N - 1) return -1;
  connections.sort(function(a, b){
    return a[2] - b[2];
  });
  const parent = Array(N + 1).fill(0);
  // 记录每个节点的父节点，通过父节点不断往上找，就可以找到树的根节点
  function find(x) {
    if (parent[x] > 0) {
      x = find(parent[x]);
    }
    return x;
  }
  let e = 0, res = 0, k = 0;
  while (e < N - 1) {
    const edges = connections[k++];
    const x = find(edges[0]);
    const y = find(edges[1]);
    // 若x与y不等，说明此边没有与现成生成树形成环路
    if (x !== y) {
      // 将此边的结尾顶点放入下标为起点的parent中，表示此顶点已经在生成树集合中
      parent[x] = y;
      e++;
      res += edges[2];
    }
  }
  return res;
};

const connections = [
  [1, 2, 7],
  [2, 3, 8],
  [1, 4, 5],
  [2, 4, 9],
  [2, 5, 7],
  [3, 5, 5],
  [4, 5, 15],
  [4, 6, 6],
  [5, 6, 8],
  [5, 7, 9],
  [6, 7, 11]
];
const n = 7;
console.log(minimumCost(n, connections));

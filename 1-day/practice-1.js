var all = 0;
function add(n){
  if(n > 0){
    all = all + n;
    add(n-1);
  }
}

add(100); // all输出5050

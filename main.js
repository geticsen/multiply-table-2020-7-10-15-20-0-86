function createMultiplyTable(start, end) {
  if(isInputValid(start,end)){
    return createAllLines(start,end);
  }else{
    return null;
  }
}
function isInputValid(start,end){
  return isNumberValid(start) && isNumberValid(end) && isRightMax(start,end); 
}
function isRightMax(left,right){
  return Math.max(left,right) == right;
}
function isNumberValid(number){
  return number >=1 && number <= 1000;
}
function createAllLines(start,end){
  var allLines = "";
  for(var i=start;i<=end;i++){
    allLines += createLine(start,i);
    if(i!=end){
      allLines+="\n";
    }
    
  }
  return allLines;
}
function createLine(lineStart,lineEnd){
  var line="";
  for(var i=lineStart;i<=lineEnd;i++){
    line+= i+"*"+lineEnd +"="+i*lineEnd
    if(i!=lineEnd){
      line+="\t";
    }
  }
  return line;
}
module.exports = {
  createMultiplyTable,
};

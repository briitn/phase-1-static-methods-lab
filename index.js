class Formatter {
static capitalize(string){
  return string.charAt(0).toUpperCase()+string.slice(1)
}
static sanitize(string){
  return string.replace(/[^A-Za-z0-9-' " "]+/g,'');
  
}

static titleize(string){
  string = string[0].toUpperCase() + string.slice(1);
  let splitString = string.split(" ");
  let dontCap = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
  for(let i = 0; i < splitString.length; i++){
    if(!(dontCap.includes(splitString[i]))){
      splitString[i] = splitString[i][0].toUpperCase() + splitString[i].slice(1);
    }
  }
  return splitString.join(" ");
}
  
}


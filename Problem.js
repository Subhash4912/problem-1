function countcharacter(str){
    const map = new Map();
    for(let char of str){
        if(char !==' '){
            const uppercaseChar = char.toUpperCase();
            map.set(uppercaseChar, (map.get(uppercaseChar) || 0) + 1);
        }
    }
    const result=[];
    for (let[char,count]of map){
        result.push(`${char}-${count}`);
    
    }
    console.log(result.join(''));
}
countcharacter('Hello World');

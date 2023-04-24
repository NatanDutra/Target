function fibonacci(n) {
    let sequence = [];
    if (n >= 1) {
      sequence.push(0);
    }
    if (n >= 2) {
      sequence.push(1);
    }
  
    for (let i = 2; i < n; i++) {
      const num = sequence[i - 1] + sequence[i - 2];
      sequence.push(num);
    }
    const valor = 4;
    const found = sequence.find(element => element == valor);
    if(found){
      console.log('Esse número pertence a sequência')
    } else {
      console.log('Esse número não pertence a sequência')
    }
    
    return sequence;
  }
  
  console.log(fibonacci(10)); 
  
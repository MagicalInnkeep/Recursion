#!/usr/bin/env node

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question(`What fibonacci number do you wish to know? `, n => {
    fibbs(n);
    readline.close();
  });

  function fibbs(n){
    if (n<2){
        console.log(`Value for fibbonaci(${n}) is ${n}`);
        return n;
    }
    else{
        const val = fibbs(n-1)+fibbs(n-2);
        console.log(`Value for fibbonaci(${n}) is ${val}`);
        return val;
    }

  }
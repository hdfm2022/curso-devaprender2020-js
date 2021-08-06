const mensagem = "teste";
console.log(typeof mensagem, mensagem);

let outraMensagem = new String('bom dia');
console.log(typeof outraMensagem, outraMensagem);
console.log('lenght', outraMensagem.length);
console.log('indice 2', outraMensagem[2]);
console.log('possui bom', outraMensagem.includes("bom"));
console.log('possui tarde', outraMensagem.includes("tarde"));
console.log('comeca com bom', outraMensagem.startsWith("bom"));
console.log('comeca com boa', outraMensagem.startsWith("boa"));
outraMensagem = outraMensagem.replace("dia", "noite");
console.log(outraMensagem);
console.log('comeca com boa', outraMensagem.indexOf("noite"));
console.log('arr split', outraMensagem.split(" "));
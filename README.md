<p align="right">
  <a href="https://www.npmjs.com/package/@voolture-tech/js-utils"><img src="https://img.shields.io/npm/v/@voolture-tech/js-utils" alt="Versão mais recente em NPM" /></a>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/devdiegomartins/js-utils/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="JS-Utils é uma biblioteca distribuida com a licença MIT" /></a>
</p>

<p>&nbsp;</p>
<p>&nbsp;</p>

<h1 align="center">JS Utils</h1>
<h3 align="center">Uma biblioteca de conteúdos reutilizáveis e de fácil acesso</h3>

<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>

### ***Resumo, objetivos e inspirações***
<strong>JS Utils</strong> foi criado pensando no "re-uso" constante de códigos e suas recriações em projetos distintos. Por conta dessa necessidade de recriar os recursos em multiplos projetos, foi pensado na criação dessa biblioteca para comportar esses recursos em um único (e pequeno) lugar.

<p>&nbsp;</p>

> **ATENÇÃO**: Esta é uma biblioteca em desenvolvimento, até o momento não recomendo o uso pois poderá haver mudanças mais à frente. Não nos responsabilizamos por possíveis problemas que aqui serão modificados

<p>&nbsp;</p>

## Sumário

- [Instalando a biblioteca](#instalando-a-biblioteca)
- [Padrões de uso da biblioteca](#padrões-de-uso-da-biblioteca)
  - [Usando um RegExp](#usando-um-regexp)
  - [Usando um Auxiliador (Helper)](#usando-um-auxiliador-helper)
  - [Usando um Utiliário (util)](#usando-um-utiliário-util)
- [Recursos de RegExp](#recursos-regexp)
- [Recursos auxiliadores](#recursos-auxiliadores-helpers)
- [Recursos utilitários](#recursos-utilitários-utils)
- [Suporte](#suporte)
- [Patrocinadores](#patrocinadores)
- [Mantenedores](#mantenedores)
- [Licença de uso](#licença-de-uso)

<p>&nbsp;</p>

## Instalando a biblioteca

Instalando usando o [`npm`](https://www.npmjs.com/package/voolture-tech/js-utils):

```bash
npm i @voolture-tech/js-utils
```
<p>&nbsp;</p>

## Padrões de uso da biblioteca

O foco desta biblioteca é facilitar o seu uso e consumo, portanto todos os seus recursos são de fácil acesso. Sempre que pensar em um novo [recurso](#recursos-regexp) verifique se o mesmo já está contido na biblioteca, caso não esteja solicite-nos criando um novo issue. Sua participação é muito importante para a evolução desse projeto.

Sem mais delongas, vamos usar um exemplo de um recurso axiliador (helper) e um recurso utilitário (util) para que veja seu funcionamento.

### **Usando um RegExp**

Alguns RegExp muito comuns são utilizados com uma certa constância, portanto adicionamos alguns disponíveis em Javascript para serem reaproveitados.

Portanto, o mesmo possui um modo próprio de uso que são destacados por `@voolture-tech/js-utils/regexp` seguindo o exemplo abaixo

```javascript
import { email__regexp } from "@voolture-tech/js-utils/regexp"

email__regexp.test("email@provider.com") 
```

O Exemplo acima retornará `true`. Veja mais em [`RegExp`](./src/regexp/README.md)

### **Usando um Auxiliador (helper)**

Os auxiliadores possuem seu modo de utilizacão próprio que são destacados por `@voolture-tech/js-uitls/helpers` seguindo o exemplo abaixo

```javascript
import { secondsToMs } from "@voolture-tech/js-utils/helpers"

const seconds = 3 // Escolhido 3 segundos para esse exemplo
console.log(secondsToMs(seconds))
```

O exemplo acima retornará `3000` que será do tipo Number. Veja mais em [`secondsToMs`](./src/helpers/time/README.md).

### **Usando um Utiliário (util)**

Os utilitários (utils) são funcões mais objetivas e inveligentes, que são requisitadas diretamente pela raiz da biblioteca `@voolture-tech`, veja o exemplo abaixo:

```javascript
import { delay } from "@voolture-tech/js-utils"

const start = Date.now()
console.log(`iniciado em ${start}`)

const seconds = 4 // Foi escolhido 4 segundos de espera
delay(seconds).then(() => {
  const end = Date.now()
  console.log(`finalizado em ${end}. Tempo de espera de ${end - start}`)
})

```

O exemplo acima aguardará o tempo de 4 segundos para exercer o log dos tempos de início e fim do comando. Saiba mais sobre o [`delay`](./src/utils/delay/README.md).


>_ Os recursos utiliários (utils), em sua grande maioria, consomem recursos auxiliadores (helpers) internamente ao funcionamento da biblioteca, mas nunca o contrário. _

<p>&nbsp;</p>

>_ Os recursos utilitários (utils) e auxiliadores (helpers) consomem internamente os recursos RegExp ao funcionamento da biblioteca, mas nunca o contrário _ 

<p>&nbsp;</p><p>&nbsp;</p>

### **Recursos RegExp**

Veja a documentação e lista de RegExp disponíveis [clicando aqui](./src/regexp/README.md).

<p>&nbsp;</p>

### **Recursos auxiliadores (helpers)**

| Recurso                                            | Objetivo                                       | Entrada           | Saída  |
| -------------------------------------------------- | ---------------------------------------------- | ----------------- | ------ |
| [`msToSeconds`](./src/helpers/time/README.md)      | Converter milessegundos para segundos          | (ms: Number)      | Number | 
| [`secondsToMs`](./src/helpers/time/README.md)      | Converter segundos para milessegundos          | (seconds: Number) | Number | 


<p>&nbsp;</p>

### **Recursos utilitários (utils)**

| Recurso                                            | Objetivo                                       | Entrada           | Saída         |
| -------------------------------------------------- | ---------------------------------------------- | ------------------------------------ | ------------------- |
| [`delay`](./src/utils/delay/README.md)             | Aguardar um determinado tempo para continuar   | (seconds: Number)                    | Promise void        | 
| [`getFileSizeByBytes`](./src/utils/getFileSizeByBytes/README.md)       | converte bytes para uma string legível      | (bytes: number) | string |
| [`switcher`](./src/utils/switcher/README.md)       | Seleciona uma opção a partir de uma lista      | (list: object, selected: keyof list) | list item (unknown) |


<p>&nbsp;</p><p>&nbsp;</p>

## **Suporte**

Esta biblioteca no momento está em fase de desenvolvimento, algumas correções, melhorias e novos recursos serão implementados até a versão 1.0.
Para quaisquer eventuais problemas com os recursos ou compatibilidade aqui encontrado, crie uma `issue` que responderei para a solução/solicitação da mesma.

## **Patrocinadores**

Em breve teremos algumas formas disponíveis para você nos ajudar a manter esse projeto

## **Mantenedores**

Esse projeto existe somente pelas pessoas que para aqui [contribuem](CONTRIBUTING.md).

### **Licença de uso**

js-utils utiliza a licença [MIT](./LICENSE).

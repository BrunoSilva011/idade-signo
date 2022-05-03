let inputDia = document.getElementById("dia")
let inputMes = document.getElementById("mes")
let inputAno = document.getElementById("anoNasc")
let result = document.getElementById("idade")
let sigCalc = document.getElementById("calc")
let idade = document.getElementById("idade")
let signo = document.getElementById("signo")
let signoImg = document.getElementById("signoImg")
let caracteristicas = document.getElementById("caracteristicas")

const sigMetade = new Array("Áries", "Touro", "Gêmeos", "Câncer", "Leão", "Virgem")
const sigMetade2 = new Array("Libra", "Escorpião", "Sagitário", "Capricórnio", "Aquário", "Peixes")

function calcular() {
        
    let dataAtual = new Date();
    let anoAtual = dataAtual.getFullYear();
    let anoNasc = inputAno.value
    let diaAtual = dataAtual.getDate()
    let diaNasc = inputDia.value

    let age = anoAtual - anoNasc;

    let mesAtual = dataAtual.getMonth() + 1
    let mes = mesAtual - inputMes.value

    if(mes < 0 || mes == 0 && diaAtual < diaNasc) {
    age--; 
    } else {

    }
    idade.innerHTML = `${age} anos`
    return age;
}

sigCalc.addEventListener("click", function signos() {  
        if(inputDia.value == "Dia" && inputMes.value == "Mês") {
           signo.innerHTML = "Insira o dia e mês de nascimento."     
        }        
                //aries
        if(inputMes.value == "03" && inputDia.value >= 21) {
        signo.innerHTML = sigMetade[0]
                //estilo e texto(aries)
        signo.style.backgroundColor = "rgb(233, 104, 104)"
        signoImg.innerHTML = "<img src='imgs/sig_icon_1.webp'>"
        signoImg.style.backgroundRepeat = "no-repeat"
        signoImg.style.position = "absolute"
        signoImg.style.top = "46%"
        signoImg.style.right = "43%"


        caracteristicas.innerHTML = "Áries é um signo de ação, velocidade e decisão. Sendo assim, os arianos esbanjam alegria e contagiam quem está ao redor com sua ousadia e criatividade"
                //fim estilo e texto(aries)

                //aries
    }   else if(inputMes.value == "04" && inputDia.value >= 01 && inputDia.value <= 20) {
        signo.innerHTML = sigMetade[0]
                
                //estilo e texto(aries)
        signo.style.backgroundColor = "rgb(233, 104, 104)"
        signoImg.innerHTML = "<img src='imgs/sig_icon_1.webp'>"
        signoImg.style.backgroundRepeat = "no-repeat"
        signoImg.style.position = "absolute"
        signoImg.style.top = "46%"
        signoImg.style.right = "43%"


        caracteristicas.innerHTML = "Áries é um signo de ação, velocidade e decisão. Sendo assim, os arianos esbanjam alegria e contagiam quem está ao redor com sua ousadia e criatividade"
                //fim estilo e texto(aries)

                //touro
    }   else if(inputMes.value == "04" && inputDia.value >= 21) {
        signo.innerHTML = sigMetade[1]
                //estilo e texto(touro)
        signo.style.backgroundColor = "rgb(205,133,63)"
        signoImg.innerHTML = "<img src='imgs/touro.webp'>"
        signoImg.style.backgroundRepeat = "no-repeat"
        signoImg.style.position = "absolute"
        signoImg.style.top = "46%"
        signoImg.style.right = "43%"

        caracteristicas.innerHTML = "As características de Touro refletem muito o elemento o qual pertencem, que é Terra. Por ser um elemento fixo, dificilmente você encontrará taurinos que amem mudanças"
                //fim estilo e texto(touro)

                //touro
    } else if(inputMes.value == "05" && inputDia.value <= 20) {
        signo.innerHTML = sigMetade[1]
                //estilo e texto(touro)
        signo.style.backgroundColor = "rgb(205,133,63)"
        signoImg.innerHTML = "<img src='imgs/touro.webp'>"
        signoImg.style.backgroundRepeat = "no-repeat"
        signoImg.style.position = "absolute"
        signoImg.style.top = "46%"
        signoImg.style.right = "43%" 
                
        caracteristicas.innerHTML = "As características de Touro refletem muito o elemento o qual pertencem, que é Terra. Por ser um elemento fixo, dificilmente você encontrará taurinos que amem mudanças."   
                //fim estilo e texto(touro)

                //gemeos
    } else if(inputMes.value == "05" && inputDia.value >= 21) {
        signo.innerHTML = sigMetade[2]
                //estilo e texto(gemeos)
        signo.style.backgroundColor = "rgb(240,230,140)"
        signoImg.innerHTML = "<img src='imgs/gemeos.webp'>"
        signoImg.style.backgroundRepeat = "no-repeat"
        signoImg.style.position = "absolute"
        signoImg.style.top = "46%"
        signoImg.style.right = "42.5%" 
    
        caracteristicas.innerHTML = "O signo de Gêmeos é o terceiro do Zodíaco e o segundo do Elemento Ar. Regidos por Mercúrio, pessoas deste signo são comunicativas, versáteis e sociáveis. Como gostam de criar linhas de raciocínio e especulações, estão sempre querendo entender diversos assuntos."
        caracteristicas.style.width = "30%"
                //fim estilo e texto(gemeos)
                
                //gemeos
    } else if(inputMes.value == "06" && inputDia.value <= 20) {
        signo.innerHTML = sigMetade[2]
                //estilo e texto(gemeos)
        signo.style.backgroundColor = "rgb(205,133,63)"
        signoImg.innerHTML = "<img src='imgs/gemeos.webp'>"
        signoImg.style.backgroundRepeat = "no-repeat"
        signoImg.style.position = "absolute"
        signoImg.style.top = "46%"
        signoImg.style.right = "42.5%" 
                
        caracteristicas.innerHTML = "O signo de Gêmeos é o terceiro do Zodíaco e o segundo do Elemento Ar. Regidos por Mercúrio, pessoas deste signo são comunicativas, versáteis e sociáveis. Como gostam de criar linhas de raciocínio e especulações, estão sempre querendo entender diversos assuntos."
        caracteristicas.style.width = "30%"
                //fim estilo e texto(gemeos)

                //cancer
    } else if(inputMes.value == "06" && inputDia.value >= 21) {
        signo.innerHTML = sigMetade[3]
                //estilo e texto(cancer)
        signo.style.backgroundColor = "rgb(175,238,238)"
        signoImg.innerHTML = "<img src='imgs/cancer.webp'>"
        signoImg.style.backgroundRepeat = "no-repeat"
        signoImg.style.position = "absolute"
        signoImg.style.top = "46%"
        signoImg.style.right = "43%" 

        caracteristicas.innerHTML = "Signo onde a Lua encontra seu domicílio, Câncer é a nossa memória emocional e, portanto, é aquele membro da família que transmite a história familiar de geração para geração. Ele conhece a fundo todos os detalhes de tudo que aconteceu (onde, como, quando e com quem)."
        caracteristicas.style.width = "30%"

                //fim estilo e texto(cancer)

                //cancer
    } else if(inputMes.value == "07" && inputDia.value <= 22) {
        signo.innerHTML = sigMetade[3]
                //estilo e texto(cancer)

        signo.style.backgroundColor = "rgb(175,238,238)"
        signoImg.innerHTML = "<img src='imgs/cancer.webp'>"
        signoImg.style.backgroundRepeat = "no-repeat"
        signoImg.style.position = "absolute"
        signoImg.style.top = "46%"
        signoImg.style.right = "43%"
        
        caracteristicas.innerHTML = "Signo onde a Lua encontra seu domicílio, Câncer é a nossa memória emocional e, portanto, é aquele membro da família que transmite a história familiar de geração para geração. Ele conhece a fundo todos os detalhes de tudo que aconteceu (onde, como, quando e com quem)."
        caracteristicas.style.width = "30%"

                //fim do estilo e texto(cancer)

                //leao
    } else if(inputMes.value == "07" && inputDia.value >= 23) {
        signo.innerHTML = sigMetade[4]

                //estilo e texto(leao)

        signo.style.backgroundColor = "rgb(255,160,122)"
        signoImg.innerHTML = "<img src='imgs/leao.webp'>"
        signoImg.style.backgroundRepeat = "no-repeat"
        signoImg.style.position = "absolute"
        signoImg.style.top = "46%"
        signoImg.style.right = "44%" 

        caracteristicas.innerHTML = "O signo de Leão pertence ao elemento Fogo, que basicamente, mostra muita determinação, volatilidade e animação. Quem experimenta toda essa energia tem muita coragem para enfrentar o que for, mas também se torna um pouco temperamental demais. Quanto à fama, são conhecidos como os mais vaidosos e exibidos do Zodíaco."
        caracteristicas.style.width = "30%"
                //fim do estilo e texto(leao)

                //leao
    } else if(inputMes.value == "08" && inputDia.value <= 22) {
        signo.innerHTML = sigMetade[4]
                //estilo e texto(leao)

        signo.style.backgroundColor = "rgb(255,160,122)"
        signoImg.innerHTML = "<img src='imgs/leao.webp'>"
        signoImg.style.backgroundRepeat = "no-repeat"
        signoImg.style.position = "absolute"
        signoImg.style.top = "46%"
        signoImg.style.right = "44%" 
        
        caracteristicas.innerHTML = "O signo de Leão pertence ao elemento Fogo, que basicamente, mostra muita determinação, volatilidade e animação. Quem experimenta toda essa energia tem muita coragem para enfrentar o que for, mas também se torna um pouco temperamental demais. Quanto à fama, são conhecidos como os mais vaidosos e exibidos do Zodíaco."
        caracteristicas.style.width = "30%" 
                //fim estilo e texto(leao)

                //virgem
    } else if(inputMes.value == "08" && inputDia.value >= 23) {
        signo.innerHTML = sigMetade[5]  
        
                //estilo e texto(virgem)

        signo.style.backgroundColor = "rgb(72,209,204)"
        signoImg.innerHTML = "<img src='imgs/virgem.webp'>"
        signoImg.style.backgroundRepeat = "no-repeat"
        signoImg.style.position = "absolute"
        signoImg.style.top = "46%"
        signoImg.style.right = "42.5%" 
                
        caracteristicas.innerHTML = "Virgem é aquele signo que busca a perfeição em tudo. Limpo, tratado, engomado, abotoado, penteado e com roupas lavadas. A via positiva dos virginianos é a limpeza e a vaidade. Porém, no negativo as qualidades podem virar mania. Por isso, se incomodam tanto com qualquer sujeirinha."
        caracteristicas.style.width = "30%" 
                //fim estilo e texto(virgem)

                //virgem
    } else if(inputMes.value == "09" && inputDia.value <= 22) {
        signo.innerHTML = sigMetade[5]
                //estilo e texto(virgem)

        signo.style.backgroundColor = "rgb(72,209,204)"
        signoImg.innerHTML = "<img src='imgs/virgem.webp'>"
        signoImg.style.backgroundRepeat = "no-repeat"
        signoImg.style.position = "absolute"
        signoImg.style.top = "46%"
        signoImg.style.right = "42.5%" 
                        
        caracteristicas.innerHTML = "Virgem é aquele signo que busca a perfeição em tudo. Limpo, tratado, engomado, abotoado, penteado e com roupas lavadas. A via positiva dos virginianos é a limpeza e a vaidade. Porém, no negativo as qualidades podem virar mania. Por isso, se incomodam tanto com qualquer sujeirinha."
        caracteristicas.style.width = "30%" 
                //fim do estilo e texto(virgem)

                //restante dos signos:

                //libra
    } else if(inputMes.value == "09" && inputDia.value >= 23) {
        signo.innerHTML = sigMetade2[0]
                //estilo e texto(libra)
        signo.style.backgroundColor = "rgb(147,112,219)"
        signoImg.innerHTML = "<img src='imgs/libra.webp'>"
        signoImg.style.backgroundRepeat = "no-repeat"
        signoImg.style.position = "absolute"
        signoImg.style.top = "46%"
        signoImg.style.right = "43.5%" 
                                
        caracteristicas.innerHTML = "A personalidade de Libra é mais voltada às ideias e ao racional. Afinal, é um dos signos de Ar, o que significa que pensam bastante e não gostam de se sentir limitados. Inclusive, a inteligência se manifesta nos librianos até mesmo por refletirem antes de emitir uma opinião. O símbolo de Libra remete à uma balança, e é exatamente disso que eles gostam: harmonia, paz e ponderação."
        caracteristicas.style.width = "32%" 
                //fim estilo e texto(libra)
        
                //libra
    } else if(inputMes.value == "10" && inputDia.value <= 22) {
        signo.innerHTML = sigMetade2[0]
                //estilo e texto(libra)
        signo.style.backgroundColor = "rgb(147,112,219)"
        signoImg.innerHTML = "<img src='imgs/libra.webp'>"
        signoImg.style.backgroundRepeat = "no-repeat"
        signoImg.style.position = "absolute"
        signoImg.style.top = "46%"
        signoImg.style.right = "43.5%" 
                                
        caracteristicas.innerHTML = "A personalidade de Libra é mais voltada às ideias e ao racional. Afinal, é um dos signos de Ar, o que significa que pensam bastante e não gostam de se sentir limitados. Inclusive, a inteligência se manifesta nos librianos até mesmo por refletirem antes de emitir uma opinião. O símbolo de Libra remete à uma balança, e é exatamente disso que eles gostam: harmonia, paz e ponderação."
        caracteristicas.style.width = "32%" 
                //fim estilo e texto(libra)

                //escorpiao
    } else if(inputMes.value == "10" && inputDia.value >= 23) {
        signo.innerHTML = sigMetade2[1]

        //estilo e texto(escorpiao)
        signo.style.backgroundColor = "rgb(102,51,153)"
        signoImg.innerHTML = "<img src='imgs/escorpiao.webp'>"
        signoImg.style.backgroundRepeat = "no-repeat"
        signoImg.style.position = "absolute"
        signoImg.style.top = "46%"
        signoImg.style.right = "41.5%" 
                                
        caracteristicas.innerHTML = "Algumas características de Escorpião são a autossuficiência e controladores, mas no fundo estão cheios de energia emocional. Pessoas que nascem com o Sol neste signo, são bastante conectadas com os seus sentimento se podem desenvolver comportamentos possessivos e obsessivos. A intensidade é uma marca registrada do signo."
        caracteristicas.style.width = "35%" 
                //fim estilo e texto(escorpiao)

                //escorpiao
    } else if(inputMes.value == "11" && inputDia.value <= 21) {
        signo.innerHTML = sigMetade2[1]

                //estilo e texto(escorpiao)
        signo.style.backgroundColor = "rgb(102,51,153)"
        signoImg.innerHTML = "<img src='imgs/escorpiao.webp'>"
        signoImg.style.backgroundRepeat = "no-repeat"
        signoImg.style.position = "absolute"
        signoImg.style.top = "46%"
        signoImg.style.right = "41.5%" 
                                
        caracteristicas.innerHTML = "Algumas características de Escorpião são a autossuficiência e controladores, mas no fundo estão cheios de energia emocional. Pessoas que nascem com o Sol neste signo, são bastante conectadas com os seus sentimento se podem desenvolver comportamentos possessivos e obsessivos. A intensidade é uma marca registrada do signo."
        caracteristicas.style.width = "35%" 
                //fim estilo e texto (escorpiao)    

                //sagitario
    } else if(inputMes.value == "11" && inputDia.value >= 22) {
        signo.innerHTML = sigMetade2[2]

        //estilo e texto(sagitario)
        signo.style.backgroundColor = "rgb(64,224,208)"
        signoImg.innerHTML = "<img src='imgs/sagitario.webp'>"
        signoImg.style.backgroundRepeat = "no-repeat"
        signoImg.style.position = "absolute"
        signoImg.style.top = "46%"
        signoImg.style.right = "42%" 
                                
        caracteristicas.innerHTML = "Positividade, bom humor e espontaneidade são características marcantes da personalidade sagitariana. Quem é de Sagitário costuma acreditar que tudo acontece por um motivo e que tudo tem solução. Encaram a vida com autoconfiança."
        caracteristicas.style.width = "33.5%" 
                //fim estilo e texto (sagitario)  

                //sagitario
    } else if(inputMes.value == "12" && inputDia.value <= 21) {
        signo.innerHTML = sigMetade2[2]
                //estilo e texto(sagitario)
        signo.style.backgroundColor = "rgb(64,224,208)"
        signoImg.innerHTML = "<img src='imgs/sagitario.webp'>"
        signoImg.style.backgroundRepeat = "no-repeat"
        signoImg.style.position = "absolute"
        signoImg.style.top = "46%"
        signoImg.style.right = "42%" 
                                
        caracteristicas.innerHTML = "Positividade, bom humor e espontaneidade são características marcantes da personalidade sagitariana. Quem é de Sagitário costuma acreditar que tudo acontece por um motivo e que tudo tem solução. Encaram a vida com autoconfiança."
        caracteristicas.style.width = "33.5%" 
                //fim estilo e texto (sagitario)    

                //capricornio
    } else if(inputMes.value == "12" && inputDia.value >= 22) {
        signo.innerHTML = sigMetade2[3]

                //estilo e texto(capricornio)
        signo.style.backgroundColor = "rgb(224,255,255)"
        signoImg.innerHTML = "<img src='imgs/capricornio.webp'>"
        signoImg.style.backgroundRepeat = "no-repeat"
        signoImg.style.position = "absolute"
        signoImg.style.top = "46%"
        signoImg.style.right = "41%" 
                                
        caracteristicas.innerHTML = "Nativos desse signo são coerentes, disciplinados, sérios e responsáveis. Além disso, desenvolvem desde cedo uma maturidade que surpreende a todos. Quem tem um acúmulo de planetas em Capricórnio signo pode ter um perfil workaholic. Estão sempre atentos aos seus deveres e, mais ainda, aos seus horários."
        caracteristicas.style.width = "32%" 
                //fim estilo e texto (capricornio)

                //capricornio
    } else if(inputMes.value == "01" && inputDia.value <= 20) {
        signo.innerHTML = sigMetade2[3]
        
                //estilo e texto(capricornio)
        signo.style.backgroundColor = "rgb(224,255,255)"
        signoImg.innerHTML = "<img src='imgs/capricornio.webp'>"
        signoImg.style.backgroundRepeat = "no-repeat"
        signoImg.style.position = "absolute"
        signoImg.style.top = "46%"
        signoImg.style.right = "41%" 
                                
        caracteristicas.innerHTML = "Nativos desse signo são coerentes, disciplinados, sérios e responsáveis. Além disso, desenvolvem desde cedo uma maturidade que surpreende a todos. Quem tem um acúmulo de planetas em Capricórnio signo pode ter um perfil workaholic. Estão sempre atentos aos seus deveres e, mais ainda, aos seus horários."
        caracteristicas.style.width = "32%" 
                //fim estilo e texto (capricornio)

                 //aquario
    } else if(inputMes.value == "01" && inputDia.value >= 21) {
        signo.innerHTML = sigMetade2[4]

                //estilo e texto(aquario)
        signo.style.backgroundColor = "rgb(176,224,230)"
        signoImg.innerHTML = "<img src='imgs/aquario.webp'>"
        signoImg.style.backgroundRepeat = "no-repeat"
        signoImg.style.position = "absolute"
        signoImg.style.top = "46%"
        signoImg.style.right = "42%" 
                                
        caracteristicas.innerHTML = "A busca por inovação e independência são fortes características do signo de Aquário. Com criatividade sempre em alta, pessoas com Sol ou Ascendente em Aquário costumam ir direto ao ponto. Questionar as coisas e ser até radical também combina com aquarianas e aquarianos."
        caracteristicas.style.width = "32%" 
                //fim estilo e texto (aquario)

                //aquario
    } else if(inputMes.value == "02" && inputDia.value <= 18) {
        signo.innerHTML = sigMetade2[4]
        
                //estilo e texto(aquario)
        signo.style.backgroundColor = "rgb(176,224,230)"
        signoImg.innerHTML = "<img src='imgs/aquario.webp'>"
        signoImg.style.backgroundRepeat = "no-repeat"
        signoImg.style.position = "absolute"
        signoImg.style.top = "46%"
        signoImg.style.right = "42%" 
                                
        caracteristicas.innerHTML = "A busca por inovação e independência são fortes características do signo de Aquário. Com criatividade sempre em alta, pessoas com Sol ou Ascendente em Aquário costumam ir direto ao ponto. Questionar as coisas e ser até radical também combina com aquarianas e aquarianos."
        caracteristicas.style.width = "32%" 
                //fim estilo e texto (aquario)

                //peixes
    } else if(inputMes.value == "02" && inputDia.value >= 19) {
        signo.innerHTML = sigMetade2[5]

                //estilo e texto(peixes)
        signo.style.backgroundColor = "rgb(123,104,238)"
        signoImg.innerHTML = "<img src='imgs/peixes.webp'>"
        signoImg.style.backgroundRepeat = "no-repeat"
        signoImg.style.position = "absolute"
        signoImg.style.top = "46%"
        signoImg.style.right = "43%" 
                                
        caracteristicas.innerHTML = "São pessoas sensíveis, sonhadoras, empáticas, pacientes, calmas, intuitivas, românticas, generosas, místicas e amáveis. “Captam toda a energia do ambiente como esponjas, o que os leva a sentir muitas coisas que não são suas."
        caracteristicas.style.width = "32%" 
                //fim estilo e texto (peixes)

                //peixes
    } else if(inputMes.value == "03" && inputDia.value <= 20) {
        signo.innerHTML = sigMetade2[5]
            
                //estilo e texto(peixes)
        signo.style.backgroundColor = "rgb(123,104,238)"
        signoImg.innerHTML = "<img src='imgs/peixes.webp'>"
        signoImg.style.backgroundRepeat = "no-repeat"
        signoImg.style.position = "absolute"
        signoImg.style.top = "46%"
        signoImg.style.right = "43%" 
                                                
        caracteristicas.innerHTML = "São pessoas sensíveis, sonhadoras, empáticas, pacientes, calmas, intuitivas, românticas, generosas, místicas e amáveis. “Captam toda a energia do ambiente como esponjas, o que os leva a sentir muitas coisas que não são suas."
        caracteristicas.style.width = "32%" 
                //fim estilo e texto (peixes)

    } else {
        signo.innerHTML = ""
    }
})   
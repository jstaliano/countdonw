function regres(){
    var aniv = document.getElementById('aniv')           
    var dias = document.getElementById('dias');
    var horas = document.getElementById('horas');
    var minutos = document.getElementById('minutos');
    var segundos = document.getElementById('segundos');
    var btn = document.getElementById('botao');            
    const dataevento = new Date('jun 13 2020 19:00:00')
    //const dataevento = new Date(aniv.value)
    const agora = new Date()
    const diff = dataevento - agora
    
    const difdias     = Math.floor (diff /1000 /60/60/24)   
    const difhoras    = Math.floor(diff /1000 /60 /60) %24
    const difminutos  = Math.floor (diff /1000 /60) % 60
    const difsegundos = Math.floor (diff /1000) % 60
    btn.textContent = "Aguarde a Contagem"
    if (difdias>=0){
        btn.href="#"
        
        dias.innerHTML = difdias  < 10 ? '0' + difdias : difdias;
        horas.innerHTML = difhoras< 10 ? '0' + difhoras : difhoras; 
        minutos.innerHTML = difminutos < 10 ? '0' + difminutos : difminutos;
        segundos.innerHTML = difsegundos < 10 ? '0' + difsegundos : difsegundos;
        if ((difsegundos<=59) && ((difhoras==0) && (difminutos==0) && (difdias==0))){
           
             btn.textContent = "Se Preparem, faltam " + difsegundos + " Segundos"
        } 
    }   else {
        btn.href="http://www.guarucoop.com.br"
        btn.textContent="Retirar Senha"
    }


}

setInterval(regres, 1000);
regres()
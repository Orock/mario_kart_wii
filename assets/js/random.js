
var characters = [
  // Chicos
  {id:1, nombre:"Baby Mario", size:'small', imagen:'baby_mario.png'},
  {id:2, nombre:"Baby Peach", size:'small', imagen:'baby_peach.png'},
  {id:3, nombre:"Toad", size:'small', imagen:'toad.png'},
  {id:4, nombre:"Koopa Troopa", size:'small', imagen:'koopa_troopa.png'},
  {id:5, nombre:"Baby Luigi", size:'small', unlock:false, imagen:'baby_luigi.png'},
  {id:6, nombre:"Baby Daisy", size:'small', unlock:false, imagen:'baby_daisy.png'},
  {id:7, nombre:"Toadette", size:'small', unlock:false, imagen:'toadette.png'},
  {id:8, nombre:"Dry Bones", size:'small', unlock:false, imagen:'dry_bones.png'},
  // Medios
  {id:9, nombre:"Mario", size:'medium',imagen:'mario.png'},
  {id:10, nombre:"Luigi", size:'medium',imagen:'luigi.png'},
  {id:11, nombre:"Peach", size:'medium',imagen:'peach.png'},
  {id:12, nombre:"Yoshi", size:'medium',imagen:'yoshi.png'},
  {id:13, nombre:"Daisy", size:'medium', unlock:false, imagen:'daisy.png'},
  {id:14, nombre:"Birdo", size:'medium', unlock:false, imagen:'birdo.png'},
  {id:15, nombre:"Diddy Kong", size:'medium', unlock:false, imagen:'diddy_kong.png'},
  {id:16, nombre:"Bowser Jr.", size:'medium', unlock:false, imagen:'bowser_jr.png'},
  // Grandes
  {id:17, nombre:"Wario", size:'large',imagen:'wario.png'},
  {id:18, nombre:"Waluigi", size:'large',imagen:'waluigi.png'},
  {id:19, nombre:"Donkey Kong", size:'large',imagen:'donkey_kong.png'},
  {id:20, nombre:"Bowser", size:'large',imagen:'bowser.png'},
  {id:21, nombre:"King Boo", size:'large', unlock:false, imagen:'king_boo.png'},
  {id:22, nombre:"Rosalina", size:'large', unlock:false, imagen:'rosalina.png'},
  {id:23, nombre:"Funky Kong", size:'large', unlock:false, imagen:'funky_kong.png'},
  {id:24, nombre:"Dry Bowser", size:'large', unlock:false, imagen:'dry_bowser.png'}
];

var karts = [
  // Chicos
  {id:1, nombre:"Kart Estándar P", size:'small',imagen:'kart_estandar_p.png'},
  {id:2, nombre:"Supercuna", size:'small',imagen:'supercuna.png'},
  {id:3, nombre:"Minibestia", size:'small',imagen:'minibestia.png'},
  {id:4, nombre:"Moto Estándar P", size:'small',imagen:'moto_estandar_p.png'},
  {id:5, nombre:"Moto Bala", size:'small', imagen:'moto_bala.png'},
  {id:6, nombre:"Minimoto", size:'small', imagen:'minimoto.png'},
  {id:7, nombre:"Carruaje Cheep", size:'small', unlock:false, imagen:'carruaje_cheep.png'},
  {id:8, nombre:"Minitractor", size:'small', unlock:false, imagen:'minitractor.png'},
  {id:9, nombre:"Blue Falcon", size:'small', unlock:false, imagen:'blue_falcon.png'},
  {id:10, nombre:"Pato Raudo", size:'small', unlock:false, imagen:'pato_raudo.png'},
  {id:11, nombre:"Magiciclo", size:'small', unlock:false, imagen:'magiciclo.png'},
  {id:12, nombre:"Moto Cúpula", size:'small', unlock:false, imagen:'moto_cupula.png'},
  // Medianos
  {id:13, nombre:'Kart Estándar M', size:'medium',imagen:'kart_estandar_m.png'},
  {id:14, nombre:'Modelo Clásico', size:'medium',imagen:'modelo_clasico.png'},
  {id:15, nombre:'Alerón Chiflado', size:'medium',imagen:'aleron_chiflado.png'},
  {id:16, nombre:'Moto Estándar M', size:'medium',imagen:'moto_estandar_m.png'},
  {id:17, nombre:'Moto Hipersónica', size:'medium',imagen:'moto_hipersonica.png'},
  {id:18, nombre:'Ciclomotor Dulzón', size:'medium',imagen:'ciclomotor_dulzon.png'},
  {id:19, nombre:'Bloopercarro', size:'medium', unlock:false, imagen:'bloopercarro.png'},
  {id:20, nombre:'Dominguero', size:'medium', unlock:false, imagen:'dominguero.png'},
  {id:21, nombre:'Formula N', size:'medium', unlock:false, imagen:'formula_n.png'},
  {id:22, nombre:'Zum-Zum', size:'medium', unlock:false, imagen:'zum_zum.png'},
  {id:23, nombre:'Nitrocicleta', size:'medium', unlock:false, imagen:'nitrocicleta.png'},
  {id:24, nombre:'Velocidelfín', size:'medium', unlock:false, imagen:'velocidelfin.png'},
  // Grandes
  {id:25, nombre:'Kart Estándar G', size:'large',imagen:'kart_estandar_g.png'},
  {id:26, nombre:'Todoterreno', size:'large',imagen:'todoterreno.png'},
  {id:27, nombre:'Carro Fulminante', size:'large',imagen:'carro_fulminante.png'},
  {id:28, nombre:'Moto Estándar G', size:'large',imagen:'moto_estandar_g.png'},
  {id:29, nombre:'Moto de Bowser', size:'large',imagen:'moto_de_bowser.png'},
  {id:30, nombre:'Moto de Wario', size:'large',imagen:'moto_de_wario.png'},
  {id:31, nombre:'Piraña Maleante', size:'large', unlock:false, imagen:'pirana_maleante.png'},
  {id:32, nombre:'Autodeslizador', size:'large', unlock:false, imagen:'autodeslizador.png'},
  {id:33, nombre:'Libertad GT', size:'large', unlock:false, imagen:'libertad_gt.png'},
  {id:34, nombre:'Estrella Fugaz', size:'large', unlock:false, imagen:'estrella_fugaz.png'},
  {id:35, nombre:'Proyectil', size:'large', unlock:false, imagen:'proyectil.png'},
  {id:36, nombre:'Fantasma', size:'large', unlock:false, imagen:'fantasma.png'}
];

// Copas
var copas = [
  {id:1, nombre:'Copa Champiñón', imagen:'copa_champinon.png'},
  {id:2, nombre:'Copa Flor', imagen:'copa_flor.png'},
  {id:3, nombre:'Copa Estrella', imagen:'copa_estrella.png'},
  {id:4, nombre:'Copa Especial', imagen:'copa_especial.png'},
  {id:5, nombre:'Copa Caparazón', imagen:'copa_caparazon.png'},
  {id:6, nombre:'Copa Plátano', imagen:'copa_platano.png'},
  {id:7, nombre:'Copa Hoja', imagen:'copa_hoja.png'},
  {id:8, nombre:'Copa Centella', imagen:'copa_centella.png'}
]

var pistas = [
  {id:1, nombre:'Circuito Luigi', copa:copas[0]},
  {id:2, nombre:'Pradera Mu-Mu', copa:copas[0]},
  {id:3, nombre:'Barranco Champiñón', copa:copas[0]},
  {id:4, nombre:'Fábrica de Toad', copa:copas[0]},
  {id:5, nombre:'Circuito Mario', copa:copas[1]},
  {id:6, nombre:'Centro Cocotero', copa:copas[1]},
  {id:7, nombre:'Cima DK', copa:copas[1]},
  {id:8, nombre:'Mina de Wario', copa:copas[1]},
  {id:9, nombre:'Circuito Daisy', copa:copas[2]},
  {id:10, nombre:'Colina de Koopa', copa:copas[2]},
  {id:11, nombre:'Camino Forestal', copa:copas[2]},
  {id:12, nombre:'Volcán Gruñón', copa:copas[2]},
  {id:13, nombre:'Ruinas Seco-Seco', copa:copas[3]},
  {id:14, nombre:'Circuito Luz de Luna', copa:copas[3]},
  {id:15, nombre:'Castillo de Bowser', copa:copas[3]},
  {id:16, nombre:'Senda Arco Iris', copa:copas[3]},
  {id:17, nombre:'GCN Playa Peach', copa:copas[4]},
  {id:18, nombre:'DS Cataratas de Yoshi', copa:copas[4]},
  {id:19, nombre:'SNES Valle Fantasma 2', copa:copas[4]},
  {id:20, nombre:'N64 Pista Mario', copa:copas[4]},
  {id:21, nombre:'N64 Tierra Sorbete', copa:copas[5]},
  {id:22, nombre:'GBA Playa Shy Guy', copa:copas[5]},
  {id:23, nombre:'DS Cuidad Delfino', copa:copas[5]},
  {id:24, nombre:'GCN Estadio Waluigi', copa:copas[5]},
  {id:25, nombre:'DS Desierto Sol-Sol', copa:copas[6]},
  {id:26, nombre:'GBA Castillo de Bowser 3', copa:copas[6]},
  {id:27, nombre:'N64 Jungla de DK', copa:copas[6]},
  {id:28, nombre:'GCN Circuito Mario', copa:copas[6]},
  {id:29, nombre:'SNES Circuito Mario 3', copa:copas[7]},
  {id:30, nombre:'DS Jardín de Peach', copa:copas[7]},
  {id:31, nombre:'GCN Montaña DK', copa:copas[7]},
  {id:32, nombre:'N64 Castillo de Bowse', copa:copas[7]}
]

// Pistas de la sesión
var pistasSesion = [];

function random(){
  
  var randCharacter = randomPjs();
  var randPistas = randomPistas();

  // console.log(randCharacter);
  // console.log(randPistas);

  // Jugadores
  $('.p1 .image').find('img').attr('src','assets/images/'+randCharacter[0].imagen);
  $('.p2 .image').find('img').attr('src','assets/images/'+randCharacter[1].imagen);
  $('.p3 .image').find('img').attr('src','assets/images/'+randCharacter[2].imagen);
  $('.p4 .image').find('img').attr('src','assets/images/'+randCharacter[3].imagen);

  $('.p1 .imageKart').find('img').attr('src','assets/images/'+randCharacter[0].kart.imagen);
  $('.p2 .imageKart').find('img').attr('src','assets/images/'+randCharacter[1].kart.imagen);
  $('.p3 .imageKart').find('img').attr('src','assets/images/'+randCharacter[2].kart.imagen);
  $('.p4 .imageKart').find('img').attr('src','assets/images/'+randCharacter[3].kart.imagen);

  $('.p1 .name').text(randCharacter[0].nombre);
  $('.p1 .vehicle').text(randCharacter[0].kart.nombre);
  $('.p2 .name').text(randCharacter[1].nombre);
  $('.p2 .vehicle').text(randCharacter[1].kart.nombre);
  $('.p3 .name').text(randCharacter[2].nombre);
  $('.p3 .vehicle').text(randCharacter[2].kart.nombre);
  $('.p4 .name').text(randCharacter[3].nombre);
  $('.p4 .vehicle').text(randCharacter[3].kart.nombre);

  // Pistas
  $('.pista1 .image').find('img').attr('src','assets/images/'+randPistas[0].copa.imagen);
  $('.pista2 .image').find('img').attr('src','assets/images/'+randPistas[1].copa.imagen);
  $('.pista3 .image').find('img').attr('src','assets/images/'+randPistas[2].copa.imagen);
  $('.pista4 .image').find('img').attr('src','assets/images/'+randPistas[3].copa.imagen);

  $('.pista1 .name').text(randPistas[0].nombre);
  $('.pista1 .vehicle').text(randPistas[0].copa.nombre);
  $('.pista2 .name').text(randPistas[1].nombre);
  $('.pista2 .vehicle').text(randPistas[1].copa.nombre);
  $('.pista3 .name').text(randPistas[2].nombre);
  $('.pista3 .vehicle').text(randPistas[2].copa.nombre);
  $('.pista4 .name').text(randPistas[3].nombre);
  $('.pista4 .vehicle').text(randPistas[3].copa.nombre);

}

function randomPjs(){
  
  var tempCharacters = [];
  var lote = [];

  for (var i = characters.length - 1; i >= 0; i--) {
    if ( typeof characters[i].unlock == 'undefined' || characters[i].unlock) {
      tempCharacters.push(characters[i]);
    }
  }
  
  while(lote.length<4){
  //for(var i=0; i<4; i++){
    
    var nuevo = tempCharacters[Math.floor((Math.random()*tempCharacters.length))];

    if(lote.indexOf(nuevo)!=-1){
      i++;
    } else {
      if (nuevo.unlock) {
        nuevo.kart = randomKart(nuevo.size);
        lote.push(nuevo);
      }else{
        i++;
      }
    }
  }

  return lote;

}

function randomKart(size){

  var tempKarts = [];

  for (var i = karts.length - 1; i >= 0; i--) {
    if ( typeof karts[i].unlock == 'undefined' || karts[i].unlock) {
      tempKarts.push(karts[i]);
    } 
  }

  do{
    var nuevo = tempKarts[Math.floor((Math.random()*tempKarts.length))];
  }while(nuevo.size!=size)

  return nuevo;

}

function randomPistas(){

  var lote = [];
  
  while(lote.length<4){
    
    pista = pistas[Math.floor((Math.random()*pistas.length))];
  console.log(pista);  
    if(pistasSesion.indexOf(pista)!=-1){
      console.log("repetido -> "+pista.nombre);
    } else {
      lote.push(pista);
      pistasSesion.push(pista);
    }
    
  }
  console.log("=== "+pistasSesion.length);

  // Limpiamos el array de las pista jugadas si ya está lleno, asi a la próxima, parte como una sesión nueva
  if( pistasSesion.length==32 ){
    pistasSesion = [];
  }

  return lote;

}

function generaAjustes(){
  checked='';
  $.each(characters, function( index, chracter ) {
    if (typeof chracter.unlock != 'undefined' && chracter.size=='small') {
    
      if(chracter.unlock){checked='checked';}else{checked='';}
      $('.settings-list-characters-small').append('<li class="list-group-item">'+
                                                    '<div class="checkbox">'+
                                                      '<label>'+
                                                        '<input type="checkbox" name="personajes[]" value="'+chracter.id+'" '+checked+'>'+chracter.nombre+
                                                      '</label>'+
                                                    '</div>'+
                                                  '</li>' );
    }

    if (typeof chracter.unlock != 'undefined' && chracter.size=='medium') {
      if(chracter.unlock){checked='checked';}else{checked='';}
      $('.settings-list-characters-medium').append('<li class="list-group-item">'+
                                                    '<div class="checkbox">'+
                                                      '<label>'+
                                                        '<input type="checkbox" name="personajes[]" value="'+chracter.id+'" '+checked+'>'+chracter.nombre+
                                                      '</label>'+
                                                    '</div>'+
                                                  '</li>' );
    }

    if (typeof chracter.unlock != 'undefined' && chracter.size=='large') {
      if(chracter.unlock){checked='checked';}else{checked='';}
      $('.settings-list-characters-large').append('<li class="list-group-item">'+
                                                    '<div class="checkbox">'+
                                                      '<label>'+
                                                        '<input type="checkbox" name="personajes[]" value="'+chracter.id+'" '+checked+'>'+chracter.nombre+
                                                      '</label>'+
                                                    '</div>'+
                                                  '</li>' );
    }
  });

  $.each(karts, function( index, kart ) {
    if (typeof kart.unlock != 'undefined' && kart.size=='small') {
      if(kart.unlock){checked='checked';}else{checked='';}
      $('.settings-list-karts-small').append('<li class="list-group-item">'+
                                                '<div class="checkbox">'+
                                                  '<label>'+
                                                    '<input type="checkbox" name="karts[]" value="'+kart.id+'" '+checked+'>'+kart.nombre+
                                                  '</label>'+
                                                '</div>'+
                                              '</li>' );
    }

    if (typeof kart.unlock != 'undefined' && kart.size=='medium') {
      if(kart.unlock){checked='checked';}else{checked='';}
      $('.settings-list-karts-medium').append('<li class="list-group-item">'+
                                                '<div class="checkbox">'+
                                                  '<label>'+
                                                    '<input type="checkbox" name="karts[]" value="'+kart.id+'" '+checked+'>'+kart.nombre+
                                                  '</label>'+
                                                '</div>'+
                                              '</li>' );
    }

    if (typeof kart.unlock != 'undefined' && kart.size=='large') {
      if(kart.unlock){checked='checked';}else{checked='';}
      $('.settings-list-karts-large').append('<li class="list-group-item">'+
                                                '<div class="checkbox">'+
                                                  '<label>'+
                                                    '<input type="checkbox" name="karts[]" value="'+kart.id+'" '+checked+'>'+kart.nombre+
                                                  '</label>'+
                                                '</div>'+
                                              '</li>' );
    }
  });

}

$(function() {

  $.ajax({
    url: "config/leer.php",
    method: "GET",
    data: { tipo : "personajes" },
    dataType: "json",
    async: false
  }).done(function( data ) {
    $.each(data, function (index, data) {
      $.each(characters, function( index, chracter ) {
        if (chracter.id==data) {
          chracter.unlock=true;
        };
      });
    })
  });

  $.ajax({
    url: "config/leer.php",
    method: "GET",
    data: { tipo : "karts" },
    dataType: "json",
    async: false
  }).done(function( data ) {
    $.each(data, function (index, data) {
      $.each(karts, function( index, kart ) {
        if (kart.id==data) {
          kart.unlock=true;
        };
      });
    })
  });

  generaAjustes();

  $('#nuevo-juego').click(function(){
    random();
    $('.ocultar').show();
  });
  
  $("#guardar").on("click",function(){
    // console.log($("#formulario"));
      $.ajax({
        url: "config/guardar.php",
        method: "POST",
        dataType: "json",
        data: $("#formulario").serialize(), // Adjuntar los campos del formulario enviado.
      }).done(function( data ) {
          
          // console.log(data.karts);
          // console.log(data.characters);

          $.each(karts, function( index, kart ) {
            kart.unlock=false;
          });
          $.each(characters, function( index, character ) {
            character.unlock=false;
          });

          $.each(data.karts, function (index, data) {
            $.each(karts, function( index, kart ) {
              if (kart.id==data) {
                kart.unlock=true;
              }
            });
          })

          $.each(data.characters, function (index, data) {
            $.each(characters, function( index, character ) {
              if (character.id==data) {
                character.unlock=true;
              }
            });
          })

        // console.log(karts);
        // console.log(characters);
      });
      $('#ajustesModal').modal('hide');
  });
  
});


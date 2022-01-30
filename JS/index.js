//chave: cfN8awDgi0brfJgfyINLSn55IAbEmTeTCeP7o4eK

//Função do Botão - Click

$(".search").click(function(){
  $('.apod').css("background-image", "none")
  $('.apod').css("background-color", "black");
  nasa();
});

//Função referente ao processo da API com o site da Nasa

function nasa() {

  //Pega o valor de data atribuído pelo usuário na tela
  const data = $("#date").val();

  //Faz a interface com a API da Nasa, na url consta a chave pessoal e a data que o usuário escolher 
  $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=cfN8awDgi0brfJgfyINLSn55IAbEmTeTCeP7o4eK&date=${data}`,
    success: function(data){
      apiData(data);

    },
    
  })

  //Através da data selecionada, a função apiData realiza a procura da imagem ou vídeo, explicação e título da publicação no site da Nasa.
  function apiData(procura) {
    const imagem = $(".imagem");
    const titulo = $(".titulo");
    const explicacao = $(".explicacao");

    titulo.html(procura.title);
    explicacao.html(`${procura.explanation}`);

    if (procura.media_type == 'image') {
      imagem.html(`<img class="img" src="${procura.url}"/>`)
    } else {
      imagem.html(`<iframe class="img" src="${procura.url}?autoplay=1&mute=1"></iframe>`)
    }
  }
  
}




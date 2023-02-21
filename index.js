const url = `https://api.nasa.gov/planetary/apod?api_key=rI2vDTkIPPaQ9ebtv7tsMVdDXgVGdK5tQIX2AnBr&date`
const imagem = document.getElementById('imagem');
const dataBotao = document.querySelector("#dataValor");
const texto = document.getElementById('texto');
const imagemTamanhoReal = document.getElementById('imagemTamanhoReal');
const video = document.getElementById('video');

const buscasImagem = (evento) => {
  evento.preventDefault();
  const dataResult = document.querySelector("#dataResult");
  const resultadoData = dataResult.value;
  fetch(`https://api.nasa.gov/planetary/apod?api_key=rI2vDTkIPPaQ9ebtv7tsMVdDXgVGdK5tQIX2AnBr&date=${resultadoData}`)
.then((resp) => resp.json(

))
.then (function (data) {
  texto.innerHTML = data.explanation;
  imagemTamanhoReal.href = data.url;
  if(data.media_type == 'image'){
    video.style.display = 'none';
    imagem.style.display = 'block';
    return imagem.src = data.url;
  }
  else{
    imagem.style.display = 'none';
    video.style.display = 'block';
    video.style.width = '25em';
    video.style.height = '20em';
    video.style.padding = '1em';
    return video.src = data.url;
  }
})
.catch (function (err) {
  
});
}
dataBotao.addEventListener('click', buscasImagem)


fetch(url)
.then((resp) => resp.json(

))
.then (function (data) {
  texto.innerHTML = data.explanation;
  imagemTamanhoReal.href = data.url;
  if(data.media_type == 'image'){
    video.style.display = 'none';
    imagem.style.display = 'block';
    return imagem.src = data.url;
  }
  else{
    imagem.style.display = 'none';
    video.style.display = 'block';
    video.style.width = '25em';
    video.style.height = '25em';
    video.style.padding = '1em';
    return video.src = data.url;
  }
})
.catch (function (err) {
  
});
dataResult.max = new Date().toISOString().split("T")[0];
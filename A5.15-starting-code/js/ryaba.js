const dataURL = "https://api.jsonbin.io/b/5e8c9fceff9c906bdf1d8635";

function handleButton() {
  // взять данные по dataUrl, вытащить их и передать в handleData
}

function handleData(data) {
  // кажется, какой-то из этих способов сработает
  //const var1 = $("input[name=var1]")[0].value()
  //const var1 = $("input[name=var1]").value()
  //const var1 = $("input[name=var1]")[0].default()

  // надо сделать так чтобы сообщения подменились на значения из формы
  let text = "Здесь могла быть ваша реклама";
	$("#result").text(text);
}

function init() {
	$("#button-fetch").click(handleButton);
}

$(document).ready(init);

/*
var1 - дед
var2 - баба
var3 - курочка ряба
var4 - яичко
var5 - мышка 
var6 - хвостиком
speach - Не плачь, дед, не плачь, 
баба: снесу вам яичко не золотое - простое!
 */
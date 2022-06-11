const veriGetir= new Promise((basarili,basarisiz)=>{
  const veriGeldimi= true;
  if(veriGeldimi){
    basarili("verimiz burada")
  }else{
    basarisiz("veriyi alamadk")
  }
})

veriGetir.then((cevap)=>console.log(cevap)).catch((hata)=>console.log("hata",hata))


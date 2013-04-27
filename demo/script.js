var
  fontsList = "Badr, Baran, Bardiya, Compset, Davat, Elham, EsfehanBold, Fantezy, Farnaz, Ferdosi, Hamid, Helal, Homa, JadidBold, Jalal, KoodakBold, Kourosh, Lotus, Mahsa, MehrBold, Mitra, Morvarid, Narm, NasimBold, Nazanin, Roya, SetarehBold, Shiraz, SinaBold, Tabassom, Tehran, TitrBold, TitrTGEBold, Traffic, VahidBold, Yagut, Yas, Yekan, Zar, Ziba".split(', '),
  $fontSellect = $('#fontSellect'),
  $fontPreview = $('#fontPreview');
  $options = '';

for(var i in fontsList){
  $fontSellect.append(
    $('<option>')
      .attr('value',fontsList[i])
      .html(fontsList[i])
  );
}

$fontSellect
  .change(function () {
    $fontPreview
      .removeClass()
      .addClass($(this).val());
  });